 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAEexdiQSBi_iJWsSwvMIjOzMG0X5nKiU8",
   authDomain: "teotiendacesde.firebaseapp.com",
   projectId: "teotiendacesde",
   storageBucket: "teotiendacesde.appspot.com",
   messagingSenderId: "514225918356",
   appId: "1:514225918356:web:9a0b2fbf7219c4c660ff81",
   measurementId: "G-TY22DPB8NX"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);