chrome.runtime.onInstalled.addListener(() => {
  console.log("SleepBaby installed and ready.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { tabId, delayMinutes } = message;
  if (!tabId || !delayMinutes) return;

  const alarmName = `closeTab-${tabId}`;
  chrome.alarms.create(alarmName, { delayInMinutes: delayMinutes });
  chrome.storage.local.set({ [alarmName]: tabId }, () => {
    if (chrome.runtime.lastError) {
      console.error("Storage set failed:", chrome.runtime.lastError);
    }
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(alarm.name, (result) => {
    const tabId = result[alarm.name];
    if (tabId !== undefined) {
      chrome.tabs.remove(tabId, () => {
        if (chrome.runtime.lastError) {
          console.error("Tab close failed:", chrome.runtime.lastError);
        }
      });
      chrome.storage.local.remove(alarm.name);
    }
  });
});