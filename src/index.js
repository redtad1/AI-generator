function generate(event) {
  event.preventDefault();
  let apikey = "c43da09a1983b5385088td638a5of324";
  let context =
    "you are a funny AI assistant that tells short and sweet Jokes. the joke must be provided in HTML format. Example:<p>this is a joke</p>";
  let prompt = "Generate a short and funny joke about chickens.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = "Getting ready 🥸 plaese wait";

  console.log("called the. AI api");
  axios.get(apiUrl).then(displayJoke);
}
