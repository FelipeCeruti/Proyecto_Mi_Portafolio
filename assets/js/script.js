alert("Esta bien enlazado el archivo")

$(document).ready(function () {


    $("a").click(function () { //evento click, funcion callback
        var gato = this.hash    //hash para obtener la direccion a donde se esta apuntando el hyperenlace 
                                 //colocando alert(gato) cuando pinches el menu saldra los hypervinculos

        $("html, body").animate(    //para el elemento html y etiqueta body vamos a animar con la siguiente propiedada
            {
                scrollTop: $(gato).offset().top -70 //scrolltop cuyo valor va a ser igual a variable gato. El -70 es debido que el nav tapaba el titulo al moverse. 
            },
            800 //800 milisegundos del smoothscroll
        )
    })
})

//Conector de Boostrap para modal y tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
