let r = document.body.getElementsByTagName("p");
r[1].appendChild(
  document.createTextNode("However, this is a paragraph, not a blockquote.")
);
let button = document.body.getElementsByTagName("button");
button[0].addEventListener("click", () => {
  window.open("https://myanimelist.net", "_blank");
});
let randtext = document.getElementById("lorem");
randtext.addEventListener("click", () => {
  let x = document.createElement("p");
  let y = document.createTextNode("le random text");
  x.appendChild(y);
  document.body.appendChild(x);
});
