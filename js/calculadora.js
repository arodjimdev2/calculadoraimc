//Inicializamos con window.onload para que espere a que se cargue la página para actuar. Esto no permite ejecutar nada hasta que no se cargue toda la página.
window.onload= iniciar;

function iniciar(){// En esta función llamamos al botón y hacemos un evento click.
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular(){// Esta función se ejecuta cuando hago click en el botón
    let txtPeso = document.getElementById("txtPeso");
    let peso =parseFloat(txtPeso.value);
    let txtAltura = document.getElementById("txtAltura")
    let altura = parseFloat(txtAltura.value);
    let imc = peso/(altura**2);
    let redondeo = Math.round(imc);

    let resultado = document.getElementById("resultadoImc");

    if(redondeo){
        resultado.innerHTML = `<p>El resultado es ${redondeo}</p>`;
        if(redondeo>24&&redondeo<=29){
            resultado.innerHTML = `<p>El resultado es ${redondeo} | Estás gordo y además eres feo</p>`;
        }
        else if(redondeo>30&&redondeo<=36){
            resultado.innerHTML = `<p>El resultado es ${redondeo} | Estás gordo, se te está yendo de las manos</p>`;
        }
        else if(redondeo>36){
            resultado.innerHTML = `<p>El resultado es ${redondeo} | Estamos todos orbitando a tu alrededor</p>`;
        }
        else{
            resultado.innerHTML = `<p>El resultado es ${redondeo}. | Vas bien</p>`;
        }
    }
}





