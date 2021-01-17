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
let emailvali = false


function checkEmail(){
 
    
        let email = `${emailadress.value}`
        let userinfo = users.find(user => user.emailadress === email)
        if(userinfo == null){
            emailvali = true
        }
        else {
            alert('error Email already exists.')
            document.getElementById('emailResults').innerText = 'Email already exists in system. Please use another email.'
            document.getElementById('register_btn').disabled = true
            emailvali = false
        }
}

document.getElementById('delete_btn').addEventListener('click' , (e) =>{
    e.preventDefault()
    var x = document.getElementsByClassName("flip")[1].id;// Behöver åtgärdas
    var y = document.getElementsByClassName("panel")[1].id;// Behöver åtgärdas
    console.log(x)
    console.log(y)
    let res =  x.split("_")
   let l = res.shift() 
   console.log(l)
   console.log(res)
   let item = users.findIndex(user => user.id === res[0])
   delete users[item]
   console.log(users)
   document.getElementById(`flip_${res[0]}`).outerHTML = "";

//    let index = users.map(x => {
//     return x.Id;
//   }).indexOf(item);



})
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

let users = []
document.getElementById('register_btn').addEventListener('click', (e) =>{
    e.preventDefault()
    checkEmail()
    if(emailvali == false){
        console.log('error')
        document.getElementById('register_btn').disabled = true
    }
    else{
        let userdata = new User(`${firstname.value.capitalize()}`,`${lastname.value.capitalize()}`,`${emailadress.value}`,`${phone.value}`,`${adressline.value.capitalize()}`,`${zipcode.value.replace()}`,`${city.value.capitalize()}`)
        console.log(userdata.id)
        users.push(userdata)
        //                 let item = users.find(user => user.firstname === `${firstname.value}`)
        //                 console.log(item.id)
                        document.querySelector('#validatedUsers').innerHTML += `        <div class="flip" id="flip_${userdata.id}" >${userdata.firstname}` + ' ' + `${userdata.lastname}</div>
                        <div class="panel" id="panel_${userdata.id}">
                            <div class="d-flex justify-content-between">
                                <ul id="personalInfo">
                                    <li class="textDisplay" >
                                        <div class="textTitle" >Id:</div>
                                        <div class="ml-5" id="uniqueId">${userdata.id}</div>
                                    </li>
                                    <li class="textDisplay" >
                                        <div class="textTitle" >E-post:</div>
                                        <div class="ml-3" id="email">${userdata.emailadress}</div>
                                    </li>
                                    <li class="textDisplay" >
                                        <div class="textTitle" >Telefon:</div>
                                        <div class="ml-2" id="phoneNumber">${userdata.phone}</div>
                                    </li>
                                    <button id="delete_btn" onclick="deleteUser()"  type="button">Delete</button>
                                </ul>
                                <div id="adressInfo ">
                                    <div>
                                        <div class="textTitle"  id="adressLine">${userdata.adressline}</div>
                                    </div>
                                <div class="d-flex justify-content-between">
                                    <div >
                                        <div class="textTitle" id="zipCode">${userdata.zipcode}</div>
                                    </div>
                                    <div >
                                        <div class="textTitle ml-4" id="cityPanel">${userdata.city}</div>
                                    </div>                     
                                </div>
                            </div>
                        </div>  
                        `
                        // $(function() {$(`#flip-${item.id}`  ).click(function(){
                        //     $(`#panel-${item.id}`).slideToggle("slow");
                        // });
                        // })
                 
                        // document.getElementById("flip").id = `flip-${userdata.id}`
                        // document.getElementById("panel").id = 
    
    
                        for(let i = 0; i < users.length; i++){
                            var x = document.getElementsByClassName("flip")[i].id;
                            var y = document.getElementsByClassName("panel")[i].id;  
                            console.log(y)
                            console.log(x)
    
                        }
    
                 clearInputs() 
                 clearEmail()
                 document.getElementById('register_btn').disabled = true
    
    }

    
        // alert('error Email already exists.')
        // document.getElementById('emailResults').innerText = 'Email already exists in system. Please use another email.'
        // document.getElementById('emailadress').removeEventListener('keyup', (e))
        // document.getElementById('register_btn').disabled = true
    

})




