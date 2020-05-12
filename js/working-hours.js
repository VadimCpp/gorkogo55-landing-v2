// https://stackoverflow.com/a/800010/1775459
document.addEventListener("DOMContentLoaded", function() {

  //
  // Код отображает "Сейчас открыто",
  // если ТЦ открыт в текущий момент времени
  //
  var element = document.getElementById("text-open");
  if (element) {
    var kaliningradHours = new Date().getUTCHours() + 2;
    var isMallOpened = kaliningradHours >= 10 && kaliningradHours < 18;

    if (isMallOpened) {
      element.classList.remove("d-none");
    }
  }
});