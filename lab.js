const tamagotchi = {
    name: "Gregory",
    weight: 16,
    age: 1,
    birthday: 'April 8th, 2020',
    hungerLevel: 7,
    happinessLevel: 8,
    attentionLevel: 2,
    lifeStage: 'Adult',
    isHungry: true,
    wantsToPlay: true,
    needsAttention: true,
    eat: function () {
        this.hungerLevel = 0
        this.isHungry = false
        this.weight += 2
        const foods = ['tofu', 'salami', 'spinach', 'cookie cake', 'an apple']
        console.log(`${this.name} ate ${foods[Math.floor(Math.random()*foods.length)]}. It feels better now! `)
    },
    speak: function () {
        console.log(`Hey it's me ${this.name}, just so you know my hunger level is ${this.hungerLevel}, my happiness level is ${this.happinessLevel} and my attention level is ${this.attentionLevel}. Oh and by the way...`)
        switch (this.lifeStage) {
            case 'Baby': console.log('Goo goo ga ga')
                break;
            case 'Adult': console.log('I have to do my taxes')
                break;
            default: console.log(`Can I play on my phone now?`)
        }
    
        
    },
    play: function() {
        this.happinessLevel++
        this.attentionLevel ? this.attentionLevel -- : console.log(`${this.name} doesn't seem like it wants attention right now`)
        console.log(`${this.name} enjoys spending time with you.`)

    }

}

tamagotchi.eat()
tamagotchi.speak()
tamagotchi.play()