
var getUrlParameter = function getUrlParameter(sParam) {
var sPageURL = window.location.search.substring(1),
 sURLVariables = sPageURL.split('&'),
 sParameterName,
 i;

for (i = 0; i < sURLVariables.length; i++) {
 sParameterName = sURLVariables[i].split('=');

 if (sParameterName[0] === sParam) {
     return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
 }
}
return false;
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var getUrlParameter = function getUrlParameter(sParam) {
var sPageURL = window.location.search.substring(1),
 sURLVariables = sPageURL.split('&'),
 sParameterName,
 i;

for (i = 0; i < sURLVariables.length; i++) {
 sParameterName = sURLVariables[i].split('=');

 if (sParameterName[0] === sParam) {
     return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
 }
}
return false;
};
const firebaseConfig = {
  apiKey: "AIzaSyC4mFlIik7OqrJlOsHvrZyito-WhF4tPtk",
  authDomain: "karing-a8b53.firebaseapp.com",
  projectId: "karing-a8b53",
  storageBucket: "karing-a8b53.appspot.com",
  messagingSenderId: "284699594166",
  appId: "1:284699594166:web:fcaaf6bdad63e5b6478517",
  measurementId: "G-RJVQ3K3R44",
  databaseURL: "https://karing-a8b53-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();
const aricleRef = ref(db, 'db/' +'pt');


let id = getUrlParameter("id")
// const aricleRef2 = ref(db, 'db/'+'pt');
// console.log(aricleRef2);


// let x = ['dt', 'pt'];
// for (let i=0;i<2;i++){
//     let id = x[i];
//     const aricleRef2 = ref(db, 'db/'+ id);
//     onValue(aricleRef2, (snapshot) => {
//         const articles = snapshot.val();
//         for (var article in articles) {
//         $("#article").append(articles[article].name + "<br>" + articles[article].dob)
//         if(articles[article].image){
//             $("#article").append("<br><img src = '"+articles[article].image+"'>")
//         }
//         $("#article").append("<a style ='color:white;text-decoration:none' href='dt.html?id="+article+"'>"+"<div class = 'card-body'>"+"<div class = 'btn btn-primary'>"+ "View Profile" +"<a>")
//         $("#article").append("<hr>")
//         }
//         $("#loading").hide()
//         });
// }
// onValue(aricleRef, (snapshot) => {
//   const articles = snapshot.val();
//   for (var article in articles) {
//    $("#article").append("<a href='article.html?id="+article+"'>" + articles[article].name + "<br>" + articles[article].age + "<a>")
//    if(articles[article].sex == "Nữ")
//         $("#pt-name").append("<a href='pt.html?id="+article+"'>"+"Bà " + articles[article].name + "<br>")
//    if(articles[article].sex == "Nam")
//         $("#pt-name").append("<a href='pt.html?id="+article+"'>"+"Ông " + articles[article].name+ "<br>")
// //    $("#pt-name").append("<a href='pt.html?id="+article+"'>" +articles[article].name + "<br>")

//    $("#pt-place").append(articles[article].place + "<br>")
//    $("#pt-age").append(articles[article].age + "<br>")
//    $("#pt-sex").append(articles[article].sex + "<br>")
//    $("#article").append("<hr>")
//     if(articles[article].image){
//         $("#pt-img").append("<img src = '"+articles[article].image+"'>")
//         }
//     $("#pt-img").append("<hr>")
//   }


//   $("#loading").hide()
// });
const aricleRef1 = ref(db, 'aricles');
   onValue(aricleRef1, (snapshot) => {
     const articles = snapshot.val();
     for (var article in articles) {
      $("#news").append("<div class='article'>  <div class='inf'>  <div class='heading'>"+
		  "<a href='article.html?id="+article+"'><h3>"+articles[article].title+"</h3></a>"+
		   "</div><div class='intro'><p>Tác giả: "+articles[article].author+"</p> </div> </div>"+
		    "<img src='"+articles[article].image+"' alt = ''> </div>")

      $("#news").append("<hr>")
     }
     $("#loading").hide()
   });

const aricleRef2 = ref(db, 'aricles/'+id);
   onValue(aricleRef2, (snapshot) => {
     const article = snapshot.val();
      $("#news-ChiTiet").append(article.title + "<br>" + article.author+ "<br>" + article.content)
       if(article.image){
           $("#news-ChiTiet").append("<br><img src = '"+article.image+"'>")
       }

     $("#loading").hide()
   });

onValue(aricleRef, (snapshot) => {
    const articles = snapshot.val();
    for (var article in articles) {
        if(articles[article].sex == "Nam")
            articles[article].name = "Ông "+articles[article].name;
        if(articles[article].sex == "Nữ")
            articles[article].name = "Bà "+articles[article].name;
        
        $("#article").append("<div class='patient-info'>"+"<img src = '"+articles[article].image+"'>"+"<div class='info'>" + "<a href='pt.html?id="+article+"'>"+"<h3>" + articles[article].name + "</h3></a>"+"<div class='ttll'> <div class='locate'> <img src='image/locate.svg' alt=''>" + "<h5>"+articles[article].place +"</h5>" + "</div>" + "<div class='line3'> <div class='age'> <h5 class='dark'>Tuổi:</h5>"+ "<h5>"+ articles[article].age +"</h5>"+"</div><div class='gender'><h5 class='dark'>Giới tính:</h5>"+ "<h5>"+articles[article].sex +"</h5></div></div></div></div>")
    }
  
  
    $("#loading").hide()
  });

// onValue(aricleRef2, (snapshot) => {
// const article = snapshot.val();
// $("#article").append(article.name + "<br>" + article.dob+ "<br>" + article.sex)
//  if(article.ava){
//      $("#article").append("<br><img src = '"+article.ava+"'>")
//  }

// $("#loading").hide()
// });


const auth = getAuth(app);
$("#btnSignUp").click(function(){
    createUserWithEmailAndPassword(auth, $("#email").val(), $("#password").val())
    .then((userCredential) => {
      $("#signUpForm").hide();
      const user = userCredential.user;
      $("#heading").text("Xin chao ban: " + user.uid)
     
    })
    .catch((error) => {
      $("#heading").text(error)
    });
   
   })

   onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      $("#heading").css("display","block")
      $("#heading").html("Xin chao ban: " + user.uid)
      $("#signInform").css("display","none")
      $("#btnSignOut").css("display","block")
     
     
      // ...
    } else {
      $("#signInform").css("display","block")
    }
   });
   
   $("#btnSignOut").click(function(){
   
      signOut(auth).then(() => {
              $("#signInform").css("display","block")
              $("#heading").html("Đăng nhập")
              $("#btnSignOut").css("display","none")
          }).catch((error) => {
          // An error happened.
          });
   
   })
   

   $("#SignIn").click(function(){
    signInWithEmailAndPassword(auth,$("#email").val(), $("#password").val())
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      $("#heading").text("Xin chao ban: " + user.uid)
   
      $("#signInform").hide();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      $("#heading").text(error.message)
    });
   
   })