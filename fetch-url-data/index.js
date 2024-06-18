
 async function fetchUrlData(){
    const userInputUrl = document.getElementById('userInput').value;
    let response = await fetch (userInputUrl);
    let data = await response.json();
    console.log(response);
    let userDataDiv = document.getElementById('responseData');
    if (response.status == 200) {
        userDataDiv.innerHTML = JSON.stringify(data);
    } else {
        userDataDiv.innerHTML = "Failed to fetch data. Please enter a valid url.";
    }
};
