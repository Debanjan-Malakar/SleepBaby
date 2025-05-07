# 💫 SleepBaby - A Gentle Tab Closer Chrome Extension

**SleepBaby** is a lightweight and elegant Chrome extension that automatically closes the current tab after a user-defined number of minutes. It was made with love to help someone fall asleep peacefully with music or videos—and not worry about keeping the tab open all night.

## 🧸 Purpose

This extension was created for my girlfriend (Her name is ❤️Shrayashi Mukherjee❤️), so that whenever she’s sleeping alone and I'm not around, she can play songs or videos to comfort her—and the tab will automatically close after a certain time, like a soft digital lullaby.

## ✨ Features

- ⏱️ Set a timer (in minutes) to auto-close the current tab
- 🧭 Live countdown timer shown in the extension popup
- ⏳ Uses Chrome’s `alarms` API for reliable background execution
- 💻 Lightweight and simple UI—no clutter
- 🔐 No tracking, no data collection—privacy first

## 🔧 How It Works

1. Install the extension via Chrome's "Load unpacked" mode
2. Click the extension icon to open the popup
3. Enter the number of minutes
4. Hit "Start Timer"
5. The countdown begins, and the tab will auto-close once the timer is up

## 🚀 How to Install (For Development)

1. Clone this repo:
   ```bash
   git clone https://github.com/Debanjan-Malakar/SleepBaby.git
   ```
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode** (top right)
4. Click **"Load unpacked"**
5. Select the `sleepbaby` folder from this repo

## 📁 Project Structure

```
sleepbaby/
├── manifest.json
├── background.js
├── popup.html
├── popup.js
└── README.md
```

## 🔐 Permissions Used

- `tabs`: To access and close the current tab
- `alarms`: To schedule delayed tab closure
- `storage`: To persist timer info reliably

## 💡 Future Improvements

- Pause/Resume timer
- Optional gentle audio reminder before closing
- Tab whitelisting
- Cross-device timer sync

## ❤️ Made With Love

> SleepBaby is more than a utility—it's a little comfort tool for someone I care about deeply. If it helps anyone else sleep easier too, that’s a beautiful bonus.

## 📜 License

MIT License
