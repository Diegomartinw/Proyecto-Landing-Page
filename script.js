//document.querySelector("#login_btn").setAttribute("onclick", "validacion()", "suscribirse()");
let user = document.querySelector("#username");
let pass = document.querySelector("#password");
let passtwo = document.querySelector("#cuenta");
let pais = document.querySelector("#pais");
let mens = document.querySelector("#mensaje");



//fetch("usuarios.csv")
  //  .then(function (res) {
    //    return (res.text());

    //})

    //.then(function (data) {
      //  cargarUsuarios(data);
    //}


    //)
    //let usuarios_registrados = [];
    //function cargarUsuarios(data){
      //  let usuarios = data.split(/\r?\n|\r/);
        //    for (let i = 0; i < usuarios.length; i++) {
          //  let fila_usuario = usuarios[i].split(',');
            //usuarios_registrados[i] = {nombre: fila_usuario[0],password: fila_usuario[1]};
            
            
        //}
        //console.log(usuarios_registrados);
    
    //}

    
     
    function suscribirse() {
       
      let dato = pass.value;
       var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

       
           if (dato.match(validRegex)) {

            return;
               
           } else {

               alert("Mail incorrecto!");

               

           }

       }
  


function validacion() {
    mens.className = "rojo";

    if (user.value!=="" && pass.value!=="" && pais.value!=="" && passtwo.value==="42") {

      mens.value = "GRACIAS POR SUSCRIBIRTE";
      console.log(mens);
      return;}

    if (user.value.trim() === "") {
        mens.value = "FALTA COMPLETAR NOMBRE";
        user.value = "";
        user.focus();
        return;

    }

    user.value = user.value.trim();

    if (pass.value.trim() === "") {
        mens.value = "FALTA EMAIL";
        pass.value = "";
        pass.focus();
        return;
    }

    if (pais.value.trim() === "") {
      mens.value = "FALTA PAÍS";
      pais.value = "";
      pais.focus();
      return;
  }

   
    if (passtwo.value.trim() === "") {
        mens.value = "FALTA RESULTADO";
        passtwo.value = "";
        passtwo.focus();
        return;
    }

    if (passtwo.value !== "42") {
        mens.value = "RESULTADO INCORRECTO";
        passtwo.value = "";
        passtwo.focus();
        return;
    }

    

    }

   
    



   
    //user.focus();
    //user.value="";
    //pass.value="";
    //return;}

    //let encontroUser;

    //for (let i = 0; i < usuarios_registrados.length; i++) {
      //  if (usuarios_registrados[i].nombre !== user.value || usuarios_registrados[i].password !== pass.value) {
        //    encontroUser = false;
        //} else {
          //  encontroUser = true;
            //break;
        

        

    

  //  if (encontroUser === false) {

    //    mens.value = "USUARIO INEXISTENTE";
      //  user.focus();
        //user.value = "";
        //pass.value = "";
        //return;
    //}

    //mens.className = "verde";

    //mens.value = "BIENVENIDA " + user.value.toUpperCase() + "....";



//}
