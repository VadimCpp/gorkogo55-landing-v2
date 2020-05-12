// https://stackoverflow.com/a/800010/1775459
document.addEventListener("DOMContentLoaded", function() {

  //
  // Код отображает "Сейчас открыто",
  // если ТЦ открыт в текущий момент времени
  //

  //
  // С 12 МАЯ 2020 Г. ИЗМЕНЕН РЕЖИМ РАБОТЫ ТОРГОВОГО ЦЕНТРА:
  // ПОНЕДЕЛЬНИК – ПЯТНИЦА С 10-00 ДО 18-00
  // СУББОТА, ВОСКРЕСЕНЬЕ — ВЫХОДНЫЕ ДНИ
  //
  let element = document.getElementById("text-open");
  if (element) {
    const SUNDAY = 0;
    const SATURDAY = 6;

    let now = new Date();
    let kaliningradHours = now.getUTCHours() + 2;

    let isMallOpened = true;    
    if (now.getDay() === SUNDAY || now.getDay() === SATURDAY) {
      isMallOpened = false;
    } else if (kaliningradHours < 10 || kaliningradHours >= 18) {
      isMallOpened = false;
    }

    if (isMallOpened) {
      element.classList.remove("d-none");
    }
  }
});