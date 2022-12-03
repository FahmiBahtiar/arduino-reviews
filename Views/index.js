const api_url =
    "http://localhost:3000/api/v1/review";
const url_api =
    "http://localhost:3000/api/v1/review/now";

    getapi(api_url);
    getapi1(url_api);
// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
    function show(data) {

        let tab =
            `<tr>
              <th>Report Date</th>
              <th>Puas</th>
              <th>Tidak Puas</th>
              <th>Biasa</th>
             </tr>`;
    
        // Loop to access all rows 
        for (let r of data.reviews) {
            tab += `<tr> 
        <td>${r.reportDate} </td>
        <td>${r.puas} </td>
        <td>${r.tidakPuas}</td>
        <td>${r.biasa}</td> 
    </tr>`;
        }
        setInterval(function () {
            location.reload()
        }, 5000)
    
    
        // Setting innerHTML as tab variable
        document.getElementById("employees").innerHTML = tab;
    }
}

async function getapi1(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
    function show(data) {

        let tab =
            `<tr>
              <th>Report Date</th>
              <th>Puas</th>
              <th>Tidak Puas</th>
              <th>Biasa</th>
             </tr>`;
    
        // Loop to access all rows 
        for (let r of data.reviews) {
            tab += `<tr> 
        <td>${r.reportDate} </td>
        <td>${r.puas} </td>
        <td>${r.tidakPuas}</td>
        <td>${r.biasa}</td> 
    </tr>`;
        }
        setInterval(function () {
            location.reload()
        }, 5000)
    
    
        // Setting innerHTML as tab variable
        document.getElementById("now").innerHTML = tab;
    }
}


