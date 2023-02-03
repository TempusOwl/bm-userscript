// ==UserScript==
// @name Battlemetrics Color Coded - For joinSquad.com Servers
// @namespace http://tampermonkey.net/
// @version 3.2.1
// @description Modifies the rcon panel for battlemetrics to help color code important events and details about players.
// @author TempusOwl
// @match https://www.battlemetrics.com/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=battlemetrics.com
// @grant GM_addStyle
// @run-at document-start
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

// Full Copy & Paste Button
String.prototype.startsWith = function (str) {
    return (this.match("^" + str) == str)
}

var button = document.createElement("Button");
button.innerHTML = "Full Copy";
button.id = "copy-button"
button.style = "top:90px;left:0;background:#222222;position:absolute;z-index:99999;padding:8px;font-weight:bold;";
document.body.appendChild(button);

document.getElementById('copy-button').onclick = function () {
    let values = [];
    document.querySelectorAll('.css-q39y9k').forEach((p) => values.push(p.innerHTML));
    let text = document.createElement('textarea');
    document.body.appendChild(text);
    text.value = "**Offending User: **" + values.join(' **|X|** ') + "\n**BM: **<" + window.location.href + ">\n**Server:** \n**Infraction: **\n**CBL/History: **\n**Evidence: **\n**Context: **\n```**Offending User: **" + values.join(' **|X|** ') + "\n**BM: **<" + window.location.href + ">```\n*``Click As Channel Deletes``* <#815730567706443807>";
    text.select();
    document.execCommand('copy');
    text.parentNode.removeChild(text);
}

// Short Copy & Paste Button
String.prototype.startsWith = function (str) {
    return (this.match("^" + str) == str)
}

var button1 = document.createElement("Button");
button1.innerHTML = "Short";
button1.id = "copy-button1"
button1.style = "top:130px;left:0;background:#383838;position:absolute;z-index:99999;padding:6px;font-weight:bold;";
document.body.appendChild(button1);



document.getElementById('copy-button1').onclick = function () {
    let values = [];
    document.querySelectorAll('.css-q39y9k').forEach((p) => values.push(p.innerHTML));
    let text = document.createElement('textarea');
    document.body.appendChild(text);
    text.value = "**Player: **" + values.join(' **//** ') + "\n**BM: **<" + window.location.href + ">";
    text.select();
    document.execCommand('copy');
    text.parentNode.removeChild(text);
}

// Main Code
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
        "Charges",
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

    //====================================== Do not edit the code below - it may break things!
    // Copy & Paste Button
    // Adds Copy & Paste Button On Players Profile


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


    // ============================= Player Bars =============================


    // Highlights the Player Is Admin to neon in the players bar.
    b = battlemetricsAdmin
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Admin"))) {
            b[i].style.color = colorBattlemetricsAdmin
        }
    }
    namePlayers.forEach(element => {
        if (adminList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminName
        }
    })

    // Added Squad Lead Highlight
    b = document.getElementsByClassName('small text-muted');
    for (i = 0; i < b.length; i++) {
        if ((b[i].innerText == "Squad Leader")) {
            b[i].style.color = "#ffba23"
        }
    }
    //================Log Chat Highlighting======================== // Highlights admin names.
    nameActivity.forEach(element => {
        if (adminList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminName
        }
    })

    // For TKs Sorry Messages
    messageActivity.forEach(element => {
        if (wordSorry.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamkillAction
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
        element.textContent = element.textContent.replace(element.textContent.toString(), (time[1] + ' ' +
                                                                                           time[2]).toString())
    })

    // ================= Dialog Color Changes =================

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
    // Warn Menu
    b = changeMapWarning3
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Warn"))) {
            b[i].style.color = "lime"
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
    // Warn Warning (Dialog) b=changeMapWarning for (i=0; i < b.length; i++)
    if ((b[i].textContent.includes("Warn"))) {
        b[i].style.color = "lime"
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
}, 50)
