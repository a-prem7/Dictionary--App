

let solution, userInput;


const $result = $('#result');
const $partOfSpeech = $('#partofspeech');
const $meaning= $('#meaning');
const $example = $('#example');
const $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
     
    userInput = $input.val();
     
    $.ajax({ url:"https://api.dictionaryapi.dev/api/v2/entries/en/"+userInput
  }).then(
        (data) => {
         weatherData = data;
         render();
        },
        (error) => {
         console.log('Cannot find the word', error);
        }
    );    
}

function render() {
    $location.text(weatherData.name);
    $temp.text(weatherData.main.temp_max);
    $feel.text(weatherData.main.feels_like);
    $weather.text(weatherData.weather[0].description);
 }