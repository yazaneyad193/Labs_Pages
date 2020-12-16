/*var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Something went wrong!';
  }
document.write('<h3>'+greeting+'</h3>');*/

// function welcomeToJs() {
//   alert("Welcome to Js World");
//   var name = prompt("What is your name?");
//   while (name == "") {
//     name = prompt("What is your name? :)");
//   }
//   alert("Welcome " + name);
// }
// function checking() {
//   var answer = prompt("Welcome to cat");

//   while (answer !== "citty") {

//     answer = prompt("MEW");
//   }
//   alert("How How");
// }

// function getCat() {
//   let userInput = prompt("Please enter what cat you want? friendly / active / old");
//   let cat = "";

//   //old
//   //T && T && F

//   while (userInput !== "friendly" && userInput !== "active") {
//     userInput = prompt("Please enter what personality of cat you want? friendly / active / old");
//   }

//   if (userInput === "friendly") {
//     cat = '<img src="https://thumbs-prod.si-cdn.com/s-rtW1rEAQTIGcmUVNFSSPC4s3I=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/56/4a/564a542d-5c37-4be7-8892-98201ab13180/cat-2083492_1280.jpg">'
//   } else if (userInput === "active") {
//     cat = '<img src="https://thumbs-prod.si-cdn.com/s-rtW1rEAQTIGcmUVNFSSPC4s3I=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/56/4a/564a542d-5c37-4be7-8892-98201ab13180/cat-2083492_1280.jpg">'
//   } else if (userInput === "old") {
//     cat = '<img src="https://thumbs-prod.si-cdn.com/s-rtW1rEAQTIGcmUVNFSSPC4s3I=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/56/4a/564a542d-5c37-4be7-8892-98201ab13180/cat-2083492_1280.jpg">'
//   }

//   return cat;
// }


function howMany() {
  let count = prompt("How many cat do you want?");

  while (count === "" || isNaN(count)) {
    count = prompt("Please enter the number of cats you want!!");
  }

  return count;
}


function showCat() {
  let total = howMany();
  let userInput = prompt("Please enter what cat you want? friendly / active / old");
  let cat = "";

  //old
  //T && T && F

  while (userInput !== "friendly" && userInput !== "active") {
    userInput = prompt("Please enter what personality of cat you want? friendly / active / old");
  }

  if (userInput === "friendly") {
    cat = '<img src="https://thumbs-prod.si-cdn.com/s-rtW1rEAQTIGcmUVNFSSPC4s3I=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/56/4a/564a542d-5c37-4be7-8892-98201ab13180/cat-2083492_1280.jpg">'
  } else if (userInput === "active") {
    cat = '<img src="https://thumbs-prod.si-cdn.com/s-rtW1rEAQTIGcmUVNFSSPC4s3I=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/56/4a/564a542d-5c37-4be7-8892-98201ab13180/cat-2083492_1280.jpg">'
  } else if (userInput === "old") {
    cat = '<img src="https://thumbs-prod.si-cdn.com/s-rtW1rEAQTIGcmUVNFSSPC4s3I=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/56/4a/564a542d-5c37-4be7-8892-98201ab13180/cat-2083492_1280.jpg">'
  }


  let result = "";

  for (let i = 0; i < total; i++) {
    result = result + '<p>cat number #' + i + " " + cat + '</p>'
  }

  return result;
}


// welcomeToJs();
// checking();