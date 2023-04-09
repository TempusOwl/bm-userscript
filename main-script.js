// ==UserScript==
// @name Battlemetrics Color Coded - For joinSquad.com Servers
// @namespace https://www.battlemetrics.com/*
// @version 4.1
// @description Modifies the rcon panel for battlemetrics to help color code important events and details about players.
// @author TempusOwl
// @match https://www.battlemetrics.com/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=battlemetrics.com
// @grant GM_addStyle
// @run-at document-start
// ==/UserScript==
var b, c, i = false
// =========== Edit The Code Below =========================================================

// Enable / Disable Parts Of The Code (use false to disable)d
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
var colorTeamBluefor = "#99b3ff"
var colorTeamOpfor = "#ff8c1a"
var colorAdminName = "#55f1ff"
var colorBattlemetricsAdmin = "lime"
var colorModerationAction = "#ff3333"
var colorTeamkillAction = "#FF97FC"
var colorAdminAction = "lime"
var colorModName = "#44ffa9"
var colorTeamKilled = "Yellow"

// Tag Bar Width Increase - Creates width colored bars for teamkills or other tagged messages in BM. These may not work by default if your class names differ.
// I will try to create a guide how to find the proper class names if these don't work...
setTimeout(function Modify_Tag_Bars() {
var coloredMsgBar1 = ".css-1qmad0a {background-color: rgb(159 0 255 / 11%);width: 1920px;}"
var coloredMsgBar2 = ".css-ym7lu8 {z-index: 2;}"
var coloredMsgBar3 = ".css-1rwnm41 {background-color: #ff000008;width: 1920px;}"
var coloredMsgBar4 = ".css-zwebxb {z-index: 2;}"
GM_addStyle(coloredMsgBar1);
GM_addStyle(coloredMsgBar2);
GM_addStyle(coloredMsgBar3);
GM_addStyle(coloredMsgBar4);
}, 200)

// Main function that applies CSS styling to elements
setInterval(function Job_BM_Tamper() {
    // These apply the full width highlighted bars to the text (ie purple teamkills).
    // Select the pages css elements that contain the data.
    const namePlayers = document.querySelectorAll('.css-mjpog7')
    const nameActivity = document.querySelectorAll('.css-zwebxb')
    const messageActivity = document.querySelectorAll('.css-ym7lu8')
    const battlemetricsAdmin = document.querySelectorAll('.css-18s4qom')
    const sl_kit = "[SL Kit]"
    const actionList = [
        "was warned",
        "was kicked",
        "was banned",
        "edited BattleMetrics Ban",
        "added BattleMetrics Ban",
        "deleted BattleMetrics Ban",
        "Trigger added flag Previously banned",
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
        "E10",
        "El 24 throttle4u",
        "FloridaMan",
        "gnome saiya",
        "Habeeb",
        "Mike.H",
        "QTheEngineer",
        "Radio",
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
        "Cossack_440",
        "Exploits",
        "Gallahad",
        "Hispxanic",
        "JAMESTERRARIA",
        "JerkinJimmy", // aka Skipper?
        "Skipper", // aka JerkinJimmy?
        "JoyfulConfusion",
        "Loganator",
        "MURICA",
        "WadeLovesWhiteWomen",
        "Zimmy - 75",
    ]
    const teamBluefor = [
        "Australian Defence Force",
        "British Army",
        "British Armed Forces",
        "Canadian Army",
        "Canadian Armed Forces",
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
        "(Global)",
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

}, 125)

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
    }, 950)
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

setTimeout(function Job_Button_Deleter() {
    const actionWarning = document.querySelectorAll('.modal-title')
    const serverDialogSelects = document.querySelectorAll('.css-yun63y a, .css-yun63y button')
    const playerDialogSelects = document.querySelectorAll('.css-f5o5h6 a, .css-f5o5h6 button')

   // ================= Dialog Color Changes =================

    // Change Map Warning (Dialog)
    b = actionWarning
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Change Map"))) {
            b[i].style.color = "red"
            b[i].style.fontStyle = "bold"
            b[i].style.textAlign = "center"
            b[i].style.fontSize = "800pt"
        }
    }

   // Kick Warning (Dialog)
    b = actionWarning
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Kick"))) {
            b[i].style.color = "red"
            b[i].style.fontStyle = "bold"
            b[i].style.textAlign = "center"
            b[i].style.fontSize = "48pt"
        }
    }

    // Warn Menu
    b = playerDialogSelects
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Warn"))) {
            b[i].style.color = "lime"
        } else if ((b[i].textContent.includes("Ban"))) {
            b[i].style.color = "red"
        } else if ((b[i].textContent.includes("Force"))) {
            b[i].style.color = "LightSkyBlue"
        } else if ((b[i].textContent.includes("Squad"))) {
            b[i].style.color = "yellow"
        } else if ((b[i].textContent.includes("Kick"))) {
            b[i].style.color = "red"
        } else if ((b[i].textContent.includes("Flags"))) {
            b[i].style.color = "gray"
        } else if ((b[i].textContent.includes("inform"))) {
            b[i].style.color = "gray"
        }
    }
}, 200)

setTimeout(function ButtonLinks() {
var mapsbutton = document.createElement("input");
     mapsbutton.setAttribute("type", "button");
     mapsbutton.id = "mapsbutton";
     mapsbutton.setAttribute("value", "Maps");
     mapsbutton.setAttribute("onclick", "window.open('https://squadmaps.com/', '_blank')");
     mapsbutton.style = "top:10px;right:17%;width:65px;background:#222222;position:absolute;z-index:99999;padding:2px;background: rgb(47 50 66);";
     mapsbutton.setAttribute("target", "_blank");
     mapsbutton.setAttribute("id", "mapsbutton");
     document.body.appendChild(mapsbutton);

var lanesbutton = document.createElement("input");
     lanesbutton.setAttribute("type", "button");
     lanesbutton.id = "lanesbutton";
     lanesbutton.setAttribute("value", "Lanes");
     lanesbutton.setAttribute("onclick", "window.open('https://squadlanes.com/', '_blank')");
     lanesbutton.style = "top:10px;right:12%;width:65px;background:#222222;position:absolute;z-index:99999;padding:2px;background: rgb(161 104 0);";
     lanesbutton.setAttribute("target", "_blank");
     lanesbutton.setAttribute("id", "lanesbutton");
     document.body.appendChild(lanesbutton);

var rotationbutton = document.createElement("input");
    rotationbutton.setAttribute("type", "button");
    rotationbutton.id = "rotationbutton";
    rotationbutton.setAttribute("value", "Rotation");
    rotationbutton.setAttribute("onclick", "window.open('https://docs.google.com/spreadsheets/d/156pnIhJb3zmoEcwFSx8Kv1AQ0HRzYmI4t0kDfQNmrVE/edit#gid=0', '_blank')");
    rotationbutton.style = "top:10px;right:7%;width:65px;background:#222222;position:absolute;z-index:99999;padding:2px;background: rgb(1 78 0);";
    rotationbutton.setAttribute("target", "_blank");
    rotationbutton.setAttribute("id", "rotationbutton");
    document.body.appendChild(rotationbutton);
}, 150)
