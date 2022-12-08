let solde = document.getElementById("solde");
let fond= document.getElementById("fond");
let btn1 = document.getElementById("btn1");
let total = document.getElementById("soldeFinal");
let select = document.getElementById("select");
let historique = document.getElementById("ope");
let soldeFinal = parseInt(solde.value);


btn1.addEventListener("click", () =>{

    if(fond.value == ""){
        alert("Veuillez enter un montant");   
    }
       
    else if(select.value == 0){
        soldeFinal = soldeFinal + parseInt(fond.value);
        total.innerHTML = soldeFinal + " €";
        
        let operation = document.createElement("p");
        operation.innerHTML = "+" + fond.value;
        historique.appendChild(operation);
   }
    else{
        soldeFinal = soldeFinal - parseInt(fond.value);
        total.innerHTML = soldeFinal + " €";
        
        let operation = document.createElement("p");
        operation.innerHTML = "-" + fond.value;
        historique.appendChild(operation);
        
   }


    if(soldeFinal > 0 ){
        total.classList.add("green");
        total.classList.remove("red");
   } 
    else{
        total.classList.add("red");
        total.classList.remove("green");
   }
   localStorage.setItem("soldeF", soldeFinal);
})
document.getElementById("soldeFinal").innerHTML = localStorage.getItem("soldeF");