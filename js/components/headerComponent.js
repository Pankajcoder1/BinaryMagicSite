function headerComponents() {
  // Create the header element
  const header = document.createElement("div");
  header.classList.add("header");

  // Create the navigation bar
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar", "navbar-light", "navbar-expand-md");

  // Create the container for the navigation bar
  const container = document.createElement("div");
  container.classList.add("container");

  // Create the logo link and image
  const logoLink = document.createElement("a");
  logoLink.href = "#";
  logoLink.classList.add("navbar-brand");

  const logoImg = document.createElement("img");
  logoImg.src = "image/BinaryMagic-logo.png";
  logoImg.alt = "logo";
  logoImg.style.width = "40px";

  logoLink.appendChild(logoImg);
  container.appendChild(logoLink);

  // Create the collapsible menu button
  const button = document.createElement("button");
  button.classList.add("navbar-toggler");
  button.type = "button";
  button.setAttribute("data-toggle", "collapse");
  button.setAttribute("data-target", "#collapsible-menu");

  const buttonIcon = document.createElement("span");
  buttonIcon.classList.add("navbar-toggler-icon");

  button.appendChild(buttonIcon);
  container.appendChild(button);

  // Create the collapsible menu
  const menu = document.createElement("div");
  menu.classList.add("collapse", "navbar-collapse");
  menu.id = "collapsible-menu";

  const menuList = document.createElement("ul");
  menuList.classList.add("nav", "ml-auto");

  // Add the links to the menu
  const links = [
    {
      href: "https://binarymagic.in/index.php/blogs/",
      text: "Blog Page",
      target: "_blank",
    },
    {
      href: "https://www.youtube.com/@binmagic?sub_confirmation=1",
      text: "YouTube Channel",
      target: "_blank",
    },
    {
      href: "https://www.linkedin.com/company/binarymagic/",
      text: "LinkedIn Page",
      target: "_blank",
    },
    {
      href: "https://discord.com/invite/GMSxHE2fgk",
      text: "Join Discord",
      target: "_blank",
    },
  ];

  links.forEach((link) => {
    const listItem = document.createElement("li");
    listItem.classList.add("nav-item");

    const linkElement = document.createElement("a");
    linkElement.href = link.href;
    linkElement.classList.add("nav-link");
    linkElement.textContent = link.text;
    linkElement.target = link.target;

    listItem.appendChild(linkElement);
    menuList.appendChild(listItem);
  });

  menu.appendChild(menuList);
  container.appendChild(menu);

  navbar.appendChild(container);
  header.appendChild(navbar);

  return header;
}