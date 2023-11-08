

//Creating objects

class dog {
    constructor(breed, weight, color, violant) {
        this._breed = breed;
        this._weight = weight;
        this._color = color;
        this._violant = violant;
    }

    showInfo(){
        console.log(`My dog is a ${this._breed} ,
        whose color is ${this._color} & it weighs ${this._weight} kilos`);

        this._violant ? console.log("It is ferocius \n") : console.log("It is sweet \n");
    }

    get breed() {
        return this._breed;
    }
    get weight() {
        return this._weight;
    }

    get color() {
        return this._color;
    }

    set breed(newBreed) {
        if (typeof newBreed == 'string') {
            this._breed = newBreed;
        }
    }
    set color(newColor) {
        if (typeof newColor == 'string') {
            this._color = color;
        }
    }

    set weight(num) {
        if (typeof weght == 'number' && num > 0) {
            this._weight == this.weight;
        }
        else {
            console.log("Please enter a valid number bove 0");
        }
    }

    set violant(nature){
        if(typeof nature == 'boolean') {
            this._violant = nature;
        }
    }
}

let d1 = new dog("Golden Redriver", 18, 'Orange', false);
let d2 = new dog("Alsetion", 12, 'Black', true);
let d3 = new dog("Rotwiler", 15, 'Brown', true);
let d4 = new dog("Laboeder", 14, 'Cream', false);

d1.showInfo();
d2.showInfo();
d3.showInfo();
d4.showInfo();

