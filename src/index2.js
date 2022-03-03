// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
    //fetch ramen from server

    // render ramen in ramen-menu

    // 

const ramenMenu = document.querySelector("#ramen-menu");
const baseURL = "http://localhost:3000"; 
let ramenArray;
fetch(baseURL+"/ramens")
.then((res) => res.json())
.then((ramensData) => renderRamens(ramensData)); 

function renderRamens(ramens){
    //ramenArray = ramens; 
ramens.forEach(ramen =>appendRamenImage(ramen));

};
function appendRamenImage(ramenObj){
    {
        const img = document.createElement(`img`);
        img.src = ramen.image;
        img.details = ramen;
        //OPTION 1- add .details
        //img.details = ramen; 
    
        //OPTION 2- closure
        //img.addEventListener(`click`,()=> updateRamenDetails(ramen)); 
    
        //OPTION 3- store only ID # & make call to database
        //img.dataset.id = ramen.id; 
        img.addEventListener(`click`,updateRamenDetails); 
        ramenMenu.append(img);
        
    }
}
// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
    //add clickEvent to each 
    //get ramen details

    //callback function: update detail div 
        //render ramen pic in detail div
        //select boxes
        //update tags w/ correct info

    //render comment 

    //render rating 
    function updateRamenDetails(e){
        let ramen = e.target.details;
        const image = document.querySelector(".detail-image");
        image.src = ramen.image
        const name = document.querySelector(".name");
        name.innerText = ramen.name;
        const restaurant = document.querySelector("restaurant");
        restaurant.innerText = ramen.restaurant;
        const rating = document.querySelector(`#rating-display`);
        rating.innerText = ramen.rating;
        const comment = document.querySelector(`#comment-display`);
        comment.innerText = ramen.comment;
    }


// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

    //event listener -> type = submit   
    //select input fields
    //render ramen pic in ramen-menu

    const ramenForm = document.querySelector("#new-ramen");
    ramenForm.addEventListener("submit",createRamen);

    function createRamen(event){
        event.preventDefault();
        const name = document.querySelector("#new-name").value;
        const restaurant = document.querySelector("#new-restaurant").value;
        const image = document.querySelector("#new-image").value;
        const rating = document.querySelector("#new-rating").value;
        const comment = document.querySelector("#new-comment").value; 
        const ramen = {name,restaurant,image,rating,comment};
        appendRamenImage(ramen);
    };