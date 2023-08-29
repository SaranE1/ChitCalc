// function calculate(){
//     let noOfMembers = document.getElementById("noOfMembers").value
//     let duration = document.getElementById("duration").value
//     let monthlyPay = document.getElementById("monthlyPay").value
    

//     document.getElementById("foreman commission").innerHTML = "Foreman";
//     document.getElementById("totaldivident").innerHTML = "Total divident";
//     document.getElementById("dividentCreditEach").innerHTML = "Each member";

// }
function totalpot(){
    let noOfMembers = document.getElementById("noOfMembers").value
    let monthlyPay = document.getElementById("monthlyPay").value
    let totalpot = parseInt(noOfMembers)*parseInt(monthlyPay)
    document.getElementById("totalpot").innerHTML = totalpot
    
}

function sacrifice(){
    let noOfMembers = document.getElementById("noOfMembers").value
    let monthlyPay = document.getElementById("monthlyPay").value
    let totalpot = parseInt(noOfMembers)*parseInt(monthlyPay)

    let percent = document.getElementById("winner").value
    let sacrificeAmount = parseInt(percent)/100 * parseInt(totalpot)

    let amountReceived = parseInt(totalpot)-parseInt(sacrificeAmount)
    document.getElementById("amountOfDiscount").innerHTML = sacrificeAmount
    document.getElementById("amountReceived").innerHTML = amountReceived

    let commission = 5/100*parseInt(totalpot)
    let divident = sacrificeAmount - commission 
    let eachMemberShare = divident/noOfMembers

    document.getElementById("commission").innerHTML = commission 
    document.getElementById("totaldivident").innerHTML = divident
    document.getElementById("dividentCreditEach").innerHTML = eachMemberShare

}
