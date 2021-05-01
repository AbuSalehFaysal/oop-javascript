class Name {
    constructor(name, profession) {
        this.name = name;
        this.profession = profession;
    }
    getProfession(profession) { 
        return this.profession; 
    }
}

const newName = new  Name('Faysal');
console.log(newName.getProfession());