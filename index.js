let content = document.querySelector(".js-generated.content");

let header = document.createElement("h1");

header.setAttribute("class", "dog-name");

header.append("Rizzo");

content.append(header);

// let container = document.querySelector(".dog-content");

let img = document.createElement("img");

img.setAttribute("class", "dog-image");

img.setAttribute("src", "./assets/rizzo.jpg");

content.append(img);

let h3 = document.createElement("h3");

h3.setAttribute("class", "dog-details");

h3.append("Description:");

content.append(h3);

let p = document.createElement("p");

p.setAttribute("class", "dog-details");

p.append(
  "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
);

content.append(p);
