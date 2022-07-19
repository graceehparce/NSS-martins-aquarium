import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

import { FishList } from './fishList.js'

const parentHTMLElement = document.querySelector(".contentBox")


parentHTMLElement.innerHTML = FishList()
