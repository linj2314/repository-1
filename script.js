function foodItem(text, id, calories, protein, carbs, fats) {
  this.text = text;
  this.id = id;
  this.calories = calories;
  this.protein = protein;
  this.carbs = carbs;
  this.fats = fats;
}

const url ="https://api.api-ninjas.com/v1/nutrition?query=";
let query = "";
let options = {
    headers: {
        'X-Api-Key': 'lA3U1TMXLFbw87x6XxIgDw==NvjEWGnFayAoUnz9'
    }
}
let tab =
  `<tr>
    <th>Name</th>
    <th>Calories</th>
    <th>Protein</th>
    <th>Carbohydrates</th>
    <th>Fats</th>
   </tr>`;

let foodArray = [];
let tcalories = 0;
let tprotein = 0;
let tcarbs = 0;
let tfats = 0;
   
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url, options);
   
    // Storing data in form of objects
    var data = await response.json();
    addFoodItem(data);
}

function submitFood() {
  query = document.getElementById("foodsInputBox").value;
  getapi(url + query);
}

function addFoodItem(data) {

// Loop to access all rows
  for (var i = 0; i < data.length; i++) {
    
    var food = new foodItem(`<tr>
    <td>${data[i].name} </td>
    <td>${data[i].calories}</td>
    <td>${data[i].protein_g}</td>
    <td>${data[i].carbohydrates_total_g}</td> 
    <td>${data[i].fat_total_g}</td>
    <td><button onclick="removeItem(${foodArray.length})">Remove Item</button></td>        
    </tr>`, foodArray.length, data[i].calories, data[i].protein_g, data[i].carbohydrates_total_g, data[i].fat_total_g);
    foodArray.push(food);
  }

displayFood();
}

function displayFood() {
  tab =
  `<tr>
    <th>Name</th>
    <th>Calories</th>
    <th>Protein</th>
    <th>Carbohydrates</th>
    <th>Fats</th>
   </tr>`;
   tcalories = 0;
   tprotein = 0;
   tfats = 0;
   tcarbs = 0;

  for (var i = 0; i < foodArray.length; i++) {
    tab += foodArray[i].text;
    tcalories += foodArray[i].calories;
    tprotein += foodArray[i].protein;
    tcarbs += foodArray[i].carbs;
    tfats += foodArray[i].fats;
  }

  tcalories = Math.round(tcalories * 10) / 10; 
  tprotein = Math.round(tprotein * 10) / 10; 
  tcarbs = Math.round(tcarbs * 10) / 10; 
  tfats = Math.round(tfats * 10) / 10; 
  
  document.getElementById("foodTable").innerHTML = tab;
  document.getElementById("calorietotal").innerHTML = "calories: " + tcalories;
  document.getElementById("proteintotal").innerHTML = "protein: " + tprotein;
  document.getElementById("fattotal").innerHTML = "fats: " + tfats;
  document.getElementById("carbtotal").innerHTML = "carbs: " + tcarbs;
  document.getElementById("nutrienttotal").style.display = "flex";
  document.getElementById("note").style.visibility = "visible";
}

function removeItem(num) {
  for (var i = 0; i < foodArray.length; i++) {
    if (foodArray[i].id == num) {
      foodArray.splice(i, 1);
    }
  }
  displayFood();
}
