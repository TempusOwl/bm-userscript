## About This Repository
Userscript that takes advantage of custom triggers you may have created in BM, as well as parse important text. I made this help color code important details like Squad Leaders, among other things. Having 100 users on a table with varying info can make parsing rather hard, this makes it easy.

## Known Issues
- Some elements like Copy Button or Community Ban List may eat clicks when it's being updated, if it does not work click again. Refreshing the page resolve most issues if you encounter any.
- Tampermonkey may not apply the scripting to CSS to BM (and the log will have no coloring) This tends to occur due to rather complicated issue. If it happens just reload the page and the script will apply it. 
- In general reloading the page fixes most minor issues. The script should work fine in 95% of cases without much fuss. If you have constant issues let me know.

## Features Of bm-desktop-auto.min.js
* Highly customizable!
* Auto updating. 
* Add button to Squad Lanes, Squad Maps & NF Rotation
* Adds clickable link that brings you to the CommunityBanList profile of a user.
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

## Mobile Version
Its possible use userscripts on mobile (at least for iOS https://apps.apple.com/us/app/userscripts/id1463298887). This requires the file to be a .js file which can be tough to aquire. There is no obvious way to change filetypes in within iOS so saving it as text or html is not possible and will cause it not to see it as a userscript.js. Consider emailing the file as proper .js file via your desktop and downloading it as an attachment. 

There are some minor changes with mobile version, like removing buttons that may get in the way. The script was slowed down a bit as well to account for older devices and models. 

## What Is TamperMonkey
It’s a browser addon that loads “userscripts” that can modify how a website display’s itself to you. User scripts are powerful tools that can totally modify websites. Remember, tampermonkey can pose significant security issues for your device if you install scripts from unknown sources. Only use scripts if you know what they are doing!

## Installing TamperMonkey
https://www.tampermonkey.net/ (I recommend Stable)

## Add The Script
Step By Step - Guide: https://github.com/TempusOwl/bm-userscript/blob/main/installing-guide.png?raw=true
* Once you downloaded the TamperMonkey extension to your browser via Chrome/Firefox Webstore, locate it at the upper right of your browser and right click it. 
* Create a new script, this will open a new tab. Replace EVERYTHING within it with the main-script.js found above (open as raw). Then save the script with CTLR+S
* Go the BM website, and it should show as a red +1 next to TamperMonkey icon, if the script is working. Otherwise you may need to enable it. Try refreshing the page if you do not see anything.
* If you see red +1 when on the BM website, the script should be working. In some niche cases, you may need to reload the page for the script to load.

## Contributions
* Time w/ Seconds - Avengerian 
  
