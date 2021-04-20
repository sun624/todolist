// add event listener to add list button
document
  .getElementById("userForm")
  .addEventListener("submit", createDestination);
/*
 * This function create destination card
 */
async function createDestination(event) {
  //prevent default behaviours of submit button
  event.preventDefault();

  /*get user info
   */

  //assign the desination name to name variable.
  const name = event.target["destination_name"].value;

  //assign destination location to location variable.
  const location = event.target["destination_location"].value;

  //pass destination name to getPhotoUrl to return photo url
  const photo = await getPhotoUrl(name);

  //assign user input description to description variable.
  const description = event.target["description"].value;

  //reset user input

  //reset destination name to empty
  event.target["destination_name"].value = "";

  //reset destination location to empty
  event.target["destination_location"].value = "";

  //reset description to empty
  event.target["description"].value = "";

  //create a card

  //<div></div>
  const newCard = document.createElement("div");

  //<div class="card"></div>
  newCard.setAttribute("class", "card");

  //<div class="card" style = "width: 15rem; margin:20px"></div>
  newCard.style.width = "15rem";
  newCard.style.margin = "20px";

  //<div class = "destination_container">
  //  <div class="card" style = "width: 15rem; margin:20px">
  //  </div>
  //</div>
  document.querySelector(".destination_container").appendChild(newCard);

  //create the image

  //<img>
  const image = document.createElement("img");

  //<img class = "card-img-top">
  image.setAttribute("class", "card-img-top");

  //<img class = "card-img-top" src = photo>
  image.setAttribute("src", photo);

  //  <div class="card" style = "width: 15rem; margin:20px">
  //     <img class = "card-img-top" src = photo>
  //  </div>
  newCard.appendChild(image);

  //create card body

  //<div></div>
  const cardBody = document.createElement("div");

  //<div class = "card-body"></div>
  cardBody.setAttribute("class", "card-body");

  //  <div class="card" style = "width: 15rem; margin:20px">
  //     <img class = "card-img-top" src = photo>
  //     <div class = "card-body"></div>
  //  </div>
  newCard.appendChild(cardBody);

  //create Destination name (card-title)

  //<h5></h5>
  const cardTitle = document.createElement("h5");

  //<h5 class = "card-title"></h5>
  cardTitle.setAttribute("class", "card-title");

  //<h5 class = "card-title">name</h5>
  cardTitle.innerHTML = name;

  //  <div class="card" style = "width: 15rem; margin:20px">
  //     <img class = "card-img-top" src = photo>
  //     <div class = "card-body">
  //        <h5 class = "card-title">name</h5>
  //      </div>
  //  </div>
  cardBody.appendChild(cardTitle);

  //create Destination location(card-subtitle)

  //<h6></h6>
  const cardSubtitle = document.createElement("h6");

  //<h6 class = "card-subtitle"></h6>
  cardSubtitle.setAttribute("class", "card-subtitle");

  //<h6 class = "card-subtitle">location</h6>
  cardSubtitle.innerHTML = location;

  //<h6 class = "card-subtitle" style = "color: gray">location</h6>
  cardSubtitle.style.color = "gray";

  //  <div class="card" style = "width: 15rem; margin:20px">
  //     <img class = "card-img-top" src = photo>
  //     <div class = "card-body">
  //        <h5 class = "card-title">name</h5>
  //        <h6 class = "card-subtitle" style = "color: gray">location</h6>
  //      </div>
  //  </div>
  cardBody.appendChild(cardSubtitle);

  //create description

  //<p></p>
  const cardDescription = document.createElement("p");

  //<p class = "card-text"></p>
  cardDescription.setAttribute("class", "card-text");

  //<p class = "card-text">description</p>
  cardDescription.innerHTML = description;

  //  <div class="card" style = "width: 15rem; margin:20px">
  //     <img class = "card-img-top" src = photo>
  //     <div class = "card-body">
  //        <h5 class = "card-title">name</h5>
  //        <h6 class = "card-subtitle" style = "color: gray">location</h6>
  //        <p class = "card-text">description</p>
  //      </div>
  //  </div>
  cardBody.appendChild(cardDescription);

  //create button container

  //<div></div>
  const buttonContainer = document.createElement("div");

  //<div class = "button_container"></div>
  buttonContainer.setAttribute("class", "button_container");

  //  <div class="card" style = "width: 15rem; margin:20px">
  //     <img class = "card-img-top" src = photo>
  //     <div class = "card-body">
  //        <h5 class = "card-title">name</h5>
  //        <h6 class = "card-subtitle" style = "color: gray">location</h6>
  //        <p class = "card-text">description</p>
  //        <div class = "button_container"></div>
  //      </div>
  //  </div>
  cardBody.appendChild(buttonContainer);

  //create edit button

  //<button></button>
  const editButton = document.createElement("button");

  //<button class = "btn btn-warning"></button>
  editButton.setAttribute("class", "btn btn-warning");

  //<button class = "btn btn-warning">Edit</button>
  editButton.innerHTML = "Edit";

  //call editDestination once click on Edit button
  editButton.addEventListener("click", editDestinaton);

  //  <div class="card" style = "width: 15rem; margin:20px">
  //     <img class = "card-img-top" src = photo>
  //     <div class = "card-body">
  //        <h5 class = "card-title">name</h5>
  //        <h6 class = "card-subtitle" style = "color: gray">location</h6>
  //        <p class = "card-text">description</p>
  //        <div class = "button_container">
  //          <button class = "btn btn-warning">Edit</button>
  //        </div>
  //      </div>
  //  </div>
  buttonContainer.appendChild(editButton);

  //create remove button

  //<button></button>
  const removeButton = document.createElement("button");

  //<button class = "btn btn-danger"></button>
  removeButton.setAttribute("class", "btn btn-danger");

  //<button class = "btn btn-danger">Remove</button>
  removeButton.innerHTML = "Remove";

  //call removeDestination once click on Remove button
  removeButton.addEventListener("click", removeDestinaton);

  //  <div class="card" style = "width: 15rem; margin:20px">
  //     <img class = "card-img-top" src = photo>
  //     <div class = "card-body">
  //        <h5 class = "card-title">name</h5>
  //        <h6 class = "card-subtitle" style = "color: gray">location</h6>
  //        <p class = "card-text">description</p>
  //        <div class = "button_container">
  //          <button class = "btn btn-warning">Edit</button>
  //          <button class = "btn btn-danger">Remove</button>
  //        </div>
  //      </div>
  //  </div>
  buttonContainer.appendChild(removeButton);
}

/*
 * this function returns a photo url from unsplash.com
 * if no results return from unsplash.com, then return default photo url 
 */
async function getPhotoUrl(name) {

  // query API 
  const API = `https://api.unsplash.com/search/photos?client_id=xk00MhkV4FGkpuQliJKQ-19j4skX4JxXox-d1mndQb0&page=1&query=${name}`;

  //default photo URL
  const fallBackUrl =
    "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";

  try {
    //get data object from API response
    const res = await fetch(API);

    //get JSON data from the object
    const result = await res.json();

    //if no results returned, show default photo, otherwise show the first photo from results
    return result.total === 0 ? fallBackUrl : result.results[0].urls.thumb;
  } catch (error) {
    console.log(error);
  }
}

/*
 * This function return updated name, location and photo for Edit button
 */
async function editDestinaton(event) {
  //get new Name
  const updatedName = prompt("Where is you new place?");

  //get new location
  const uopdatedLocation = prompt("where is the next Stop?");

  //get new photo url from new name
  const updatedUrl = await getPhotoUrl(updatedName);

  //get new description
  const updatedDescription = prompt("Your new description for the next trip");

  //if the new name is valid, change to new name
  if (updatedName.length > 0) {
    event.target.parentNode.parentNode.children[0].innerHTML = updatedName;
  }

  //if the new location is valid, change to new location
  if (uopdatedLocation.length > 0) {
    event.target.parentNode.parentNode.children[1].innerHTML = uopdatedLocation;
  }

  //change the old url to new url
  event.target.parentNode.parentNode.parentNode.children[0].setAttribute(
    "src",
    updatedUrl
  );

  //if the new description is valid, change to new description
  if (updatedDescription.length > 0) {
    event.target.parentNode.parentNode.children[2].innerHTML = updatedDescription;
  }
}

/*
 * This function remove the whole card
 */
function removeDestinaton(event) {
  //remove
  //parent^3 <div class="card" style = "width: 15rem; margin:20px">
  //           <img class = "card-img-top" src = photo>
  //parent^2    <div class = "card-body">
  //              <h5 class = "card-title">name</h5>
  //              <h6 class = "card-subtitle" style = "color: gray">location</h6>
  //              <p class = "card-text">description</p>
  //parent        <div class = "button_container">
  //                <button class = "btn btn-warning">Edit</button>
  //Target          <button class = "btn btn-danger">Remove</button>
  //              </div>
  //            </div>
  //          </div>
  event.currentTarget.parentNode.parentNode.parentNode.remove();
}