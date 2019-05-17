/*

Dummy Data generation
----------------------
mockroo.com

Hosting JSON on Google
-----------------------
myjson.com

for Random User Generation
---------------------------
https://randomuser.me/

 */



// JavaScript AJAX
$('#js-ajax').click(function() {

    // Create an AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','https://api.myjson.com/bins/vaede',true);

    // Send the request
    http.send();

    // Check the status of Request
    http.onreadystatechange = () => {
        // if response is ready and its safe
        if(http.readyState === 4 && http.status === 200){
            let data = http.responseText;
            let persons = JSON.parse(data);
            processData(persons);
        }
    };
});

// JQuery AJAX
$('#jquery-ajax').click(function() {
    $.ajax({
        method : 'GET',
        url : 'https://api.myjson.com/bins/1cv45e',
        success : function(data) {
            processData(data);
        }
    });
});

// Process the data
let processData = (persons) => {
    let tableRow = '';
    for(let person of persons){
        tableRow += `<tr>
                        <td>${person.id}</td>
                        <td>${person.first_name}</td>
                        <td>${person.last_name}</td>
                        <td>${person.gender}</td>
                        <td>${person.email}</td>
                        <td>${person.ip_address}</td>
                     </tr>`;
    }
    $('#t_body').empty().append(tableRow);
};