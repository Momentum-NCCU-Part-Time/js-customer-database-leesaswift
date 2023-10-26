let customerContainer=document.querySelector('.container')

function customerDirectoryCard(customer){
    let customerCard = document.createElement('div');
    let customerPhoto = document.createElement('img');
    let customerName = document.createElement('h2');
    let customerEmail = document.createElement('em');
    let customerInfo = document.createElement('ul');
    let address1 = document.createElement('ul');
    let address2 = document.createElement('ul');
    let dob = document.createElement('ul');
    let regDate = document.createElement('ul');

    let customerNameText = document.createElement ('h2');
        customerName.innerText = 
        customer.name.first.charAt(0).toUpperCase() + 
        customer.name.first.slice(1) + 
        " " +
        customer.name.last.charAt(0).toUpperCase() + 
        customer.name.last.slice(1);




    customerNameText.innerText = customerNameText;
    customerPhoto.src = customer.picture.large;
    customerEmail.innerText = customer.email;
    address1.innerText = customer.location.street.number + " " + customer.location.street.name;
    address2.innerText = customer.location.city + ", " + nameToAbbr(customer.location.state) + " " + customer.location.postcode;
    dob.innerText = "DOB: " + moment(customer.dob.date).format("MMM D, YYYY");
    regDate.innerText = "Customer since: " + moment(customer.registered.date).format("MMM D, YYYY");


    customerCard.appendChild(customerPhoto);
    customerCard.appendChild(customerName);
    customerCard.appendChild(customerEmail);
    customerCard.appendChild(customerInfo);

    customerInfo.appendChild(address1);
    customerInfo.appendChild(address2);
    customerInfo.appendChild(dob);
    customerInfo.appendChild(regDate);
  
    customerContainer.appendChild(customerCard)
    }
  
  let database = customers.map((customer) => customerDirectoryCard(customer))




