function createMenu() {
  const menuDiv = document.getElementById("content");

  menuDiv.classList.add("menu");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  menuDiv.appendChild(heading);

  const categories = [
    {
      name: "Appetizers",
      items: [
        {
          name: "Spring Rolls",
          description:
            "Crispy spring rolls filled with vegetables. Served with a sweet chili sauce.",
          price: "$5.99",
        },
        {
          name: "Chicken Satay",
          description: "Grilled chicken skewers served with peanut sauce.",
          price: "$6.99",
        },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Fried Rice",
          description:
            "Stir-fried rice with vegetables, eggs, and your choice of chicken, beef, or shrimp.",
          price: "$9.99",
        },
        {
          name: "Pad Thai",
          description:
            "Rice noodles stir-fried with tofu, eggs, peanuts, and bean sprouts. Served with lime wedges.",
          price: "$11.99",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Mango Sticky Rice",
          description:
            "Sweet sticky rice served with ripe mango slices and coconut milk.",
          price: "$4.99",
        },
        {
          name: "Fried Ice Cream",
          description:
            "Crispy on the outside, creamy on the inside. Served with chocolate sauce.",
          price: "$5.99",
        },
      ],
    },
  ];

  categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("menu-category");

    const categoryHeading = document.createElement("h2");
    categoryHeading.textContent = category.name;
    categoryDiv.appendChild(categoryHeading);

    const itemsList = document.createElement("ul");

    category.items.forEach((item) => {
      const itemElement = document.createElement("li");
      itemElement.classList.add("menu-item");

      const itemContainer = document.createElement("div");
      itemContainer.classList.add("item-container");

      const itemName = document.createElement("h3");
      itemName.textContent = item.name;
      itemName.classList.add("item-name");

      const itemDescription = document.createElement("p");
      itemDescription.textContent = item.description;
      itemDescription.classList.add("item-description");

      const itemPrice = document.createElement("span");
      itemPrice.textContent = item.price;
      itemPrice.classList.add("item-price");

      itemElement.appendChild(itemName);
      itemElement.appendChild(itemDescription);
      itemElement.appendChild(itemPrice);

      itemsList.appendChild(itemElement);
    });

    categoryDiv.appendChild(itemsList);
    menuDiv.appendChild(categoryDiv);
  });
  document.body.appendChild(menuDiv);
}

export { createMenu as menu_page };
