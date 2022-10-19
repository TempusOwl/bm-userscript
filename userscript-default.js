// ==UserScript==
// @name         Battlemetrics Color Coded - For joinSquad.com Servers
// @namespace    http://tampermonkey.net/
// @version      2.3
// @description  Modifies the rcon panel for battlemetrics to help color code important events and details about players.
// @author       TempusOwl
// @match        https://www.battlemetrics.com/rcon*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=battlemetrics.com
// @grant        GM_addStyle
// ==/UserScript==
var b, c, i = false
// =========== Edit The Code Below =========================================================

// Enable / Disable Parts Of The Code (use false to disable)
var applyCBLsteamID = true
var colorSquadCreations = true
var colorAdminActivity = true
var colorAdminBM = true
var colorGrayedOutPhrases = true
var colorSorryMessages = true
var colorModerationActions = true
var timeHasSeconds = true

// Colors starting with # are known as "HEX" colors. https://htmlcolorcodes.com/color-picker/
var colorMissingKit = "#C1766E"
var colorTeamBluefor = "#FF9F32"
var colorTeamOpfor = "#FFF200"
var colorAdminName = "#55f1ff"
var colorGrayedOut = "gray"
var colorBattlemetricsAdmin = "lime"
var colorModerationAction = "#ff3333"
var colorTeamkillAction = "#FF97FC"

// Highlights tagged messages, and makes them colored (IE: Purple TKs)
var coloredMsgBar1 = ".css-1qmad0a {background-color: rgb(159 0 255 / 11%);width: 1920px;}"
var coloredMsgBar2 = ".css-ym7lu8 {z-index: 2;}"
var coloredMsgBar3 = ""
var coloredMsgBar4 = ""
var coloredMsgBar5 = ""

// Changes the teamkill color tag background
setInterval(function jobTwo() {
    const namePlayers = document.querySelectorAll('.css-mjpog7')
    const nameActivity = document.querySelectorAll('.css-zwebxb')
    const messageActivity = document.querySelectorAll('.css-ym7lu8')
    const battlemetricsAdmin = document.querySelectorAll('.css-18s4qom')
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
        "Kibz",
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
        "sorries",
        "SORRY",
        "SORRIE",
        "SORRIES",
        "srry",
        "SRRY",
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

    //====================================== Do not edit the code below - it may break things!  ============================================================================================================================================================================================================================================================================================================================================================================================


    // Message Coloring Activity Moderation
    if (colorAdminActivity = true) {
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
    }

    // Highlights the Player Is Admin to neon in the players bar.
    if (colorAdminBM = true) {
        b = battlemetricsAdmin
        for (i = 0; i < b.length; i++) {
            if ((b[i].textContent.includes("Admin"))) {
                b[i].style.color = colorBattlemetricsAdmin
            }
        }
    }

    if (colorSorryMessages = true) {
        // For TKs Sorry Messages
        messageActivity.forEach(element => {
            if (wordSorry.some(phrase => element.textContent.includes(phrase))) {
                element.style.color = colorTeamkillAction
            }
        })
    }

    // Action List Red Highlight (ban, warn, kick)
    if (colorModerationActions = true) {
        messageActivity.forEach(element => {
            if (actionList.some(phrase => element.textContent.includes(phrase))) {
                element.style.color = colorModerationAction
            }
        })
    }

    // Grayed Out Phrases
    if (colorGrayedOutPhrases = true) {
        messageActivity.forEach(element => {
            if (grayedOutPhrases.some(phrase => element.textContent.includes(phrase))) {
                element.style.color = colorGrayedOut
            }
        })
    }

    // Highlighs Squad Names Creations
    if (colorSquadCreations = true) {
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
        if ((b[i].innerText == "Squad Leader")) {
            b[i].style.color = "#ffba23"
        }
    }
}, 25)


// Adds a clickable URL to steamIDs that bring you to communty ban list.
if (applyCBLsteamID = true) {
    setInterval(function runAdmin() {
        const spans = document.querySelectorAll('.css-q39y9k')
        spans.forEach(span => {
            const steamID = span.title /* or span.textContent */

            const a = document.createElement('a')

            ;
            [...span.attributes].forEach(attr => a.attributes.setNamedItem(attr.cloneNode()))

            a.href = `https://communitybanlist.com/search/${steamID}`
            a.innerHTML = steamID

            span.replaceWith(a)
        })
    }, 800)
}

// Add seconds to time
if (timeHasSeconds = true) {
    setInterval(function runTimeSeconds() {
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
        // These apply the full width highlighted bars to the text (ie purple teamkills).
        GM_addStyle(coloredMsgBar1);
        GM_addStyle(coloredMsgBar2);
        GM_addStyle(coloredMsgBar3);
        GM_addStyle(coloredMsgBar4);
        GM_addStyle(coloredMsgBar5);
    }, 50)
}