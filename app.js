function register(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

auth.createUserWithEmailAndPassword(email,password)
.then(user=>{

db.collection("users").doc(user.user.uid).set({
name:name,
phone:phone,
email:email,
balance:0,
role:"user"
});

alert("تم إنشاء الحساب");

});

}

function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

auth.signInWithEmailAndPassword(email,password)
.then(()=>{

window.location="dashboard.html";

});

}

auth.onAuthStateChanged(user=>{

if(user){

db.collection("users").doc(user.uid).get().then(doc=>{

if(document.getElementById("balance")){

document.getElementById("balance").innerText=
doc.data().balance+" LYD";

}

});

}

});

function payment(){

let amount=document.getElementById("amount").value;

let trx=document.getElementById("trx").value;

auth.onAuthStateChanged(user=>{

db.collection("payments").add({

uid:user.uid,

amount:amount,

trx:trx,

status:"pending"

});

alert("تم إرسال الطلب");

});

}

function addBalance(){

let uid=document.getElementById("uid").value;

let amount=parseFloat(document.getElementById("addbalance").value);

db.collection("users").doc(uid).get().then(doc=>{

let newBalance=doc.data().balance+amount;

db.collection("users").doc(uid).update({

balance:newBalance

});

alert("تم إضافة الرصيد");

});

}
