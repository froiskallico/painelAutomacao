#!/bin/sh
xset -dpms
xset s off
xset s noblank

unclutter &
chromium-browser http://localhost/ --window-size=1000,600 --start-fullscreen --kiosk --incognito --noerrdialogs --disable-translate --no-first-run --fast --fast-start --disable-infobars --disable-features=TranslateUI --disk-cache-dir=/dev/null
