// ==UserScript==
// @name         Battlemetrics - SteamID Community Ban List Linking
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Modifies the rcon panel for battlemetrics to link CBL to SteamIDs.
// @author       TempusOwl
// @match        https://www.battlemetrics.com/rcon/players/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=battlemetrics.com
// @grant        GM_addStyle
// @run-at document-start
// ==/UserScript==
var b, c, i = false

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
}, 1000)
