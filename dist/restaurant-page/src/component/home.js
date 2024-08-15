function createHomePage() {
  const textDiv = document.getElementById("content");
  textDiv.classList.add("home-div");

  textDiv.innerHTML = "";

  const textElement = document.createElement("p");
  textElement.classList.add("text-over-image");
  
  textElement.textContent =
    "Welcome to Golden Grain Bistro! Indulge in our delicious dishes crafted with love and the finest ingredients. Whether you're here for a quick bite or a leisurely meal, we promise a dining experience that's both satisfying and memorable. Thank you for choosing us—we're delighted to have you here!";

  // Append the text div to the body
  textDiv.appendChild(textElement);
}

export { createHomePage as home_page };
