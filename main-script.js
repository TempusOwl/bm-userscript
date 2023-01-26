// ==UserScript==
// @name         Battlemetrics Color Coded - For joinSquad.com Servers
// @namespace    http://tampermonkey.net/
// @version      2.9
// @description  Modifies the rcon panel for battlemetrics to help color code important events and details about players.
// @author       TempusOwl
// @match        https://www.battlemetrics.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=battlemetrics.com
// @grant        GM_addStyle
// @run-at document-body
// @require https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.2/waitForKeyElements.js
// ==/UserScript==
var b, c, i = false
// =========== Edit The Code Below =========================================================

// Enable / Disable Parts Of The Code (use false to disable)
var applyCBLsteamID = false
var colorSquadCreations = false
var colorAdminActivity = false
var colorAdminBM = false
var colorGrayedOutPhrases = false
var colorSorryMessages = false
var colorModerationActions = false
var timeHasSeconds = false

// Colors starting with # are known as "HEX" colors. https://htmlcolorcodes.com/color-picker/
var colorMissingKit = "#C1766E"
var colorTeamBluefor = "#FFF200"
var colorTeamOpfor = "#FF9F32"
var colorAdminName = "#55f1ff"
var colorGrayedOut = "gray"
var colorBattlemetricsAdmin = "lime"
var colorModerationAction = "#ff3333"
var colorTeamkillAction = "#FF97FC"

// Highlights tagged messages, and makes them colored (IE: Purple TKs)
var barHeightFix = ".css-ecfywz {height: fit-width;}"
var coloredMsgBar1 = ".css-1qmad0a {background-color: rgb(159 0 255 / 11%);width: 1920px;}"
var coloredMsgBar2 = ".css-ym7lu8 {z-index: 2;}"
var coloredMsgBar3 = ""
var coloredMsgBar4 = ""
var coloredMsgBar5 = ""

// Changes the teamkill color tag background
setInterval(function jobTwo() {
    // These apply the full width highlighted bars to the text (ie purple teamkills).
    //GM_addStyle(barHeightFix);
    GM_addStyle(coloredMsgBar1);
    GM_addStyle(coloredMsgBar2);
    GM_addStyle(coloredMsgBar3);
    GM_addStyle(coloredMsgBar4);
    GM_addStyle(coloredMsgBar5);
    const namePlayers = document.querySelectorAll('.css-mjpog7')
    const nameActivity = document.querySelectorAll('.css-zwebxb')
    const messageActivity = document.querySelectorAll('.css-ym7lu8')
    const battlemetricsAdmin = document.querySelectorAll('.css-18s4qom')
    const changeMapWarning = document.querySelectorAll('.modal-title')
    const changeMapWarning2 = document.querySelectorAll('.css-yun63y a, .css-yun63y button')
    const changeMapWarning3 = document.querySelectorAll('.css-f5o5h6 a, .css-f5o5h6 button')
    const sl_kit = "[SL Kit]"
    const actionList = [
        "was warned",
        "was kicked",
        "was banned",
        "edited BattleMetrics Ban",
        "added BattleMetrics Ban",
    ]
    const adminList = [
        /*Red Admins*/
        "Apache1",
        "Binx",
        "budge",
        "Chaot3ch",
        "got2bhockey",
        /*Advisors*/
        "Basa_Doc",
        "Jonboy",
        "Kibz",
        "Shaka",
        /*Directors / Assists / Staff */
        "Brennan",
        "CeeJay",
        "Captain Crossbones",
        "E10",
        "Gilly",
        "Nightshade",
        "Tiberius",
        "Wolf Fang",
        "Nostradumbass",
        "Θscar Mike",
        "TexasForever22",
        "Too Many Cooks",
        /*Server Admins*/
        "Avengerian",
        "Basey",
        "Bigham907",
        "DontFaket",
        "El 24 throttle4u",
        "gnome saiya",
        "Habeeb",
        "Mike.H",
        "Mexican Jesus",
        "QTheEngineer",
        "Radio",
        "Reaper",
        "RedClaws",
        "Redneck",
        "Sticker",
        "Valkyrie",
        "TempusOwl",
        "Terminator",
        "Outlast",
        /*List Of Server Mods*/
        "Aomm2025",
        "Crodawesome01",
        "Exploits",
        "FloridaMan",
        "Gallahad",
        "Hispxanic",
        "JAMESTERRARIA",
        "JerkinJimmy", // Aka Skipper?
        "JoyfulConfusion",
        "Mav",
        "MURICA",
        "StickWiggler",
        "Steel Bear",
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
        "People's Liberation Army",
    ]

    const wordSorry = [
        "sorry",
        "sorrie",
        "sorries",
        "SORRY",
        "SORRIE",
        "SORRIES",
        "srry",
        "SRRY",
        "sry",
        "SRY",
        "for tk",
        "for TK",
        "FOR TK",
        "for teamkill",
        "For teamkill",
        "My Bad",
        "My bad",
        "My bad",
        "my bad",
    ]

    const adminTerms = [
        "admin",
        "Admin",
        "ADMIN",
        "aDMIN",
        ") was disbanded b",
        "requested a list of squads.",
        "requested a list of squads.",
        "set the next map to",
        "changed the map to",
        "requested the next map.",
        ") forced",
    ]

    //====================================== Do not edit the code below - it may break things!  ============================================================================================================================================================================================================================================================================================================================================================================================


    // Highlighs admin terms along with admin some admin actions.
    messageActivity.forEach(element => {
        if (adminTerms.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = "lime"
        } else if (adminTerms.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = "lime"
        } else if (actionList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorModerationAction
        } else if (actionList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorModerationAction
        } else if (teamBluefor.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamBluefor
        } else if (teamOpfor.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamOpfor
        } else if (grayedOutPhrases.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorGrayedOut
        }
    })

    // Highlights the Player Is Admin to neon in the players bar.
    b = battlemetricsAdmin
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Admin"))) {
            b[i].style.color = colorBattlemetricsAdmin
        }
    }

    // Searches and highlight the names of admins for players and activity sections.
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

    // ================ Disabled Items Test ========================


    // Warn Menu Bar (Nav Bar)
        b = changeMapWarning3
        for (i = 0; i < b.length; i++) {
            if ((b[i].textContent.includes("Warn"))) {
                b[i].style.color = "lime"
            }
        }

    // Change Map Warning (Dialog)
    b = changeMapWarning
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Change Map"))) {
            b[i].style.color = "red"
            b[i].style.fontStyle = "bold"
            b[i].style.textAlign = "center"
            b[i].style.fontSize = "800pt"
        }
    }

    // Kick Warning (Dialog)
    b = changeMapWarning
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Kick"))) {
            b[i].style.color = "red"
            b[i].style.fontStyle = "bold"
            b[i].style.textAlign = "center"
            b[i].style.fontSize = "48pt"
        }
    }

    // Warn Warning (Dialog)
    b = changeMapWarning
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Warn"))) {
            b[i].style.color = "lime"
        }
    }

    // Change Map Warning (Nav Bar)
    b = changeMapWarning2
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Change Map"))) {
            b[i].style.color = "red"
            b[i].style.fontStyle = "bold"
        }
    }

    // Change Map Warning (Nav Bar)
    b = changeMapWarning2
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Set Next Map"))) {
            b[i].style.color = "lime"
        }
    }

    // For TKs Sorry Messages
    messageActivity.forEach(element => {
        if (wordSorry.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamkillAction
        }
    })

    // Added Squad Lead Highlight
    b = document.getElementsByClassName('small text-muted');
    for (i = 0; i < b.length; i++) {
        if ((b[i].innerText == "Squad Leader")) {
            b[i].style.color = "#ffba23"
        }
    }

    // Grayed Out Phrases
    messageActivity.forEach(element => {
        if (grayedOutPhrases.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorGrayedOut
            element.style.fontSize = "8pt"
        }
    })

    const timeStamp = document.querySelectorAll('.css-z1s6qn')
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
}, 250)
