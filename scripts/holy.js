
import { getFish } from './database.js'


export const mostHolyFish = () => {
    const fishes = getFish()
    const holyFish = []
    for (let fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}

let hFish = mostHolyFish()

export const soldierFish = () => {
    const fishes = getFish()
    const soldiers = []
    for (let fish of fishes) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

let sFish = soldierFish()

export const nonHolyFish = () => {
    const fishes = getFish()
    const regularFish = []
    for (let fish of fishes) {
        if (fish.length % 3 > 0) {
            if (fish.length % 5 > 0) {
                regularFish.push(fish)
            }
        }
    }
    return regularFish
}

let rFish = nonHolyFish()

