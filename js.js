function calcular() {
    const num1Str = document.getElementById("num1").value;
    const num2Str = document.getElementById("num2").value;
    const opera = document.getElementById("opera").value;
    var num1 = parseFloat(num1Str);
    var num2 = parseFloat(num2Str);
    
    let resultado;

    switch (opera) {

        case "None":
            break;

        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        case "%":
            resultado = num1 % num2;
            break;
        case "^":
            resultado = Math.pow(num1, num2);
            break;
        case "sqrt":
            resultado = Math.sqrt(num1);
            break;
        case "log":
            resultado = Math.log(num1);
            break;
        case "exp":
            resultado = Math.exp(num1);
            break;
        default:
            resultado = "Operación no válida";
            break;
    }

    document.getElementById("resultado").innerText = resultado;
}