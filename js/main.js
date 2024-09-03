const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const ListaCompras = document.getElementById("tablaListaCompras")
const cuerpoTabla = tablaListaCompras.getElementByTagName("tbody").item(0)
const contadorProductos = 



//Bandera, al ser tru permite agregar datos a la tabla
let isValid = true;
let contador = 0;
let costoTotal = 0;
let totalEnProductos = 0;




function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    }//length==0

    if(isNaN(txtNumber.value)){
        return false;
    }//isNaN

    if(Number(txtNumber.value)<=0){
        return false;
    }//mayor que 0

    return true;
}//validarCantidad

function getPrecio(){
return Math.round((Math.random()*10000))/100;}


btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
        txtNombre.style.border="";
        txtNumber.style.border="";
        alertValidacionesTexto.innerHTML="";
        alertValidaciones.style.display="none";
        isValid = false;


//Validación del nombre del producto

    if(txtNombre.value.length<3){
        txtNombre.style.border="solid red medium";
            alertValidacionesTexto.innerHTML="El <strong>nombre</strong> no es correcto.<br/>";
            alertValidaciones.style.display="block";
            isValid = false;
        //return false;
    }// if length<3

//Validación de la cantidad

    if(! validarCantidad()){
        txtNumber.style.border="solid red medium";
            alertValidacionesTexto.innerHTML+="La <strong>aantidad</strong> no es correcta.<br/>";
            alertValidaciones.style.display="block";
            isValid = false;
    }//! validarCantidad

    if(is Valid){
contador++;
precio = getPrecio();
let row = `<tr>
<td>${contador}</td>
<td>${txtNombre.value}</td>
<td>${txtNumber.value}</td>
<td>${precio}</td>




}</tr>
`

    



}) //btnAgregar.addEventListener


txtNombre.addEventListener("blur",function(event){
    txtNombre.value = txtNombre.value.trim();
}); //txtNombre.addEventListener 

txtNumber.addEventListener("blur",function(event){
    txtNumber.value = txtNumber.value.trim();
}); //txtNumber.addEventListener

