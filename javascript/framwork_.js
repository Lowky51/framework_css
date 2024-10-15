function windows_alert() {
    window.alert("ALERTE");
}

function button_print() {
    window.print()
}

var print_pdf = {
    "printArea": "%printer%",
    "printBackground": true,
    "printPages": {
      "Range": "all"
    }
  };
   
  // Ajouter les paramètres d'impression au PDF
  app.addEventListener("pageshow", function() {
    app.print(print_pdf);
  });

