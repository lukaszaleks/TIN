
const zad2 = () => {
        
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;
    const operacja = document.querySelector('#operacja').value;

    if(number1 && number2){
        
        if(number2 === '0' && operacja === "dzielenie"){
            window.alert('Prubójesz dzielić przez 0!')
            return;
        }
        
        let wynik = 0;
        number1 = new Number(number1)
        number2 = new Number(number2)

        switch(operacja){
            case 'suma':
                wynik = number1+number2;
                break;
            case 'odejmowanie':
                wynik = number1-number2;
                break;
            case 'mnozenie':
                wynik = number1*number2;
                break;
            case 'dzielenie':
                wynik = number1/number2;
                break;
        }
    
        document.getElementById('wynik').innerHTML = wynik;
    }
}
        
    
const button = document.querySelector('#dane button');
button.addEventListener('click', () => zad2())
