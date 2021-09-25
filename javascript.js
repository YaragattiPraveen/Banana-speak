// Getting the input and showing the output through this variables
let userInput = document.querySelector('#userInput');
let translateBtn = document.querySelector('#trasnslate-btn');
let showOutput = document.querySelector('#userOutput');

translateBtn.addEventListener('click',() =>{
    var baseURL = `https://api.funtranslations.com/translate/minion.json?text=${userInput.value}`;    
    // To get translated text we use api fetch method 
    fetch(baseURL)
    .then(response => response.json())
    .then(data => {
        var translatedText = data.contents.translated;
        showOutput.innerHTML = translatedText;
    })
    .catch(error => console.log(error.message))
})