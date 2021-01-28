import User from "./models/User.js";
import { validateEmail,containOnlyNumbersForZipcode,checkLengthName,clearInputs,containOnlyNumbersForPhonenumber,checkAllValidation,clearEmail} from "./functions.js";
checkLengthName('firstname')
checkLengthName('lastname')
validateEmail()
checkLengthName('adressline' , 3)
containOnlyNumbersForZipcode('zipcode')
containOnlyNumbersForPhonenumber('phone')
checkLengthName('city' , 3 )
checkAllValidation()

document.getElementById('emailadress').addEventListener('keyup',() =>{   
    let email = `${emailadress.value}`.toLowerCase()
    let userinfo =  users.find(user => user.emailadress === email)
    if(userinfo == null){
        return true
    }
    else {
        document.getElementById('emailResults').innerText = 'Email already exists in system. Please use another email.'
        document.getElementById('register_btn').disabled = true
        return false
    }
})

//Funktion som ser till så att varje användare har en unik mejladress. Alla emails omvandlas till lowercase nu för att förhindra återupprepande värden. 



// document.getElementById('delete_btn').addEventListener('click' , (e) =>{
//     e.preventDefault()
//     var x = document.getElementsByClassName("flip")[1].id;// Behöver åtgärdas (Ej dynamisk)
//     var y = document.getElementsByClassName("panel")[1].id;// Behöver åtgärdas (Ej dynamisk)
//     console.log(x)
//     console.log(y)
//     let res =  x.split("_")
//    let l = res.shift() 
//    console.log(l)
//    console.log(res)
//    let item = users.findIndex(user => user.id === res[0])
//    delete users[item]
//    console.log(users)
//    document.getElementById(`flip_${res[0]}`).outerHTML = "";
// })

//Detta är en ej dynamisk "delete" funktion som skulle finnas direkt i index.html under registerknappen. 
//Den letar upp användaren i arrayen med hjälp av id och tar sedan bort användaren både ur arrayen och deb visuella listan.


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

let users = []
document.getElementById('register_btn').addEventListener('click', (e) =>{
    e.preventDefault()
        let userdata = new User(`${firstname.value.capitalize()}`,`${lastname.value.capitalize()}`,`${emailadress.value}`.toLowerCase(),`${phone.value}`,`${adressline.value.capitalize()}`,`${zipcode.value}`,`${city.value.capitalize()}`)
        users.push(userdata)
            document.querySelector('#validatedUsers').innerHTML += `    <div class="flip textTitle" id="flip_${userdata.id}" >${userdata.firstname}` + ' ' + `${userdata.lastname}</div>
            <div class="panel" id="panel_${userdata.id}">
                <div class="d-flex justify-content-between">
                    <ul id="personalInfo">
                        <li class="textDisplay" >
                            <div class="textTitle" >Id:</div>
                            <div class="ml-5" >${userdata.id}</div>
                        </li>
                        <li class="textDisplay" >
                            <div class="textTitle" >E-post:</div>
                            <div class="ml-3" >${userdata.emailadress}</div>
                        </li>
                        <li class="textDisplay" >
                            <div class="textTitle" >Telefon:</div>
                            <div class="ml-2" >${userdata.phone}</div>
                        </li> 
                    </ul>
                    <div id="adressInfo ">
                        <div>
                            <div >${userdata.adressline}</div>
                        </div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <div >${userdata.zipcode}</div>
                        </div>
                        <div >
                            <div class="ml-4" >${userdata.city}</div>
                        </div>                     
                    </div>
                </div>      
            </div>`   
            
            // <button id="delete_btn" class="delete" type="button">Delete</button> 
            //Denna knapp använder sig av JQuery för att ta bort element men jag lyckades aldrig få den att ta bort hela objektet utan den tog bara bort själva PanelDelen förutom om ja la den utanför så att den syntes hela tiden. 
            //Knappen skulle skapas dynamiskt tillsammmans med resten av objektet.
                
            clearInputs() 
            clearEmail()
            checkAllValidation()
})




