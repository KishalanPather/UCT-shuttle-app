const form = document.querySelector(".EnterLocation");

const enterLocationSubmitBtn = document.querySelector(".submitBtn");
const resultsList = document.querySelector("ul");

const appearingDiv = document.querySelector(".result");
const scrollDown = document.querySelector(".enterLocation");

//search bar auto complete
function initMap(){
    const autocomplete = new google.maps.places.Autocomplete(form.location,API.autocompleteFields);
}


//on submit
enterLocationSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const destination = form.location.value;
    const origin = Object.values(API.jammieStops);

    API.calcDistance(origin,destination).then(unorderedInfo => {
        const orderedInfo = [];
        order.sortArr(unorderedInfo,orderedInfo);

        resultsList.innerHTML = ""; //clears any info thats already in the ul
        orderedInfo.forEach((item) => {
            DOM.addToList(resultsList,item.jammiestop,item.distance,item.duration);
        })

    });

    appearingDiv.style.display = "block";
   

   
})

