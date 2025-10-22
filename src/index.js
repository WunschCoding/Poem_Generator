function generatingPoem(event) {
  event.preventDefault();
  let inputPoemForm = document.querySelector("#input-text-form");
  let poemHeadingElement = document.querySelector("#poem-heading");
  poemHeadingElement.innerHTML = inputPoemForm.value;

  let apiKey = "3412to3ec6a4dfdcbfe0195213b47c9a";
  let context =
    "Write a short original poem in English. Tone: Humorous. Imagery: pictorial. Length: 3 stanzas, 2 lines per stanza. Format the OUTPUT ONLY as HTML paragraphs with <p> for each stanza and <br> for each line break. Do NOT include a title, markdown, or extra text—HTML only.";

  let prompt = inputPoemForm.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemByElement = document.querySelector("#poem-by");
  poemByElement.innerHTML = "by ";
  let poemAuthorElement = document.querySelector("#poem-author");
  poemAuthorElement.innerHTML = "SheCodes AI";
  let poemTextElement = document.querySelector("#poem-text");
  poemTextElement.innerHTML = "Poem is being generated";
  let poemMain = document.querySelector("main");
  poemMain.classList.remove("hidden");
  poemTextElement.classList.add("blink");

  axios.get(apiUrl).then(displayPoem);
  inputPoemForm.value = null;
}

function displayPoem(response) {
  let poemText = response.data.answer;
  let poemTextElement = document.querySelector("#poem-text");
  poemTextElement.classList.remove("blink");
  new Typewriter("#poem-text", {
    strings: poemText,
    autoStart: true,
    delay: 25,
    cursor: "",
  });
}

function startPoem() {
  let poemHeadingElement = document.querySelector("#poem-heading");
  poemHeadingElement.innerHTML = "How Beautiful";
  let poemByElement = document.querySelector("#poem-by");
  poemByElement.innerHTML = "by ";
  let poemAuthorElement = document.querySelector("#poem-author");
  poemAuthorElement.innerHTML = "Mary Jo Bang";
  let poemText = `<p>
            A personal lens: glass bending rays <br />
            That gave one that day’s news <br />
            Saying each and every day,
          </p>
          <p>
            Just remember you are standing <br />On a planet that’s evolving.
            <br />How beautiful, she thought, what distance does
          </p>
          <p>
            For water, the view from above or afar. <br />In last night’s dream,
            they were back again <br />At the beginning. She was a child
          </p>
          <p>
            And he was a child. <br />A plane lit down and left her there.
            <br />Cold whitening the white sky whiter. <br />Then a scalpel cut
            her open for all the world To be a sea.
          </p>`;
  let poemTextElement = document.querySelector("#poem-text");
  poemTextElement.innerHTML = poemText;
}

function hidePoemSection() {
  let poemMain = document.querySelector("main");
  poemMain.classList.add("hidden");
}

//startPoem();
hidePoemSection();

let submitPoemForm = document.querySelector("#poem-generator-form");
submitPoemForm.addEventListener("submit", generatingPoem);
