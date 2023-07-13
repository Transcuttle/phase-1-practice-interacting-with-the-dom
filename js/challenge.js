const numbers = {};

//Increments the counter once every second
function incrementor(){
    
    id = setInterval(() => {
        let value = document.querySelector('#counter').innerHTML;
        value++;
        document.querySelector('#counter').innerHTML = value;
    }, 1000);
}

//Increments the counter up by clicks
function plusIncrementor(){
    
    document.querySelector('#plus').addEventListener('click', () => {
        let value = document.querySelector('#counter').innerHTML;
        value++;
        document.querySelector('#counter').innerHTML = value;
    })
}

//Increments the counter down by clicks
function minusIncrementor(){

    document.querySelector('#minus').addEventListener('click', () => {
        let value = document.querySelector('#counter').innerHTML;
        value--;
        document.querySelector('#counter').innerHTML = value;
    })
}

//Handles the pause button
function pause(){
    let running = true;
    const button = document.querySelector('#pause')
    button.addEventListener('click', () => {
        enabler(document.querySelector('#plus'))
        enabler(document.querySelector('#minus'))
        enabler(document.querySelector('#heart'))
        if(running){
            clearInterval(id);
            running = false;
            button.textContent = 'resume';
        }else{
            incrementor();
            running = true;
            button.textContent = 'pause';
        }
    })
}

//Disables or enables a button
function enabler(button){
    if(button.disabled){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
}

//Creates a 'like' message, and keeps track of likes
function liker(){
    const button = document.querySelector('#heart')
    const likes = {};
    button.addEventListener('click', () => {
        let number = document.querySelector('#counter').innerHTML;
        let exists = document.querySelector(`#a${number}`);
        if(exists){
            likes[number]++;
            document.querySelector(`#a${number}`).textContent = `${number} has been liked ${likes[number]} times`;
        }else{
            likes[number] = 1;
            let p = document.createElement('p');
            p.setAttribute('id', `a${number}`);
            p.textContent = `${number} has been liked 1 time`;
            document.querySelector('.likes').appendChild(p);
        }
    })
}

//Takes the comment and adds it to the DOM
function commentor(){
    const form = document.querySelector('#comment-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let p = document.createElement('p');
        p.textContent = e.target[0].value;
        document.querySelector('#list').appendChild(p);
    })
}




function init(){
    let id;
    incrementor()
    plusIncrementor()
    minusIncrementor()
    pause()
    liker()
    commentor()
}

document.addEventListener('DOMContentLoaded', init);