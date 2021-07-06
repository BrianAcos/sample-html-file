class Animal {
    constructor(name, gender, legs) {
        this.name = name;
        this.gender = gender;
        this.legs = legs;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }

    isMale() {
        return (this.gender === 'M');
    }

    isFemale() {
        return (this.gender === 'F');
    }
}

class Dog extends Animal {
    constructor(name, gender) {
        // super calls the constructor of the parent Class.
        super(name, gender, 4); 
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    constructor(name, gender) {
        super(name, gender, 4); 
    }

    speak() {
        console.log(`${this.name} miau.`);
    }

}

var Lola = new Dog('Lola', 'F');
var Otto = new Dog('Otto', 'M');
var Pete = new Cat('Pete', 'M');
var Sparkles = new Cat('Sparkles', 'M');
var Lana = new Cat('Lana', 'F')