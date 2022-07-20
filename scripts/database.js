const database = {
    fish: [
        {
            name: "Wren",
            species: "Wolf-Cichlid",
            length: 5,
            food: ["fish", "shrimp", "earthworms"],
            image: "pics/WolfCichlid.jpg",
            location: ["Lake Nicaragua ", "Costa Rica ", "Honduras"],
            tip: {
                title: "Tip #1: Maintain adequate water temperature",
                content: "Changes in temperature can wreak havoc on aquarium fish. Avoid sun exposure, heating or air conditioning vents etc. Drastic temperature changes can make your fish sick. Tropical freshwater fish need a constant temperature of 72°F – 82°F. You may need to purchase an aquatic heater."
            }
        },

        {
            name: "Nemo",
            species: "Vampire-Tetra",
            length: 7,
            food: ["fish", "earthworms", "shrimps"],
            image: "pics/vampire.jpg",
            location: ["Amazon Basin ", "Tropical South America"],
            tip: {
                title: "Tip #2: Acclimate your fish",
                content: "Fish are fragile. Learn about water parameters for nitrate, nitrite, ammonia and pH levels are for your fish. Test your aquarium water forits chemistry. The greater the differences, the longer you need to acclimate your fish."
            }
        },
        {
            name: "Ernie",
            species: "Red Texas Cichlid",
            length: 6,
            food: ["Bloodworms", "Insects", "shrimp", "vegetables"],
            image: "pics/RTCichlid.jpg",
            location: ["Southern Texas ", "Northern Mexico"],
            tip: {
                title: "Tip #3: Maintain proper pH Levels",
                content: "pH measures the acidity or alkalinity of your tank water. Buy a pH test kit. Freshwater fish thrive when pH level is between 6.6 and 7.8 depending on species. This range will offer a natural, antiseptic effect that helps your fish resist illness. Check regularly for any fluctuations in pH levels."
            }
        },
        {
            name: "Gwen",
            species: "African Cichlids",
            length: 8,
            food: ["plants", "insects", "fish"],
            image: "pics/AfricanCichlid.jpg",
            location: ["Tanganyika Lake ", "Malawi Lake ", "Central Africa"]
        },
        {
            name: "Ceasar",
            species: "Discus",
            length: 3,
            food: ["plants", "worms", "crustaceans"],
            image: "pics/Discus.jpg",
            location: ["Tributaries of the Amazon River ", "South America"]
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
            location: ["the Amazon ", "the Western Orinoco ", "Rupununi and Essequibo systems of the Guianas"]
        }

    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}