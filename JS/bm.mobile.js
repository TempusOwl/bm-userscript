let b,
  i = false;
setInterval(function Main_Script() {
  const cTeamBluefor = "#e7a600";
  const cTeamOpfor = "rgb(217,86,39)";
  const cAdminName = "#00fff7";
  const cbmAdmin = "#58ff47";
  const cModAction = "#ff3333";
  const cAdminAction = "#37ff00";
  const cModName = "#4cffac";
  const cTeamKilled = "#ffcc00";
  const cLeftServer = "#ff33cc";
  const cJoined = "#919191";
  const cGrayed = "#919191";
  const cTracked = "#FF931A";
  const teamKilled = ["team killed"];
  const grayedOut = [
    "AFK - Thanks for playing!",
    "Please get a Squad Leader kit within 8 mins",
    "Final warning: Get Squad Leader kit within 5m",
    "SEEDING WHITELIST ACTIVE! Thanks for helping seed the server!",
    "You will be kicked in 2 minutes if you are still not in a squad",
    "To switch teams, please run the",
    "Check your seeding reward status via",
    "Trigger added flag LiQ Seeder",
  ];
  const trackedTriggers = ["[SL Kit]"];
  const leftServer = ["left the server"];
  const joinedServer = ["joined the server"];
  const actionList = [
    "was warned",
    "was kicked",
    "was banned",
    "edited BattleMetrics Ban",
    "added BattleMetrics Ban",
    "deleted BattleMetrics Ban",
    "Trigger added flag Previously banned",
  ];
  const adminList = [
    "ANGEL_42",
    "Aomm2025",
    "Basa_Doc",
    "Brennan",
    "budge",
    "Chaot3ch",
    "Cossack_440",
    "DontFaket",
    "E10",
    "eatcho",
    "El 24 throttle4u",
    "Exploits",
    "Gilly",
    "got2bhockey",
    "JAMESTERRARIA",
    "Jonboy",
    "Kibz",
    "Mav",
    "Mike.H",
    "Nightshade",
    "Outlast",
    "QTheEngineer",
    "Radio",
    "Redneck",
    "Shaka",
    "Skipper",
    "Sticker",
    "TempusOwl",
    "Tiberius",
    "Too Many Cooks",
    "Valkyrie",
    "Wolf Fang",
    "Zimmy - 75",
    "Θscar Mike",
  ];
  const modList = [
    "Archangel",
    "Blackout", // aka Blackout
    "Digikind",
    "iCampHard",
    "Kyle",
    "MURICA",
    "Nova", // aka Blackout
    "WatdaHek",
    "WadeLovesWhiteWomen",
    "Whip me more, Grandma",
    "xplay0321",
  ];
  const teamBluefor = [
    "Australian Defence Force",
    "British Army",
    "British Armed Forces",
    "Canadian Army",
    "Canadian Armed Forces",
    "United States Army",
    "United States Marine Corps",
    "Turkish Land Forces",
  ];
  const teamOpfor = [
    "Russian Ground Forces",
    "Middle Eastern Alliance",
    "Insurgent Forces",
    "Irregular Militia Forces",
    "People's Liberation Army",
    "Russian Airborne Forces",
    "PLA Navy Marine Corps",
  ];
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
    "requested the current map.",
    "restarted the match.",
    "was removed from their squad by Trigger.",
    "requested layer list.",
    "was removed from their squad by",
  ];
  // Selectors, these are selecting the elements to modify.
  let namePlayers = document.querySelectorAll(".css-1ewh5td");
  let nameActivity = document.querySelectorAll(".css-zwebxb");
  let messageLog = document.querySelectorAll(".css-ym7lu8");
  let bmAdmin = document.querySelectorAll(".css-18s4qom");
  let orgGroup = document.querySelectorAll(".css-4ey69y");
  let changeMapWarning = document.querySelectorAll(".modal-title");
  let playerDialog = document.querySelectorAll(
    ".css-1ixz43s a, .css-1ixz43s button"
  );
  let serverCommands = document.querySelectorAll(
    ".css-yun63y a, .css-yun63y button"
  );
  let playerMenuDialog = document.querySelectorAll(
    ".css-f5o5h6 a, .css-f5o5h6 button"
  );

  b = changeMapWarning;
  for (i = 0; i < b.length; i++) {
    if (b[i].textContent.includes("Change Layer")) {
      b[i].style.color = "red";
      b[i].style.fontStyle = "bold";
      b[i].style.textAlign = "center";
      b[i].style.fontSize = "200pt";
    } else if (b[i].textContent.includes("Set Next Layer")) {
      b[i].style.color = "lime";
      b[i].style.fontStyle = "bold";
      b[i].style.textAlign = "center";
      b[i].style.fontSize = "24pt";
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
    }
  }
  // Org Panel
  b = orgGroup;
  for (i = 0; i < b.length; i++) {
    if (b[i].textContent.includes("Arma")) {
      b[i].style.background = "#333300";
    } else if (b[i].textContent.includes("Squad Mod")) {
      b[i].style.background = "#2b9937";
    } else if (b[i].textContent.includes("Comp")) {
      b[i].style.background = "lime";
    } else if (b[i].textContent.includes("Squad Admin")) {
      b[i].style.background = "#119ab7";
    } else if (b[i].textContent.includes("Rust Admin")) {
      b[i].style.background = "#672c00";
    } else if (b[i].textContent.includes("Admin")) {
      b[i].style.background = "yellow";
      b[i].style.color = "black";
    } else if (b[i].textContent.includes("Org")) {
      b[i].style.background = "black";
    } else if (b[i].textContent.includes("Recruiter")) {
      b[i].style.background = "#cc6600";
    } else if (b[i].textContent.includes("Squad Event")) {
      b[i].style.background = "#660033";
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

  // Player Dialog Colors
  b = playerDialog;
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

  // Server Command Prompts
  b = serverCommands;
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
    } else if (b[i].textContent.includes("Squad List")) {
      b[i].style.color = "gold";
    } else if (b[i].textContent.includes("Kick")) {
      b[i].style.color = "orange";
    } else if (b[i].textContent.includes("Ban")) {
      b[i].style.color = "red";
    } else if (b[i].textContent.includes("Warn")) {
      b[i].style.color = "lime";
    }
  }

  // Highlights message content within the right panel for various reasons.
  messageLog.forEach((elm) => {
    if (adminTerms.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cAdminAction;
    } else if (grayedOut.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cGrayed;
    } else if (
      joinedServer.some((phrase) => elm.textContent.includes(phrase))
    ) {
      elm.style.color = cJoined;
    } else if (leftServer.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cLeftServer;
    } else if (actionList.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cModAction;
    } else if (teamBluefor.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cTeamBluefor;
    } else if (teamOpfor.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cTeamOpfor;
    } else if (teamKilled.some((phrase) => elm.textContent.includes(phrase))) {
      elm.style.color = cTeamKilled;
      elm.style.fontSize = "medium";
    } else if (
      trackedTriggers.some((phrase) => elm.textContent.includes(phrase))
    ) {
      elm.style.color = cTracked;
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
  let timeStamp = document.querySelectorAll(".css-z1s6qn");
  timeStamp.forEach((element) => {
    let utcTime = element.getAttribute("datetime");
    let date = new Date(utcTime);
    let time = date.toLocaleString().split(" ");
    element.textContent = element.textContent.replace(
      element.textContent.toString(),
      (time[1] + " " + time[2]).toString()
    );
  });
}, 35);

// Copy Button
setInterval(function Job_BM_Tamper() {
  String.prototype.startsWith = function (str) {
    return this.match("^" + str) == str;
  };

  let button = document.createElement("Button");
  let pSteamID = document.querySelectorAll('[title*="765"]')[0].innerText;
  let pEOSID = document.querySelectorAll('[title*="0002"]')[0].innerText;
  let pName = document.querySelectorAll("#RCONPlayerPage > h1")[0].innerText;
  button.innerHTML = "Copy";
  button.id = "copy-button";
  button.style =
    "top:90px;left:0;background:#222222;position:absolute;z-index:99999;padding:6px;";
  document.body.appendChild(button);

  document.getElementById("copy-button").onclick = function () {
    let text = document.createElement("textarea");
    document.body.appendChild(text);
    text.value =
      "**User**: " +
      pName +
      " <" +
      window.location.href +
      ">\n**IDs: **" +
      pSteamID +
      "** // **" +
      pEOSID +
      "\n**Server**: \n**Infraction**: \n**Evidence Linked Below**:\n";
    text.select();
    document.execCommand("copy");
    text.parentNode.removeChild(text);
  };
  // This function deletes the old button so it does not remain on the page and causes issues, you may notice the button link as its replaced.
  setTimeout(function Job_Button_Deleter() {
    const element = document.getElementById("copy-button");
    element.remove();

    // SteamID Added
    let spans = document.querySelectorAll(".css-q39y9k");
    spans.forEach((span) => {
      let steamID = span.title; /* or span.textContent */
      let a = document.createElement("a");
      [...span.attributes].forEach((attr) =>
        a.attributes.setNamedItem(attr.cloneNode())
      );
      a.href = `https://communitybanlist.com/search/${steamID}`;
      a.innerHTML = steamID;
      a.target = "_blank";
      span.replaceWith(a);
    });
  }, 975);
}, 1000);

// Steam ID CBL
setInterval(function Job_SteamID() {
  setTimeout(function Job_SteamIDDelayer() {
    // SteamID Added
    let spans = document.querySelectorAll(".css-q39y9k");
    spans.forEach((span) => {
      let steamID = span.title; /* or span.textContent */
      let a = document.createElement("a");
      [...span.attributes].forEach((attr) =>
        a.attributes.setNamedItem(attr.cloneNode())
      );
      a.href = `https://communitybanlist.com/search/${steamID}`;
      a.innerHTML = steamID;
      a.target = "_blank";
      span.replaceWith(a);
    });
  }, 275);
}, 300);

setTimeout(function ModifyDoc() {
  let zShift = ".css-ym7lu8 {z-index: 2;}";
  let zShiftTime = ".css-z1s6qn {z-index: 3;}";
  let teamkillBar = ".css-1tuqie1 {background-color: #5600ff1a;width: 1920px}";
  let moderationBar =
    ".css-1rwnm41 {background-color: #ff000008;width: 1920px;}";
  let adminCam = ".css-1fy5con {background-color: #31e3ff21;width: 1920px}";
  let nobranding =
    "html body div#root div.css-0.e1f2e1y80 div#RCONLayout.css-1qipodg nav.css-19lifo3 ul.css-16xvbhm li.css-1nxi32t a img#poweredbyovh {background-color: #31e3ff21;width: 1920px}";
  GM_addStyle(nobranding);
  GM_addStyle(teamkillBar);
  GM_addStyle(moderationBar);
  GM_addStyle(adminCam);
  GM_addStyle(zShift);
  GM_addStyle(zShiftTime);
}, 250);
