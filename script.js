
let recipe_type;
let recipe_id;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e90365cb8amsh65be988104b6c59p1617adjsn62278d9dae50',
// 		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
// 	}
// };
function initialize() {
    getAllrecipe()

}

initialize();

function getAllrecipe() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((resp) => resp.json())
        .then((data) => {
            let datameals = data.meals
            // console.log(datameals[0].strInstructions)
            let ourmeal = datameals[0]
            renderRecipe(ourmeal)

        }
        )
    //.then(response => console.log(response))
    // .then((recipe_Data)=>{
    //     console.log(recipe_Data);
    //     let ourrecipe = recipe_Data.meals;
    //     console.log(ourrecipe);
    //     renderRecipe(ourrecipe)
    //         for (let i in ourrecipe){
    //             let recipe = ourrecipe[i];
    //             console.log(recipe);

    //             // data.name.forEach(items=>{
    //                 let recipe_names = document.createElement('li')
    //                 recipe_names.setAttribute('id', 'recipe-list')
    //                 recipe_names.textContent = recipe.strMeal
    //                 let recipe_names_list = document.getElementById("recipe-list")
    //                 recipe_names_list.appendChild(recipe_names)
    //         }

    //     });
}
function renderRecipe(data) {
    // console.log(data)
    let recipeoftheday = document.getElementById('recipename')
    recipeoftheday.textContent = data.strMeal
    let images_Detail = document.getElementById("todaysimg")
    images_Detail.src = data.strMealThumb
    // console.log(data.strMealThumb)
    let instructionsdiv = document.getElementById("recipe_descri")
    instructionsdiv.textContent = data.strInstructions
    for (let x in data) {
        let measuredIngrs
        // let msr;
        let key1
        if (x.includes("strIngredient")) {
            key1 = x
            let ind = x.substring("strIngredient".length)
            let key2 = "strMeasure" + ind
            // console.log(data[key2] + " "+ data[key1] )

            measuredIngrs = data[key2] + " " + data[key1]

        }
        // console.log(measuredIngrs)
        if (data[key1]) {
            let ingredientlist = document.getElementById('gredient')
            let myingredient = document.createElement('li')
            myingredient.textContent = measuredIngrs
            ingredientlist.appendChild(myingredient)
        }
    }
}
let firstbutton = document.getElementById("search-btn")
firstbutton.addEventListener('click', clickfn)
function clickfn() {
    // let userput=document.getElementById('user-inp')
    // let userword=userput.value
    // console.log(userword)
    const myUr = "https://www.themealdb.com/api/json/v1/1/search.php?s="
    const word = document.getElementById("user-inp").value
    // console.log(word)
    const finalUrl = myUr + word
    fetch(finalUrl).then((resp) => resp.json()).then(
        (data) => {
            let searchmeals = data.meals
            console.log(searchmeals)
            // console.log(searchmeals)
            // get random index value
            const randomIndex = Math.floor(Math.random() * searchmeals.length);
            // console.log(searchmeals.meals.length)

            // get random item
            const item = searchmeals[randomIndex];
            console.log(item)
            renderRecipe(item)

        }



    )



}
let secondbutton = document.getElementById("homebutton")
secondbutton.addEventListener("click", onclick)
function onclick() {
    alert("Welcome to Pinch Of Yum Recipes.The home of the best recipes in the world!")
}
let thirdbutton = document.getElementById("aboutbutton")
thirdbutton.addEventListener("click", aboutfn)
function aboutfn() {
    let paragraph = document.getElementById("pabout")
    paragraph.innerHTML = "Pinch of Yum of Recipes is your number one recipe website if you are looking for a way to improve your relationship with your body and with food.We are here to help you prepare that fingerlicking meal you fantasize over with ease.Here it's all about delicious and nutritious recipes."
}
let fourthbutton = document.getElementById("contactbutton")
fourthbutton.addEventListener("click", deletefn)
function deletefn() {
    let paragraph = document.getElementById("pabout")
    paragraph.innerHTML = ''
}