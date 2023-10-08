// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

/**
 * ways to get elements: 
 * 
 * document.getElementById("idName")
 * document.getElementByTagName("div")
 *  document.querySelector(".myClass")
 * 
 * 
 */

document.addEventListener("DOMContentLoaded", () => {
    let iceCreamTableBody = document.getElementById("iceCreamTableBody")
    let iceCreamForm = document.getElementById("iceCreamForm")
  
    // Initial ice cream flavors array
    let iceCreamFlavors = [
      { flavor: "Vanilla", oneScoop: "$3.00", twoScoops: "$4.50", threeScoops: "$5.00" },
      { flavor: "Chocolate", oneScoop: "$3.00", twoScoops: "$4.50", threeScoops: "$5.00" },
      { flavor: "Strawberry", oneScoop: "$3.00", twoScoops: "$4.50", threeScoops: "$5.00" }
    ]

    // Function to add a new row to the table
    let addRowToTable = (flavor, oneScoop, twoScoops, threeScoops) => {
      const newRow = document.createElement("tr"); // tr is table row
      // td is table data
      newRow.innerHTML = `
        <td>${flavor}</td> 
        <td>${oneScoop}</td>
        <td>${twoScoops}</td>
        <td>${threeScoops}</td>
      `
      iceCreamTableBody.appendChild(newRow)
    }
  
    // Setting up the table
    iceCreamFlavors.forEach(({ flavor, oneScoop, twoScoops, threeScoops }) => {
      addRowToTable(flavor, oneScoop, twoScoops, threeScoops)
    })
  
    // Form submission event listener
    iceCreamForm.addEventListener("submit", function (event) {
      event.preventDefault()
  
      const newFlavorInput = document.getElementById("newFlavor")
      const newFlavor = newFlavorInput.value
  
      if (newFlavor) {
        // Add the new row with the same prices
        addRowToTable(newFlavor, "$3.00", "$4.50", "$5.00")
        // Clear the input after submitting:
        newFlavorInput.value = ""
      }
    })
  })
  
  
  




