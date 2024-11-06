let customers = [
    {
        id: "C001",
        name: "nimal",
        address: "panadura",
        age: 12
    }
];


loadItems();

async function loadItems() {
    
    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
            <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                  <h2>${element.continents}</h2>
                    <p class="card-text">${element.altSpellings}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <p class="p-4 fw-bold">Capital: ${element.capital}</p>
                        <p class="p-4 fw-bold">Timezones: ${element.timezones}</p>

                      </div>
                      <small class="text-body-secondary"></small>
                    </div>
                  </div>
                </div>
              </div>
        `;

        
        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}