var activeList = true;

function hiddenList() {
    const button = document.querySelectorAll('button')

    if (activeList) {
        activeList = false;
        const ul = document.getElementById('list').style.display = "none"
        button[0].textContent = "MOSTRAR"

    } else {
        activeList = true;
        const ul = document.getElementById('list').style.display = "block"
        button[0].textContent = "ESCONDER"
    }
}

var activePreparation = true;

function hiddenPreparation() {
    const button = document.querySelectorAll('button')

    if (activePreparation) {
        activePreparation = false;
        const preparation = document.getElementById('preparation').style.display = "none"
        button[1].textContent = "MOSTRAR"

    } else {
        activePreparation = true;
        const preparation = document.getElementById('preparation').style.display = "block"
        button[1].textContent = "ESCONDER"
    }
}

var activeInformation = true;

function hiddenInformation() {
    const button = document.querySelectorAll('button')
    
    if (activeInformation) {
        activeInformation = false;
        const preparation = document.getElementById('information').style.display = "none"
        button[2].textContent = "MOSTRAR"

    } else {
        activeInformation = true;
        const preparation = document.getElementById('information').style.display = "block"
        button[2].textContent = "ESCONDER"
    }
}
