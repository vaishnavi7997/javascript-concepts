let isSeatAvailable = prompt("Is seat available");

if(isSeatAvailable.toLowerCase() == "yes") {
    console.log("Seat is available");
    let isAgeAbove50 = prompt("Is your age above 50 years?");
    if(isAgeAbove50.toLowerCase() == "yes") {
      console.log("Aged above 50");
      let hasAadharCard = prompt("Do you have Aadhar Card?");
    if(hasAadharCard.toLowerCase() == "yes") {
      console.log("Has Aadhar Card");
      alert("Please Come Inside the Bus");
    }else {
        console.log("but you don't have Aadhar card");
    }
  } else {
    console.log("but your age is below 50 years")
  }
} else {
    console.log("Seat is not available");
}
