

var countinterval;


    function startcounter(){


        
        var number=parseInt(document.getElementById('number').value);
        
    
        if(isNaN(number)){
            alert("Please enter No")
            clearInterval(countinterval);
            return;
        }
        if(number<1 || number>9){
            alert("Please enter no between 0 to 9 only");
            clearInterval(countinterval);
            return;
        }
        var currno=document.querySelector('.result .current');
        var nextno=document.querySelector('.result .next');
        var count=0;


        resetno(currno,nextno);

        clearInterval(countinterval);
        

        countinterval=setInterval(function(){
        if(count===number){
            clearInterval(countinterval);
            alert("the counter is stopped");
            
            return;
        }
        increasecount(currno,nextno);
        count++;
        
    },1000);
    }
    
    function resetno(currno,nextno){
        currno.innerText=0;
        nextno.innerText=1;
    }
    
    function increasecount(currno,nextno){
        nextno.classList.add('animate');
        setTimeout(function(){
            currno.innerText=nextno.innerText;
    
            nextno.classList.remove('animate');
            nextno.innerText=parseInt(nextno.innerText)+1;
        },500);
    
    }
        





