const url ="https://api.api-ninjas.com/v1/nutrition?query=";
let query = "1lb brisket and fries";
let options = {
    headers: {
        'X-Api-Key': 'lA3U1TMXLFbw87x6XxIgDw==NvjEWGnFayAoUnz9'
    }
}
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url, options);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}

getapi(url + query);

function show(data) {
    
}