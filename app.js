const searchBox=document.querySelector('.searchBox');
const searchBtn=document.querySelector('.searchBtn');
const resipeContainer=document.querySelector('.resipe-container');
const resipeDetailsContent=document.querySelector('.resipe-details-content');
const resipeCloseBtn=document.querySelector('.resipe-close-btn');

const fetchResipes = async (query) =>{
    resipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>";
 const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
 const response = await data.json();

 resipeContainer.innerHTML = "";
 response.meals.forEach(meal => {
  const resipeDiv = document.createElement('div');
  resipeDiv.classList.add('resipe');
  resipeDiv.innerHTML =`
    <img src= "${meal.strMealThumb}">
    <h3> ${meal.strMeal}</h3>
    <p> <span>${meal.strArea}</span> </p>
    <p>Belongs to <span>${meal.strCategory}</span> Category</p>
  
  `
  const button =document.createElement('button');
  button.textContent="View Resipe";
  resipeDiv.appendChild(button);


//Adding addEventListener to resipe button
button.addEventListener('click',()=>{
    openRecipepopup(meal);
})



  resipeContainer.appendChild(resipeDiv);
 });
}
   
//function to fetch ingreedients and mesurments

const fetchIngredients= ()=>{
    
}

const openRecipepopup=(meal) => {
    resipeDetailsContent.innerHTML =`
    <h2>${meal.strMeal}</h2>
    <h3>ingredents:</h3>
    <ul>${fetchIngredients(meal)}</ul>
    `
    resipeDetailsContent.parentElement.style.display="block";
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchResipes(searchInput);
//console.log("button-clicked")
}); 