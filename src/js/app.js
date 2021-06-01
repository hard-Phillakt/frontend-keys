global.jQuery = require("jquery");
const $ = jQuery;

// require('bootstrap');

$(document).ready(function () {
  //  Для формы "Создание заявки"
  var classFiles = $(".keys-translr__box-form_files");
  var obj;
  $("#keys-translr__box-form_files").on("change", function (e) {
    $(classFiles).eq(0).children().remove();
    obj = Array.from(e.target.files);
    for (var key in obj) {
      $(classFiles).append(`<li>${obj[key].name}</li>`);
    }
  });
  //  Для формы "Создание заявки" end
});

