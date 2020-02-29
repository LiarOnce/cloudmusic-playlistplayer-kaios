const volume = navigator.volumeManager;
const ap = aplayers;

//Taken from KaiOS Tech docs :)
function handleKeyDown(evt) {
  switch (evt.key) {
    case 'SoftLeft':
      volume.requestShow();
      break;
    // case 'SoftRight':
    //   volume.requestUp();
    //   break;
    case '1':
      ap.skipBack();
      break;
    case '3':
      ap.skipForward();
      break;
    case '5':
      ap.toggle();
      break;

      /* case 'Call':
        var audio = document.getElementById("crash");
        audio.currentTime = 0;
        audio.play();
        break; */

      /* case '2':
        ap.skipForward();
        break; */

      /* 
        case '4':
          var audio = document.getElementById("bassdrum2");
          audio.currentTime = 0;
          audio.play();
          break; */

      /* case '6':
        var audio = document.getElementById("hhshort");
        audio.currentTime = 0;
        audio.play();
        break;
      case '7':
        var audio = document.getElementById("bass");
        audio.currentTime = 0;
        audio.play();
        break;
      case '8':
        var audio = document.getElementById("snare1");
        audio.currentTime = 0;
        audio.play();
        break;
      case '9':
        var audio = document.getElementById("hhclosed");
        audio.currentTime = 0;
        audio.play();
        break;
      case '0':
        var audio = document.getElementById("claves");
        audio.currentTime = 0;
        audio.play();
        break;
      case '*':
        var audio = document.getElementById("bassdrum3");
        audio.currentTime = 0;
        audio.play();
        break;
      case '#':
        var audio = document.getElementById("cabasa");
        audio.currentTime = 0;
        audio.play();
        break; */
  }
};

document.addEventListener('keydown', handleKeyDown);

/* Developed By: Akshay Kumar Gupta*/
/* Website: http://www.funspellz.com*/
/* Updated on 17 - July - 2015 */
/*
$(document).ready(function () {


  $(".crash").on("vmousedown", function () {
    var audio = document.getElementById("crash");
    audio.currentTime = 0;
    audio.play();
  });

  $(".hhlong").on("vmousedown", function () {
    var audio = document.getElementById("hhlong");
    audio.currentTime = 0;
    audio.play();
  });

  $(".hhshort").on("vmousedown", function () {
    var audio = document.getElementById("hhshort");
    audio.currentTime = 0;
    audio.play();
  });

  $(".hhclosed").on("vmousedown", function () {
    var audio = document.getElementById("hhclosed");
    audio.currentTime = 0;
    audio.play();
  });

  $(".snare1").on("vmousedown", function () {
    var audio = document.getElementById("snare1");
    audio.currentTime = 0;
    audio.play();
  });

  $(".snare2").on("vmousedown", function () {
    var audio = document.getElementById("snare2");
    audio.currentTime = 0;
    audio.play();
  });

  $(".tomhi").on("vmousedown", function () {
    var audio = document.getElementById("tomhi");
    audio.currentTime = 0;
    audio.play();
  });

  $(".tommid").on("vmousedown", function () {
    var audio = document.getElementById("tommid");
    audio.currentTime = 0;
    audio.play();
  });

  $(".tomlow").on("vmousedown", function () {
    var audio = document.getElementById("tomlow");
    audio.currentTime = 0;
    audio.play();
  });

  $(".bass").on("vmousedown", function () {
    var audio = document.getElementById("bass");
    audio.currentTime = 0;
    audio.play();
  });

  $(".rimshot").on("vmousedown", function () {
    var audio = document.getElementById("rimshot");
    audio.currentTime = 0;
    audio.play();
  });

  $(".cowbell").on("vmousedown", function () {
    var audio = document.getElementById("cowbell");
    audio.currentTime = 0;
    audio.play();
  });

  $(".clap").on("vmousedown", function () {
    var audio = document.getElementById("clap");
    audio.currentTime = 0;
    audio.play();
  });
  $(".bassdrum2").on("vmousedown", function () {
    var audio = document.getElementById("bassdrum2");
    audio.currentTime = 0;
    audio.play();
  });
  $(".cabasa").on("vmousedown", function () {
    var audio = document.getElementById("cabasa");
    audio.currentTime = 0;
    audio.play();
  });
  $(".claves").on("vmousedown", function () {
    var audio = document.getElementById("claves");
    audio.currentTime = 0;
    audio.play();
  });
  $(".claves").on("vmousedown", function () {
    var audio = document.getElementById("bassdrum3");
    audio.currentTime = 0;
    audio.play();
  });
  $(".crash02").on("vmousedown", function () {
    var audio = document.getElementById("crash02");
    audio.currentTime = 0;
    audio.play();
  });



}); */