function displayRecipe(response) {
  console.log(response);
  new Typewriter("#recipe-generator", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}
function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apikey = "c43da09a1983b5385088td638a5of324";
  let prompt = `User instructions:Generate a delicious cookie recipe ${instructionsInput.value}`;
  let context = `You are a baker that likes short and simple cookie recipes in basic HTML and separate each line always with <br/>. Please include the title in an <h3>`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  console.log(`API URL: ${apiUrl}`);

  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(displayRecipe);
  let promptRecipeElement = document.querySelector("#prompt-recipe");
  promptRecipeElement.innerHTML =
    '<p class="generating-message">👩‍🍳❤️Generating a delicious cookies recipe for you😋🍪!</p>';
}

let promptRecipeElement = document.querySelector("#prompt-recipe");
promptRecipeElement.addEventListener("submit", generateRecipe);

let recipeGeneratorElement = document.querySelector("#recipe-generator");
recipeGeneratorElement.innerHTML = `<div class="generating">👩‍🍳 Here's a delicious cookies recipe for you🍪 !</div>`;
