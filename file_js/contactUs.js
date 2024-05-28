document.getElementById('form-container').addEventListener('submit',function(event){
    event.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phoneNumber = document.getElementById('tel-num').value
    const female = document.getElementById('female').checked
    const male = document.getElementById('male').checked
    const emailCheckBox = document.getElementById('emailCheckBox').checked
    const phoneCheckBox =  document.getElementById('phoneCheckBox').checked
    const message = document.getElementById('message').value

    var validateName = 0;
    for(let i = 0;i<name.length;i++){
        if(name[i] == ' ' && ((name[i+1] >='A' && name[i+1]<='Z') || (name[i+1]>='a' && name[i+1]<='z'))){
            validateName = 1;
            break;
        }
    }
    if(validateName == 0){
        alert("Name must be 2 word");
        return;
    }
    if (email.endsWith('@gmail.com')== false){
        alert("Email must ends with @gmail.com");
        return;
    }
    if(phoneNumber.length != 16){
        alert("Phone number must be 16 characters")
        return;
    }
    var digit_count = 0;
    var space_count = 0;
    for(let i = 0 ;i<phoneNumber.length;i++){
        if(phoneNumber[i]>='0' && phoneNumber[i]<='9'){
            digit_count++;
        }
        else if(phoneNumber[i] == ' '){
            space_count++;
        }
    }
    if(digit_count != 12){
        alert("Phone number must be 12 digit");
        return;
    }
    else if(space_count != 3){
        alert("There must be 3 space");
        return;
    }
    if(!male && !female){
        alert("Choose One of the Gender");
        return;
    }
    if(!phoneCheckBox && !emailCheckBox){
        alert("Must pick at least 1 preferred method");
        return;
    }
    if(!message){
        alert("Message can't be empty");
        return;
    }
    else{
        alert("Thank you");
        return
    }
});