// Function to calculate the water bill based on usage in litres
function calculateBill() {
  // Prompt the user for their water usage in litres and convert it to a number
  let waterUsageLitres = Number(prompt("Enter your water usage in litres:"));

  // Define the billing tiers and rates in Pounds per 1000 litres
  let tier1Threshold = 6000; // Tier 1 threshold: 6,000 litres
  let tier1Rate = 1.50; // Tier 1 rate: £ 1.5 per 1000 litres

  let tier2Threshold = 10500; // Tier 2 threshold: 10,500 litres
  let tier2Rate = 2.50; // Tier 2 rate: £ 2.5 per 1000 litres

  let tier3Threshold = 35000; // Tier 3 threshold: 35,000 litres
  let tier3Rate = 3.50; // Tier 3 rate: £ 3.5 per 1000 litres

  let tier4Rate = 5.00; // Tier 4 rate for usage above 35,000 litres

  // Calculate the water bill based on the tiered system
  let billAmount; // Variable to store the total bill amount

  if (waterUsageLitres <= tier1Threshold) {
    // Calculate the bill for Tier 1 usage
    billAmount = (waterUsageLitres / 1000) * tier1Rate;
  } else if (waterUsageLitres <= tier2Threshold) {
    // Calculate the bill for Tier 1 and Tier 2 usage
    billAmount =
      (tier1Threshold / 1000) * tier1Rate +
      ((waterUsageLitres - tier1Threshold) / 1000) * tier2Rate;
  } else if (waterUsageLitres <= tier3Threshold) {
    // Calculate the bill for Tier 1, Tier 2, and Tier 3 usage
    billAmount =
      (tier1Threshold / 1000) * tier1Rate +
      ((tier2Threshold - tier1Threshold) / 1000) * tier2Rate +
      ((waterUsageLitres - tier2Threshold) / 1000) * tier3Rate;
  } else {
    // Calculate the bill for usage in all tiers (including Tier 4)
    billAmount =
      (tier1Threshold / 1000) * tier1Rate +
      ((tier2Threshold - tier1Threshold) / 1000) * tier2Rate +
      ((tier3Threshold - tier2Threshold) / 1000) * tier3Rate +
      ((waterUsageLitres - tier3Threshold) / 1000) * tier4Rate;
  }

  // Display the total bill on the webpage by updating the content of the billResult element
  document.getElementById("billResult").textContent = `Your total bill is: £ ${billAmount.toFixed(2)}`;
}
