// References added//
const recieptform = document.getElementById("recieptform");
const cardNumberInput = document.getElementById("cardnumber");
const expiryDateInput = document.getElementById("expiarydate");
const cvcInput = document.getElementById("CVC");
const cardNameInput = document.getElementById("cardname");
const payButton = document.getElementById("paybutton");
// References added//



// Event listner for submit button and updatepaybutton//
recieptform.addEventListener("input", updatepaybutton);

    function submitbutton(event) {
      event.preventDefault();
      
      window.location.href = `confirmation.html?amount=${storedTotalPrice}`;
    }
// Event listner for submit button and updatepaybutton//


//expression  used to validate whether a string contains only letters (both uppercase and lowercase) and whitespace characters (spaces).
const cardvalidator = /^[a-zA-Z\s]+$/;
//expression  used to validate whether a string contains only letters (both uppercase and lowercase) and whitespace characters (spaces).


// Card validation//
function updatepaybutton() {
    const cardnumber = cardNumberInput.value.trim();
    const expiarydate = expiryDateInput.value.trim();
    const CVC = cvcInput.value.trim();
    const cardname = cardNameInput.value.trim();
  
    const Cardnumbervalidation = cardnumber.length >= 14 && cardnumber.length <= 16;
    if (!Cardnumbervalidation) {
      onError(cardNumberInput, "Invalid Card Number");
    } else {
      onSuccess(cardNumberInput);
    }

    
  const expiaryvalidator = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const Expiarydatevalid = expiaryvalidator.test(expiarydate);
  if (!Expiarydatevalid) {
    onError(expiryDateInput, "Invalid expiry date (use MM/YY format)");
  } else {
    const [month, year] = expiarydate.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (parseInt(year, 10) < currentYear || (parseInt(year, 10) === currentYear && parseInt(month, 10) < currentMonth)) {
      onError(expiryDateInput, "Card is already expired");
    } else {
      onSuccess(expiryDateInput);
    }
}
  

  const verificationValid = CVC.length >= 3;
  if (!verificationValid) {
    onError(cvcInput, "Invalid verification (CVC/CVV)");
  } else {
    onSuccess(cvcInput);
  }

  const Cardnamevalid = cardvalidator.test(cardname);
  if (!Cardnamevalid) {
    onError(cardNameInput, "Invalid name on card");
  } else {
    onSuccess(cardNameInput);
  }
  
const storedTotalPrice = parseInt(localStorage.getItem("TotalPrice"));

console.log("storedTotalPrice:", storedTotalPrice);


  const FormValid =
  Cardnumbervalidation && Expiarydatevalid && verificationValid && Cardnamevalid;

  payButton.disabled = !FormValid;
  payButton.innerText = FormValid ? `Pay $ ${storedTotalPrice}` :"Pay";
  
}

function onSuccess(input){
    let parent = input.parentElement; 
    let messageEle=parent.querySelector("span"); 
    messageEle.style.visibility="hidden";
    messageEle.innerHTML="";
    parent.classList.add("success");
    parent.classList.remove("error");


}

function onError(input, message){
    let parent = input.parentElement;
    let messageEle=parent.querySelector("span"); 
    messageEle.style.visibility="visible";
    messageEle.innerHTML=message;
    parent.classList.remove("success");
    parent.classList.add("error");
}
// Card validation//



const storedNumSlAdultTickets = parseInt(localStorage.getItem("numofsladulttickets"));
const storedNumSlChildTickets = parseInt(localStorage.getItem("numofslchildtickets"));
const storedNumforeigneradultTickets = parseInt(localStorage.getItem("numofforeigneradulttickets"));
const storedNumforeignerchildTickets = parseInt(localStorage.getItem("numofforeignerchildtickets"));
const storedNuminfanttickets = parseInt(localStorage.getItem("numofinfants"));



function buildingupofrowsbasedonticketcount(rows, TicketCount) {
    const row = document.getElementById(rows);
    row.classList.toggle("hidden-row", TicketCount === 0);
}

const RetrievingSumarrytable2 = JSON.parse(localStorage.getItem('SummaryTable'));
const retrievedselecteddate = localStorage.getItem("selectedDate");

document.getElementById('selectedddate').textContent = retrievedselecteddate;
document.getElementById('selectedtime').textContent = RetrievingSumarrytable2.selectedtime;
document.getElementById('selectedduration').textContent = RetrievingSumarrytable2.selectedduration;

buildingupofrowsbasedonticketcount('sladultrow', storedNumSlAdultTickets);
if (storedNumSlAdultTickets > 0) {
    document.getElementById('localadult').textContent = RetrievingSumarrytable2.localadult;
    document.getElementById('localadultprice').textContent = RetrievingSumarrytable2.localadultprice;
    
}

buildingupofrowsbasedonticketcount("slchildrow", storedNumSlChildTickets);
if (storedNumSlChildTickets > 0) {
    document.getElementById("localchild").innerHTML = RetrievingSumarrytable2.localchild;
    document.getElementById("localchildprice").innerHTML = RetrievingSumarrytable2.localchildprice;
    
}
buildingupofrowsbasedonticketcount("foreignadultrow", storedNumforeigneradultTickets);
if (storedNumforeigneradultTickets > 0) {
    document.getElementById("foriegnadult").innerHTML = RetrievingSumarrytable2.foriegnadult;
    document.getElementById("foriegnadultprice").innerHTML = RetrievingSumarrytable2.foriegnadultprice;
   
}

buildingupofrowsbasedonticketcount("foreignchildrow", storedNumforeignerchildTickets);
if (storedNumforeignerchildTickets > 0) {
    document.getElementById("foriegnchild").innerHTML = RetrievingSumarrytable2.foriegnchild;
    document.getElementById("foriegnchildprice").innerHTML = RetrievingSumarrytable2.foriegnchildprice;   
}

buildingupofrowsbasedonticketcount("infantrow", storedNuminfanttickets);
if (storedNuminfanttickets > 0) {
    document.getElementById("infant").innerHTML = RetrievingSumarrytable2.infant;
    document.getElementById("infantprice").innerHTML = RetrievingSumarrytable2.infantprice;
}

document.getElementById('TotalPrice').innerHTML = RetrievingSumarrytable2.TotalPrice;

