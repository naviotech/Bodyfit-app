//import './sass/style.scss'
const button = document.querySelector("#calcular");
const edad = document.querySelector("#edad");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const resultadoFinal = document.querySelector("#result_value");
const bajar = document.querySelector("#consejo");
const subir = document.querySelector("#consejo2");
const reset = document.querySelector("#restablecer");
let validacionEdad = false;
let validacionAltura = false;
let validacionPeso = false;

const resetFormulario = ()=>{
    edad.value="";
    altura.value= "";
    peso.value ="";
    button.setAttribute("disabled","true");
}
const validarEdad = ()=>{
    
    if(edad.value.length > 0 && Number(edad.value)>=5 && Number(edad.value)<=120){
        validacionEdad = true;
        
    }else{
        validacionEdad = false;
        
    }
    validacionGeneral();
}
const validarAltura = ()=>{
    
    if(altura.value.length > 0 && Number.parseFloat(altura.value)> 50 && Number.parseFloat(altura.value)< 250){
        validacionAltura = true;
        
    }else{
        validacionAltura =false;
        
    }
    validacionGeneral();
}
const validarPeso = ()=>{
    
    if(peso.value.length>0 && Number.parseFloat(peso.value)>=15 && Number.parseFloat(peso.value)<= 200){
        validacionPeso = true;
        
    }else{
        validacionPeso = false;
        
    }
    validacionGeneral();
}
const calculoGeb = (genero, peso, altura, edad)=>{
    let geb;
    if(genero === 1){
        geb = (88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad));
        return geb.toFixed(2);
    }else if(genero === 2){
        geb = (447.593 + (9.247 * peso) + (3.098* altura) - (4.330 * edad));
        return geb.toFixed(2);
    }
}
const calculoGet = (geb)=>{
    const actividad = Number(document.querySelector("#actividad").value);
    switch(actividad){
        case 0:
            return geb * 1.2;
        case 1:
            return geb * 1.375;
        case 2:
            return geb  * 1.55;
        case 3:
            return  geb * 1.725;
        case 4:
            return geb * 1.9;
    }
}
const calculoKcal = (e)=>{
    e.preventDefault();
    const genero = Number(document.querySelector("#genero").value);
    let geb = calculoGeb(Number.parseInt(genero),Number.parseInt(peso.value),Number.parseInt(altura.value),Number.parseInt(edad.value));
    let get = calculoGet(geb).toFixed(0);
    let ganar = Number(get) + 300;
    let perder = Number(get) - 300;
    resultadoFinal.textContent = `${get} Kcal`;
    bajar.textContent= `The calories needed to lose weight are ${perder} Kcal`;
    subir.textContent = `The calories needed to gain weight are ${ganar} Kcal`;
}

const validacionGeneral = ()=>{
    
    if(validacionAltura  && validacionEdad  && validacionPeso ){
        button.removeAttribute("disabled");
        button.addEventListener("click", calculoKcal);
    }else{
        button.setAttribute("disabled","true");
    }
}
reset.addEventListener("click", resetFormulario);
edad.addEventListener("input", validarEdad);
altura.addEventListener("input",validarAltura);
peso.addEventListener("input",validarPeso);
validacionGeneral();
