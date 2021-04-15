// Button Actions
// We can use '$' with variables when dealing with the 'DOM' 
const $list = document.querySelectorAll('ul li');
$list.forEach((btn)=>{
    btn.addEventListener('mousedown',function(event){
        //event.preventDefault; in case we have button inside html
        const value = btn.innerText.trim();
        const $result = document.querySelector('.result');
        //$result.innerText = value;
        const resultText = $result.innerText.trim();
        // clear values
        if(value.toLowerCase() == 'c'){
        $result.innerText = '';
            return true;
        }
        // Back button
        if(value.toLowerCase() == 'back'){
            $result.innerText = resultText.substring(0,resultText.length - 1);
            return true;    
        }
        // Remove zero
        if(resultText == '0' || resultText == 'Infinity' || resultText == 'undefined'){
            $result.innerText = '';
        }
        // Appending or adding values
        $result.append(value);
        // Equal value using eval function
        if(value == '='){
            let sum = eval(resultText);
            $result.innerText = sum;
            return true;
        }
    })
})
