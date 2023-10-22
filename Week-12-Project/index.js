//when the DOM loads, then load the .Js file:
document.addEventListener("DOMContentLoaded", () => {
    const url_endpoint = "http://localhost:3000/seed-list";

    

    document.getElementById("add-seed-form").addEventListener("submit", e => {
        e.preventDefault();
        //the above prevent default stops the page from reloading each time, so you can work with it
        
        const commonName = document.getElementById("common-name").value;
        const latinName = document.getElementById("latin-name").value;
        const color = document.getElementById("color").value;
        const sunShade = document.getElementById("sun-shade").value;
        const plantingSeason = document.getElementById("planting-season").value;

        // Create (POST) a new seed
        $(`#submitseeds`).click(function () {
            $.post(url_endpoint,{
              commonName: $('#commonName').val(),
              latinName:$('#latinName').val(),
              color:$('#color').val(),
              sunShade:$('#sunShade').val(),
              plantingSeason:$('#plantingSeason').val(),
            })
          })
        
        // Read/.get - adds the new seeds data to the table
        //this doesn't seem to be working. 
        
        
        $.get(url_endpoint).then(data => {
            data.map(seeds => {
            $('tbody').append(
              $(`
              <tr>
                <td> ${seeds.commonName}</td>
                <td> ${seeds.latinName}<td/>
                <td> ${seeds.color}<td/>
                <td> ${seeds.sunShade}<td/>
                <td> ${seeds.plantingSeason}<td/>
                <button onclick="deleteUser(${seeds.id})">🗑</Button>  
                </td>
              <tr>
              `)
            )
            })
            }
            )

        
        
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

    // Update - Modify existing seed entry
    // function updateSeedEntry() {
    //     let id = $("#updateId").val()
      
    //     $.ajax(`${url_endpoint}/${id}`, {
    //       method: 'PUT',
    //       data: {
    //         commonName: $('#commonName').val(),
    //           latinName:$('#latinName').val(),
    //           color:$('#color').val(),
    //           sunShade:$('#sunShade').val(),
    //           plantingSeason:$('#plantingSeason').val(),
    //       }
    //     })
    //   }
    //   $('#updateSeedEntry').click(updateSeedEntry)
      
    // 
    // Delete - Remove seed entry
    function deleteSeedEntry (id) {

        $.ajax(`${url_endpoint}/${id}`, {
          type:'DELETE'
        })
      }


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
})
})