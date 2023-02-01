let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game__box'),
    score = 0,
    time = 0,
    interval = 0,
    random = rand(1,2);




btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4){
        time = input.value
        input.value = ''
        score = 0;
        clearInterval(interval)
        start()
        let res = document.querySelector('.result')
        if(res){
            res.style.display = 'none'
        }
    }
})

box.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')){
        score++
        event.target.remove()
        createBall()
    }else if(event.target.classList.contains('square')){
        score++
        event.target.remove()
        createBall()
    }
})

function start() {
    interval = setInterval(() => decrease(),1000)
    createBall()
    
}

function decrease() {
    if(time == 0){
        endGame()
    }else{
        let currentTime = --time
        timeOut.innerHTML = currentTime
    }
}

function endGame() {
    box.innerHTML = `<h2 class="result">Вы набрали ${score} очков<h2>`
}

function createBall(){

    colors = ['red','orange','yellow','green'],

    colorsRand = Math.floor(Math.random() * colors.length);

    let ball = document.createElement('div')
    let size = rand(20,60);
    let cor = box.getBoundingClientRect()
    let x = rand(0, cor.width - size)
    let y = rand(0, cor.height - size)
    let random = rand(0,3)
    
    if(random == 1){
        ball.classList.add('square')
    }else{
        ball.classList.add('ball')
    }

    ball.style.width = size + 'px';
    ball.style.height = size + 'px';
    ball.style.left = x + 'px'
    ball.style.top = y + 'px'
    
    if(colorsRand === 0){
        ball.style.background = 'red'
    }else if(colorsRand === 3){
        ball.style.background = 'green'
    }else if(colorsRand === 1){
        ball.style.background = 'orange'
    }else{
        ball.style.background = 'yellow'
    }

    box.append(ball)
}


    



function rand(min,max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

