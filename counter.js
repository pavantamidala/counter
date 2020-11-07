let value = document.querySelector("#value")
let count = 0;
let btn = document.querySelectorAll(".btn")


for( let buttton of btn){
    
    console.log(buttton)
    buttton.addEventListener('click',function(e){
        let styles = e.currentTarget.classList
        if(styles.contains('increase')){
            count++
        }
        else if(styles.contains('decrease')){
            count--
        }
        else{
            count =0;
        }
        value.textContent = count 
    })
}