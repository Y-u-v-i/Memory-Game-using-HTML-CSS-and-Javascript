const cardArray=[
    {
        name:'circle',
        img:'images/Circle.png',
    },
    {
        name:'triangle',
        img:'images/triangle.png'
    },
    {
        name:'rectangle',
        img:'images/rect.png',
    },
    {
        name:'square',
        img:'images/square.png'
    },
    {
        name:'circle',
        img:'images/Circle.png',
    },
    {
        name:'triangle',
        img:'images/triangle.png'
    },
    {
        name:'rectangle',
        img:'images/rect.png',
    },
    {
        name:'square',
        img:'images/square.png'
    },
    {
        name:'circle',
        img:'images/Circle.png',
    },
    {
        name:'triangle',
        img:'images/triangle.png'
    },
    {
        name:'rectangle',
        img:'images/rect.png',
    },
    {
        name:'square',
        img:'images/square.png'
    },
    {
        name:'circle',
        img:'images/Circle.png',
    },
    {
        name:'triangle',
        img:'images/triangle.png'
    },
    {
        name:'rectangle',
        img:'images/rect.png',
    },
    {
        name:'square',
        img:'images/square.png'
    }
]
cardArray.sort(()=> Math.random())
const display=document.querySelector('#grid')
const result=document.querySelector('#result')
let cardschosen=[]
let cardchosen_ids=[]
const cardswon=[]

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        display.appendChild(card)
    }
}
createBoard()
function checkMatch(){
    const cards=document.querySelectorAll('img')
    const option1id=cardchosen_ids[0]
    const option2id=cardchosen_ids[1]
    if(option1id==option2id){
        cards[option1id].setAttribute('src','images/blank.png')
        cards[option2id].setAttribute('src','images/blank.png')
        alert('You have clicked the same image!!')
    }
    if(cardschosen[0]==cardschosen[1]){
        alert('You found a Match!!')
        cards[option1id].setAttribute('src','images/white.png')
        cards[option2id].setAttribute('src','images/white.png')
        cards[option1id].removeEventListener('click',flipcard)
        cards[option2id].removeEventListener('click',flipcard)
        cardswon.push(cardschosen)
    }

    else{
        cards[option1id].setAttribute('src','images/blank.png')
        cards[option2id].setAttribute('src','images/blank.png')
        alert('You have chosen wrong one!!')
    }
    result.textContent=cardswon.length
    cardschosen=[]
    cardchosen_ids=[]
    if(cardswon.length==(cardArray.length/2)){
        result.innerHTML='Congratulations you found them all!!'
    }
}
function flipcard(){
    const card_id=this.getAttribute('data-id')
    cardschosen.push(cardArray[card_id].name)
    cardchosen_ids.push(card_id)
    this.setAttribute('src',cardArray[card_id].img)
    if(cardschosen.length==2){
        setTimeout(checkMatch,500)
    }
}