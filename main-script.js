// ==UserScript==
// @name Battlemetrics Color Coded - For joinSquad.com Servers
// @namespace http://tampermonkey.net/
// @version 3.8
// @description Modifies the rcon panel for battlemetrics to help color code important events and details about players.
// @author TempusOwl
// @match https://www.battlemetrics.com/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=battlemetrics.com
// @grant GM_addStyle
// @run-at document-start
// ==/UserScript==
var b, c, i = false
let counter = 0;
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
var colorTeamBluefor = "LightSkyBlue"
var colorTeamOpfor = "Tomato"
var colorAdminName = "#55f1ff"
var colorBattlemetricsAdmin = "lime"
var colorModerationAction = "#ff3333"
var colorTeamkillAction = "#FF97FC"
var colorAdminAction = "lime"
var colorModName = "Fuchsia"
var colorTeamKilled = "Yellow"

// Highlights tagged messages, and makes them colored (IE: Purple TKs)
//var barHeightFix = ".css-ecfywz {height: 38px}"
//var coloredMsgBar1 = ".css-1qmad0a {background-color: rgb(159 0 255 / 11%);width: 1920px;}"
//var coloredMsgBar2 = ".css-ym7lu8 {z-index: 2;}"
var coloredMsgBar3 = ""
var coloredMsgBar4 = ""
var coloredMsgBar5 = ""

setInterval(function Job_BM_Tamper() {
    // These apply the full width highlighted bars to the text (ie purple teamkills).
    // GM_addStyle(barHeightFix);
    // GM_addStyle(coloredMsgBar1);
    // GM_addStyle(coloredMsgBar2);
    // GM_addStyle(coloredMsgBar3);
    // GM_addStyle(coloredMsgBar4);
    // GM_addStyle(coloredMsgBar5);
    // Select the pages css elements that contain the data.
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
        "Crodawesome01",
        "DontFaket",
        "El 24 throttle4u",
        "FloridaMan",
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
        "Steel Bear",
        "Valkyrie",
        "TempusOwl",
        "Terminator",
        "Mav",
        "Outlast",
    ]
    const modList = [
        /*List Of Server Mods*/
        "Aomm2025",
        "Charges",
        "Cossack_440",
        "Exploits",
        "Gallahad",
        "Hispxanic",
        "JAMESTERRARIA",
        "JerkinJimmy", // Aka Skipper?
        "JoyfulConfusion",
        "MURICA",
        "StickWiggler",
        "Smeltz",
        "WadeLovesWhiteWomen",
        "Zimmy-75",
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
    const adminTerms = [
        "admin",
        "Admin",
        "ADMIN",
        "aDMIN",
        "to the other team.",
        ") was disbanded b",
        "requested a list of squads.",
        "requested a list of squads.",
        "set the next map to",
        "changed the map to",
        "requested the next map.",
        ") forced",
    ]

    const teamKilled = [
        "team killed",
    ]

    const grayedOut = [
        "joined the server",
        "left the server",
        "[SL Kit]"
    ]

    //====================================== Do not edit the code below - it may break things!
    // Copy & Paste Button
    // Adds Copy & Paste Button On Players Profile


    // Highlighs message content within the right panel for various reasons.
    messageActivity.forEach(element => {
        if (adminTerms.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminAction
        } else if (actionList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorModerationAction
        } else if (teamBluefor.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamBluefor
        } else if (teamOpfor.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamOpfor
        } else if (teamKilled.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorTeamKilled
            element.style.fontSize = "medium";
        } else if (grayedOut.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = "gray"
            element.style.fontSize = "8pt";
        }
    })

    nameActivity.forEach(element => {
        if (adminList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorAdminName
        } else if (modList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorModName
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
        else if (modList.some(phrase => element.textContent.includes(phrase))) {
            element.style.color = colorModName
        }
    })

    // Added Squad Lead Highlight
    b = document.getElementsByClassName('small text-muted');
    for (i = 0; i < b.length; i++) {
        if ((b[i].innerText == "Squad Leader")) {
            b[i].style.color = "#ffba23"
        }
    }

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
        } else if ((b[i].textContent.includes("Ban"))) {
            b[i].style.color = "red"
        } else if ((b[i].textContent.includes("Force"))) {
            b[i].style.color = "white"
        } else if ((b[i].textContent.includes("Kick"))) {
            b[i].style.color = "red"
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
}, 125)

/* This works, but may cause formatting issues I believe. Testing with it off currently.
setInterval(function jobTimeStamps() {
    // Add timestamps in seconds
    const timeStamp = document.querySelectorAll('.css-z1s6qn')
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
}, 25)
*/
// Creates a button to copy data from BM profile, it deletes the button on set invernal to update it.
// Recommended to click it few times to ensure the click gets through...
setInterval(function Job_BM_Tamper() {
String.prototype.startsWith = function (str) {
     return (this.match("^" + str) == str)
}

var button = document.createElement("Button");
     var pSteamID = document.querySelectorAll('[title*="765"]')[0].innerText
     var pName = document.querySelectorAll('#RCONPlayerPage > h1')[0].innerText
     button.innerHTML = "Copy";
     button.id = "copy-button"
     button.style = "top:90px;left:0;background:#222222;position:absolute;z-index:99999;padding:6px;";
     document.body.appendChild(button);

document.getElementById('copy-button').onclick = function () {
     var pSteamID = document.querySelectorAll('[title*="765"]')[0].innerText
     var pName = document.querySelectorAll('#RCONPlayerPage > h1')[0].innerText
     let values = [];
     //document.querySelectorAll('.css-q39y9k').forEach((p) => values.push(p.innerHTML));
     let text = document.createElement('textarea');
     document.body.appendChild(text);
     text.value = "**Offending User: **" + pName + "** // **" + pSteamID + "\n**BM: **<" + window.location.href + ">\n**Server:** \n**Infraction: **\n**Evidence Linked Below:**``Ticket Channel Shortcut->`` <#815730567706443807>\n";
     text.select();
     document.execCommand('copy');
     text.parentNode.removeChild(text);
}
// This function deletes the old button so it does not remain on the page and causes issues, you may notice the button link as its replaced.
setTimeout(function Job_Button_Deleter() {
    const element = document.getElementById("copy-button");
        element.remove();
            console.log("button deleted")
    }, 995)
}, 1000)

// Adds a clickable URL to steamIDs that bring you to communty ban list.
setInterval(function steamCBL() {
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
}, 1250)
