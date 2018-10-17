document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('myForm').addEventListener('submit', submitForm);

function validateName(){
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;
    

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
        
    }else{
        name.classList.remove('is-invalid');
    }
}

function validateZip(){
    const zip = document.getElementById('zipcode');
    const re = /^(\d){5}-?(\d){3}$/; //This regex is for brazilian zipcodes 
    // the format is xxxxx-xxx the "-" is optional

    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
    }else{
        zip.classList.remove('is-invalid');
    }

}

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid');
    }

}

function validatePhone(){

    const phone = document.getElementById('phone');
    const re = /^(\(0?[0-9]{2}\))\s?([0-9]{4,5})-?([0-9]{4})$/; //This re will accept the format of brazilian numbers
    //(0(the 0 is optional)xx) 9xxxx-(the - is also optional)xxxx // for cellphones

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    }else{
        phone.classList.remove('is-invalid');
    }

}

function submitForm(e){
    const name = document.getElementById('name');
    const zip = document.getElementById('zipcode');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    if(name.classList.contains('is-invalid') || zip.classList.contains('is-invalid') || email.classList.contains('is-invalid') || phone.classList.contains('is-invalid')){
        console.log('check the fields first!');
        e.preventDefault();
    }
    
}
