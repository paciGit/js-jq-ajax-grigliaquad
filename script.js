/* Evento click quadrato */
$('.quad').click(
  function variableNum(){

    var element = $(this);
    var num = $('.num', this);
    var numBoolRandom = 'https://flynn.boolean.careers/exercises/api/random/int';

    /* Richiesta Ajax */
    $.ajax({
      url: numBoolRandom,
      method: 'Get',
      success: function(data, state){
        var numRandom = data.response;
        console.log(numRandom);
        // Condizione <=5 o >5
        if (numRandom <= 5) {
          element.css({ "background": "#FFEB3B"});
        } else {
          element.css({ "background": "#8bc34a"});
        }
        num.html(numRandom);
      },

      error: function(richiesta, state, error){
        num.html('ERROR! ' + error);
      },
    });

});

function init() {
  console.log('Test');

}

$(document).ready(init);
