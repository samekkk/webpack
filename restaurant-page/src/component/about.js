function creatAboutPage() {
  const aboutDiv = document.getElementById("content");
  aboutDiv.classList.add('about-div');
  // Create and append about page content
  const heading = document.createElement("h1");
  heading.textContent = "About Us";
  heading.classList.add("about-heading");
  aboutDiv.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    `Welcome to our restaurant! We are passionate about serving delicious, high-quality food made from the freshest ingredients. Our team of talented chefs brings a unique blend of flavors and creativity to every dish. Whether you are here for a quick bite or a special celebration, we strive to provide a warm and inviting atmosphere for all our guests. Thank you for choosing to dine with us. <br><br> Our mission is to create a memorable dining experience that brings people together over great food and excellent service. We are committed to sustainability and using locally-sourced ingredients to support our community. <br><br> Our team is the heart of our restaurant. From our skilled chefs to our friendly waitstaff, 
    each member of our team is dedicated to making your dining experience exceptional.`;
  paragraph.classList.add("about-text");
  aboutDiv.appendChild(paragraph);
}

export { creatAboutPage as about_page };
