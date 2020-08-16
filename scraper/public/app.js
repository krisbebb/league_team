const teamsElement = document.querySelector("#teams");
const playersElement = document.querySelector("#players");

const infoElement = document.querySelector("#info");
let teams = [];
let selectedTeam = ''
let selectedPlayer = ''

function setNRLTeams(teams) {
  teams.forEach((team) => {

    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", team.name);
    optionElement.textContent = team.name;
    teamsElement.append(optionElement);

    // CJ's code --- doesn't work for me!
    // optionElement.addEventListener('click', (e) => {
    //     infoElement.innerHTML = `<pre>${JSON.stringify(team, null, 2)}</pre>`
    // })
  });
  teamsElement.addEventListener("change", (e) => {
    document.getElementById("players").options.length = 1;

    if (teamsElement.value !== "select") {
      console.log(e.target.value, teams);
      // infoElement.innerHTML = `<pre>${JSON.stringify(teams.find(team => team.name == e.target.value), null, 2)}</pre>`
      const team = teams.find((team) => {
        if (team.name === e.target.value) {
            selectedTeam = team
          return selectedTeam;
        }
      });
      console.log(selectedTeam);
      getNRLPlayers(selectedTeam.id);
    } else {
      infoElement.innerHTML = "";
    }
  });
}

function setNRLPlayers(players) {
//   console.log(players);
//   players.forEach((player) => {
//     console.log(player.full_name);
//     infoElement.innerHTML += `<pre>${JSON.stringify(player, null, 2)}</pre>`;



//   });

  players.forEach((player) => {
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", player.full_name);
    optionElement.textContent = player.full_name;
    playersElement.append(optionElement);

    // CJ's code --- doesn't work for me!
    // optionElement.addEventListener('click', (e) => {
    //     infoElement.innerHTML = `<pre>${JSON.stringify(team, null, 2)}</pre>`
    // })
  });
  playersElement.addEventListener("change", (e) => {
    if (playersElement.value !== "select") {
      console.log(e.target.value, players);
      // infoElement.innerHTML = `<pre>${JSON.stringify(teams.find(team => team.name == e.target.value), null, 2)}</pre>`
      const player = players.find((player) => {
        if (player.full_name === e.target.value) {
            infoElement.innerHTML = "";
            selectedPlayer = player
            infoElement.innerHTML += `<pre>${JSON.stringify(selectedPlayer, null, 2)}</pre>`;

          return selectedPlayer;
        }
      });
      console.log(selectedPlayer);
    //   getNRLPlayers(selectedPlayer.id);
    } else {
      infoElement.innerHTML = "";
    }
  });
}

async function getNRLTeams() {
  const response = await fetch("/api/teams");
  teams = await response.json();
  setNRLTeams(teams);
}

async function getNRLPlayers(teamId) {
  // console.log(teamId)
  const response = await fetch(`/api/players/${teamId}`);
  const players = await response.json();
  setNRLPlayers(players.players);
  console.log(players);
}

function getPlayerStats(playerId) {
  return players.find((player) => player.id == playerId);
}

getNRLTeams();
// getPlayerStats(113404);
