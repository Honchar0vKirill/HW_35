let question1 = prompt("У якому році Україна стала незалежною");
alert(question1);
switch (question1) {
    case "1991":
        question1 = 1991;
        alert("Ти справжній українець");
        break;
default:
    alert("Завантижити вірус?");
}
let question2 = window.confirm("Крим Український");
switch (question2){
    case true:
        question2 == true;
        alert("Бандера одобрює");
        break;
    case false:
        question2 == false;
        alert("москаляку на гіляку");
        break;
default: 
    alert("ти не обрав варіант відповіді, будь ласка, зроби це")
} 