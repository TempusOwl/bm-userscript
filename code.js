const version = "11.51";
const updateRate = "150"
const colors = {
    cTeamBluefor: "#4eacff",
    cTeamOpfor: "#d0b1ff",
    cTeamIndepend: "#fd6aff",
    cAdminName: "#00fff7",
    cbmAdmin: "#58ff47",
    cModAction: "#ff3333",
    cAdminAction: "#37ff00",
    cTeamKilled: "#ffcc00",
    cLeftServer: "#d9a6a6",
    cJoined: "#919191",
    cGrayed: "#919191",
    cTracked: "#FF931A",
    cNoteColorIcon: "#f5ccff"
};

const styles = {
    zShift: ".css-ym7lu8 {z-index: 2;}",
    zShiftTime: ".css-z1s6qn {z-index: 3;}",
    zShiftTimeDate: ".css-1jtoyp {z-index: 3;}",
    teamkillBar: ".css-1tuqie1 {background-color: #5600ff1a;width: 1920px}",
    adminCam: ".css-1fy5con {background-color: #31e3ff21;width: 1920px}",
    nobranding: "#poweredbyovh {background-color: #31e3ff21;width: 1920px}"
};

const sets = {
    teamKilled: new Set(["team killed"]),
    grayedOut: new Set([
        "AFK - Thanks for playing!",
        "Please get a Squad Leader kit within 8 mins",
        "Final warning: Get Squad Leader kit within 5m",
        "SEEDING WHITELIST ACTIVE! Thanks for helping seed the server!",
        "You will be kicked in 2 minutes if you are still not in a squad",
        "To switch teams, please run the",
        "Check your seeding reward status via",
        "Trigger added flag LiQ Seeder",
    ]),
    trackedTriggers: new Set(["[SL Kit]"]),
    leftServer: new Set(["left the server"]),
    joinedServer: new Set(["joined the server"]),
    actionList: new Set([
        "was warned",
        "was kicked",
        "was banned",
        "edited BattleMetrics Ban",
        "added BattleMetrics Ban",
        "deleted BattleMetrics Ban",
        "Trigger added flag Previously banned",
    ]),
    adminList: new Set([
        "Aomm2025",
        "Archangel",
        "Basa_Doc",
        "Blackout",
        "Brennan",
        "budge",
        "Chaot3ch",
        "Cossack_440",
        "Digikind",
        "DontFaket",
        "E10",
        "El 24 throttle4u",
        "Exploits",
        "Gilly",
        "got2bhockey",
        "Hellsaber",
        "iCampHard",
        "JAMESTERRARIA",
        "Jonboy",
        "Kibz",
        "Kyle",
        "Nightshade",
        "Outlast",
        "QTheEngineer",
        "Redneck",
        "Shaka",
        "sleepyguy1",
        "Skipper",
        "TempusOwl",
        "Too Many Cooks",
        "Valkyrie",
        "WatdaHek",
        "Wobblebob29",
        "Wolf Fang",
        "Θscar Mike",
        "xplay0321",
        "Chillz",
        "HellHound6396",
        "omgitsjesse",
        "MODERNMEGA",
        "Whip me more, Grandma",
        "Wjli13125",
        "Temper",
        "MadDawgMorales",
        "The ROMAN99",
        "jordonrtelles",
        "ETXBONES",
        "Moses",
        "N1nja",
        "white knife",
    ]),

    teamBluefor: new Set([
        "Australian Defence Force",
        "British Armed Forces",
        "Canadian Armed Forces",
        "United States Army",
        "United States Marine Corps",
        "Turkish Land Forces",
    ]),

    teamOpfor: new Set([
        "Russian Ground Forces",
        "Middle Eastern Alliance",
        "Middle Eastern Insurgents",
        "Insurgent Forces",
        "Irregular Militia Forces",
        "People's Liberation Army",
        "Russian Airborne Forces",
        "PLA Navy Marine Corps",
        "PLA Amphibious Ground Forces",
        "Western Private Military Contractors"
    ]),

    teamIndepend: new Set([
        "Western Private Military Contractors"
    ]),

    adminTerms: new Set([
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
        "AdminRenameSquad",
        "(Global)",
        "executed Player Action Action",
        "requested the current map.",
        "restarted the match.",
        "Squad disband - SL",
        "was removed from their squad by Trigger.",
        "requested layer list.",
        "was removed from their squad by",
    ]),
};

async function runCode() {
    console.log("Running initial one-time code...");

    function GM_addStyleElements() {
        const styles = {
            zShift: ".css-ym7lu8 {z-index: 2;}",
            zShiftTime: ".css-z1s6qn {z-index: 3;}",
            zShiftTimeDate: ".css-1jtoyp {z-index: 3;}",
            teamkillBar: ".css-1tuqie1 {background-color: #5600ff1a;width: 1920px}",
            moderationBar: ".css-1rwnm41 {background-color: #ff000008;width: 1920px;}",
            adminCam: ".css-1fy5con {background-color: #31e3ff21;width: 1920px}",
            nobranding:
                "#RCONLayout > nav > ul > li.css-1nxi32t > a {background-color: #31e3ff21;width: 1920px}",
        };

        Object.values(styles).forEach((style) => GM_addStyle(style));

    } GM_addStyleElements()

    function cornerButtons() {
        const buttons = [
            { id: "NPFbutton", label: "N", url: "", backgroundColor: "#187E00" },
            { id: "TRbutton", label: "T", url: "", backgroundColor: "orange" },
            { id: "ban", label: "B", url: "", backgroundColor: "red" },
            { id: "lanes", label: "M", url: "", backgroundColor: "#7E6900" },
            { id: "version", label: version, url: "", backgroundColor: "black", fontSize: "6pt" }
        ];

        const buttonContainer = Object.assign(document.createElement("div"), {
            style: "position: absolute; top: 10px; right: 5%; z-index: 99999;"
        });
        document.body.appendChild(buttonContainer);

        buttons.forEach(({ id, label, url, backgroundColor }) => {
            const button = Object.assign(document.createElement("input"), {
                type: "button", id, value: label,
                style: `width: 35px; margin-right: 5px; padding: 2px; font-size: 8pt; background: ${backgroundColor};`,
                onclick: () => window.open(url, '_blank')
            });
            buttonContainer.appendChild(button);
        });
    } cornerButtons();

    let isFetching = false;

    async function updateLogic() {
        await new Promise(resolve => setTimeout(resolve, updateRate));

        if (document.querySelector('.ReactVirtualized__Grid__innerScrollContainerddd') || document.querySelector('.css-b7r34x')) {
            function applyTimeStamps() {
                let timeStampElements = document.querySelectorAll(".css-z1s6qn");
                timeStampElements.forEach(element => {
                    let utcTime = element.getAttribute("datetime");
                    if (utcTime) {
                        let date = new Date(utcTime);
                        if (!isNaN(date.getTime())) {
                            element.setAttribute("title", date.toLocaleString(undefined, {
                                timeZoneName: 'short'
                            }));
                        }
                    }
                });
            } applyTimeStamps();

            function logColoring() {
                let namePlayers = document.querySelectorAll(".css-1ewh5td");
                let nameActivity = document.querySelectorAll(".css-fj458c");
                let messageLog = document.querySelectorAll(".css-ym7lu8");
                let bmAdmin = document.querySelectorAll(".css-18s4qom");
                let bmNoteFlag = document.querySelectorAll(".css-he5ni6");

                function applyColor(elements, set, color) {
                    elements.forEach((element) => {
                        for (let phrase of set) {
                            if (element.textContent.includes(phrase)) {
                                element.style.color = color;
                                break;
                            }
                        }
                    });
                }

                function adminApplyColor(elements, phrases, color) {
                    elements.forEach(function (el) {
                        phrases.forEach(function (phrase) {
                            const regex = new RegExp(
                                "i"
                            );
                            if (regex.test(el.textContent)) {
                                el.style.color = color;
                            }
                        });
                    });
                }

                applyColor(messageLog, sets.adminTerms, colors.cAdminAction);
                applyColor(messageLog, sets.grayedOut, colors.cGrayed);
                applyColor(messageLog, sets.joinedServer, colors.cJoined);
                applyColor(messageLog, sets.leftServer, colors.cLeftServer);
                applyColor(messageLog, sets.actionList, colors.cModAction);
                applyColor(messageLog, sets.teamBluefor, colors.cTeamBluefor);
                applyColor(messageLog, sets.teamOpfor, colors.cTeamOpfor);
                applyColor(messageLog, sets.teamIndepend, colors.cTeamIndepend);
                applyColor(messageLog, sets.teamKilled, colors.cTeamKilled);
                applyColor(messageLog, sets.trackedTriggers, colors.cTracked);
                adminApplyColor(nameActivity, sets.adminList, colors.cAdminName);
                adminApplyColor(namePlayers, sets.adminList, colors.cAdminName);

                bmAdmin.forEach((element) => {
                    if (element.textContent.includes("Admin")) {
                        element.style.color = colors.cbmAdmin;
                    }
                });

                bmNoteFlag.forEach((element) => {
                    element.style.color = colors.cNoteColorIcon;
                });
            }
            logColoring();


function copyButtoANDSteamIDs() {
    function createCopyButton() {
        const copyButton = document.createElement("button");
        copyButton.id = "copy-button";
        copyButton.textContent = "Copy Player Info";
        copyButton.classList.add("copy-button-style");

        const openURLButton = document.createElement("button");
        openURLButton.id = "open-url-button";
        openURLButton.textContent = "Open CBL";
        openURLButton.classList.add("open-url-button-style");
        openURLButton.style.top = "140px"; 
        document.body.appendChild(copyButton);
        document.body.appendChild(openURLButton);

        copyButton.addEventListener("click", () => {
            const pSteamID = getInnerTextByTitle("765", "SteamID MISSING?");
            const pEOSID = getInnerTextByTitle("0002", "");
            const pName = document.querySelector("#RCONPlayerPage > h1")?.innerText || 'NAME MISSING?';

            const textToCopy = `**User**: ${pName} <${window.location.href}>\n**IDs**: ${pSteamID} > ${pEOSID}\n**Server**:\n**Infraction**:\n**Evidence Linked Below**:`;
            copyToClipboard(textToCopy);
        });

        openURLButton.addEventListener("click", () => {
            const pSteamID = getInnerTextByTitle("765", "SteamID MISSING?");
            if (pSteamID && pSteamID !== "SteamID MISSING?") {
                const url = `https:/\/\communitybanlist.com/\search/${pSteamID}`;
                window.open(url, "_blank");
            } else {
                alert("SteamID is missing or invalid!");
            }
        });

        buttonStyles();
    }

    function buttonStyles() {
        const style = document.createElement("style");
        style.innerHTML = `
    .copy-button-style {
        width: 140px;
        height: 40px;
                                left:10px;
        border-radius: 1em 1em 0 0;
        background-color: #2d65a5;
        color: white;
        border: none;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        position: absolute;
        top: 100px;
        z-index: 99999;
        transition: background-color 0.3s, transform 0.2s;
    }
    .copy-button-style:hover {
        background-color: #0077ff;
    }
    .open-url-button-style {
        width: 140px;
        height: 25px;
                                left:10px;
        border-radius: 0 0 1em 1em;
        background-color: #e5a411;
        color: white;
        border: none;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        position: absolute;
        top: 120px;
        z-index: 99999;
        transition: background-color 0.3s, transform 0.2s;
    }
    .open-url-button-style:hover {
        background-color: #ffb500;
    }
`;

        document.head.appendChild(style);
    }

    function copyToClipboard(text) {
        const textarea = document.createElement("textarea");
        textarea.style.position = 'fixed'; 
        textarea.style.opacity = '0'; 
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }


    const playerPageExists = document.querySelector("#RCONPlayerPage");

    if (playerPageExists) {
        ensureElementExists("copy-button", createCopyButton);
        ensureElementExists("CBL-info", runDataFetching);
    } else {
        removeElementById("copy-button");
        removeElementById("open-url-button");
        removeElementById("CBL-info");
    }

    function ensureElementExists(elementId, creationFunction) {
        if (!document.getElementById(elementId)) {
            creationFunction();
        }
    }

    function removeElementById(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.remove();
        }
    }
}
copyButtoANDSteamIDs();



function getInnerTextByTitle(titlePart, defaultValue) {
 return document.querySelector(`[title*="${titlePart}"]`)?.innerText || defaultValue;
                }

            const graphqlEndpoint = "https:/\/\communitybanlist.com/\graphql";
            async function runDataFetching() {
                if (isFetching) {
                    console.log("CBL script already in progress... Skipping...");
                    return;
                }

                const pSteamID = getInnerTextByTitle("765", "SteamID MISSING?");
                if (pSteamID && pSteamID !== "SteamID MISSING?") {
                    try {
                        isFetching = true;
                        await fetchSteamUserData(pSteamID);
                    } catch (error) {
                        console.error("Error fetching Steam user data:", error);
                    } finally {
                        isFetching = false;
                    }
                } else {
                    console.error("Invalid Steam ID");
                }
            }

                async function fetchSteamUserData(steamID) {
                await new Promise(resolve => setTimeout(resolve, 500));
                const maxRetries = 1; 
                const retryDelay = 3000;
                let attempt = 0;
                let success = false;

                while (attempt < maxRetries && !success) {
                    try {
                        attempt++;
                        console.log(`CBL API Query ${attempt}: Fetching user data for SteamID ${steamID}`);

                        const response = await fetch(graphqlEndpoint, {
                            method: "POST",
                            headers: { "Content-Type": "application/\json" },
                            body: JSON.stringify({
                                query: `
                                    query Search($id: String!) {
                                        steamUser(id: $id) {
                                            riskRating
                                            activeBans: bans(orderBy: "created", orderDirection: DESC, expired: false) {
                                                edges { node { id } }
                                            }
                                            expiredBans: bans(orderBy: "created", orderDirection: DESC, expired: true) {
                                                edges { node { id } }
                                            }
                                        }
                                    }
                                `,
                                variables: { id: steamID },
                            }),
                        });

                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status} (${response.statusText})`);
                        }

                        const data = await response.json();
                        if (!data || !data.data || !data.data.steamUser) {
                            throw new Error("Invalid response format or user not found.");
                        }

                        const user = data.data.steamUser;
                        const riskRating = user.riskRating || "NA";
                        const activeBansCount = user.activeBans.edges.length || 0;
                        const expiredBansCount = user.expiredBans.edges.length || 0;

                        displayUserData(riskRating, activeBansCount, expiredBansCount);
                        console.log("Fetch successful!");
                        success = true;

                    } catch (error) {
                        console.error(`Attempt ${attempt} failed: ${error.message}`, error);
                        if (attempt < maxRetries) {
                            console.log(`Retrying in ${retryDelay / 1000} seconds...`);
                            await new Promise(resolve => setTimeout(resolve, retryDelay));
                        } else {
                            console.error("Max retries reached. Fetch operation failed.");
                            displayUserData("NA", "NA", 0);
                            success = true;
                        }
                    }
                }
            }

            function displayUserData(riskRating, activeBansCount, expiredBansCount) {
                const CBL = document.createElement("div");
                CBL.id = "CBL-info";
                CBL.style = `
                                width: 140px;
                                height: 120px;
                                left:10px;
                                top: 170px;
                                background: #000000bd;
                                color: white;
                                border: none;
                                border-radius: 15% 15% 15% 15%;
                                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                                padding: 2px;
                                position: absolute;
                                text-align: center;
                                z-index: 99998;
                            `;

                let riskColor = "white";
                if (riskRating >= 1 && riskRating <= 5) {
                    riskColor = "orange";
                } else if (riskRating > 5) {
                    riskColor = "red";
                }

                CBL.innerHTML = `
                                <h4 style="font-size: 1.2em; font-weight: bold; color: ${riskColor};">
                                    Risk Rating  ${riskRating} of 10
                                </\h4>
                                <h4 style="font-size: 12px; font-weight: bold;">Active Bans: ${activeBansCount}</\h4>
                                <h4 style="font-size: 12px; font-weight: bold;">Expired Bans: ${expiredBansCount}</\h4>
                            `;
                document.body.appendChild(CBL);
            }

            function colorDialogMenus() {
                const navTools = {
                    changeMapWarning: [
                        {
                            phrase: "Change Layer",
                            styles: {
                                color: "red",
                                fontStyle: "bold",
                                textAlign: "center",
                                fontSize: "200pt",
                            },
                        },
                        {
                            phrase: "Set Next Layer",
                            styles: {
                                color: "lime",
                                fontStyle: "bold",
                                textAlign: "center",
                                fontSize: "24pt",
                            },
                        },
                        {
                            phrase: "Kick",
                            styles: {
                                color: "orange",
                                fontStyle: "bold",
                                textAlign: "center",
                                fontSize: "48pt",
                            },
                        },
                        {
                            phrase: "Warn",
                            styles: {
                                color: "lime",
                                fontStyle: "bold",
                                textAlign: "center",
                                fontSize: "24pt",
                            },
                        },
                    ],
                    orgGroup: [
                        { phrase: "Arma", styles: { background: "#333300" } },
                        { phrase: "Squad Mod", styles: { background: "#2b9937" } },
                        { phrase: "Comp", styles: { background: "lime" } },
                        { phrase: "Squad Admin", styles: { background: "#119ab7" } },
                        { phrase: "Rust Admin", styles: { background: "#672c00" } },
                        { phrase: "Org", styles: { background: "black" } },
                        { phrase: "Recruiter", styles: { background: "#cc6600" } },
                        { phrase: "Minecraft Admin", styles: { background: "#8d0cff" } },
                        { phrase: "Squad Event", styles: { background: "#660033" } },
                    ],
                    playerMenuDialog: [
                        { phrase: "Warn", styles: { color: "lime" } },
                        { phrase: "Squad List", styles: { color: "gold" } },
                        { phrase: "Kick", styles: { color: "orange" } },
                        { phrase: "Ban", styles: { color: "red" } },
                        { phrase: "Force Team Change", styles: { color: "#db4dff" } },
                        { phrase: "Remove Player from Squad", styles: { color: "#804d00" } },
                        { phrase: "Action - Reset Squad Name", styles: { color: "gold" } },
                    ],
                    serverCommands: [
                        { phrase: "Warn", styles: { color: "lime" } },
                        { phrase: "Kick", styles: { color: "orange" } },
                        { phrase: "Ban", styles: { color: "red" } },
                        { phrase: "Force Team Change", styles: { color: "#db4dff" } },
                        { phrase: "Remove Player from Squad", styles: { color: "#804d00" } },
                        { phrase: "Action - Reset Squad Name", styles: { color: "gold" } },
                        { phrase: "Next Layer", styles: { color: "lime", fontSize: "16pt" } },
                        { phrase: "Change Layer", styles: { color: "red", fontStyle: "bold", fontSize: "8pt" } },
                        { phrase: "Squad List", styles: { color: "gold", fontSize: "16pt" } },
                    ]
                };

                function applyStyles(elements, styles) {
                    elements.forEach((el) => {
                        styles.forEach(({ phrase, styles }) => {
                            if (el.textContent.includes(phrase)) {
                                Object.assign(el.style, styles);
                            }
                        });
                    });
                };

                setTimeout(() => {
                    applyStyles(
                        document.querySelectorAll(".modal-title"),
                        navTools.changeMapWarning
                    );
                    applyStyles(document.querySelectorAll(".css-4ey69y"), navTools.orgGroup);
                    applyStyles(
                        document.querySelectorAll(".css-f5o5h6 a, .css-f5o5h6 button"),
                        navTools.playerMenuDialog
                    );
                    applyStyles(
                        document.querySelectorAll(".css-1ixz43s a, .css-1ixz43s button"),
                        navTools.playerMenuDialog
                    );
                    applyStyles(
                        document.querySelectorAll(".css-yun63y a, .css-yun63y button"),
                        navTools.serverCommands
                    );
                }, 500)

            } colorDialogMenus();
        }
    }

    setInterval(async () => {
        await updateLogic();
    }, updateRate);
}

function observeDOMChanges() {
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                const targetElement1 = document.querySelector('.ReactVirtualized__Grid__innerScrollContainer');
                const targetElement2 = document.querySelector('.navbar-brand');

               
                if (targetElement1 || targetElement2) {
                    console.log("Target element detected. Starting code...");
                    observer.disconnect(); 
                    runCode(); 
                    break;
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
    });
}

observeDOMChanges();
