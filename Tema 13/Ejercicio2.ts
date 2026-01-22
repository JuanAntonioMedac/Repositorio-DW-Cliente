// Calcula el promedio entre dos números
function Ejercicio2():void{
    const a:string=(document.getElementById("ej2num1")as HTMLInputElement).value;
    const b:string=(document.getElementById("ej2num2")as HTMLInputElement).value;
    const html :number= media(Number(a),Number(b));
    try {
        const salida = document.getElementById("outEj2") ;
        if(salida){
            salida.innerHTML=html.toString();

        }
    } catch (error) {
        alert(error);
    }
  
}

// Obtiene el promedio de dos valores
function media(a:number,b:number): number {
    return(a+b)/2
}