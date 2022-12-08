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
  // console.log(data);
  show(data);
  function show(data) {
    let tab =

      `<tr>
              <th>Report Date</th>
              <th>Noice</th>
              <th>Meh</th>
              <th>Sadge</th>
             </tr>`;
    // Loop to access all rows 
    for (let r of data) {
      tab += `<tr> 
        <td>${r.reportDate} </td>
        <td>${r.puas} </td>
        <td>${r.biasa}</td>
        <td>${r.tidakPuas}</td> 
    </tr>`;
    }
    // setInterval(function() {
    //   location.reload()
    // }, 10000)


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
              <th>Noice</th>
              <th>Meh</th>
              <th>Sadge</th>
             </tr>`;

    // Loop to access all rows 
   
      tab += `<tr> 
        <td>${data.puas} </td>
        <td>${data.biasa}</td>
        <td>${data.tidakPuas}</td> 
    </tr>`;
    
    // setInterval(function() {
    //   location.reload()
    // }, 10000)


    // Setting innerHTML as tab variable
    document.getElementById("now").innerHTML = tab;
  }
}


