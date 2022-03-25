var xo=document.querySelectorAll('td')
function changexo(){
    if(this.textContent===''){
        this.textContent ='X'
    }
    else if(this.textContent==='X'){
        this.textContent='O'
    }
    else{
        this.textContent=''
    }
}
for (let index = 0; index < xo.length; index++) {
    xo[index].addEventListener('click',changexo)
    
}