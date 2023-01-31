// FOR PWA APPLICAION


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("./serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }


// FOR PWA APPLICAION


// Import the functions you need from the SDKs you need
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries
  
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyD11dl0pMA7VsWIIeZHnkPOm9l5_raLm-M",
        authDomain: "ptcl-records.firebaseapp.com",
        projectId: "ptcl-records",
        storageBucket: "ptcl-records.appspot.com",
        messagingSenderId: "710946826238",
        appId: "1:710946826238:web:29eaba1070c26428ccc2af",
        measurementId: "G-999D14RRKQ"
      };
  
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

























    // let login_btn = document.getElementById("loginSubmit")
    // login_btn.addEventListener("click", async () => {
    //     let login_email = document.getElementById("loginEmail").value
    //     let login_password = document.getElementById("loginPassword").value
    //     const docRef = doc(db, "adminInfo", "ua317eNUhNnPetbGE4vT");
    //     const docSnap = await getDoc(docRef);
    
    //     if (docSnap.exists()) {
    //         if(login_email == docSnap.data().email && login_password == docSnap.data().password){
    //             window.open("./dashboard/index.html", "_self")
    //         }else{
    //             console.log("not-login through admin panel")
    //         }
    //     } else {
    //         console.log("No such information about admin!");
    //     }
    // })




