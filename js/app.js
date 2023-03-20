

let result, userInput;


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
         result = data;
         render();
        },
        (error) => {
         console.log('Cannot find the word', error);
        }
    );    
}

function render() {
    $result.text(result[0].word);
    $partOfSpeech.text(result[0].meanings[0].partOfSpeech);
    $meaning.text(result[0].meanings[0].definitions[0].definition);
    $example.text(result[0].meanings[0].definitions[0].example);
 }