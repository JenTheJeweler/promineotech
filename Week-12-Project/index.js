//when the DOM loads, then load the .Js file:

    const url_endpoint = "http://localhost:3000/seed-list";

     

    document.getElementById("add-seed-form").addEventListener("submit", e => {
        e.preventDefault();
        //the above prevent default stops the page from reloading each time, so you can work with it
        const id = document.getElementById("id").value;
        const commonName = document.getElementById("common-name").value;
        const latinName = document.getElementById("latin-name").value;
        const color = document.getElementById("color").value;
        const sunShade = document.getElementById("sun-shade").value;
        const plantingSeason = document.getElementById("planting-season").value;

        // Create (POST) a new seed
        // $(`#submitseeds`).click(function () {
            $.post(url_endpoint,{
              id: id,
              commonName: commonName,
              latinName:latinName,
              color:color,
              sunShade:$('#sun-shade').val(),
              plantingSeason:$('#planting-season').val(), //syntactic sugar!
            })
          })
    // })

        // Read/.get - adds the new seeds data to the table
        
        $.get(url_endpoint).then(data => {
            data.map(seeds => {
            $('tbody').append(
              $(`
              <tr>
                <td> ${seeds.id}</td>
                <td> ${seeds.commonName}</td>
                <td> ${seeds.latinName}</td>
                <td> ${seeds.color}</td>
                <td> ${seeds.sunShade}</td>
                <td> ${seeds.plantingSeason}</td>
                <td> <button onclick="deleteSeedEntry(${seeds.id})">🗑</button>  
                </td>
              <tr>
              `)
            )
            })
            }
            )

    

    function updateSeedEntry() {
        let id = $("#edit-id").val();
      
        $.ajax(`${url_endpoint}/${id}`, {
          method: 'PUT',
          data: {
              id: $('#edit-id').val(),
              commonName: $('#edit-common-name').val(),
              latinName:$('#edit-latin-name').val(),
              color:$('#edit-color').val(),
              sunShade:$('#edit-sun-shade').val(),
              plantingSeason:$('#edit-planting-season').val(),
          }
        })
     }
      $('#updateSeedEntry').click(updateSeedEntry)

      //check all data, correct it.
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

    // // Initial list load
    // refreshSeedList();
    
