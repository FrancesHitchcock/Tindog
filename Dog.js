import dogs from './data.js'

class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    getDogHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this

        const badgeImageSource = !hasBeenSwiped ? "" : 
        hasBeenSwiped && hasBeenLiked ? "images/badge-like.png" : 
        "images/badge-nope.png" 

        const badgeAltText = !hasBeenSwiped ? "" : 
        hasBeenSwiped && hasBeenLiked ? "Like badge" : 
        "Nope badge" 
        
        let likeStatusHtml = hasBeenSwiped ? `<img class="like-status-image" src=${badgeImageSource} alt=${badgeAltText}>` : ``

        return `
            <img class="dog-image" src="${avatar}" alt="${name}">
            <div class="like-status">${likeStatusHtml}</div>
            <div class="dog-info-container">
                <div class="dog-name"><h2>${name}, ${age}</h2></div>
                <div class="dog-bio"><h3>${bio}</h3></div>
            </div>`
    }
}

export default Dog