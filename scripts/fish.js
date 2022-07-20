import { getFish } from './database.js'

export const FishList = (fishes) => {
    let htmlString = ""
    for (const fish of fishes) {
        htmlString += `<section class="eachFish">
    <div><img  class="fishImage" src="${fish.image}" /></div>
    <div class="eachFish">${fish.name}</div>
    <div class ="eachFishInfo">Species: ${fish.species}</div>
    <div class="eachFishInfo">Fo o d: ${fish.food}</div>
    </section>`
        htmlString += `</article>`
    }
    return htmlString
}
