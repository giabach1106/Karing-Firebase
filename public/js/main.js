
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
const aricleRef = ref(db, 'dt');

// onValue(aricleRef, (snapshot) => {
// const articles = snapshot.val();
// for (var article in articles) {
// $("#article").append("<a href='dt.html?id="+article+"'>" + articles[article].name + "<br>" + articles[article].dob + "<a>")
// if(articles[article].ava){
//     $("#article").append("<br><img src = '"+articles[article].ava+"'>")
// }

// $("#article").append("<hr>")
// }
// $("#loading").hide()
// });





let id = getUrlParameter("id")
// const aricleRef2 = ref(db, 'db/'+'pt');
// console.log(aricleRef2);


let x = ['dt', 'pt'];
console.log(x);
for (let i=0;i<2;i++){
    let id = x[i];
    const aricleRef2 = ref(db, 'db/'+ id);
    onValue(aricleRef2, (snapshot) => {
        const articles = snapshot.val();
        for (var article in articles) {
        $("#article").append("<a href='dt.html?id="+article+"'>" + articles[article].name + "<br>" + articles[article].dob + "<a>")
        if(articles[article].image){
            $("#article").append("<br><img src = '"+articles[article].image+"'>")
        }
        console.log(articles['03']['dob']);
        console.log(articles['03']['name']);
        
        $("#article").append("<hr>")
        }
        $("#loading").hide()
        });
}



// onValue(aricleRef2, (snapshot) => {
// const article = snapshot.val();
// $("#article").append(article.name + "<br>" + article.dob+ "<br>" + article.sex)
//  if(article.ava){
//      $("#article").append("<br><img src = '"+article.ava+"'>")
//  }

// $("#loading").hide()
// });


