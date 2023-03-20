const mainBlock = document.querySelector('main');

const blockResults= document.createElement('div');
blockResults.classList.add('blockResults');
mainBlock.prepend(blockResults);

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);

blockResults.innerHTML = `
    <h1 class="headerResults">Thanks for your order!</h1>
            <div class="result-text">
            Customer: ${params.get("name")}, ${params.get("surname")}; <br>
            Street: ${params.get("street")}; <br>
            House number: ${params.get("houseNumber")}; <br>
            Flat number: ${params.get("flatNumber")}; <br>
            Delivery date: ${params.get("deliveryDate")}. <br>
         
           
`