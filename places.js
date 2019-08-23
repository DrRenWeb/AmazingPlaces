function Place(
 name,
 imageURL,
 cardText,
 nearestTown,
 direction,
 nearByAttractions,
 googleMap
) {
 this.name = name;
 this.imageURL = imageURL;
 this.cardText = cardText;
 this.nearestTown = nearestTown;
 this.direction = direction;
 this.nearByAttractions = nearByAttractions;
 this.googleMap = googleMap;
}



var place1 = new Place(
 "Alstrom Point trail, Utah, USA",
 "images/Utah.jpg",
 "Alstrom point is a place valued dearly by those who are familiar with the views of Glen Canyon. Hoodoos and other geologic features along the route are a feast for the eyes, even before reaching the main course of Alstrom Point. ",
 "Page, AZ.",
 "Take HW89 towards Utah, exist at Big Water, follow the map towards Alstrom Point, gravel road, stream crossing, 4X4 advised, about 90 min one way, total trip 4-5 hours from Page.",
 "Other Attractions Nearby: upper antelope canyon, lower antelope canyon, horseshoe bend",
 "https://www.google.com/maps/place/Alstrom+Point/@37.0588888,-111.3647224,15z/data=!4m5!3m4!1s0x0:0x84a163faa6068fb9!8m2!3d37.0588888!4d-111.3647224"
);

var place2 = new Place(
 "Lupine field  of Iceland",
 "images/image2.jpg",
 "This beautiful plant is Alaskan lupine (Lupinus nootkatensis) and, after driving around most of the country, I can say that it is literally everywhere!",
 "",
 "Prepared to exit HW1 to an unknown gravel side road on the south side. May need to search back and forth a few times to get to this spot- the view and excitement well worth it!",
 "Your wedding photos here-Imagine that!",
 "https://www.google.com/maps/place/63%C2%B029%2716.0%22N+19%C2%B025%2705.3%22W/@63.4877865,-19.4181452,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d63.4877865!4d-19.4181452"
);

var place3 = new Place(
 "Lupine field  of Iceland",
 "images/image3.jpg",
 "They are in bloom and visible almost wherever you drive around the country, very often along roads and lakes.",
 "",
 "Prepared to exit HW1 to an unknown gravel side road on the south side. May need to search back and forth a few times to get to this spot- the view and excitement well worth it!",
 "Your wedding photos here-Imagine that!",
 "https://www.google.com/maps/place/63%C2%B029%2716.0%22N+19%C2%B025%2705.3%22W/@63.4877865,-19.4181452,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d63.4877865!4d-19.4181452",
 ""
);
var place4 = new Place(
 "Lupine field  of Iceland",
 "images/image4.jpg",
 "This beautiful plant is Alaskan lupine (Lupinus nootkatensis) and, after driving around most of the country, I can say that it is literally everywhere!",
 "",
 "",
 "Your wedding photos here-Imagine that!",
 "https://www.google.com/maps/place/63%C2%B029%2716.0%22N+19%C2%B025%2705.3%22W/@63.4877865,-19.4181452,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d63.4877865!4d-19.4181452",
 ""
);
var place5 = new Place(
 "Lake Myvatn, Iceland",
 "images/image5.jpg",
 "The Lake Myvatn area abounds with beautiful, unique scenery. On one side of the lake, you will find jagged, rocky lava fields; on the other, you can run through lush, vibrant fields of green.",
 "",
 "Prepared to exit HW1 to an unknown gravel side road on the south side. May need to search back and forth a few times to get to this spot- the view and excitement well worth it!",
 "Window View!",
 "https://www.google.com/maps/search/65.603185,-16.929901?sa=X&ved=2ahUKEwjIuIu-kYbkAhWEm-AKHctzB6AQ8gEwAHoECAAQAQ",
 ""
);
var place6 = new Place(
 "Lake Myvatn, Iceland",
 "images/image6.jpg",
 "Few places on earth feature such stunning landscapes and biological diversity as Iceland’s Lake Myvatn. This shallow lake and the wetlands around it is almost a world in itself, full of natural wonders waiting to be explored.",
 "",
 "",
 "Time to visit: Summer",
 "https://www.google.com/maps/search/65.580128,-16.954583?sa=X&ved=2ahUKEwjD5u-nkYbkAhVsmuAKHdC6Al0Q8gEwAHoECAAQAQ",
 ""
);
var place7 = new Place(
 "Horshoe Bend, USA",
 "images/image7.jpg",
 "The view that started it all !",
 "Page, AZ",
 "",
 "Time to visit: Dusk. Setting sun is the spirit of this picture. prepare to walk about 40 min from the parking lot",
 "https://www.google.com/maps/place/36%C2%B052%2750.3%22N+111%C2%B030%2738.1%22W/@36.880651,-111.5127647,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d36.880651!4d-111.510576",
 ""
);
var place8 = new Place(
 "Landmannalaugar",
 "images/image8.jpg",
 "The rich colors of the mountains in Landmannalaugar strike an outstanding contrast with the glittering obsidian lava fields.",
 "",
 "",
 "Is this real?",
 "https://www.google.com/maps/search/63.991129,-19.064115?sa=X&ved=2ahUKEwiGud2ijIbkAhVjkuAKHQPwCpgQ8gEwAHoECAAQAQ",
 ""
);
var place9 = new Place(
 "Seijalandsfoss, Iceland",
 "images/image9.jpg",
 "Inspiring site-People travel around the world to propose behind this water fall!",
 "",
 "",
 "Time to visit: June- August, Dusk. Sunset essential. Always check local Sunset time which ranges from 3 pm in winter to 12 pm in Summer, and even never set for a few days during the summer solstice! ",
 "https://www.google.com/maps/place/63°36%2755.6%22N+19°59%2718.5%22W/@63.6154444,-19.9906609,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d63.615444!4d-19.988462"
);

var place10 = new Place(
 "Landmannalaugar",
 "images/image10.jpg",
 "The rich colors of the mountains in Landmannalaugar strike an outstanding contrast with the glittering obsidian lava fields.",
 "",
 "Caution: 4X4 Jeep/truck needed to travel to this site, take at least one hour from Hrauneyjar, very rough, gravel road that they call F road in Iceland. Many people prefer to take the Flybus to this site and camp there for a few days.",
 "Time to visit: June-Aug. ",
 "https://www.google.com/maps/search/63.994867,-19.091295?sa=X&ved=2ahUKEwjdl-q6jIbkAhXFT98KHdg6CJoQ8gEwAHoECAAQAQ",
 ""
);

var place11 = new Place(
 "Langisjor Lake, Iceland",
 "images/image11.jpg",
 "The lake Langisjór in the midst of the Icelandic Highland is a bit mysterious.  It is one of the largest natural lakes in the country but is difficult to see unless you either travel to the edge of the water or climb a nearby mountain. ",
 "",
 "Exit HW1 to 208, follow F208, then F235 to the end. 4x4 Jeep/truck a must. Rough road.  Stream crossing. Took me 3-4hours one way from HW1.",
 "Dusk/dawn, so it’s better to camp at this site overnight. No shower on site at present time. Very clean washroom though.",
 "https://www.google.com/maps/search/64.118998,-18.428167?sa=X&ved=2ahUKEwjir8iPkobkAhUPhuAKHdiTCGAQ8gEwAHoECAAQAQ"
);

var place12 = new Place(
 "Basar, Iceland ",
 "images/image12.jpg",
 "Valley Basar is a part of the rugged Godaland Area between the river Hruna and Gorge Hvannargil south of River Krossa",
 "",
 "Exit HW1 to 249 which become F249 as it is getting rougher and ROUGHER, 4x4 truck/Jeep is a must.  Serious stream crossing. Follow the road to Basar campsite. Hiking from there takes 1-1.5hr on way. Prepare for at least 6 hours round trip from HW1.",
 "A View worth all the trouble!",
 "https://www.google.com/maps/search/63.672704,-19.438178?sa=X&ved=2ahUKEwjJ9LyGkIbkAhWHTN8KHVHyDRQQ8gEwAHoECAAQAQ",
 ""
);

var place13 = new Place(
 "Yellow stone national park, USA",
 "images/image13.jpg",
 "Grand Prismatic Spring-the most beautiful FACE of the earth!",
 "",
 "Exit USA HW191 @Fair Falls trail parking lot, Follow the trail for 30 min",
 "other attractions nearby: Yellow stone river falls",
 "https://www.google.com/maps/place/44%C2%B031%2726.4%22N+110%C2%B050%2723.2%22W/@44.524012,-110.839777,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d44.524012!4d-110.839777",
 ""
);

var place14 = new Place(
 "Yellow stone national park, USA",
 "images/image14.jpg",
 "Grand Prismatic Spring-the most beautiful FACE of the earth!",
 "",
 "Exit USA HW191 @Fair Falls trail parking lot, Follow the trail for 30 min",
 "other attractions nearby: Yellow stone river falls",
 "https://www.google.com/maps/place/44%C2%B031%2726.4%22N+110%C2%B050%2723.2%22W/@44.524012,-110.839777,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d44.524012!4d-110.839777",
 ""
);

var place15 = new Place(
 "Great Smoky Mountain National park USA",
 "images/image15.jpg",
 "Dawned On Me!",
 "",
 "Clingman's Dome parking area",
 "Best time to visit: dawn or sunrise",
 "https://www.google.com/maps/search/35.595262,-83.416051?sa=X&ved=2ahUKEwj5g8fjiYbkAhXtYt8KHbm7CVkQ8gEwAHoECAAQAQ",
 ""
);

var place16 = new Place(
 "Great Smoky Mountain National park USA",
 "images/image16.jpg",
 "Dawned On Me!",
 "",
 "Clingman's Dome parking area",
 "Best time to visit: dawn or sunrise",
 "https://www.google.com/maps/search/35.595262,-83.416051?sa=X&ved=2ahUKEwj5g8fjiYbkAhXtYt8KHbm7CVkQ8gEwAHoECAAQAQ",
 ""
);

var place17 = new Place(
 "Fjardarargljufur Canyon, Iceland ",
 "images/image17.jpg",
 "Fjadrargljufur is a stunning and magical canyon not far from the South East of Iceland. ",
 "Kirkjubæjarklaustur",
 "Exit HW1 to F 206, drive 20-30 min to parking site. Walking up the trail another 30min to the metal viewing platform.",
 "Best Time to visit: Summer. Mornings.",
 "https://www.google.com/maps/place/63%C2%B046%2746.2%22N+18%C2%B010%2739.4%22W/@63.779496,-18.1797897,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d63.779496!4d-18.177601",
 ""
);

var place18 = new Place(
 "Great Smoky Mountain Nation Park, USA",
 "images/image18.jpg",
 "Sunset moments worth a trip!",
 "",
 "Clingman's Dome parking area",
 "Time to visit: Sunset, sunset, sunset!  Tripod necessary.",
 "https://www.google.com/maps/place/35%C2%B033%2721.9%22N+83%C2%B029%2741.9%22W/@35.556091,-83.4971577,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d35.556091!4d-83.494969",
 ""
);

var places = [
 place1,
 place2,
 place3,
 place4,
 place5,
 place6,
 place7,
 place8,
 place9,
 place10,
 place11,
 place12,
 place13,
 place14,
 place15,
 place16,
 place17,
 place18,
];
