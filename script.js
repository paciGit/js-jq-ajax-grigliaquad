// Inserisco i quadri con un ciclo
for (var i = 0; i < 36; i++) {
  // Clone
  var quad = $("#template .quad").clone();
  $(".container").append(quad);
}

// Ad ogni click parte una richiesta Ajax
$(".quad").one("click", function () {
  var clicked = $(this);
  var numBoolRandom = 'https://flynn.boolean.careers/exercises/api/random/int';

  // Richiesta Ajax
  $.ajax({
    url : numBoolRandom,
    method: "Get",
    success: function (data, state) {
      var numRandom = data.response;
      console.log(numRandom);

      // Condizione <=5 o >5
      if (numRandom <= 5) {
        $(clicked).addClass("yellow");
        $(clicked).text(numRandom);
      } else if (numRandom > 5) {
        $(clicked).addClass("green");
        $(clicked).text(numRandom);
      }
    },
    error: function (richiesta, state, error) {
      alert("ERROR! " + error);
    }
  });
});

function init() {
  console.log('Test');

}

$(document).ready(init);
