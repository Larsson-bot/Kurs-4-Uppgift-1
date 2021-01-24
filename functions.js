let firstnameval = false;
let lastnameval = false;
let emailval = false;
let phoneval = false;
let adresslineval = false;
let zipcodeval = false;
let cityval = false;

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
 
 

export function checkLengthName(id , min = 2){
    document.getElementById(id).addEventListener('keyup', (e) => {
        e.preventDefault()
        if(e.target.value.length < min) {
            document.getElementById(id + 'Results').innerText = 'Enter a minimum of  ' + min + ' letters in ' + e.target.id.capitalize() + '.' 
          switch(id){
            case 'firstname':
                firstnameval = false
                checkAllValidation()
                break;

            case 'lastname':
                lastnameval = false
                checkAllValidation()
                break;
            
            case 'adressline':
                adresslineval = false
                checkAllValidation()
                break;

            case 'city':
                 cityval = false
                checkAllValidation()
                 break;
          }  
        }
        else {
            document.getElementById(id + 'Results').innerText = ''       
            switch(id){

                case 'firstname': 
                    firstnameval = true
                    checkAllValidation()
                    break;

                case 'lastname':
                    lastnameval = true
                    checkAllValidation()
                    break;
                
                case 'adressline':
                    adresslineval = true
                    checkAllValidation()
                    break;
                
                case 'city':
                    cityval = true
                    checkAllValidation()
                    break;
              }
        }
    })
    }

    export function validateEmail()
    {
            document.getElementById('emailadress').addEventListener('keyup',(e) =>{       
            let re = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
            if(re.test(e.target.value))
            {
                document.getElementById('errorEmail').innerText = ''
                document.getElementById('emailResults').innerText = 'Email Accepted'
                emailval = true
                checkAllValidation()
            }
            else
            {
                document.getElementById('errorEmail').innerText = 'EmailFormat = abc@abc.abc'
                document.getElementById('emailResults').innerText = 'Invalid Emailadress'
                emailval = false
                checkAllValidation()
            }
            
        })  
    }   

export function clearEmail(){
    document.getElementById('emailResults').innerText = ''
}

export function clearInputs(){
    
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].value = '';
    }
    resetInputData()
}

export function containOnlyNumbersForZipcode(id, min = 5){
    document.getElementById(id).addEventListener('keyup', (e) => {
        e.preventDefault()
        let zipcoding = /^\d{5}$/;
        if(zipcoding.test(e.target.value)) {
            document.getElementById(id +'Results').innerText = ''
            zipcodeval = true
            checkAllValidation()
        }
        else {
            document.getElementById(id +'Results').innerText = 'Please enter a ' + min + ' digit ' + e.target.id.capitalize()
            zipcodeval = false
            checkAllValidation() 
        }
    })
}

export function containOnlyNumbersForPhonenumber(id , min = 9, max = 10){
    document.getElementById(id).addEventListener('keyup', (e) => {
        e.preventDefault()
            if(e.target.value.length < min ) {
            document.getElementById(id +'Results').innerText = 'Please enter a Phonenumber between ' + min + ' and ' + max + ' digits!'
            phoneval = false
            checkAllValidation()
        }
        else if(e.target.value.length > max){
            document.getElementById(id +'Results').innerText = 'Please enter a Phonenumber between ' + min + ' and ' + max + ' digits!'
            phoneval = false
            checkAllValidation()
        }
        else {
            document.getElementById(id +'Results').innerText = ''
            phoneval = true
            checkAllValidation()
        }
    })
}




export function checkAllValidation(){

    if(firstnameval == true)
        {
            if(lastnameval == true)
            {
                if(adresslineval == true)
                { 
                    if(cityval == true)
                    {
                        if(emailval == true)
                        {
                            if(zipcodeval == true)
                            {
                                if(phoneval == true)
                                {
                                    document.getElementById('register_btn').disabled = false
                                }
                                else
                                document.getElementById('register_btn').disabled = true
                            }
                           else
                           document.getElementById('register_btn').disabled = true
                        }
                        else
                        document.getElementById('register_btn').disabled = true
                    }
                    else
                    document.getElementById('register_btn').disabled = true
                }
                else
                document.getElementById('register_btn').disabled = true
            }
            else
            document.getElementById('register_btn').disabled = true   
        }     
        else {
            document.getElementById('register_btn').disabled = true
        }
    }


function resetInputData(){
        firstnameval = false;
        lastnameval = false;
        emailval = false;
        phoneval = false;
        adresslineval = false;
        zipcodeval = false;
        cityval = false;
    }