const countersElemento = document.querySelectorAll(".counter"); 


countersElemento.forEach((countersElemento)=>{
    countersElemento.innerText = "0"; 
    incrementCounter(); 
        function incrementCounter(){
            let currentNum = +countersElemento.innerText; 
            const dataceil = countersElemento.getAttribute("data-ceil"); 
            const increment = dataceil / 15
            currentNum = Math.ceil(currentNum + increment); 
            if(currentNum < dataceil){
                countersElemento.innerText = currentNum
                setTimeout(incrementCounter,50)
            }else{
                countersElemento.innerText = dataceil; 
            }
        }
}); 




// El "+" es utilizado en algunos lenguajes de programación para convertir una variable de tipo string a uno numérico (como int o float). Si se coloca un "+" antes de una variable que recibe dato, se está asegurando de que el valor asignado a la variable será convertido a un tipo numérico antes de ser almacenado. Esto puede ser útil si se espera que el valor asignado a la variable sea un número, pero se recibe como una cadena de caracteres (string) y se necesita realizar operaciones matemáticas con ese valor.

// Este código JavaScript utiliza el método querySelectorAll para seleccionar todos los elementos en el documento con la clase "counter". Luego, utiliza el método forEach para iterar sobre cada elemento seleccionado.

// Dentro de la función de callback de forEach, el código establece el contenido interno (innerText) de cada elemento seleccionado en "0".

// Luego, llama a una función llamada incrementCounter. La función incrementCounter se encarga de aumentar el contenido interno del elemento actual por un valor determinado. La función primero obtiene el valor actual del elemento utilizando innerText, lo convierte a un número utilizando el operador + y lo almacena en una variable llamada "currentNum".

// Siguiente, obtiene el valor del atributo "data-ceil" en el elemento actual, y almacena el valor en una variable llamada "dataceil". Usa el "dataceil" para calcular el incremento del contador actual, el incremento es igual a el dataceil / 15.

// Finalmente, el código aumenta el contador actual, redondeando hacia arriba utilizando el método Math.ceil, y establece el nuevo valor en el elemento usando la propiedad innerText nuevamente
// https://www.youtube.com/watch?v=ePzOFu2xXUQ
//1:41