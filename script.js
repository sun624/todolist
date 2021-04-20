// add event listener to add list button
document
  .getElementById("userForm")
  .addEventListener("submit", createDestination);

/*  create an card element using bootstrap 
 *  <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to buildon the card title and make up the bulk of the card'scontent.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
 */

async function createDestination(event) {
  event.preventDefault();

  //get user info
  const name = event.target["destination_name"].value;
  const location = event.target["destination_location"].value;
  const photo = await getPhotoUrl(event.target["destination_name"].value);
  const description = event.target["description"].value;

  //reset user input
  event.target["destination_name"].value="";
  event.target["destination_location"].value="";
  event.target["description"].value="";

  //create a card
  const newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.style.width = "15rem";
  newCard.style.margin = "20px";
  document.querySelector(".destination_container").appendChild(newCard);

  //create the image
  const image = document.createElement("img");
  image.setAttribute("class", "card-img-top");
  const fallBackUrl =
    "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
  const url = photo.length === 0 ? fallBackUrl : photo;
  image.setAttribute("src", url);
  newCard.appendChild(image);

  //create card body
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  newCard.appendChild(cardBody);

  //create Destination name (card-title)
  const cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.innerHTML = name;
  cardBody.appendChild(cardTitle);

  //create Destination location(card-subtitle)
  const cardSubtitle = document.createElement("h6");
  cardSubtitle.setAttribute("class", "card-subtitle");
  cardSubtitle.innerHTML = location;
  cardSubtitle.style.color = "gray";
  cardBody.appendChild(cardSubtitle);

  //create description
  const cardDescription = document.createElement("p");
  cardDescription.setAttribute("class", "card-text");
  cardDescription.innerHTML = description;
  cardBody.appendChild(cardDescription);

  //create button container
  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "button_container");
  cardBody.appendChild(buttonContainer);

  //create edit button
  const editButton = document.createElement("button");
  editButton.setAttribute("class", "btn btn-warning");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", editDestinaton);
  buttonContainer.appendChild(editButton);

  //create remove button
  const removeButton = document.createElement("button");
  removeButton.setAttribute("class", "btn btn-danger");
  removeButton.innerHTML = "Remove";
  removeButton.addEventListener("click", removeDestinaton);
  buttonContainer.appendChild(removeButton);
}

async function getPhotoUrl(name){
  const API = `https://api.unsplash.com/search/photos?client_id=xk00MhkV4FGkpuQliJKQ-19j4skX4JxXox-d1mndQb0&page=1&query=${name}`;

  try {
    const res = await fetch(API);
    const result = await res.json();
    return result.results[0].urls.thumb;
  } catch (error) {
    console.log(error);
  }
}

async function editDestinaton(event) {
  var updatedName = prompt("Where is you new place?");
  var uopdatedLocation = prompt("where is the next Stop?");
  var updatedUrl = await getPhotoUrl(updatedName);
  var updatedDescription = prompt("Your new description for the next trip");

  if (updatedName.length > 0) {
    event.target.parentNode.parentNode.children[0].innerHTML = updatedName;
  }

  if (uopdatedLocation.length > 0) {
    event.target.parentNode.parentNode.children[1].innerHTML = uopdatedLocation;
  }

  if (updatedUrl.length > 0) {
    event.target.parentNode.parentNode.parentNode.children[0].setAttribute("src",updatedUrl);
  }

  if (updatedDescription.length > 0) {
    event.target.parentNode.parentNode.children[2].innerHTML = updatedDescription;
  }
}

function removeDestinaton(event) {
  event.currentTarget.parentNode.parentNode.parentNode.remove();
}
