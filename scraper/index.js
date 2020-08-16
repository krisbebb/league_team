const express = require('express')
// const getNRLTeams = require('./getNRLTeams')
const {getNRLTeamsFox, getNRLTeamsPlayers} = require('./getNrlTeamsFox')


 const app = express()

 app.use(express.static('public'))

app.get('/api/teams', async (req, res) => {
    const teams = await getNRLTeamsFox()
    res.json(teams)
})

app.get('/api/players/:teamId', async (req, res) => {
    // await console.log(req.params.teamId)
    const players = await getNRLTeamsPlayers(req.params.teamId)
    res.json(players)
})


const port = process.env.PORT || 4242

 app.listen(port, () => {
     console.log(`Listening at http://localhost:${port}`)
 })