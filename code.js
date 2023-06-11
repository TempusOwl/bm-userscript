var b,
  c,
  i = false;
setInterval(function Main_Script() {
  var cTeamBluefor = "#ffbf75";
  var cTeamOpfor = "#ff7142";
  var cAdminName = "#55f1ff";
  var cbmAdmin = "lime";
  var cModAction = "#ff3333";
  var cAdminAction = "lime";
  var cModName = "#44ffa9";
  var cTeamKilled = "Yellow";
  var cLeftServer = "#974545";
  var cJoined = "gray";
  var cGrayed = "gray";
  var cTracked = "#FF931A";
  // Term Bank - Ensure each phrase is enclosed in "" and has a , between each.
  var teamKilled = ["team killed"];
  var grayedOut = [
    "AFK - Thanks for playing!",
    "Please get a Squad Leader kit within 8 mins",
    "Final warning: Get Squad Leader kit within 5m",
    "SEEDING WHITELIST ACTIVE! Thanks for helping seed the server!",
    "You will be kicked in 2 minutes if you are still not in a squad",
    "To switch teams, please run the",
    "Check your seeding reward status via",
  ];
  var trackedTriggers = ["[SL Kit]"];
  var leftServer = ["left the server"];
  var joinedServer = ["joined the server"];
  var actionList = [
    "was warned",
    "was kicked",
    "was banned",
    "edited BattleMetrics Ban",
    "added BattleMetrics Ban",
    "deleted BattleMetrics Ban",
    "Trigger added flag Previously banned",
  ];
  var adminList = [
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
    "ANGEL_42",
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
  ];
  var modList = [
    /*List Of Server Mods*/
    "Aomm2025",
    "Angel_42",
    "Cossack_440",
    "Exploits",
    "Gallahad",
    "Hispxanic",
    "JAMESTERRARIA",
    "JerkinJimmy", // aka Skipper?
    "keko",
    "Skipper", // aka JerkinJimmy?
    "JoyfulConfusion",
    "Loganator",
    "MURICA",
    "WadeLovesWhiteWomen",
    "Zimmy - 75",
  ];
  var teamBluefor = [
    "Australian Defence Force",
    "British Army",
    "British Armed Forces",
    "Canadian Army",
    "Canadian Armed Forces",
    "United States Army",
    "United States Marine Corps",
  ];
  var teamOpfor = [
    "Russian Ground Forces",
    "Middle Eastern Alliance",
    "Insurgent Forces",
    "Irregular Militia Forces",
    "People's Liberation Army",
  ];
  var adminTerms = [
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
    "requested the current map.",
    "restarted the match.",
    "was removed from their squad by Trigger.",
    "requested layer list.",
  ];
  // Selectors, these are selecting the elements to modify.
  var namePlayers = document.querySelectorAll(".css-mjpog7");
  var nameActivity = document.querySelectorAll(".css-zwebxb");
  var messageLog = document.querySelectorAll(".css-ym7lu8");
  var bmAdmin = document.querySelectorAll(".css-18s4qom");
  var changeMapWarning = document.querySelectorAll(".modal-title");
  var changeMapWarning2 = document.querySelectorAll(".css-yun63y a, .css-yun63y button");
  var playerMenuDialog = document.querySelectorAll(".css-f5o5h6 a, .css-f5o5h6 button");
  var playerMenuDialog2 = document.querySelectorAll(".css-yun63y a, .css-yun63y button");
  // Editng the code below will break things unless you understand it. To modify colors, terms etc..
  // Use the above section
  b = changeMapWarning;
  for (i = 0; i < b.length; i++) {
    if (b[i].textContent.includes("Change Layer")) {
      b[i].style.color = "red";
      b[i].style.fontStyle = "bold";
      b[i].style.textAlign = "center";
      b[i].style.fontSize = "200pt";
    } else if (b[i].textContent.includes("Kick")) {
      b[i].style.color = "orange";
      b[i].style.fontStyle = "bold";
      b[i].style.textAlign = "center";
      b[i].style.fontSize = "48pt";
    } else if (b[i].textContent.includes("Warn")) {
      b[i].style.color = "lime";
      b[i].style.fontStyle = "bold";
      b[i].style.textAlign = "center";
      b[i].style.fontSize = "24pt";
      ``;
    }
  }
  // NaV Bar Change Menu
  b = changeMapWarning2;
  for (i = 0; i < b.length; i++) {
    if (b[i].textContent.includes("Next Layer")) {
      b[i].style.color = "lime";
      b[i].style.fontSize = "16pt";
    } else if (b[i].textContent.includes("Change Layer")) {
      b[i].style.color = "red";
      b[i].style.fontStyle = "bold";
      b[i].style.fontSize = "8pt";
    } else if (b[i].textContent.includes("Squad List")) {
      b[i].style.color = "gold";
      b[i].style.fontSize = "16pt";
    }
  }
  // Player Click Dialog
  b = playerMenuDialog;
  for (i = 0; i < b.length; i++) {
    if (b[i].textContent.includes("Warn")) {
      b[i].style.color = "lime";
    } else if (b[i].textContent.includes("Squad List")) {
      b[i].style.color = "gold";
    } else if (b[i].textContent.includes("Kick")) {
      b[i].style.color = "orange";
    } else if (b[i].textContent.includes("Ban")) {
      b[i].style.color = "red";
    }
  }
  // Player Click Dialog
  b = playerMenuDialog2;
  for (i = 0; i < b.length; i++) {
    if (b[i].textContent.includes("Warn")) {
      b[i].style.color = "lime";
    } else if (b[i].textContent.includes("Squad List")) {
      b[i].style.color = "gold";
    } else if (b[i].textContent.includes("Kick")) {
      b[i].style.color = "orange";
    } else if (b[i].textContent.includes("Ban")) {
      b[i].style.color = "red";
    }
  }
  // Highlighs message content within the right panel for various reasons.
  messageLog.forEach((elm) => {
    if (adminTerms.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cAdminAction;
    } else if (grayedOut.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cGrayed;
    } else if (joinedServer.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cJoined;
      elm.style.fontSize = "8pt";
    } else if (leftServer.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cLeftServer;
      elm.style.fontSize = "8pt";
    } else if (actionList.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cModAction;
    } else if (teamBluefor.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cTeamBluefor;
    } else if (teamOpfor.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cTeamOpfor;
    } else if (teamKilled.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cTeamKilled;
      elm.style.fontSize = "medium";
    } else if (trackedTriggers.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cTracked;
      elm.style.fontSize = "8pt";
    }
  });
  // Color's Admin/Mod Name Within Player List
  nameActivity.forEach((element) => {
    if (adminList.some((phrase) => element.textContent.includes(phrase))) {
      element.style.color = cAdminName;
    } else if (modList.some((phrase) => element.textContent.includes(phrase))) {
      element.style.color = cModName;
    }
  });
  // Highlights the Player Is Admin to neon in the players bar.
  b = bmAdmin;
  for (i = 0; i < b.length; i++) {
    if (b[i].textContent.includes("Admin")) {
      b[i].style.color = cbmAdmin;
    }
  }
  namePlayers.forEach((element) => {
    if (adminList.some((phrase) => element.textContent.includes(phrase))) {
      element.style.color = cAdminName;
    } else if (modList.some((phrase) => element.textContent.includes(phrase))) {
      element.style.color = cModName;
    }
  });
  // Added Squad Lead Highlight
  b = document.getElementsByClassName("small text-muted");
  for (i = 0; i < b.length; i++) {
    if (b[i].innerText == "Squad Leader") {
      b[i].style.color = "#ffba23";
    }
  }
  // Add timestamps in seconds
  var timeStamp = document.querySelectorAll(".css-z1s6qn");
  timeStamp.forEach((element) => {
    var utcTime = element.getAttribute("datetime");
    var date = new Date(utcTime);
    var time = date.toLocaleString().split(" ");
    element.textContent = element.textContent.replace(element.textContent.toString(), (time[1] + " " + time[2]).toString());
  });
}, 35);

// Creates a button to copy data from BM profile, it deletes the button on set invernal to update it.
// Recommended to click it few times to ensure the click gets through...
setInterval(function steamCBL() {
  var spans = document.querySelectorAll(".css-q39y9k");
  spans.forEach((span) => {
    var steamID = span.title; /* or span.textContent */
    var a = document.createElement("a");
    [...span.attributes].forEach((attr) => a.attributes.setNamedItem(attr.cloneNode()));
    a.href = `https://communitybanlist.com/search/${steamID}`;
    a.innerHTML = steamID;
    a.target = "_blank";
    span.replaceWith(a);
  });
}, 500);

// This conflict with mobile devices.
setTimeout(function ButtonLinks() {
  var map = document.createElement("input");
  map.setAttribute("type", "button");
  map.id = "map";
  map.setAttribute("value", "Maps");
  map.setAttribute("onclick", "window.open('https://squadmaps.com/', '_blank')");
  map.style =
    "top:10px;right:17%;width:65px;background:#222222;position:absolute;z-index:99999;padding:2px;background: rgb(47 50 66);";
  map.setAttribute("target", "_blank");
  map.setAttribute("id", "map");
  document.body.appendChild(map);
  var lanes = document.createElement("input");
  lanes.setAttribute("type", "button");
  lanes.id = "lanes";
  lanes.setAttribute("value", "Lanes");
  lanes.setAttribute("onclick", "window.open('https://squadlanes.com/', '_blank')");
  lanes.style =
    "top:10px;right:12%;width:65px;background:#222222;position:absolute;z-index:99999;padding:2px;background: rgb(161 104 0);";
  lanes.setAttribute("target", "_blank");
  lanes.setAttribute("id", "lanes");
  document.body.appendChild(lanes);
  var rotation = document.createElement("input");
  rotation.setAttribute("type", "button");
  rotation.id = "rotation";
  rotation.setAttribute("value", "Rotation");
  rotation.setAttribute(
    "onclick",
    "window.open('https://docs.google.com/spreadsheets/d/156pnIhJb3zmoEcwFSx8Kv1AQ0HRzYmI4t0kDfQNmrVE/edit#gid=0', '_blank')"
  );
  rotation.style =
    "top:10px;right:7%;width:65px;background:#222222;position:absolute;z-index:99999;padding:2px;background: rgb(1 78 0);";
  rotation.setAttribute("target", "_blank");
  rotation.setAttribute("id", "rotation");
  document.body.appendChild(rotation);
}, 150);

setTimeout(function Bar_Coloring() {
  var msgBar1 = ".css-1qmad0a {background-color: rgb(159 0 255 / 11%);width: 1920px;}";
  var msgBar2 = ".css-ym7lu8 {z-index: 2;}";
  var msgBar3 = ".css-1rwnm41 {background-color: #ff000008;width: 1920px;}";
  var msgBar4 = ".css-zwebxb {z-index: 2;}";
  GM_addStyle(msgBar1);
  GM_addStyle(msgBar2);
  GM_addStyle(msgBar3);
  GM_addStyle(msgBar4);
}, 1000);

// Creates a button to copy data from BM profile, it deletes the button on set invernal to update it.
// Recommended to click it few times to ensure the click gets through...
setInterval(function Job_BM_Tamper() {
  String.prototype.startsWith = function (str) {
    return this.match("^" + str) == str;
  };

  var button = document.createElement("Button");
  var pSteamID = document.querySelectorAll('[title*="765"]')[0].innerText;
  var pName = document.querySelectorAll("#RCONPlayerPage > h1")[0].innerText;
  button.innerHTML = "Copy";
  button.id = "copy-button";
  button.style = "top:90px;left:0;background:#222222;position:absolute;z-index:99999;padding:6px;";
  document.body.appendChild(button);

  document.getElementById("copy-button").onclick = function () {
    var pSteamID = document.querySelectorAll('[title*="765"]')[0].innerText;
    var pName = document.querySelectorAll("#RCONPlayerPage > h1")[0].innerText;
    let values = [];
    //document.querySelectorAll('.css-q39y9k').forEach((p) => values.push(p.innerHTML));
    let text = document.createElement("textarea");
    document.body.appendChild(text);
    text.value =
      "**Offending User: **" +
      pName +
      "** // **" +
      pSteamID +
      "\n**BM: **<" +
      window.location.href +
      ">\n**Server:** \n**Infraction: **\n**Evidence Linked Below:**``Ticket Channel Shortcut->`` <#815730567706443807>\n";
    text.select();
    document.execCommand("copy");
    text.parentNode.removeChild(text);
  };
  // This function deletes the old button so it does not remain on the page and causes issues, you may notice the button link as its replaced.
  setTimeout(function Job_Button_Deleter() {
    const element = document.getElementById("copy-button");
    element.remove();
  }, 975);
}, 1000);
