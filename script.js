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

function createDestination(event) {
  event.preventDefault();

  //get user info
  var name = event.target["destination_name"].value;
  var location = event.target["destination_location"].value;
  var photo = event.target["url"].value;
  var description = event.target["description"].value;

  //create a card
  var newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.style.width = "18rem";
  newCard.style.margin = "20px";
  document.querySelector(".destination_container").appendChild(newCard);

  //create the image
  var image = document.createElement("img");
  image.setAttribute("class", "card-img-top");
  const fallBackUrl =
    "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
  let url = photo.length === 0 ? fallBackUrl : photo;
  image.setAttribute("src", url);
  newCard.appendChild(image);

  //create card body
  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  newCard.appendChild(cardBody);

  //create Destination name (card-title)
  var cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.innerHTML = name;
  cardBody.appendChild(cardTitle);

  //create Destination location(card-subtitle)
  var cardSubtitle = document.createElement("h6");
  cardSubtitle.setAttribute("class", "card-subtitle");
  cardSubtitle.innerHTML = location;
  cardSubtitle.style.color = "gray";
  cardBody.appendChild(cardSubtitle);

  //create description
  var cardDescription = document.createElement("p");
  cardDescription.setAttribute("class", "card-text");
  cardDescription.innerHTML = description;
  cardBody.appendChild(cardDescription);

  //create button container
  var buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "button_container");
  cardBody.appendChild(buttonContainer);

  //create edit button
  var editButton = document.createElement("button");
  editButton.setAttribute("class", "btn btn-warning");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", editDestinaton);
  buttonContainer.appendChild(editButton);

  //create remove button
  var removeButton = document.createElement("button");
  removeButton.setAttribute("class", "btn btn-danger");
  removeButton.innerHTML = "Remove";
  removeButton.addEventListener("click", removeDestinaton);
  buttonContainer.appendChild(removeButton);
}

function editDestinaton(event) {
  var updatedName = prompt("Where is you new place?");
  var uopdatedLocation = prompt("where is the next Stop?");
  var updatedUrl = prompt("You new desitnation photo url");
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