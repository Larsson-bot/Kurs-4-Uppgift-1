
export default class User{
    constructor(firstname,lastname,emailadress,phone,adressline,zipcode,city){
        this.firstname = firstname
        this.lastname = lastname
        this.emailadress = emailadress
        this.phone = phone
        this.adressline = adressline
        this.zipcode =zipcode
        this.city = city
        this.id =  uuidv4()
    }
  


    }
    function uuidv4() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );}
