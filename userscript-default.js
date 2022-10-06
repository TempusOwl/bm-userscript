// ==UserScript==
// @name         Battlemetrics Color Coded - For joinSquad.com Servers
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  Modifies the rcon panel for battlemetrics to help color code important events and details about players.
// @author       TempusOwl
// @match        https://www.battlemetrics.com/rcon*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=battlemetrics.com
// @grant        GM_addStyle
// ==/UserScript==

var b = false
var c = false
var i = false

// Colors starting with # are known as "HEX" colors. https://htmlcolorcodes.com/color-picker/
var colorMissingKit = "#C1766E"
var colorTeamBluefor = "#FF9F32"
var colorTeamOpfor = "#FFF200"
var colorAdminName = "#55f1ff"
var colorGrayedOut = "gray"
var colorBattlemetricsAdmin = "lime"
var colorModerationAction = "#ff3333"
var colorTeamkillAction = "#FF97FC"

// Changes the teamkill color tag background
GM_addStyle(".css-1qmad0a {background-color: rgb(159 0 255 / 11%);width: 1920px;}");
GM_addStyle(".css-ym7lu8 {z-index: 2;}");

setInterval(function jobTwo() {
    const namePlayers = document.querySelectorAll('.css-mjpog7');
    const nameActivity = document.querySelectorAll('.css-zwebxb');
    const messageActivity = document.querySelectorAll('.css-ym7lu8');
    const battlemetricsAdmin = document.querySelectorAll('.css-18s4qom');
    const sl_kit = "[SL Kit]"
    const actionList = [
        "was warned",
        "was kicked",
        "was banned",
    ]
    const adminList = [
        /*Red Admins*/
        "Apache1",
        "Binx",
        "budge",
        "got2bhockey",
        /*Advisors*/
        "Basa (Doc)",
        "CeeJay",
        "Shaka",
        /*Directors / Assists*/
        "Brennan",
        "Captain Crossbones",
        "E10",
        "Tiberius",
        "Nostradumbass",
        "Θscar Mike",
        "TexasForever22",
        /*Server Admins*/
        "Avengerian",
        "Basey",
        "DontFaket",
        "El 24 throttle4u",
        "gnome saiya",
        "Gilly",
        "Mike.H",
        "Nightshade",
        "Radio",
        "Reaper",
        "RedClaws",
        "Redneck",
        "Sticker",
        "Terminator",
        "Outlast",
    ]
    const modList = [
        /*List Of Server Mods*/
        "Aomm2025",
        "Crodawesome01",
        "FloridaMan",
        "Gallahad",
        "Habeeb",
        "JAMESTERRARIA",
        "Mav",
        "MURICA",
        "Mexican Jesus",
        "QTheEngineer",
        "StickWiggler",
        "Steel Bear",
        "TempusOwl",
        "Valkyrie",
        "Zangell",
    ]

    const grayedOutPhrases = [
        "was warned (Please get a Squad Leader kit within 8 mins or you will be removed from your squad) by Trigger.",
        "was warned (Final warning: Get Squad Leader kit within 5m or you will be removed from your squad) by Trigger.",
        "You will be kicked in 2 minutes if you are still not in a squad.) by Trigger.",
        "left the server",
        "joined the server",
    ]

    const teamBluefor = [
        "Australian Defence Force",
        "British Army",
        "Canadian Army",
        "United States Army",
        "United States Marine Corps",
    ]
    const teamOpfor = [
        "Russian Ground Forces",
        "Middle Eastern Alliance",
        "Insurgent Forces",
        "Irregular Militia Forces",
    ]

    //====================================== Do not edit the code below - it may break things!  ======================================

    // Message Coloring Activity Moderation
    b = messageActivity
    c = nameActivity
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes(sl_kit))) {
            b[i].style.color = colorMissingKit
            b[i].style.fontSize = "9pt"
        } else if ((b[i].textContent.includes("admin"))) {
            b[i].style.color = colorBattlemetricsAdmin
        } else if ((b[i].textContent.includes("Admin"))) {
            b[i].style.color = colorBattlemetricsAdmin
        }
    }


    // Highlights the Player Is Admin to neon in the players bar.
    b = battlemetricsAdmin
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Admin"))) {
            b[i].style.color = colorBattlemetricsAdmin
        }
    }

    // Action List Red Highlight (ban, warn, kick)
    messageActivity.forEach(element => {
        if (actionList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorModerationAction
        }
    })

    // Grayed Out Phrases
    messageActivity.forEach(element => {
        if (grayedOutPhrases.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorGrayedOut
        }
    })

    // Searches and highlight the names of admins for players and activity sections.
    messageActivity.forEach(element => {
        if (teamBluefor.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamBluefor
        }
    })

    messageActivity.forEach(element => {
        if (teamOpfor.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamOpfor
        }
    })

    // ================ Admin / Mod List ========================
    namePlayers.forEach(element => {
        if (adminList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminName
        }
    })

    nameActivity.forEach(element => {
        if (adminList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminName
        }
    })

    namePlayers.forEach(element => {
        if (modList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminName
        }
    })

    nameActivity.forEach(element => {
        if (modList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminName
        }
    })
   // Added Squad Lead Highlight
    b = document.getElementsByClassName('small text-muted');
    console.log(b)
    for (i = 0; i < b.length; i++) {
        if ((b[i].innerText == "Squad Leader")){
            b[i].style.color = "#ffba23"
        }
    }
}, 25)


// Adds a clickable URL to steamIDs that bring you to communty ban list. Updates @ 250ms.
setInterval(function runAdmin() {
    const spans = document.querySelectorAll('.css-q39y9k')
    spans.forEach(span => {
        const steamID = span.title /* or span.textContent */

        const a = document.createElement('a')

        ;[...span.attributes].forEach(attr => a.attributes.setNamedItem(attr.cloneNode()))

        a.href = `https://communitybanlist.com/search/${steamID}`
        a.innerHTML = steamID

        span.replaceWith(a)
    })
}, 800)

// ==UserScript==
// @name         Battlemetrics Color Coded - For joinSquad.com Servers
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  Modifies the rcon panel for battlemetrics to help color code important events and details about players.
// @author       TempusOwl
// @match        https://www.battlemetrics.com/rcon*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=battlemetrics.com
// @grant        GM_addStyle
// ==/UserScript==

var b = false
var c = false
var i = false

// Colors starting with # are known as "HEX" colors. https://htmlcolorcodes.com/color-picker/
var colorMissingKit = "#C1766E"
var colorTeamBluefor = "#FF9F32"
var colorTeamOpfor = "#FFF200"
var colorAdminName = "#55f1ff"
var colorGrayedOut = "gray"
var colorBattlemetricsAdmin = "lime"
var colorModerationAction = "#ff3333"
var colorTeamkillAction = "#FF97FC"

// Changes the teamkill color tag background
GM_addStyle(".css-1qmad0a {background-color: rgb(159 0 255 / 11%);width: 1920px;}");
GM_addStyle(".css-ym7lu8 {z-index: 2;}");

setInterval(function jobTwo() {
    const namePlayers = document.querySelectorAll('.css-mjpog7');
    const nameActivity = document.querySelectorAll('.css-zwebxb');
    const messageActivity = document.querySelectorAll('.css-ym7lu8');
    const battlemetricsAdmin = document.querySelectorAll('.css-18s4qom');
    const sl_kit = "[SL Kit]"
    const actionList = [
        "was warned",
        "was kicked",
        "was banned",
    ]
    const adminList = [
        /*Red Admins*/
        "Apache1",
        "Binx",
        "budge",
        "got2bhockey",
        /*Advisors*/
        "Basa (Doc)",
        "CeeJay",
        "Shaka",
        /*Directors / Assists*/
        "Brennan",
        "Captain Crossbones",
        "E10",
        "Tiberius",
        "Nostradumbass",
        "Θscar Mike",
        "TexasForever22",
        /*Server Admins*/
        "Avengerian",
        "Basey",
        "DontFaket",
        "El 24 throttle4u",
        "gnome saiya",
        "Gilly",
        "Mike.H",
        "Nightshade",
        "Radio",
        "Reaper",
        "RedClaws",
        "Redneck",
        "Sticker",
        "Terminator",
        "Outlast",
    ]
    const modList = [
        /*List Of Server Mods*/
        "Aomm2025",
        "Crodawesome01",
        "FloridaMan",
        "Gallahad",
        "Habeeb",
        "JAMESTERRARIA",
        "Mav",
        "MURICA",
        "Mexican Jesus",
        "QTheEngineer",
        "StickWiggler",
        "Steel Bear",
        "TempusOwl",
        "Valkyrie",
        "Zangell",
    ]

    const grayedOutPhrases = [
        "was warned (Please get a Squad Leader kit within 8 mins or you will be removed from your squad) by Trigger.",
        "was warned (Final warning: Get Squad Leader kit within 5m or you will be removed from your squad) by Trigger.",
        "You will be kicked in 2 minutes if you are still not in a squad.) by Trigger.",
        "left the server",
        "joined the server",
    ]

    const teamBluefor = [
        "Australian Defence Force",
        "British Army",
        "Canadian Army",
        "United States Army",
        "United States Marine Corps",
    ]
    const teamOpfor = [
        "Russian Ground Forces",
        "Middle Eastern Alliance",
        "Insurgent Forces",
        "Irregular Militia Forces",
    ]

    const wordSorry = [
        "sorry",
        "sorrie",
        "srry",
        "for tk",
        "for teamkill",
        "My Bad",
    ]

    //====================================== Do not edit the code below - it may break things!  ======================================

    // Message Coloring Activity Moderation
    b = messageActivity
    c = nameActivity
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes(sl_kit))) {
            b[i].style.color = colorMissingKit
            b[i].style.fontSize = "9pt"
        } else if ((b[i].textContent.includes("admin"))) {
            b[i].style.color = colorBattlemetricsAdmin
        } else if ((b[i].textContent.includes("Admin"))) {
            b[i].style.color = colorBattlemetricsAdmin
        }
    }


    // Highlights the Player Is Admin to neon in the players bar.
    b = battlemetricsAdmin
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Admin"))) {
            b[i].style.color = colorBattlemetricsAdmin
        }
    }

    // For TKs Sorry Messages
      messageActivity.forEach(element => {
        if (wordSorry.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamkillAction
        }
    })

    // Action List Red Highlight (ban, warn, kick)
    messageActivity.forEach(element => {
        if (actionList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorModerationAction
        }
    })

    // Grayed Out Phrases
    messageActivity.forEach(element => {
        if (grayedOutPhrases.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorGrayedOut
        }
    })

    // Searches and highlight the names of admins for players and activity sections.
    messageActivity.forEach(element => {
        if (teamBluefor.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamBluefor
        }
    })

    messageActivity.forEach(element => {
        if (teamOpfor.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamOpfor
        }
    })

    // ================ Admin / Mod List ========================
    namePlayers.forEach(element => {
        if (adminList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminName
        }
    })

    nameActivity.forEach(element => {
        if (adminList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminName
        }
    })

    namePlayers.forEach(element => {
        if (modList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminName
        }
    })

    nameActivity.forEach(element => {
        if (modList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminName
        }
    })
   // Added Squad Lead Highlight
    b = document.getElementsByClassName('small text-muted');
    console.log(b)
    for (i = 0; i < b.length; i++) {
        if ((b[i].innerText == "Squad Leader")){
            b[i].style.color = "#ffba23"
        }
    }
}, 25)


// Adds a clickable URL to steamIDs that bring you to communty ban list. Updates @ 250ms.
setInterval(function runAdmin() {
    const spans = document.querySelectorAll('.css-q39y9k')
    spans.forEach(span => {
        const steamID = span.title /* or span.textContent */

        const a = document.createElement('a')

        ;[...span.attributes].forEach(attr => a.attributes.setNamedItem(attr.cloneNode()))

        a.href = `https://communitybanlist.com/search/${steamID}`
        a.innerHTML = steamID

        span.replaceWith(a)
    })
}, 800)

// Add seconds to times.
setInterval(function runTimeSeconds() {
    const timeStamp = document.querySelectorAll('.css-z1s6qn');
    // Makes better timestamps
    timeStamp.forEach(element => {
        // Get the Coordinated Universal Time
        const utcTime = element.getAttribute('datetime')
        // Create a date variable
        const date = new Date(utcTime)
        // Convert to users local timezone
        var time = date.toLocaleString().split(' ')
        // Replace Original Text
            // time[1] = HH:MM:MS
            // time[2] = AM/PM
        element.textContent = element.textContent.replace(element.textContent.toString(), (time[1] + ' ' + time[2]).toString())
    })
}, 50)
