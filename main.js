// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const spanMaximumAttempts = document.querySelector("#maximumAttempts")

let randomNumber = Math.round(Math.random() * 10) // aqui é um número aleatório
let xAttempts = 1 // 1


const maximumAttempts = 5 // 5
spanMaximumAttempts.innerHTML = maximumAttempts


// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)

// funções callback
function handleTryClick(event) {
    event.preventDefault() // não faça o padrão deste evento, não envie o formulário

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        screen2.querySelector("h2").innerText = `Parabéns! O número escondido é o ${randomNumber} e você acertou em ${xAttempts} tentativas!`
        // document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`



    }   else if(xAttempts == maximumAttempts) {
            toggleScreen()
            
            screen2.querySelector("h2").innerText = `Infelizmente acabaram as suas tentativas! O número correto era o ${randomNumber}!`
    




    }   else if(Number(inputNumber.value) < 0) {
            alert("ATENÇÃO: O número digitado NÃO PODE SER MENOR do que 0!")
    }   else if(Number(inputNumber.value) > 10) {
            alert("ATENÇÃO: O número digitado NÃO PODE SER MAIOR do que 10!")
    }   else if(inputNumber.value == "") {
            alert("ATENÇÃO: Não foi informado nenhum número!")
    }   else if(inputNumber.value < randomNumber) {
            alert("DICA: Tente um número MAIOR!")
    }   else if(inputNumber.value > randomNumber) {
            alert("DICA: Tente um número MENOR!")
    }

    inputNumber.value = ""
    xAttempts = xAttempts + 1 // contador
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
        }
}



