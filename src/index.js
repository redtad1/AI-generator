function generate(event) {
  event.preventDefault();

  new Typewriter("#recipegenerstor", {
    String: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  let apikey = "c43da09a1983b5385088td638a5of324";
  let context = "Be polite. Follow user instructions:";
  let prompt = `User instructions: Generate 1 cookie recipe with the main ingredient of ${userInput.value}. Do not introduce yourself. Separate each sentence with <br/>. Separate each section with <br/>. Display the recipe title in <strong> element. Display the recipe ingredients in <strong> element. Display recipe instructions in <strong> element. Sign the recipe with <br/> element as "Generated with ❤️ by SheCodes AI" in a <strong> element`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  let promptRecipeElement = document.querySelector("#prompt-recipe");
  promptRecipeElement.addEventListener("submit", generateRecipe);

  let recipeGeneratorElement = document.querySelector("#recipe-generator");
  recipeGeneratorElement.innerHTML = `<span class="blink">Generating recipe for a ${userInput.value}cookies ...</span>`;

  console.log;

  console.log("called the. AI api");
  axios.get(apiUrl).then(displayJoke);
}
