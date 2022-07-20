import { getFish } from './database.js'

export const locationList = () => {
    const fishes = getFish()
    let htmlString = '<article class="locationList">'
    htmlString += `<h2 class="boxHeader">Harvest Locations</h2>`
    for (const fish of fishes) {
        htmlString += `<section class="eachLocation">
    <div class="eachLocation">1. ${fish.species}: </div>
    <div class="eachLocation">${fish.location}</div>
    </section>`
        htmlString += `</article>`
    }
    return htmlString
}

let locationString = locationList()