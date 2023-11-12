const generateBtn = document.querySelector('.generate_btn')
const resultPassword = document.querySelector('.result_password')
const rangeField = document.querySelector('.range_field')
const passwordLength = document.querySelector('.password_length span')
const copy = document.querySelector('.copy')
const copyResult = document.querySelector('.copy_result')

let allSymbols = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9]

rangeField.oninput=(()=>{
    passwordLength.innerText = rangeField.value
})


generateBtn.addEventListener('click',()=>{
    let passwordLengthValue = rangeField.value
    let result = ''

    for(let i = 0; i<passwordLengthValue; i++){
        let randomSymbol = Math.floor(Math.random() * allSymbols.length)
        result += `${allSymbols[randomSymbol]}`
    }

   resultPassword.textContent = result
})




copy.onclick=()=>{
    if(resultPassword.innerText == 'Результат будет здесь'){
        copyResult.textContent = `Сгенерируйте пароль для того чтобы скопировать`
        copyResult.style.color = '#9A111A'
    }


   else{
        window.navigator.clipboard
        window.navigator.clipboard.writeText(resultPassword.innerText)
        copyResult.textContent = `Пароль был скопирован в буфер обмена`
        copyResult.style.color = '#000'
   }
}
