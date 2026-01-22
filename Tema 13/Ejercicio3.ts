// Saluda de forma personalizada
function Ejercicio3() {
    (document.getElementById("outEj3") as HTMLElement).innerHTML ="";
    const a:string=(document.getElementById("ej3nombre")as HTMLInputElement).value;
    if (a==="") {
        saludar();
    } else {
        saludar(a);
    }
    
}
// Genera un mensaje de saludo opcional
function saludar(a?:string):void{
    (document.getElementById("outEj3") as HTMLElement).innerHTML +="Hola "+ (a??"invitado");

}