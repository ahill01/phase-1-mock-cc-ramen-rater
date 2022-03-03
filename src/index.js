// write your code here

//GRAB COMPONENTS, make them globally accessible 
const ramenMenu = document.querySelector(`#ramen-menu`);
const ramenNameBox = document.querySelector(`.name`);
const restaurauntNameBox = document.querySelector(`.restaurant`);
const detailImage = document.querySelector(`.detail-image`);
const ratingBox = document.querySelector(`#rating-display`);
const commentBox = document.querySelector(`#comment-display`);
const ramenForm = document.querySelector(`#new-ramen`);
const newNameBox = document.querySelector(`#new-name`);
const newRestaurantBox = document.querySelector(`#new-restaurant`);
const newImgBox = document.querySelector(`#new-image`); 
const newRatingBox = document.querySelector(`#new-rating`);
const newCommentBox = document.querySelector(`#new-comment`); 

//request ramen objects from server
fetch(`http://localhost:3000/ramens`)
.then((ramens) => ramens.json())
.then(ramenData => renderRamen(ramenData))

//renderRamen inside ramen-menu
function renderRamen(ramenData){
  //console.log(ramenData);

  //RENDER EACH BOWL, ADD EVENT LISTENER 
   ramenData.forEach(bowl => {
   const ramenImg = document.createElement(`img`)
   ramenImg.src = bowl.image;

   //add details so they can be accessible later
   ramenImg.details = {
       name:bowl.name, 
       restaurant: bowl.restaurant,
       comment: bowl.comment,
       rating: bowl.rating,
       id: bowl.id,
   }

   ramenImg.addEventListener(`click`, e => renderDetail(e));
   ramenMenu.appendChild(ramenImg);
});
};

//SEE DETAILS WHEN YOU CLICK A RAMEN, UDPATE DETAIL BOX & COMPONENTS
function renderDetail(e){
    //console.log(`${e.target.details.name} has been clicked`);
    detailImage.src= e.target.src;
    ratingBox.innerText = e.target.details.rating;
    commentBox.innerText = e.target.details.comment;
    restaurauntNameBox.innerText = e.target.details.restaurant;
    ramenNameBox.innerText = e.target.details.name;
};

//CREATE A NEW RAMEN, DOES NOT NEED TO STICK
ramenForm.addEventListener(`submit`,e => createRamen(e));

function createRamen(event){
event.preventDefault();
const newBowl = {
    name:newNameBox.value,
    restaurant: newRestaurantBox.value,
    image:newImgBox.value,
    rating:newRatingBox.value,
    comment:newCommentBox.value,
}

//renderRamen expects an array so we're making one lol
newBowlArray = [newBowl];
renderRamen(newBowlArray)

}
