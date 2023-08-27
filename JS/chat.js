var user_name = prompt("Пожалуйста, представьтесь")
     alert(user_name + ', ПРИВЕТСТВУЕМ ТЕБЯ')
document.getElementById("user_nickname").value = user_name
document.getElementById('hello_user').innerText = user_name
function chat() {
   let us_messege = document.getElementById("user_messege").value
   let nickname = document.getElementById("user_nickname").value

   if (nickname !== "") {
        messege_nickname = nickname + ": " + us_messege
        document.getElementById('body').value = nickname + ": " + us_messege;
        
   }
   else {
        document.getElementById('body').value = user_name + ": " + us_messege;
       messege_nickname = user_name + ": " + us_messege     
   }
        
    document.getElementById("user_messege").value = ' '


}
   //if ("messege1" === " "){
        //  let u_massage1  = document.getElementById("message1").innerText = messege_nickname
          
   //}
    // else (u_massage1 !== " "); {
     //     document.getElementById("message2").innerText = messege_nickname
    //      document.getElementById("message1").value = " "
    // }

    //document.getElementById('body').value = nickname + ": " + us_messege;
     //document.getElementById("user_messege").value = " "
    //document.getElementById("message1").innerText = messege_nickname



// switch(true) {
          //case ('message1' == " "):
                //document.getElementById("message1").innerText = messege_nickname
     
         // break
          
          //case ('message1' !== " "):
               //let message1 = document.getElementById("user_messege").value
                //document.getElementById("message2").innerText = message1
               // document.getElementById("message1").value = " "
         // break
     //}