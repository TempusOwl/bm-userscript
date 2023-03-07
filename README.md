## About This Repository
This is simple userscript that takes advantage of custom triggers you may have created in BM, as well as parse important text. I made this help color code important details like Squad Leaders, among other things. Having 100 users on a table with varying info can make parsing rather hard, this makes it easy.
Note this code is intended for the BattleMetrics RCON product, used by server admins. Not to be confused with the standard BattleMetrics server list. 

## Known Issues
- Some elements like Copy Button or Community Ban List may eat clicks when it's being updated, if it does not work click again.

## Features Of This main-script.js
* Highly customizable!
* Copy and paste user info button for tickets via a button on the player's profile.
* Grays out unimportant events like joins/leaves,
* Color codes change map, next map and squad list.
* Adds big red text, forcing you to commit and scroll down to change the map. 
* Adds time in seconds to timestamp (Thanks Avengerian)
* Color codes squad creation by faction for easier time finding who is first. 
* Highlights squad leaders in RCON side panel.
* Highlights chat-to-admin.
* Highlights when user mentions the word admin in chat.
* Highlights if map is changed, next map or if map is requested.
* Highlights if squad list is requested. 
* Highlights At a glance tell what admins and mods are online by color.
* Highlights Admins/mods within the activity log.
* Highlights important trigger warnings in red. 

(Below requires the seperate CBL script in this repo)
* Adds a clickable link for SteamID that goes to the communitybanlist.com/<theSteamid>

![how the results look](https://github.com/TempusOwl/bm-userscript/blob/main/result.png?raw=true)
## What Is TamperMonkey
It’s a browser addon that loads “userscripts” that can modify how a website display’s itself to you. User scripts are powerful tools that can totally modify websites. Remember, tampermonkey can pose significant security issues for your device if you install scripts from unknown sources. Only use scripts if you know what they are doing!

## Installing TamperMonkey
https://www.tampermonkey.net/ (I recommend Stable)

## Add The Script
See the image within the repo for a image based guide... Otherwise read below..
* Once you downloaded the TamperMonkey extension to your browser via Chrome/Firefox Webstore, locate it at the upper right of your browser and right click it. 
* Create a new script, this will open a new tab. Replace EVERYTHING within it with the main-script.js found above (open as raw). Then save the script with CTLR+S
* Go the BM website, and it should show as a red +1 next to TamperMonkey icon, if the script is working. Otherwise you may need to enable it. Try refreshing the page if you do not see anything.
* If you see red +1 when on the BM website, the script should be working. In some niche cases, you may need to reload the page for the script to load.

## Contributions
* Time w/ Seconds - Avengerian 
  
