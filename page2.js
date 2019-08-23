// Popluate all 9 places content in the first page
for (let index = 0; index < 9; index++) {
 const data = places[index+9];
 // add img src for each places
 var imgItem = $(".col-md-4 .card img").toArray()[index];
 $(imgItem).attr("src", data.imageURL);

 // add card text for each places
 var pText = $(".card-text-scroll").toArray()[index];
 $(pText).text(data.cardText);

 // add google map link for each places
 var mapBtn = $(".map-btn").toArray()[index];
 $(mapBtn).attr(
   "onclick",
   "window.open('" +
     data.googleMap +
     "', 'Google Map', 'height=500, width=900, top=200, left=200')"
 );
}

// add "click" event listener for all Details button, and populate the modal dialog based on the number in each exampleModal_*
// and get the corrsponding value from places data
$(".detail-btn").on("click", function() {
 var modalName = $(this).attr("data-target");
 var numorig = modalName.substring(modalName.indexOf("_") + 1, modalName.length);
 var num = parseInt(numorig, 10) + 9;

 $(".exampleModal_" + numorig + " .placeName").html(
   "<strong>Place: </strong>" + places[num].name
 );
 $(".exampleModal_" + numorig + " .nearestTown").html(
   "<strong>Nearest town: </strong>" + places[num].nearestTown
 );
 $(".exampleModal_" + numorig + " .direction").html(
   "<strong>Direction: </strong>" + places[num].direction
 );
 $(".exampleModal_" + numorig + " .nearByAttractions").html(
   "<strong>Further Information: </strong>" +
     places[num].nearByAttractions
 );
});

// Search Bar

$("#searchBtn").bind("keypress click", function() {
 matchPlaces = [];
 var value = $("#searchValue")
   .val()
   .toLowerCase();

 if (!value || value.trim().length === 0) {
   alert("Please input search criteria.");
 } else {
   var counter = 0;
   for (let index = 0; index < places.length; index++) {
     const place = places[index];
     if (place.name.toLowerCase().includes(value)) {
       counter++;
       if (counter > 9) {
         alert("Too many matching places, only nine of them are showing.");
         break;
       }
       matchPlaces.push(place);
     }
   }
   if (counter === 0) {
     alert("No matching place found");
   } else {
     localStorage.setItem("searchPlaces", JSON.stringify(matchPlaces));
     $(this).attr("href", "searchResult.html");
   }
 }
});
