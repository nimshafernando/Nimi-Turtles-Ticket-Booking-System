const DetailForm = document.getElementById("validationform");
const FullName = document.getElementById("name");
const MobileNumber = document.querySelector('input[type="tel"]');
const email = document.getElementById("Email");
const confirmEmail = document.getElementById("confirmemail");
const gender = document.getElementById("gender");
const button3 = document.getElementById("button3");

const namefeild = document.getElementById("namefeild"); 
const emailfeild =  document.getElementById("emailfeild");
const confirmEmailfeild =  document.getElementById("confirmEmailfeild");

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
    let valid = true;

    if (FullName.value === "") {
        valid = false;
        FullName.classList.add("error");
        showError(namefeild, "This field cannot be empty");
    } else {
        FullName.classList.remove("error");
        FullName.classList.add("success");
    }

    if (!isValidEmail(email.value)) {
        valid = false;
        email.classList.add("error");
        showError(emailfeild, "This field cannot be empty");
    } else {
        email.classList.remove("error");
        email.classList.add("success");
    }

    if (email.value !== confirmEmail.value || !isValidEmail(confirmEmail.value)) {
        valid = false;
        confirmEmail.classList.add("error");
        showError(confirmEmailfeild, "Emails do not match");
    } else {
        confirmEmail.classList.remove("error");
        confirmEmail.classList.add("success");
    }

    if (MobileNumber.value === "") {
        valid = false;
        MobileNumber.classList.add("error");
    } else {
        MobileNumber.classList.remove("error");
        MobileNumber.classList.add("success");
    }

    return valid;
}

DetailForm.addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault(); 
    } else {

        const selectedGender = gender.value;
      
        localStorage.setItem("fullName", FullName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("mobileNumber", MobileNumber.value);
        localStorage.setItem("gender", selectedGender);

       
        button3.disabled = false;
    }
});

function showError(inputElement, errorMessage) {
    const errorSpan = inputElement.querySelector(".error-message");
    errorSpan.innerText = errorMessage;
}


function clearError(inputElement) {
    const errorSpan = inputElement.querySelector(".error-message");
    errorSpan.innerText = "";
}


function setSuccess(inputElement) {
    const errorSpan = inputElement.querySelector(".error-message");
    errorSpan.innerText = "";
}





const storedNumSlAdultTickets = parseInt(localStorage.getItem("numofsladulttickets"));
const storedNumSlChildTickets = parseInt(localStorage.getItem("numofslchildtickets"));
const storedNumforeigneradultTickets = parseInt(localStorage.getItem("numofforeigneradulttickets"));
const storedNumforeignerchildTickets = parseInt(localStorage.getItem("numofforeignerchildtickets"));
const storedNuminfanttickets = parseInt(localStorage.getItem("numofinfants"));


document.getElementById("NameRow").style.display = "none";
document.getElementById("mobilenumberRow").style.display = "none";
document.getElementById("EmailRow").style.display = "none";
document.getElementById("GenderRow").style.display = "none";


function buildingupofrowsbasedonticketcount(rows, TicketCount) {
    const row = document.getElementById(rows);
    row.classList.toggle("hidden-row", TicketCount === 0);
}




// local storage
const RetrievingSumarrytable = JSON.parse(localStorage.getItem('SummaryTable'));

const retrievedselecteddate = localStorage.getItem("selectedDate");

document.getElementById('selectedddate').textContent = retrievedselecteddate;
document.getElementById('selectedtime').textContent = RetrievingSumarrytable.selectedtime;
document.getElementById('selectedduration').textContent = RetrievingSumarrytable.selectedduration;

// summary table 
buildingupofrowsbasedonticketcount('sladultrow', storedNumSlAdultTickets);
if (storedNumSlAdultTickets > 0) {
    document.getElementById('localadult').textContent = RetrievingSumarrytable.localadult;
    document.getElementById('localadultprice').textContent = RetrievingSumarrytable.localadultprice;
    
}

buildingupofrowsbasedonticketcount("slchildrow", storedNumSlChildTickets);
if (storedNumSlChildTickets > 0) {
    document.getElementById("localchild").innerHTML = RetrievingSumarrytable.localchild;
    document.getElementById("localchildprice").innerHTML = RetrievingSumarrytable.localchildprice;
    
}
buildingupofrowsbasedonticketcount("foreignadultrow", storedNumforeigneradultTickets);
if (storedNumforeigneradultTickets > 0) {
    document.getElementById("foriegnadult").innerHTML = RetrievingSumarrytable.foriegnadult;
    document.getElementById("foriegnadultprice").innerHTML = RetrievingSumarrytable.foriegnadultprice;
   
}

buildingupofrowsbasedonticketcount("foreignchildrow", storedNumforeignerchildTickets);
if (storedNumforeignerchildTickets > 0) {
    document.getElementById("foriegnchild").innerHTML = RetrievingSumarrytable.foriegnchild;
    document.getElementById("foriegnchildprice").innerHTML = RetrievingSumarrytable.foriegnchildprice;   
}

buildingupofrowsbasedonticketcount("infantrow", storedNuminfanttickets);
if (storedNuminfanttickets > 0) {
    document.getElementById("infant").innerHTML = RetrievingSumarrytable.infant;
    document.getElementById("infantprice").innerHTML = RetrievingSumarrytable.infantprice;
}

document.getElementById('TotalPrice').innerHTML = RetrievingSumarrytable.TotalPrice

