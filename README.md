## About This Repository
This is simple userscript that takes advantage of custom triggers you may have created in BM, as well as parse important text. I made this help color code important details like Squad Leaders, among other things. Having 100 users on a table with varying info can make parsing rather hard, this makes it easy.
Note this code is intended for the BattleMetrics RCON product, used by server admins. Not to be confused with the standard BattleMetrics server list. 

## Latest Changes
10/19/22 (v2.3) Added Kibz, fixed CSS not applying to the BM tags sometimes, added optional toggles to disable parts of the code. 

10/31/22 (v2.5) Added Wolf Fang, color coded change map, squad list, next map. Added massive text causing you to have to scroll when changing map. Moved the CBL linker to its own script until I can find better way to program it. 

## Features Of This main-script.js
* Highly customizable!
* Grays out unimportant events like joins/leaves (customizable)
* Adds full width colored bars for teamkills (w/ help from a BM trigger tag)
* Color codes change map, next map and squad list.
* Adds big red text, forcing you to commit and scroll down to change map. 
* Adds time in seconds to timestamp (Thanks Avengerian)
* Highlights users with clan tags (if BM decides to displays it)
* Highlights squad leaders in RCON side panel.
* Highlights BM admins in RCON player side panel.
* Highlights mamed admins in activity/rcon panel (messages, join/leave, squad creations etc..) 
* Highlights important trigger warnings in red. 
* Highlights users who say sorry in chat (not perfect). 

(Below requires the seperate CBL script in this repo)
* Adds a clickable link for SteamID that goes to the communitybanlist.com/<theSteamid>

![how the results look](https://github.com/TempusOwl/bm-userscript/blob/main/result.png?raw=true)
## What Is TamperMonkey
It’s a browser addon that loads “userscripts” that can modify how a website display’s itself to you. User scripts are powerful tools that can totally modify websites. Remember, tampermonkey can pose significant security issues for your device if you install scripts from unknown sources. Only use scripts if you know what they are doing!
## Installing TamperMonkey
https://www.tampermonkey.net/ (I recommend Stable)
## Triggers I Use
You click the URL, then scroll down to the bottom and create trigger. Do not modify them.

Note: These only apply to the game Squad, and may not work at all in other games.
* https://www.battlemetrics.com/rcon/triggers/add?trigger=%7B%22types%22%3A%5B%22squad%3AteamKill%22%5D%2C%22personal%22%3Atrue%2C%22condition%22%3A%7B%22and%22%3A%5B%7B%22operand%22%3A%22player.online%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3Atrue%7D%5D%7D%2C%22rateLimits%22%3Anull%2C%22inputs%22%3A%5B%5D%2C%22logCondition%22%3Atrue%2C%22actions%22%3A%5B%7B%22id%22%3A%22O63D4Hy24Q%22%2C%22command%22%3A%22tagMessage%22%2C%22gameId%22%3Anull%2C%22options%22%3A%7B%22tag%22%3A%22Teamkill%22%2C%22color%22%3A%22%23f500ff%22%7D%2C%22order%22%3A0%2C%22condition%22%3Anull%2C%22showResult%22%3Afalse%7D%5D%2C%22actionIds%22%3A%5B%22O63D4Hy24Q%22%5D%7D
* https://www.battlemetrics.com/rcon/triggers/add?trigger=%7B%22types%22%3A%5B%22playerMessage%22%5D%2C%22personal%22%3Atrue%2C%22condition%22%3A%7B%22and%22%3A%5B%7B%22operand%22%3A%22msg.body%22%2C%22operator%22%3A%22match%22%2C%22value%22%3A%22admin%22%7D%5D%7D%2C%22rateLimits%22%3Anull%2C%22inputs%22%3A%5B%5D%2C%22logCondition%22%3Atrue%2C%22actions%22%3A%5B%7B%22id%22%3A%22At5MI5oL5%22%2C%22command%22%3A%22tagMessage%22%2C%22gameId%22%3Anull%2C%22options%22%3A%7B%22tag%22%3A%22admin%22%2C%22color%22%3A%22%2300ff1c%22%7D%2C%22order%22%3A0%2C%22condition%22%3Anull%2C%22showResult%22%3Afalse%7D%5D%2C%22actionIds%22%3A%5B%22At5MI5oL5%22%5D%7D

## Add The Script
* Once you downloaded the extension to your browser, locate it at the upper right of your browser and right click it. 
* Create a new script, this will open new tab. Replace EVERYTHING within it with the userscript-default.js found above, then press CTRL+S.
* Go the BM website and it should show as a red +1 next to TamperMonkey icon, if the script is working. 
* If you see no +1 in Red, you may need to toggle the script on, head back to the browser icon for TamperMonkey and check that your script is enabled.

## Contributions
* Time w/ Seconds - Avengerian 
  
