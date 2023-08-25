var user_name = prompt("Пожалуйста представьтесь")


function chat() {
   let us_messege = document.getElementById("user_messege").value
   let nickname = document.getElementById("user_nickname").value

   if (nickname !== "") {
        messege_nickname = nickname + ": " + us_messege
   }
   else {
       messege_nickname = user_name + ": " + us_messege
   }
    document.getElementById("message1").innerText = messege_nickname
}