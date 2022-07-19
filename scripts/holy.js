
import { getFish } from './database.js'


export const mostHolyFish = () => {
    const holyFish = []
    for (let fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}

let hFish = mostHolyFish(getFish())

export const soldierFish = () => {
    const soldiers = []
    for (let fish of fishes) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

let sFish = soldierFish(getFish())

export const nonHolyFish = () => {
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

let rFish = nonHolyFish(getFish())

