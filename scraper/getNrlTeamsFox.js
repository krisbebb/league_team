

const axios = require('axios')


const page_url = 'https://statsapi.foxsports.com.au/3.0/api/sports/league/series/1/'

async function getNRLTeamsFox() {
    const { data } = await axios.get(`${page_url}seasons/118/teams.json?userkey=A00239D3-45F6-4A0A-810C-54A347F144C2`)
    console.log(data)
    return data
}

async function getNRLTeamsPlayers(teamId) {
    const { data } = await axios.get(`${page_url}playerslabseriesseasonstats.json;startSeason=118;endSeason=118;page=1;pageSize=20;team=${teamId};sort=games%7Cdesc?userkey=A00239D3-45F6-4A0A-810C-54A347F144C2`
    )
    console.log(data)
    return data
}

module.exports = {
    getNRLTeamsFox,
    getNRLTeamsPlayers
}
// 

//   "referrer": "https://www.foxsports.com.au/nrl/nrl-premiership/stats/players?teamId=55016",
//   "referrerPolicy": "no-referrer-when-downgrade",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// });

// https://statsapi.foxsports.com.au/3.0/api/sports/league/series/1/playerslabseriesseasonstats.json;startSeason=118;endSeason=118;page=1;pageSize=20;team=55016;sort=games%7Cdesc?userkey=A00239D3-45F6-4A0A-810C-54A347F144C2