function generate(event) {
  event.preventDefault();

  new Typewriter("#recipegenerstor", {
    String: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  let apikey = "c43da09a1983b5385088td638a5of324";
  let prompt = `Generate a delicious cookie recipe about ${instructionsInput.value}`;
  let context =
    "You are a baker that likes short and simple recipes in basic HTML and seperate each line always with <br/>. Please include the title in an <h3>";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  let promptRecipeElement = document.querySelector("#prompt-recipe");
  recipeElement.classList.remove("hide-element");
  promptRecipeElement.addEventListener("submit", generateRecipe);

  let recipeGeneratorElement = document.querySelector("#recipe-generator");
  recipeGeneratorElement.innerHTML = `<div class="recipe">Generating recipe for a ${userInput.value}cookies ...</div>`;

  console.log("called the. AI api");
  axios.get(apiUrl).then(displayJoke);
}
