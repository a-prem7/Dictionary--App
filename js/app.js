

let result, userInput;

const $result = $('#result');
const $phonetics = $('#phonetics')
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
         render()
         $('form').trigger("reset");
         
        },
        (error) => {
        $('.container').append(`<h3 class="error"><strong>Couldn't find the word. Please check the word and try again</strong></h3>`); 
        $('form').trigger("reset");
  });    
}
function render() {
    $result.text(result[0].word);
    $phonetics.text(result[0].phonetic)
    $partOfSpeech.text(result[0].meanings[0].partOfSpeech);
    $meaning.text(result[0].meanings[0].definitions[0].definition);
    $example.text(result[0].meanings[0].definitions[0].example || "");  
 }


 