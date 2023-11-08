class box{
    constructor(l, b , h){
        this.l = l;
        this.b = b;
        this.h = h;
    }

    printVolume (){
        console.log(`Volume of box is : ${this.l * this.b * this.h}`);
    }

    fetchSurfaceArea(){
       let res = (2 * (this.l * this.b + this.b * this.h + this.h * this.l));
       console.log(res);
       
    }

    setBoxSize(l, b, h){
        this.l = l;
        this.b = b;
        this.h = h;
    }
}

let b = new box(5, 6, 7);
b.printVolume();
b.fetchSurfaceArea();
b.setBoxSize(10,20,30); 