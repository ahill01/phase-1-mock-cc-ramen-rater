//GRAB ALL CONTAINERS
const ramenMenu = document.querySelector(`#ramen-menu`);
const baseURL = `http://localhost:3000/ramens`
const detailsBox = document.querySelector(`#ramen-detail`);
const detailImgBox = detailsBox.querySelector(`img`);
const nameBox = detailsBox.querySelector(`.name`);
const restaurantBox = detailsBox.querySelector(`.restaurant`);
const ratingsBox = document.querySelector(`#rating-display`);
const commentBox = document.querySelector(`#comment-display`);
const ramenForm = document.querySelector(`#new-ramen`);
const newName = document.querySelector(`#new-name`);
const newRestaurant = document.querySelector(`#new-restaurant`);
const newRating = document.querySelector(`#new-rating`);
const newComment = document.querySelector(`#new-comment`);
const newImage = document.querySelector(`#new-image`);




// fetch something
fetch(baseURL)
.then(ramensJSON => ramensJSON.json())
.then(ramensArr =>renderRamen(ramensArr));

//grab ramen menu, add pictures for each bowl of ramen -> renderRamen(ramenObject)
function renderRamen(ramensArr){
    console.log(ramensArr);
    ramensArr.forEach(bowl => {
        //debugger;
        //make img element
        const ramenImg = document.createElement(`img`);

        //fill it with stuff
        ramenImg.src = bowl.image;
        
        //add ramen details to img element
        ramenImg.details = bowl;

        //add click event
        ramenImg.addEventListener(`click`,(e) => renderDetails(e));
       
        //append it
        ramenMenu.append(ramenImg);

    })
}

//render ramen details
function renderDetails(e){
    //debugger;
    console.log('clicked a ramen');
    
    detailImgBox.src = e.target.src;
    nameBox.innerText = e.target.details.name;
    restaurantBox.innerText = e.target.details.restaurant;
    ratingsBox.innerText = e.target.details.rating;
    commentBox.innerText = e.target.details.comment;
 }

//adding a new ramen grabbing new ramen info, renderRamen(newRamen)
//submit event listener
ramenForm.addEventListener(`submit`,(e) => newRamen(e));

function newRamen(e){
    e.preventDefault();
   //console.log(`making a new ramen`);
    //grab info from form -> ramenObject 
    let name = newName.value;
   const ramenObj = {
       id:"",
       name: newName.value,
       image:newImage.value,
       restaurant:newRestaurant.value,
       rating:newRating.value,
       comment:newComment.value,
   }
   //debugger;
   console.log(ramenObj);

    //renderRamen
const newRamenArr = [ramenObj];
renderRamen(newRamenArr);

}
