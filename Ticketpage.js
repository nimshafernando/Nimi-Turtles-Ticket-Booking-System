

//Call back Fuction of calculatetotalamount//
function calculateTotalAmount(){
//Call back Fuction of calculatetotalamount//


//Number of tickets,type,storage//
    const slAdultvalue = document.getElementById("slAdult");
    const slChildvalue= document.getElementById("slChild");
    const ForeignerAdultvalue = document.getElementById("ForeignerAdult");
    const ForeignerChildvalue = document.getElementById("ForeignerChild");
    const Infantvalue = document.getElementById("Infant");
    const Durationvalue = document.getElementById("Duration");


    
     const InputDate = document.getElementById("InputDate");
     const selectedDate = InputDate.value;
     localStorage.setItem("selectedDate", selectedDate);

     
     const numofsladulttickets = parseInt(document.getElementById('slAdult').value);
     const numofslchildtickets = parseInt(document.getElementById('slChild').value);
     const numofforeigneradulttickets = parseInt(document.getElementById('ForeignerAdult').value);
     const numofforeignerchildtickets = parseInt(document.getElementById('ForeignerChild').value);
     const numofinfants = parseInt(document.getElementById('Infant').value);

      localStorage.setItem("numofsladulttickets", numofsladulttickets);
      localStorage.setItem("numofslchildtickets", numofslchildtickets);
      localStorage.setItem("numofforeigneradulttickets", numofforeigneradulttickets);
      localStorage.setItem("numofforeignerchildtickets", numofforeignerchildtickets);
      localStorage.setItem("numofinfants", numofinfants);
//Number of tickets,type,storage//




//Fuction of duration value , storage //
      const specificTimesSelected= []; 
    for (let option of Durationvalue.options) {
        if (option.selected) {
            specificTimesSelected.push(option.value);
        }
    }
        localStorage.setItem("specificTimesSelected", JSON.stringify(specificTimesSelected));

        function storeChosenOption(event){
            event.preventDefault(); 
            const Durationvalue = document.getElementById("Duration");
            const ChosenOption = [];
        
            for(let i =0; i< Durationvalue.options.length; i++){
                if(Durationvalue.options[i].selected){
                    ChosenOption.push(Durationvalue.options[i].value);
                }
            }
            
            
            localStorage.setItem("ChosenOption", JSON.stringify(ChosenOption));
         
        
        }
 //Fuction of duration values, storage //

   
   
 //Fuction of duration values, ticket [rices , storage//   
          const normalhours = [7,8, 9, 13, 14];
    const peakhours = [10, 11, 12, 15, 16, 17];

   
    let normaltime = 0;
    let peaktime = 0;

    
    for (let slot of specificTimesSelected) {
        const hour = parseInt(slot.split(":")[0]);
        if (normalhours.includes(hour)) {
            normaltime++;
        } else if (peakhours.includes(hour)) {
            peaktime++;
        }
    }
    totalHours = normaltime + peaktime;

    localStorage.setItem("normaltime", normaltime); 
    localStorage.setItem("peaktime", peaktime); 
    localStorage.setItem("totalHours", totalHours);

         const Localnormalticketadultprice = 4;
         const Localpeakticketadultprice = 6; 
         
         const Localnormalticketchildprice = 2;
         const Localpeakticketchildprice = 3;
         
         const Foreignernormalticketadultprice = 10;
         const Foreignerpeakticketadultprice  = 13;
         
         const Foreignernormalticketchildprice = 5;
         const Foreignerpeakticketchildprice = 8;

     
     const totalSLAdultPrice = (normaltime * Localnormalticketadultprice + peaktime * Localpeakticketadultprice)*numofsladulttickets;
     const totalSLChildPrice = (normaltime * Localnormalticketchildprice + peaktime * Localpeakticketchildprice)*numofslchildtickets;
     const totalForeignerAdultPrice= (normaltime * Foreignernormalticketadultprice + peaktime * Foreignerpeakticketadultprice)*numofforeigneradulttickets;
     const totalForeignerChildPrice = (normaltime * Foreignernormalticketchildprice + peaktime * Foreignerpeakticketchildprice)*numofforeignerchildtickets;
     const totalInfantPrice =0;
    
  
     localStorage.setItem("totalSLAdultPrice", totalSLAdultPrice);
     localStorage.setItem("totalSLChildPrice", totalSLChildPrice);
     localStorage.setItem("totalForeignerAdultPrice", totalForeignerAdultPrice);
     localStorage.setItem("totalForeignerChildPrice", totalForeignerChildPrice);
     localStorage.setItem("totalInfantPrice", totalInfantPrice);

     
     const TotalPrice = totalSLAdultPrice + totalSLChildPrice + totalForeignerAdultPrice + totalForeignerChildPrice + totalInfantPrice; 
     

     localStorage.setItem("TotalPrice", TotalPrice);
          //this code section formats the time slots, displays the selected date, time, duration, and total price on the webpage,//

     
     
     //this code section formats the time slots, displays the selected date, time, duration, and total price on the webpage,//
     function getFormattedTime(timeSlots) {

        const initialtime = timeSlots[0].split(" to ")[0];
        const endtime = timeSlots[timeSlots.length - 1].split(" to ")[1];
        return initialtime + " to " + endtime;
    }

    const formatTime = getFormattedTime(specificTimesSelected);
  
     localStorage.setItem("formatTime", formatTime);


document.getElementById("selectedddate").innerHTML = selectedDate;
document.getElementById("selectedtime").innerHTML = formatTime;
document.getElementById("selectedduration").innerHTML = `${totalHours} hrs (${normaltime} Normal:${peaktime} Peak)`;


document.getElementById("TotalPrice").innerHTML = `$ ${TotalPrice}` ;
//this code section formats the time slots, displays the selected date, time, duration, and total price on the webpage,//


function buildingupofrowsbasedonticketcount(rows, TicketCount) {
    const row = document.getElementById(rows);
    row.classList.toggle("hidden-row", TicketCount === 0);
  }
    
  
  document.getElementById("localadult").innerHTML = `${numofsladulttickets}x - Sri-Lankan Adult`;
  document.getElementById("localadultprice").innerHTML = `$ ${totalSLAdultPrice}`;
  buildingupofrowsbasedonticketcount("sladultrow", numofsladulttickets);
  
  document.getElementById("localchild").innerHTML = `${numofslchildtickets}x - Sri-Lankan Child`;
  document.getElementById("localchildprice").innerHTML = `$ ${totalSLChildPrice}`;
  buildingupofrowsbasedonticketcount("slchildrow", numofslchildtickets);
  
  document.getElementById("foriegnadult").innerHTML = `${numofforeigneradulttickets}x - Foreigner Adult`;
  document.getElementById("foriegnadultprice").innerHTML = `$ ${totalForeignerAdultPrice}`;
  buildingupofrowsbasedonticketcount("foreignadultrow", numofforeigneradulttickets);
  
  document.getElementById("foriegnchild").innerHTML = `${numofforeignerchildtickets}x - Foreigner Child`;
  document.getElementById("foriegnchildprice").innerHTML = `$ ${totalForeignerChildPrice}`;
  buildingupofrowsbasedonticketcount("foreignchildrow", numofforeignerchildtickets);
  
  document.getElementById("infant").innerHTML = `${numofinfants}x - Infant`;
  document.getElementById("infantprice").innerHTML = "Free";
  buildingupofrowsbasedonticketcount("infantrow", numofinfants);
    
    
    
  localStorage.setItem("totalSLAdultPrice", totalSLAdultPrice);
  localStorage.setItem("totalSLChildPrice", totalSLChildPrice);
  localStorage.setItem("totalForeignerAdultPrice", totalForeignerAdultPrice);
  localStorage.setItem("totalForeignerChildPrice", totalForeignerChildPrice);
  localStorage.setItem("totalInfantPrice", totalInfantPrice);
    
    
  
const SummaryTable = {
    selectedddate: selectedDate,
    selectedtime: formatTime,
    selectedduration: ` ${totalHours}hrs  (${normaltime} Normal :  ${peaktime} Peak )`,
   localadult: numofsladulttickets + " SL Adult",
   localchild: numofslchildtickets + " SL Child",
   foriegnadult: numofforeigneradulttickets + " Foreigner Adult",
   foriegnchild: numofforeignerchildtickets + " Foreigner Child",
   infant: numofinfants + " Infant",
   localadultprice: "$" + totalSLAdultPrice,
    localchildprice: "$" + totalSLChildPrice,
    foriegnadultprice: "$" + totalForeignerAdultPrice,
    foriegnchildprice: "$" + totalForeignerChildPrice,
    infantprice: "$" + totalInfantPrice,
    TotalPrice: "$" + TotalPrice
  };
  localStorage.setItem('SummaryTable', JSON.stringify(SummaryTable));

  buildingupofrowsbasedonticketcount();

}

InputDate.addEventListener("change", calculateTotalAmount);
Durationvalue.addEventListener("change", calculateTotalAmount);
TotalPrice.addEventListener("change", calculateTotalAmount);
slAdultvalue.addEventListener("change", calculateTotalAmount);
slChildvalue.addEventListener("change", calculateTotalAmount);
ForeignerAdultvalue.addEventListener("change", calculateTotalAmount);
ForeignerChildvalue.addEventListener("change", calculateTotalAmount);
Infantvalue.addEventListener("change", calculateTotalAmount);



