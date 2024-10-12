// create the button element
const button = document.createElement("button");
button.textContent = "Save Site";

// apply the styles to the button
// Feel free to customise your button however you like using CSS
button.style.position = "fixed";
button.style.bottom = "15px";
button.style.left = "15px";
button.style.padding = "5px 10px";
button.style.fontFamily = "Helvetica, system-ui, sans-serif";
button.style.fontSize = "12.5px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
button.style.backgroundColor = "#fafafa";
button.style.color = "#252525";
button.style.cursor = "pointer";
button.style.zIndex = "10000"; // z index places button above other elements

// append the button to the body
document.body.appendChild(button);

// click event listener
button.addEventListener("click", () => {
  // get current URL
  chrome.runtime.sendMessage({ url: window.location.href });
});
