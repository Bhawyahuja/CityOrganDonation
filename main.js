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

var detailsForm = firebase.database().ref('formDetails');

document.getElementById('details_form').addEventListener('submit',submitForm);

//submitform

function submitForm(e){
    e.preventDefault();
    //get values

    var hosname = getInputVal('hosname')
    var hosid = getInputVal('hosid')
    var email = getInputVal('email')
    var phone = getInputVal('phone')
    var address = getInputVal('address')

    var city = getInputVal('city')
    var state = getInputVal('state')
    var zip = getInputVal('zip')
    var fname = getInputVal('fname')
    var lname = getInputVal('lname')
    var adhaarno = getInputVal('adhaarno')
    var gender = getInputVal('gender')
    var age = getInputVal('age')
    var bloodgroup = getInputVal('bloodgroup')
    var height = getInputVal('height')
    
    var weight = getInputVal('weight')
    var tod = getInputVal('tod')
    var hea = getInputVal('hea')
    var liv = getInputVal('liv')
    var lun = getInputVal('lun')


    // var select_value = document.getElementById("gender").value;
    // console.log(select_value)

    // console.log(email)

    saveDetails(hosname, hosid, email ,phone, address,city , state, zip, fname, lname, adhaarno, gender,age, bloodgroup, height, weight, tod, hea, liv, lun)
//show alert
document.querySelector('.alert').style.display ='block';
// hide alert after 3 sec
setTimeout(() => {
    
document.querySelector('.alert').style.display ='none';
},3000);

//clear form
document.getElementById('details_form').reset()
    
}

//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save details to firebase

function saveDetails(hosname, hosid, email ,phone, address,city , state, zip, fname, lname, adhaarno, gender,age, bloodgroup, height, weight, tod,hea, liv, lun){
    var newDetailsForm = detailsForm.push();
    newDetailsForm.set({
        hosname: hosname,
        hosid: hosid,
        email:email,
        phone: phone,
        address: address,
        city: city,
        state:state,
        zip:zip,
        fname:fname,
        lname:lname,
        adhaarno:adhaarno,
        gender:gender,
        age:age,
        bloodgroup:bloodgroup,
        height:height,
        weight:weight,
        tod:tod,
        hea: hea,
        liv:liv,
        lun:lun


    })
}