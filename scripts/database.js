const database = {
    fish: [
        {
            name: "Wren",
            species: "Wolf-Cichlid",
            size: 5,
            food: ["fish", "shrimp", "earthworms"],
            image: "pics/WolfCichlid.jpg"
        },

        {
            name: "Nemo",
            species: "Vampire-Tetra",
            size: 7,
            food: ["fish", "earthworms", "shrimps"],
            image: "pics/vampire.jpg"

        },

        {
            name: "Ernie",
            species: "Red Texas Cichlid",
            size: 6,
            food: ["Bloodworms", "Insects", "shrimp", "vegetables"],
            image: "pics/RTCichlid.jpg"
        },
        {
            name: "Gwen",
            species: "African Cichlids",
            size: 8,
            food: ["plants", "insects", "fish"],
            image: "pics/AfricanCichlid.jpg"
        },
        {
            name: "Ceasar",
            species: "Discus",
            size: 3,
            food: ["plants", "worms", "crustaceans"],
            image: "pics/Discus.jpg"
        },
        {
            name: "Joe",
            species: "Freshwater - Stingrays",
            size: 10,
            food: ["crustaceans", "invertebrates"],
            image: "pics/FreshStingray.jpg"
        },
        {
            name: "Herbert",
            species: "Arowana",
            size: 4,
            food: ["fish", "insects", "frogs", "crustaceans"],
            image: "pics/Arowana.jpg"
        }

    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}