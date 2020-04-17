// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `addNumbers`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them together.
 * 
 * For example, if we invoke `addNumbers` passing 5 and 3,
 * the returned value should be 8.
 *
 * NOTE: This example has been completed for you.
*/
function addNumbers(num1, num2) {
  return num1 + num2;
}

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/**
 * ### Challenge `sayGoodbye`
 * 
 * @instructions
 * This function should take an a name as an argument,
 * and return a string that says 'Goodbye, {name}. Have a great day.'
 * 
 * For example, if we invoke `sayGoodbye`
 * passing 'Andy' as the argument,
 * the returned value should look like: 'Goodbye, Andy. Have a great day.'
 * 
*/
function sayGoodbye(name) { //argument is the name user inputs
  return `Goodbye, ${name}. Have a great day.`; //return string with name user inputted
  /* code here */
}

/**
 * ### Challenge `temperatureCtoF`
 * 
 * @instructions
 * This function should take an a temperature in celsius as an argument,
 * and return the temperature in fahrenheit, rounded to the nearest whole number. 
 * 
 * For example, if we invoke `temperatureCtoF`
 * passing 24 as the argument,
 * the returned value should be: 75
 * 
 * Hint 1: The formula for converting celsius to fahrenheit is t*9/5 + 32 where t is the temperature in celsius.
 * Hint 2: There is a very easy way to round numbers in JS. Do a google search to find out how. 
*/
function temperatureCtoF(temp) { //argument that uses the temp user inputs
  let f= (temp * 1.8) + 32;  //1.8 = 9/5
return Math.round(f); // return variable f as a whole number
}

/**
 * ### Challenge `temperatureInF`
 * 
 * @instructions
 * This function should take an a temperature and a unit (either 'F' or 'C') as arguments,
 * and return the temperature in fahrenheit, rounded to the nearest whole number. 
 * 
 * For example, if we invoke `temperatureInF`
 * passing 88, 'F' as the arguments,
 * the returned value should be: '88F'
 * 
 * If we invoke `temperatureInF`
 * passing 24, 'C' as the arguments,
 * the returned value should be: '75F'
 * 
 * Hint: You can call your `temperatureCtoF` function from inside `temperatureInF`.
*/
function temperatureInF(temp, unit) { // arguments are the temp and unit the user inputs
  if (unit ==='F'){ // if the unit === F
  return `${Math.round(temp)}${unit}`; // return the temp as a whole number and the unit e 88F

  } else if (unit === 'C'){  // if the unit === C
    return temperatureCtoF(temp) + 'F'; // return result using the CtoF function with the argument temp and add F
  
  }
  /* code here */
}


/**
 * ### Challenge `makePersonObject`
 * 
 * @instructions
 * This function should take an id, a name and an email as arguments,
 * and return an object with `id`, `name` and `email` properties.
 * 
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
*/
function makePersonObject(id, name, email) {  //arguments are id name and email user inputs
  return {id, name, email}; // it will return user input as an object {}

}

/**
 * ### Challenge `getName`
 * 
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
*/
function getName(obj) { //objectName is the parameter
  return `Hello, my name is ${obj.name}` //calls objectName and the value key name
  /* code here */
}


/**
 * ### Challenge `appleIndex`
 * 
 * @instructions
 * This function takes as its only argument an array 
 * containing strings,
 * and returns the index in the array of the string 'apple'.
 * 
 * You may assume the string 'apple' will appear exactly 
 * once in the array.
 * 
 * For example, if we invoke `appleIndex`
 * passing in [ 'orange', 'grape', 'apple', 'banana', 'mango' ] as the argument,
 * the returned value should be: 2.
*/
function appleIndex(arr) { //argument of an arr with strings that will be checked
  for (let i=0; i < arr.length; i++){ // loops over array
    if (arr[i] === 'apple'){ // if array index is equal to apple
    return (i); // return where it is in the index
    }
  }
}

/**
 * ### Challenge `isItAnApple`
 * 
 * @instructions
 * This function takes as its only argument an array 
 * containing strings,
 * and returns an array of equal length containing the `true`
 * if the corresponding entry in the original array is 'apple' 
 * and `false` if it is anything else.
 * 
 * 
 * For example, if we invoke `isItAnApple`
 * passing in [ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ] as the argument,
 * the returned value should be: [ false, true, false, false, true, false ].
*/
function isItAnApple(arr) {  //the argument is an array
  let otherArr=[]; // new empty array for information to go
  for (let i = 0; i < arr.length; i++){ // loops over initial array
    if (arr[i]=== 'apple'){ // if the initial array's index === 'apple'
      otherArr.push(true); // push into the other array the boolean true
    }else {
      otherArr.push(false); // if not === apple push into the array false
    }
  }
  return otherArr; // return the other array
}



/*
// ⭐️ Example Test Data ⭐️

var inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 }
  /// ... Truncated
]
*/
/**
  * ### Example Array Challenge:
  * 
  * @instructions
  * get3rdCar() should return the string `The is a Land Rover Defender Ice Edition`
  * 
  *
  * NOTE: This example has been completed for you.
**/
function get3rdCar(inventory) {
  const the3rd = inventory[2];
  return `The is a ${the3rd.car_make} ${the3rd.car_model}`
}

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇


/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the preview above (see ⭐️ Preview Test Data ⭐️)
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}`
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoByIndex(inventory, index) { //parameters are the inventory array and the index of the items inside
  const x = inventory[index]; // variable to hold the parameter information user type inventory[index number]
  return `This is a ${x.car_make} ${x.car_model}` // string that tells variable. car make and model
}

/**
 * ### Challenge `getLastCarInfo`
 * 
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
*/
function getLastCarInfo(inventory) { //inventory is the array
  let x = inventory.length-1; //tells me inventory array last index key/values
  return `This is a ${inventory[x].car_make} ${inventory[x].car_model}` // arrName[index in arr]. key string
}

/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
*/
function getModelYears(arr) { //parameter is the array
  const carYears =[]; //new empty array to put car years into
  for(let i = 0; i < arr.length; i++){//look through whole array
    carYears.push(arr[i].car_year); //push in to the car years array all the car year key value
  }//closes for loop
  return carYears; //return the car years in the inventory
  /* code here */
}// end of function

/**
 * ### Challenge `getCarInfoById`
 *  * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoById(arr, id) { //parameters arrayName and id of object
  /* code here */
  for (let i=0; i < arr.length; i++){ //for loop loops over array of objects
    if (arr[i].id === id ){ //if array index [i(object)] .id === argument id
  return `This is a ${arr[i].car_make} ${arr[i].car_model}`; //return string with array object index. car make and model
    } // closes if statement
  }//closes for loop
}//end of function

/**
 * ### Challenge `getOlderCars`
 * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions //not returning all?????????????????????????????????????????????????
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
*/
function getOlderCars(inventory, maxYear) {// inventory is an array and maxYear is the year
  //have an empty array for information to go
  const oldCars = [];
  //make a for loop to loop over the array named inventory
  for (let i=0; i < inventory.length; i++){
    //if the array index object.car_year <= the maxYear the user inputed
    if(inventory[i].car_year <= maxYear) {
      //put the array index object into the empty array
      oldCars.push(inventory[i]);
    } //closes if statement
  //return the new array (should be in the same order as original array)
  
  }//closes for loop //make sure return is out of loop
  return oldCars;
}

/**
 * ### Challenge `getGermanCars`
 * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
*/
function getGermanCars(inventory) { //array with the cars
  //an empty array to put information in
  const germanCars = [];
  //for loop to go over entire array or inventory
  for(let i=0; i<inventory.length; i++){
    //if the inventory[i].car_make name matches Audi Merceder-Benz Volkswagen or BMW 
    if (inventory[i].car_make === 'Audi' || inventory[i].car_make === 'Mercedes-Benz' || inventory[i].car_make === 'Volkswagen' || inventory[i].car_make === 'BMW'){
      //push into new array
      germanCars.push(inventory[i]);
    } //closes if statement
  } // closes for loop
     //return the new array
     return germanCars; //make sure to put return out of loop
}


///ONLY @ of 3 Correct not sure why ?????????????
/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
function carMaker(number) { // parameter is a number from user
  const obj = { //make an object
    odometer: number, //odometer uses number argument
    drive: function(distance){ //drive is a method with distance argument
      if (distance > 0){ //if distance is greater than 0 
        return  number + distance; //add distance to number
      } // closes if statement
      return `The odometer is now ${this.drive}`; //returns odometer reading
    } // closes drive method
  }; // closes object
  obj.odometer.number = obj.number + obj.distance;
  //inside the drive method -- distance increase the odometer and odometer value is update
return obj; //return the object
} //ends function


/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (addNumbers) { module.exports.addNumbers = addNumbers }
  if (sayGoodbye) { module.exports.sayGoodbye = sayGoodbye }
  if (temperatureCtoF) { module.exports.temperatureCtoF = temperatureCtoF }
  if (temperatureInF) { module.exports.temperatureInF = temperatureInF }
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
  if (appleIndex) { module.exports.appleIndex = appleIndex }

  if (isItAnApple) { module.exports.isItAnApple = isItAnApple }
  

  
  if (carMaker) { module.exports.carMaker = carMaker }
  if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
  if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
  if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }

  if (getModelYears) { module.exports.getModelYears = getModelYears }
  if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
  if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
 
}
