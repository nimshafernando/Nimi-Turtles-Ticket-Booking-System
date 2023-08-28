

const storedNumSlAdultTickets = parseInt(localStorage.getItem("numofsladulttickets"));
const storedNumSlChildTickets = parseInt(localStorage.getItem("numofslchildtickets"));
const storedNumforeigneradultTickets = parseInt(localStorage.getItem("numofforeigneradulttickets"));
const storedNumforeignerchildTickets = parseInt(localStorage.getItem("numofforeignerchildtickets"));
const storedNuminfanttickets = parseInt(localStorage.getItem("numofinfants"));

function buildingupofrowsbasedonticketcount(rows, TicketCount) {
    const row = document.getElementById(rows);
    row.classList.toggle("hidden-row", TicketCount === 0);
}


const retrievedSummaryTable2 = JSON.parse(localStorage.getItem('summaryTable'));

const storedfullname = localStorage.getItem("fullName");
const storedMobileNumber = localStorage.getItem("mobileNumber");
const storedEmail = localStorage.getItem("email");

const storedGender = localStorage.getItem("gender");

const storedSelectedDate = localStorage.getItem("selectedDate");




// localStorage retrieval
const RetrievingSumarrytable = JSON.parse(localStorage.getItem('SummaryTable'));

const retrievedselecteddate = localStorage.getItem("selectedDate");

document.getElementById('selectedddate').textContent = storedSelectedDate;
document.getElementById('selectedtime').textContent = RetrievingSumarrytable.selectedtime;
document.getElementById('selectedduration').textContent = RetrievingSumarrytable.selectedduration;
document.getElementById("FullName").textContent = storedfullname;
document.getElementById("mobiledata").textContent = storedMobileNumber;
document.getElementById("email").textContent = storedEmail;
document.getElementById("gender").textContent = storedGender;




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

