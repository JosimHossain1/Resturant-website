function selector(id){
    const nid = document.querySelector(id)
    return nid
}

const video = document.getElementById('videoPlay')
const image = document.querySelectorAll('.img')


selector('#up').addEventListener('click', function(){
    const countText =  selector('#count').innerText;
    selector('#count').innerHTML = parseInt(countText) + 1
    
})

selector('#down').addEventListener('click', function(){
    const countText =  selector('#count').innerText;
    if(countText < 2){
        selector('#count').innerHTML = 1;
    }else{
        selector('#count').innerHTML = parseInt(countText) -1;
    }
    
})

video.addEventListener('click', function(){
    selector('.popupBox').classList.add('active')
    selector('.whiteBG').classList.add('whiteDown')
    selector('.EmbetVideo').classList.remove('none')
    selector('.outputImg').classList.add('none')
    
})

image.forEach(element => {
    element.addEventListener('click', function(){
        selector('.popupBox').classList.add('active')
        selector('.whiteBG').classList.add('whiteDown')
        const att = this.getAttribute("src")
        selector('.outputImg').setAttribute('src', att)
        selector('.EmbetVideo').classList.add('none')
        selector('.outputImg').classList.remove('none')
       
    })   
});

 function closeBtn(){
    selector('.popupBox').classList.remove('active')
}