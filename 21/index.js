let x = Math.random();
x = Math.floor(Math.random() * 10);
console.log(x);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  getRndInteger();