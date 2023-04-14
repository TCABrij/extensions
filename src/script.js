const extensions = [
  {
    title: "VSCode Extensions",
    extensions: [
      "Prettier - Code Formatter",
      "Eslint",
      "Code Spell Checker",
      "Auto Rename Tag",
      "ES7 + React/Redux",
      "Material Icon Themes",
      "Quokka.js - Js & TS Playground",
      "EJS Language Support",
      "Language Specific Ext.",
    ],
  },
  {
    title: "Chrome Extensions",
    extensions: [
      "Adguard Adblocker",
      "AdBlock for YouTube",
      "Pesticide: Outline for All ",
      "Grammarly",
      "JSON Formatter",
      "React Developer Tools",
      "Momentum - New Tab",
      "Volume Booster",
      "Enhancer for YouTube",
      "HTML Tree Generator",
      "Video Speed Controller",
      "Window Resizer",
    ],
  },
];

// Get the container element to hold the cards
const container = document.querySelector("main");

// Loop through each object in the extensions array
extensions.forEach((item) => {
  // Create a new card element
  const card = document.createElement("div");
  card.className = "card";

  // Add the card title
  const title = document.createElement("h2");
  title.className = "extension-title";
  title.textContent = item.title;
  card.appendChild(title);

  // Add the list of extensions
  const list = document.createElement("ul");
  list.className = "list";

  item.extensions.forEach((extension) => {
    const listItem = document.createElement("li");
    listItem.className = "list-items";
    listItem.textContent = extension;
    list.appendChild(listItem);
  });

  card.appendChild(list);

  // Add the card to the container
  container.appendChild(card);
});
