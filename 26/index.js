const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  
  // Set Map Values
  fruits.set("apples", 500);
  fruits.set("bananas", 300);
  fruits.set("oranges", 200);
  
  const fruits = new Map();
  fruits.set("apples", 200);
  fruits.get("apples");
  fruits.delete("apples"); 
  console.log(fruits);