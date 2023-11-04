
    const url_endpoint = "http://localhost:3000/seed-list";

     

    document.getElementById("add-seed-form").addEventListener("submit", e => {
        e.preventDefault();
        //the above prevent default stops the page from reloading each time, so you can work with it
        //Below 11-16 pulls the data from the db.json and defines it to be used in the app
        const id = document.getElementById("id").value;
        const commonName = document.getElementById("common-name").value;
        const latinName = document.getElementById("latin-name").value;
        const color = document.getElementById("color").value;
        const sunShade = document.getElementById("sun-shade").value;
        const plantingSeason = document.getElementById("planting-season").value;

        // Create (POST) a new seed
            $.post(url_endpoint,{
              id: id,
              commonName: commonName,
              latinName:latinName,
              color:color,
              sunShade:$('#sun-shade').val(),
              plantingSeason:$('#planting-season').val(), //syntactic sugar! both formats do the same thing,
              // I left a couple so I could see the difference later.
            })
          })
   

        // Read/.get - adds the new seeds data to the table.  
        //It takes the user inputted data and appends it to the db.jsonfile
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

    
//This function updates the list with the user entered data in the Add Seed Entry/Update form
//It took me a LONG time to get every data point to match and work correctly.  
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
     //This line of code below makes the update button, named in the html doc as updateseedEntry, 
     //work, to change the entry. The id has to be an already existing id# in the list for it to change it. 
      $('#updateSeedEntry').click(updateSeedEntry)

      //check all data, correct it.
    // 
    // Delete - Remove seed entry. This function makes the delete button, (defined above in the .get table)
    // named deleteSeedEntry operate:
    function deleteSeedEntry (id) {

        $.ajax(`${url_endpoint}/${id}`, {
          type:'DELETE'
        })
      }


