
function convToPouce() {
    var centi = document.querySelector("#txcenti");
    var pouce = document.querySelector("#txpouce");
    let legit = false
    enter = centi.value.replace(",", '.')
    for (let i = 0; i < enter.length; i++) {
        if (isNaN(parseFloat(enter[i]))&&enter[i]!=".") {
            legit = true
        }
    }
    
    if (legit) {
        pouce.value = "veuillez entrer un nombre"
    } else {
        pouce.value = parseFloat(enter) * 2.54
    }
}

function convToCenti() {
    var centi = document.querySelector("#txcenti");
    var pouce = document.querySelector("#txpouce");
    let legit = false
    enter = pouce.value.replace(",", '.')
    for (let i = 0; i < enter.length; i++) {
        if (isNaN(parseFloat(enter[i]))&&enter[i]!=".") {
            legit = true
        }
    }
    if (legit) {
        centi.value = "veuillez entrer un nombre"
    } else {
        centi.value = parseFloat(enter) / 2.54
    }
}

function convTemp(){
    var entrer = document.querySelector("#temp1");
    var sortie = document.querySelector("#temp2");
    var input = document.querySelector("#input");
    var output = document.querySelector("#output");
    let legit = false
    value = entrer.value
    for (let i = 0; i < value.length; i++) {
        if (isNaN(parseFloat(value[i]))&&value[i]!=".") {
            legit = true
        }
    }
    if (legit) {
        sortie.value = "veuillez entrer un nombre"
    } else {
        if (input.value == output.value) {
            sortie.value = entrer.value
        } else {
            if (input.value == "c") {
                if (output.value == "f") {
                    sortie.value = (parseFloat(entrer.value)*(9/5)) + 32
                } else if (output.value == "k") {
                    sortie.value = (parseFloat(entrer.value)) + 273.15
                }
            } else if (input.value == "f") {
                if (output.value == "c") {
                    sortie.value = (parseFloat(entrer.value) - 32) / (9/5)
                } else if (output.value == "k") {
                    sortie.value = (parseFloat(entrer.value) - 32) / (9/5) + 273.15
                }
            } else if (input.value == "k") {
                if (output.value == "f") {
                    sortie.value = ((parseFloat(entrer.value) -273.15)*(9/5)) + 32
                } else if (output.value == "c") {
                    sortie.value = (parseFloat(entrer.value)) -273.15
                }
            }
        }
    }
}