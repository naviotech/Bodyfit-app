//import './sass/style.scss'
const botonCalcular = document.querySelector("#btn-calcular");
const altura = document.querySelector("#height");
const peso = document.querySelector("#weight");
const resultado =  document.querySelector("#result_value");
const consejo = document.querySelector("#consejo");
let respuestaAltura = false;
let respuestaPeso = false;

const validarAltura=()=>{
    if(altura.value.length > 0 && Number.parseFloat(altura.value)>100 && Number.parseFloat(altura.value)< 300){
        respuestaAltura = true;
    }else{
        respuestaAltura =false;
    }
    validarCampos();
}
const validarPeso=()=>{
    if(peso.value.length > 0 && Number.parseFloat(peso.value)>10 && Number.parseFloat(peso.value)< 200){
        respuestaPeso = true;
    }else{
        respuestaPeso =false;
    }
    validarCampos();
}

const calcularImc = (e)=>{
    e.preventDefault();
    let altura2 = Number.parseFloat(altura.value);
    let peso2 = Number.parseFloat(peso.value);
    let imc = parseFloat((peso2 / (altura2/100)**2).toFixed(2));
    resultado.textContent = `${imc}`;
    if (imc < 18.5) {
        consejo.textContent = "Your body mass index indicates that you are below a healthy weight.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        consejo.textContent = "Your BMI suggests you’re a healthy weight.";
    } else if (imc > 24.9 && imc <= 29.9) {
        consejo.textContent = "Your body mass index indicates that you are overweight.";
    } else if (imc > 29.9) {
        consejo.textContent = "Your BMI indicates that you are obese. Consider making lifestyle changes.";
    }
}
const validarCampos = ()=>{
    
    if(respuestaAltura== true && respuestaPeso == true){
        botonCalcular.removeAttribute("disabled");
        botonCalcular.addEventListener("click", calcularImc);
    }else{
        botonCalcular.setAttribute("disabled", "true");
    }
}
altura.addEventListener("input",validarAltura);
peso.addEventListener("input",validarPeso)
validarCampos();