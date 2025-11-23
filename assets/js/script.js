document.addEventListener("DOMContentLoaded", function () {




   const botonIrArriba = document.getElementById("btn-ir-arriba");




   if (botonIrArriba) {




       botonIrArriba.addEventListener("click", function () {




           window.scrollTo({
               top: 0,
               behavior: "smooth"
           });
       });
   }
});
