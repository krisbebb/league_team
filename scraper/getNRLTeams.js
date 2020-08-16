

const axios = require('axios')
const cheerio = require('cheerio')




const page_url = 'https://en.wikipedia.org/wiki/2020_NRL_season'

async function getNRLTeams() {
    const { data } = await axios.get(page_url)
    const $ = cheerio.load(data)
    const teamsTable = $('table.wikitable')
    const teams = []
    teamsTable.find('tbody tr').slice(1,17).each((i, element) => {
        const $row = $(element)
        const team = {}

        team.name = $row.find('b').text()
        const labels = [
            'Colours',
            'Club',
            'Season',
            'Home Ground(s)',
            'Head Coach',
            'Captain(s)'
        ]
        $row.find('td').each((i, element) => {
            const $col = $(element)
            const label = labels[i]
            team[label] = $col.text().trim()
        })
        teams.push(team)
    })
    return teams
}

module.exports = getNRLTeams