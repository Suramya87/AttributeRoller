class Player {
    constructor(characterName = 'Naruto') {
        this.name = characterName;
        this.attributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        };
    }

    rollAttributes() {
        console.log('Rolling dice...')
    }

    printPlayer() {
        console.log(this.name);
        console.log(this.attributes);
    }
}