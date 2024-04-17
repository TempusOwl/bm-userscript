## About This Repository
Userscript that takes advantage of custom triggers you may have created in BM, as well as parse important text. I made this help color code important details like Squad Leaders, among other things for Squad community. 

## Requirements & Install
- Requirements: Chrome browser with **DEV MODE** enable and the Tampermonkey web extension. Firefox is supported as well.
- Install Guide: https://docs.google.com/document/d/1swXqOl2guYp3PNhqA1h07U7KVQkDoYjBgVHVtCZkjgI/edit?usp=sharing
- Backup: There is a PDF file, if the above URL becomes broken. 

## Known Issues
- Some elements like Copy Button or Community Ban List may eat clicks when it's being updated, if it does not work click again. Refreshing the page resolve most issues if you encounter any.
- In rare cases the Cloudflare security check may get stuck in a loop when opening a player's RCON Profile. Disable the script via the browser extension, then reload the page to pass the check and enable it. 
- Userscripts are not perfect science, and in general reloading the page fixes most issues. The script works fine in 98% of cases.

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

## What Is TamperMonkey
It’s a browser addon that loads “userscripts” that can modify how a website display’s itself to you. User scripts are powerful tools that can totally modify websites. Remember, tampermonkey can pose significant security issues for your device if you install scripts from unknown sources. Only use scripts if you know what they are doing!

## Contributions
* Time w/ Seconds - Avengerian 
- Project largely works of using Inspect Element to find name of classes, and then using selectors to capture them and apply effects to them. This project is limited to applying CSS class coloring and QoL updates by reading/modifying the locally delivered web document. Code that automates or preforms API request like bans, kicks and queries will not be merged into this project. 
- Modifiying mod/admin name changes, new factions or wording changes is as simple as updating the word list.

