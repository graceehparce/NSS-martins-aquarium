const database = {
    fish: [
        {
            name: "Wren",
            species: "Wolf-Cichlid",
            length: 5,
            food: ["fish", "shrimp", "earthworms"],
            image: "pics/WolfCichlid.jpg",
            location: ["Lake Nicaragua", "Costa Rica", "Honduras"]
        },

        {
            name: "Nemo",
            species: "Vampire-Tetra",
            length: 7,
            food: ["fish", "earthworms", "shrimps"],
            image: "pics/vampire.jpg",
            location: ["Amazon Basin", "Tropical South America"]

        },

        {
            name: "Ernie",
            species: "Red Texas Cichlid",
            length: 6,
            food: ["Bloodworms", "Insects", "shrimp", "vegetables"],
            image: "pics/RTCichlid.jpg",
            location: ["Southern Texas", "Northern Mexico"]
        },
        {
            name: "Gwen",
            species: "African Cichlids",
            length: 8,
            food: ["plants", "insects", "fish"],
            image: "pics/AfricanCichlid.jpg",
            location: ["Tanganyika Lake", "Malawi Lake", "Central Africa"]
        },
        {
            name: "Ceasar",
            species: "Discus",
            length: 3,
            food: ["plants", "worms", "crustaceans"],
            image: "pics/Discus.jpg",
            location: ["Tributaries of the Amazon River", "South America"]
        },
        {
            name: "Joe",
            species: "Freshwater - Stingrays",
            length: 10,
            food: ["crustaceans", "invertebrates"],
            image: "pics/FreshStingray.jpg",
            location: ["Amazon River System"]
        },
        {
            name: "Herbert",
            species: "Arowana",
            length: 4,
            food: ["fish", "insects", "frogs", "crustaceans"],
            image: "pics/Arowana.jpg",
            location: ["the Amazon", "the Western Orinoco", "Rupununi and Essequibo systems of the Guianas"]
        }

    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}