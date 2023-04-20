
function calcularIMC(){
    let peso, altura, resp, estado;
    peso = parseFloat(document.getElementById("edtPeso").value);
    altura = parseFloat(document.getElementById("edtAltura").value);
    resp = peso/(altura**2)
    if(resp<=18.5){
        estado = " abaixo do peso "
    } 
    else if(resp<=24.9){
        estado = " peso ideal "
    }
    else if(resp<=29.9){
        estado = " levemente acima do peso "
    }
    else if(resp<=29.9){
        estado = " levemente acima do peso "
    } else{
        estado = " preguiça "
    }
    document.getElementById("resp").innerText = estado
}