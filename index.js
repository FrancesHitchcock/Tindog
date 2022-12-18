import dogs from './data.js'
import Dog from './Dog.js'

let dogIndex = 0

let buttonsActive = true

const likedDogsArray = []

document.getElementById("like-button").addEventListener('click', likeDog)
document.getElementById("nope-button").addEventListener('click', rejectDog)


function likeDog(){
    if(buttonsActive){
        buttonsActive = false
        currentDog.hasBeenLiked = true
        currentDog.hasBeenSwiped = true
        likedDogsArray.push(currentDog.name)
        renderDog()
        setTimeout(() => {
            getNextDog()
            buttonsActive = true
        }, 1500)
    }
}

function rejectDog(){
    if(buttonsActive){
        buttonsActive = false
        currentDog.hasBeenSwiped = true
        renderDog()
        setTimeout(() => {
            getNextDog()
            buttonsActive = true
        }, 1500)
    }
}

function endSession(){
    let likedDogsList = ""

    for(let i = 0; i < likedDogsArray.length; i++){
        if(i === likedDogsArray.length - 1){
            likedDogsList += `${likedDogsArray[i]}`
        }
        else if(i === likedDogsArray.length - 2){
            likedDogsList += `${likedDogsArray[i]} and `
        } 
        else{
            likedDogsList += `${likedDogsArray[i]}, `
        }
    }

    const endMessage = likedDogsArray.length > 0 ? 
        `Today you liked <span class="liked-dogs">${likedDogsList}</span>.` : 
        `We are sorry that none of our dogs took your fancy!`

    const endSessionHtml = `
        <div class="end-message-container">
            <h4>Thank you for visiting Tindog. ${endMessage}</h4>
        <div>`

    document.getElementById("wrapper").innerHTML = endSessionHtml
}

function getNextDog(){
    dogIndex++

    if(dogIndex < dogs.length){
        currentDog = new Dog(dogs[dogIndex])
        renderDog()
    }
    else{
        endSession()
    }
}

function renderDog(){
    document.getElementById("dog-container").innerHTML = currentDog.getDogHtml()
}

let currentDog = new Dog(dogs[dogIndex])

renderDog()