let boxes = document.getElementsByClassName("boxes");
const array = Array.from(boxes)
let x = prompt("Enter the name of X player");
let y = prompt("Enter the name of O player");
let score = document.getElementById("score");
let reset = document.getElementById("reset");
let turn = document.getElementById("turn");
let xWin = 0;
let yWin = 0;
let count=0;
let xScore = 0 , yScore =0;

turn.innerText = `Turn of ${x}`;

const xWins = ()=>{
    array.forEach((e,i)=>{
        array[i].classList.remove('color1')
        array[i].classList.remove('color2')
        array[i].innerHTML = "";
    })
    xScore++;
    score.innerHTML = `Score of ${x} is ${xScore}. <br> Score of ${y} is ${yScore}.`;
    alert(`${x} wins`);
}

const yWins = ()=>{
    array.forEach((e,i)=>{
        array[i].classList.remove('color2')
        array[i].classList.remove('color1')
        array[i].innerHTML = "";
    })
    yScore++;
    score.innerHTML = `Score of ${x} is ${xScore}. <br> Score of ${y} is ${yScore}.`;
    alert(`${y} wins`);
}


array.forEach((e,i)=>{
    array[i].addEventListener('click', ()=>{


        
        // X and O logic
        if (count%2==0)
        {
            if(array[i].innerHTML)
            {
            }
            else
            {
                array[i].innerHTML = "X"
                if(!array[i].classList.contains('color1'))
                array[i].classList.add("color1");
                count ++;
                
            }
        }
        else 
        {
            if (array[i].innerHTML)
            {
                
            }
            else
            {
                array[i].innerHTML = "O"  
                if(!array[i].classList.contains('color2'))  
                array[i].classList.add("color2")
                count ++;
            }
        }


        
        
        // Wining Logic
        let win = [array[0].innerHTML+array[1].innerHTML+array[2].innerHTML , array[3].innerHTML+array[4].innerHTML+array[5].innerHTML , array[6].innerHTML+array[7].innerHTML+array[8].innerHTML , array[0].innerHTML+array[3].innerHTML+array[6].innerHTML , array[1].innerHTML+array[4].innerHTML+array[7].innerHTML , array[2].innerHTML+array[5].innerHTML+array[8].innerHTML, array[0].innerHTML+array[4].innerHTML+array[8].innerHTML, array[2].innerHTML+array[4].innerHTML+array[6].innerHTML]


        win.forEach((element, index)=>{
        
        if (win[index]==="XXX")
        {
            xWins();
        }
        else if (win[index] === "OOO")
        {
            yWins();
        }
        })

       
        
        //Turn logic
        if (count%2==0)
        {
            turn.innerText = `Turn of ${x}`;
        }
        else
        {
            
            turn.innerText = `Turn of ${y}`;
        }

    })
})