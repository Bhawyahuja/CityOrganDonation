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

var donorForm = firebase.database().ref('DonorDetails');

document.getElementById('donor_form').addEventListener('submit',submitForm);

//submitform

function submitForm(e){
    e.preventDefault();
    //get values

    var dfname = getInputVal('dfname')
    var dlname = getInputVal('dlname')
    var demail = getInputVal('demail')
    var dphone = getInputVal('dphone')
    var dadhaar = getInputVal('dadhaar')
    var daddress = getInputVal('daddress')

    var dcity = getInputVal('dcity')
    var dstate = getInputVal('dstate')
    var dzip = getInputVal('dzip')
    var ddob = getInputVal('ddob')
    
    var dgender = getInputVal('dgender')
    var dbloodgroup = getInputVal('dbloodgroup')
 
    // var select_value = document.getElementById("gender").value;
    // console.log(select_value)

    // console.log(email)

    saveDetails(dfname, dlname, demail ,dphone,dadhaar, daddress,dcity , dstate, dzip, ddob,dgender,dbloodgroup)
//show alert
document.querySelector('.alert').style.display ='block';
// hide alert after 3 sec
setTimeout(() => {
    
document.querySelector('.alert').style.display ='none';
},3000);

//clear form
document.getElementById('donor_form').reset()
    
}

//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save details to firebase

function saveDetails(dfname, dlname, demail ,dphone,dadhaar, daddress,dcity , dstate, dzip, ddob,dgender,dbloodgroup){
    var newDonorForm = donorForm.push();
    newDonorForm.set({
        dfname:dfname,
        dlname:dlname,
        demail: demail,
        dphone: dphone,
        dadhaar: dadhaar,
        daddress: daddress,
        dcity: dcity,
        dstate: dstate,
        dzip: dzip,
        ddob: ddob,
        dgender: dgender,
        dbloodgroup: dbloodgroup

    })
}