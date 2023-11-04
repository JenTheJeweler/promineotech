/* 
   lit-html snippet - Begin
   Add to the top of your code. Works with html or jsx!
   Formats html in a template literal  using the lit-html library 
   Syntax: html`<div> html or jsx here! ${variable} </div>`
*/
//lit-html snippet - Begin
let html = (strings, ...values) => {
    let str = "";
    strings.forEach((string, i) => {
      str += string + (values[i] || "");
    });
    return str;
  };
  //lit-html snippet - End
  
  //NOTE  DOWNLOAD COMMENT ANCHORS EXTENSION TO SEE OUR COMMENTS VS YOURS.
  
  //when the DOM loads, then load the .Js file:
  console.log("its running");
  //FIXME - We added in ID in your db.json so that it is able to be referenced in your code. This has been done you don't need to fix it.
  //REVIEW We removed the event listner you had at the top because it wasn't needed
  
  //REVIEW Global variables for your project should typically be delcared at the top
  const url_endpoint = "http://localhost:3000/seed-list";
  const mockAPITestURL = "https://mockapi.io/projects/your-test-seed-list"; //REVIEW This is not a real URL
  
  //REVIEW API calls should typically be written at the top of your application.
  
  //NOTE API CALLS - BEGIN
  // Read/.get GET REQUEST - adds the new seeds data to the table
  $.get(url_endpoint).then((data) => {
    data.map((seeds) => {
      $("tbody").append(
        $(html`
                <tr>
                  <td> ${seeds.commonName}</td>
                  <td> ${seeds.latinName}</td>
                  <td> ${seeds.color}</td>
                  <td> ${seeds.sunShade}</td>
                  <td> ${seeds.plantingSeason}</td>
                  <button type="button" onclick="deleteSeedEntry(${seeds.id})">🗑</Button>  
                  </td>
                <tr>
                `)
      );
    });
  });
  
  // DELETE REQUEST - Remove seed entry
  //NOTE This was not reference so I named it deleteSeedEntry
  function deleteSeedEntry(id) {
    console.log("deleted seed entry");
    $.ajax(`${url_endpoint}/${id}`, {
      type: "DELETE",
    });
  }
  
  // PUT REQUEST - Modify existing seed entry
  function updateSeedEntry() {
    console.log("updated seed entry");
    let id = $("#updateId").val();
  
    $.ajax(`${url_endpoint}/${id}`, {
      method: "PUT",
      data: {
        commonName: $("#commonName").val(),
        latinName: $("#latinName").val(),
        color: $("#color").val(),
        sunShade: $("#sunShade").val(),
        plantingSeason: $("#plantingSeason").val(),
      },
    });
  }
  
  //NOTE API CALLS - END
  
  //NOTE looks for the add-seed-form, when the submit button is clicked, the method will run
  document.getElementById("add-seed-form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitting seeds");
    //the above prevent default stops the page from reloading each time, so you can work with it
  
    // const commonName = document.getElementById("common-name").value;
    // const latinName = document.getElementById("latin-name").value;
    // const color = document.getElementById("color").value;
    // const sunShade = document.getElementById("sun-shade").value;
    // const plantingSeason = document.getElementById("planting-season").value;
  
    //TODO Need to include a unique id for each item.
    $.post(url_endpoint, {
      id: "some-unique-id-should be here", //REVIEW This is not a real ID
      commonName: $("#commonName").val(),
      latinName: $("#latinName").val(),
      color: $("#color").val(),
      sunShade: $("#sunShade").val(),
      plantingSeason: $("#plantingSeason").val(),
    });
  
    //INFO - Don't think the part below is needed, but I left it.
    // // Create (POST) a new seed
    // $(`#submitseeds`).click(function (e) {
    //   e.preventDefault();
  
    //   console.log("Submitting seeds...");
  
    // });
  
    //     function refreshSeedList() {
    //         $.ajax({
    //             url: url_endpoint,
    //             type: "GET",
    //         dataType: "json",
    //         success: function(data) {
    //             let seedList = "";
    //             data['seed-list'].forEach(seed => {
    //                 seedList += `
    //                     <tr>
    //                         <td>${seed.commonName}</td>
    //                         <td>${seed.latinName}</td>
    //                         <td>${seed.color}</td>
    //                         <td>${seed.sunShade}</td>
    //                         <td>${seed.plantingSeason}</td>
    //                         <td>
    //                             <button class="btn btn-danger delete-seed" data-id="${seed.id}">Delete</button>
    //                         </td>
    //                     </tr>
    //                 `;
    //             });
    //             $("#seed-list").html(seedList);
    //         }
    //     });
    // }
  
    $("#updateSeedEntry").click(updateSeedEntry);
  
    // document.getElementById("seed-list").addEventListener("click", function(e) {
    //     if (e.target.classList.contains("delete-seed")) {
    //         const seedId = e.target.dataset.id;
    //         $.ajax({
    //             url: `${url_endpoint}/${seedId}`,
    //             method: "DELETE",
    //             success: function() {
    //                 refreshSeedList();
    //             }
    //         });
    //     }
    // });
  
    // Initial list load
    //     refreshSeedList();
  });