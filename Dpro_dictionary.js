const inputEl = document.querySelector("#input");
const infoTextEl = document.querySelector(".info-text");
const meaningContainerEl = document.querySelector(".meaning-container");
const wordTitleEl = document.querySelector("#word-title");
const wordMeaningEl = document.querySelector("#word-meaning");
const wordSynonymsEl = document.querySelector("#word-synonyms")


async function fatchAPI(word) {
   try {

    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    infoTextEl.innerText = `Seaching the meaning of "${word}"`

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((respone) => respone.json());

    if(result.title) {
        meaningContainerEl.style.display = "block";
        infoTextEl.style.display = "none";
        wordTitleEl.innerText = word;
        wordMeaningEl.innerText = "N/A";
        wordSynonymsEl.innerText = "N/A";  
    } else {
        infoTextEl.style.display = "none";
        meaningContainerEl.style.display = "block";
        wordTitleEl.innerText = result[0].word;
        wordMeaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        wordSynonymsEl.innerText = result[0].meanings[0].synonyms
    }

   } catch (error) {
    console.log(error);
    infoTextEl.innerText = "An error happened, try again later"
   }

}

inputEl.addEventListener("keyup", (event) => {
    if(event.target.value && event.key === "Enter") {
        fatchAPI(event.target.value);
    }

})