var firebaseConfig = {
    apiKey: "AIzaSyDkNJyaODZNbJ9a2bbtuqvaUUaz_pYFlAU",
    authDomain: "cityorgan-2f0c6.firebaseapp.com",
    databaseURL: "https://cityorgan-2f0c6.firebaseio.com",
    projectId: "cityorgan-2f0c6",
    storageBucket: "cityorgan-2f0c6.appspot.com",
    messagingSenderId: "1068876085725",
    appId: "1:1068876085725:web:e1d07749bafaf679401e34",
    measurementId: "G-MP4RWGEH1C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//reference details collection

var hosregForm = firebase.database().ref('formHospital');

document.getElementById('hosreg_form').addEventListener('submit',submitForm);

//submitform

function submitForm(e){
    e.preventDefault();
    //get values

    var hosname = getInputVal('hosname')
    var hosid = getInputVal('hosid')
    var hosemail = getInputVal('hosemail')
    var hosphone = getInputVal('hosphone')
    var hosaddress = getInputVal('hosaddress')

    var hoscity = getInputVal('hoscity')
    var hostate = getInputVal('hostate')
    var hoszip = getInputVal('hoszip')
    var website = getInputVal('website')
    

    // var select_value = document.getElementById("gender").value;
    // console.log(select_value)

    // console.log(email)

    saveDetails(hosname, hosid, hosemail ,hosphone, hosaddress, hoscity , hostate, hoszip, website)
//show alert
document.querySelector('.alert').style.display ='block';
// hide alert after 3 sec
setTimeout(() => {
    
document.querySelector('.alert').style.display ='none';
},3000);

//clear form
document.getElementById('hosreg_form').reset()
    
}

//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save details to firebase

function saveDetails(hosname, hosid, hosemail ,hosphone, hosaddress, hoscity , hostate, hoszip, website){
    var newhosregForm = hosregForm.push();
    newhosregForm.set({
        hosname: hosname,
        hosid: hosid,
        hosemail: hosemail,
        hosphone: hosphone,
        hosaddress: hosaddress,
        hoscity: hoscity,
        hostate: hostate,
        hoszip: hoszip,
        website:website
       



    })
}