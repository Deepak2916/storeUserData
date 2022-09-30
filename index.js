subBtn.addEventListenerlet subBtn=document.getElementById('btn')
('click',storeData)
function storeData(e){
     e.preventDefault()
let  name=document.getElementById("name").value
let email=document.getElementById("email").value
let obj={"name":name,
"mail":email}
let myObj = JSON.stringify(obj)
localStorage.setItem("myObj",myObj)}