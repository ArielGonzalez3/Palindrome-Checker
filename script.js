const btnCheck = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');


function palindromeChecker () {
  text = textInput.value;
  
  const alphanumericOnly = text.toLowerCase().match(/[a-z0-9]/g);
  
  if(text === ''){
    alert("Ingresar un Valor");
  } else if(alphanumericOnly.join('') === alphanumericOnly.reverse().join('')){
    return document.getElementById('result').innerText = `${text} es un palindromo`; 
  } else {
    return document.getElementById('result').innerText = `${text} no es un palindromo`;
  }
  
}

btnCheck.addEventListener('click', palindromeChecker);
