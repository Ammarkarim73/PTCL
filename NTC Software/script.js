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
    import { getAuth, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
    import {collection, getFirestore, getDocs} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
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
    const auth = getAuth(app);
    const db = getFirestore(app);
    
    
    let login_btn = document.getElementById("loginSubmit")
    login_btn.addEventListener("click", async () => {
        let login_email = document.getElementById("loginEmail").value
        let login_password = document.getElementById("loginPassword").value
        
        signInWithEmailAndPassword(auth, login_email, login_password)
        .then(async (userCredential) => {
            // Signed in 
            const querySnapshot = await getDocs(collection(db, "Redirect"));
            querySnapshot.forEach((doc) => { 
              window.open(doc.data().data, '_self');
            })

      
    })
    .catch((error) => {
        var errorMessage;
        console.log(error.message);
        if (error.message == 'Firebase: Error (auth/invalid-email).'){
          errorMessage = 'PLEASE INPUT CORRECT EMAIL ... !';
          Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: errorMessage,
            iconColor: 'red',
            background: 'black',
            color: 'whitesmoke',
          });
  }else{}
    
    if (error.message == 'Firebase: Error (auth/internal-error).'){
      errorMessage = 'PLEASE INPUT PASSWORD ... !';
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: errorMessage,
        iconColor: 'red',
        background: 'black',
        color: 'whitesmoke',
      });
    }
    if (error.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
      errorMessage = 'PASSWORD SHOULD BE AT LEAST 6 CHARACTERS ... !';
      Swal.fire({
        icon: 'info',
        title: 'INVALID PASSWORD',
        text: errorMessage,
        iconColor: 'red',
        background: 'black',
        color: 'whitesmoke',
      });
    }if (error.message == 'Firebase: Error (auth/wrong-password).'){
      errorMessage = 'WRONG PASSWORD ... !';
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: errorMessage,
        iconColor: 'red',
        background: 'black',
        color: 'whitesmoke',
      });
    }if (error.message == 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'){
      errorMessage = 'YOUR ACCOUNT HAS BEED TEMPORARY DISABLED IN CASE OF TOO MANY REQUESTS PLEASE TRYAGAIN LATER ... !';
      Swal.fire({
        icon: 'info',
        title: 'SOMETHING WENT WRONG',
        text: errorMessage,
        iconColor: 'red',
        background: 'black',
        color: 'whitesmoke',
      });
    }if (error.message == 'Firebase: Error (auth/user-disabled).'){
      errorMessage = 'YOUR ACCOUNT HAS BEEN DISABLED ... ! \n PLEASE CONTACT ' + '<a herf="https://mail.google.com/">azlankarim660@gmail.com</a>' + ' FOR SUPPORT ... !';
      Swal.fire({
        icon: 'info',
        title: 'SOMETHING WENT WRONG',
        html: errorMessage,
        iconColor: 'red',
        background: 'black',
        color: 'whitesmoke',
      });
    }if (error.message == 'Firebase: Error (auth/user-not-found).'){
      errorMessage = 'USER NOT FOUND ... !';
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: errorMessage,
        iconColor: 'red',
        background: 'black',
        color: 'whitesmoke',
      });
    }
    });

    })



window.onload = async () => {

    
    
    
    onAuthStateChanged(auth, async (user) => {
        if (user.emailVerified) {
            const querySnapshot = await getDocs(collection(db, "Redirect"));
            querySnapshot.forEach((doc) => { 
              window.open(doc.data().data, '_self');
            })
        } else {
        
        }
    })
}














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




