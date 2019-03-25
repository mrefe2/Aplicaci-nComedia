const inicio = document.getElementById("inicio");
const show1 = document.getElementById("show1");
const show2 = document.getElementById("show2");
const show3 = document.getElementById("show3");
const locales = document.getElementById("locales");
const local1 = document.getElementById("local1");
const local2 = document.getElementById("local2");
const local3 = document.getElementById("local3");
const contact = document.getElementById("paginacontacto");
const chat = document.getElementById("paginaChat");
const chat1 = document.getElementById("paginaChat1");
const BotonIn = document.getElementById("logIn");
const BotonOut = document.getElementById("logOut");
var fotoUsuario = "";

//de inicio y contacto  a locales
function toggleContent () {
    contact.style.display = "none";
    inicio.style.display = "none";
 var contentId = document.getElementById("locales");
contentId.style.display == "none" ? contentId.style.display = "block": contentId.style.display = "show";
}

// para entrar a los carteles
function toggleContent1 () {
    inicio.style.display = "none";
 var contentId1 = document.getElementById("show1");
contentId1.style.display == "none" ? contentId1.style.display = "block": contentId1.style.display = "show";
}


function toggleContent2 () {
    inicio.style.display = "none";
 var contentId2 = document.getElementById("show2");
contentId2.style.display == "none" ? contentId2.style.display = "block": contentId2.style.display = "show";
}
function toggleContent3 () {
    inicio.style.display = "none";
 var contentId3 = document.getElementById("show3");
contentId3.style.display == "none" ? contentId3.style.display = "block": contentId3.style.display = "show";
}

//backarrow desde carteles a inicio
function toggleContent4 () {
    show3.style.display = "none";
    show2.style.display = "none";
    show1.style.display = "none";
 var contentId4 = document.getElementById("inicio");
contentId4.style.display == "none" ? contentId4.style.display = "block": contentId4.style.display = "show";
}

//funcion de vuelta al inicio desde el logo
function toggleContent5 () {
    contact.style.display = "none";
    locales.style.display = "none";
 var contentId5 = document.getElementById("inicio");
contentId5.style.display == "none" ? contentId5.style.display = "block": contentId5.style.display = "show";
}

// para entrar a los locales
function toggleContent6 () {
    locales.style.display = "none";
 var contentId6 = document.getElementById("local1");
contentId6.style.display == "none" ? contentId6.style.display = "block": contentId6.style.display = "show";
}
function toggleContent7 () {
    locales.style.display = "none";
 var contentId7 = document.getElementById("local2");
contentId7.style.display == "none" ? contentId7.style.display = "block": contentId7.style.display = "show";
}
function toggleContent8 () {
locales.style.display = "none";
 var contentId8 = document.getElementById("local3");
contentId8.style.display == "none" ? contentId8.style.display = "block": contentId8.style.display = "show";
}

//backarrow de local a locales
function toggleContent9 () {
    local1.style.display = "none";
    local2.style.display = "none";
    local3.style.display = "none";
 var contentId9 = document.getElementById("locales");
contentId9.style.display == "none" ? contentId9.style.display = "block": contentId9.style.display = "show";
}

//de contacto a locales e inicio
function toggleContent10 () {
    locales.style.display = "none";
    inicio.style.display = "none";
    var contentId10 = document.getElementById("paginacontacto");
    contentId10.style.display == "none" ? contentId10.style.display = "block": contentId10.style.display = "show";
}

//De inicio al chat
function toggleContent11 () {
    inicio.style.display = "none";
    var contentId11 = document.getElementById("paginaChat");
    contentId11.style.display == "none" ? contentId11.style.display = "block": contentId11.style.display = "show";
}

//de chat a inicio
function toggleContent12 () {
    chat.style.display = "none";
    var contentId12 = document.getElementById("inicio");
    contentId12.style.display == "none" ? contentId12.style.display = "block": contentId12.style.display = "show";
}

//cambiar el boton de login a logout y viceversa
function toggleContent13 () {
    BotonIn.style.display = "none";
    var contentId13 = document.getElementById("logOut");
    contentId13.style.display == "none" ? contentId13.style.display = "block": contentId13.style.display = "show";
}
function toggleContent14 (){
    BotonOut.style.display = "none";
    var contentId14 = document.getElementById("logIn");
    contentId14.style.display == "none" ? contentId14.style.display = "block": contentId14.style.display = "show";
}

//de local1 a chat1 
function toggleContent15 (){
    local1.style.display = "none";
    var contentId15 = document.getElementById("paginaChat1");
    contentId15.style.display == "none" ? contentId15.style.display = "block": contentId15.style.display = "show";
}
//de chat1 a local1 
function toggleContent16 (){
    chat1.style.display = "none";
    var contentId16 = document.getElementById("local1");
    contentId16.style.display == "none" ? contentId16.style.display = "block": contentId16.style.display = "show";
}




//Metodo que autentifica el usuario para poder ejecutar

function usuario() {
     nombresUsuario = user.displayName;
    var user = document.getElementsByClassName("nombreCliente")
    firebase.auth().onAuthStateChanged(user => {
    const nombres =  Array.from(document.getElementsByClassName("nombreCliente"));
        for (i = 0; i < nombres.length; i++){
        nombres[i].innerHTML = user.displayName
        }       
})}

function firebaseAuth(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}


//Funcion para hacer LogOut:
function firebaseLogOut(){
  firebase.auth().signOut();
}

//chat en si mismo 

function ScrollToTarget()
{
     document.getElementsByClassName("pantallamensajes").scrollIntoView(true);
}

var db = firebase.database();
function enviarMensaje (){
    var mensaje = document.getElementById("message").value;
    db.ref('mensajes').push({
    nombres: nombresUsuario,
    mensaje: mensaje}); 
    document.getElementById("message").value=""
}
function leer (){
 db.ref('mensajes').on('child_added',function(data){  
     var ul = document.getElementById("chat");
     var li = document.createElement("li");
     li.append(`${data.val().nombres}: `);
     li.append(data.val().mensaje);     
     ul.appendChild(li);
    
    });
    var myDiv = document.getElementsByClassName("pantallamensajes");
     window.scrollTo(0, myDiv.innerHeight);
}


function enviarMensaje1 (){
    var mensaje = document.getElementById("message1").value;
    db.ref('mensajes1').push({
    nombres: nombresUsuario,
    mensaje: mensaje});
    document.getElementById("message1").value=""
}
function leer1 (){
 db.ref('mensajes1').on('child_added',function(data){  
     var ul = document.getElementById("chat1");
     var li = document.createElement("li");
     li.append(`${data.val().nombres}: `);
     li.append(data.val().mensaje);     
     ul.appendChild(li);
})
}

window.onload = function () {
    leer();
    leer1();
    usuario();
}










