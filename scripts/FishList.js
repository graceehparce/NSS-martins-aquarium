import { getFish } from './database.js'

export const FishList = () => {
    const fishes = getFish()
    let htmlString = '<article class="fishList">'
    htmlString += '<h2 class="boxHeader">Fish Species</h2>'
    for (const fish of fishes) {
        htmlString += `<section class="eachFish">
    <div><img  class="fishImage" src="${fish.image}" /></div>
    <div class="eachFish">${fish.name}</div>
    <div class="eachFishInfo">Species: ${fish.species}</div>
    <div class="eachFishInfo">Food: ${fish.food}</div>
    </section>`
        htmlString += `</article>`
    }
    return htmlString
}

let finalString = FishList()