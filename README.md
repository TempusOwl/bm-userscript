## About This Repository
Userscript that takes advantage of custom triggers you may have created in BM, as well as parse important text. I made this help color code important details like Squad Leaders, among other things for Squad community. 

## Requirements & Install
- Requirements: A chrome based browser with **DEV MODE** enable and the Tampermonkey web extension. Firefox is supported as well.
- Install Guide: https://docs.google.com/document/d/1swXqOl2guYp3PNhqA1h07U7KVQkDoYjBgVHVtCZkjgI/edit?usp=sharing
- Backup: There is a PDF file, if the above URL becomes broken. 

## Known Issues
(Possibly fixed in v11.0) Cloudflare's security check may get stuck in a loop when opening a player's RCON profile. To resolve this, disable the script via the browser extension, reload the page to pass the check, and then re-enable the script.
- Occasionally, BM may omit new log entries while scrolling or during spam events. This issue occurs even without the script, so if you're missing logs, simply reload the page to resync with the server.
- Userscripts are not perfect, but reloading the page typically resolves most issues. The script works correctly in 98% of cases.

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

# Updating Script & Contributions
- This repo includes a GitHub Action that automatically minifies code.js to code.min.js, then replaces line 15 in bm-toolkit-desktop.min.js with the updated code. It also extracts the CONST version = "value" from code.js and updates the version header in bm-toolkit-desktop.min.js to trigger script updates.
- Important: Never instruct users to "edit" their scripts in Tampermonkey, as this breaks auto-updating and leads to outdated versions. Edited scripts must be deleted and re-created for auto-updating to work again.

## Documention
- code.js is the completed unminfied code. With bm-toolkit-desktop.min.js being the script you want to use to tampermonkey.
- This project works off grabbing content based on their class, then applying colors based on conditions of what is contained in the piece of code selected. There is strong potential for code to change and classes to become renamed and this will break the code's ability to run. Using inspect element you can track down and update classes so they're selected.
- All processing is done locally by the browser and Javascript selectors/styling, no API is used. 
- In version 11, the code was fully rewritten using a combination of Async/Await and MutationObservers to resolve a long-standing issue where Cloudflare would get stuck in a reload loop due to missing elements at runtime. The page must fully load for the MutationObservers to trigger the code.
- This introduced a new issue where the code ran too frequently. Async/Await is now used to limit execution by the "updateRate," improving stability.
- Lastly, a section of the code runs only once due to how GM_AddStyles works. If executed multiple times, it creates extra div elements, leading to significant performance issues when the browser remains open.

## Contributions
- Time w/ Seconds - Avengerian 
- Project largely works of using Inspect Element to find name of classes, and then using selectors to capture them and apply effects to them. This project is limited to applying CSS class coloring and QoL updates by reading/modifying the locally delivered web document. Code that automates or preforms API request like bans, kicks and queries will not be merged into this project. 
- Modifiying mod/admin name changes, new factions or wording changes is as simple as updating the word list.
- Eddie (button fixes) https://greasyfork.org/en/scripts/501133-battlemetrics-toolkit-desktop-auto-update

