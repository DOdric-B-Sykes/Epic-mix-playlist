const epicMix = [
  "Like That",
  "From Nothing",
  "Wish You Were Here",
  "Heroes",
  "Fien",
  "Call Me",
  "Paper Planes",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Run the World (Girls)",
  "Superstition"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

total.innerText = `${epicMix.length} great songs!`; /* Using the length property counts the elements within the "epicMix" array and gives the the number of them as numerical value */

/* Function to loop through each element of the epicMix array and create a list item for each element in the array and the add that list item to the mixList element (which is an unordered list in the HTML file) */
const mixInfo = function (){
  epicMix.forEach(function (song, index){ /* Used forEach loop to loop through each item in epicMix array and execute the code below the loop for each element in the array */
    const listItem = document.createElement("li");
    listItem.classList.add("song");
    listItem.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(listItem);
  }
)};

/* Event Listener for the "button" element */
button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");

  mixInfo(epicMix); /* Calls the mixInfo function using the epicMix array as a parameter, which allows the mixInfo function to execute its code using the value of the epicMix array (the array elements themselves) */
});
