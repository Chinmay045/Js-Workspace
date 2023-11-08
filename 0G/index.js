class dog {
    constructor(breed, weight, color) {
        this._breed = breed;
        this._weight = weight;
        this._color = color;
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

}

//Creating objects

