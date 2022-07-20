import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

import { mostHolyFish } from './holy.js'

import { soldierFish } from './holy.js'

import { nonHolyFish } from './holy.js'

import { FishList } from './fish.js'
const parentHTMLElement = document.querySelector(".contentBox")
parentHTMLElement.innerHTML = '<article class="fishList">'
parentHTMLElement.innerHTML += '<h2 class="boxHeader">Fish Species</h2>'
parentHTMLElement.innerHTML += FishList(mostHolyFish())
parentHTMLElement.innerHTML += FishList(soldierFish())
parentHTMLElement.innerHTML += FishList(nonHolyFish())


import { locationList } from './locations.js'
parentHTMLElement = document.querySelector(".locationBox")
parentHTMLElement.innerHTML = locationList()


import { tipsList } from './tips.js'
parentHTMLElement = document.querySelector(".tipBox")
parentHTMLElement.innerHTML = locationList()



