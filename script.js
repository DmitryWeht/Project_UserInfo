document.addEventListener("DOMContentLoaded", () => {
  const userIdElement = document.querySelector("#userId");
  const nameElement = document.querySelector("#name");
  const emailElement = document.querySelector("#email");
  const websiteElement = document.querySelector("#website");
  const prevButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");

  let currentUserId = 1;

  async function fetchUser(userId) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("error", error);
    }
  }

  async function displayUser(userId) {
    const user = await fetchUser(userId);
    if (user) {
      nameElement.textContent = user.name;
      emailElement.textContent = user.email;
      websiteElement.textContent = user.website;
    }
  }

  displayUser(currentUserId);

  prevButton.addEventListener("click", () => {
    if (currentUserId > 1) {
      currentUserId--;
      displayUser(currentUserId);
    }
  });

  nextButton.addEventListener("click", () => {
    currentUserId++;
    displayUser(currentUserId);
  });
});
