import { getFish } from './database.js'

export const tipsList = () => {
    const fishes = getFish()
    let htmlString = '<article class="tipBox">'
    htmlString += `<h2 class="boxHeader">Martin's Fish Tips</h2>`
    for (const fish of fishes) {
        htmlString += `<article class="tip">
        <h5 class="tipTitle">${fish.tip?.title}</h5>
        <section class="tipContent">${fish.tip?.content}</section>
        </article>`
    }
    htmlString += `</article>`
    return htmlString
}

let tipsString = tipsList()

