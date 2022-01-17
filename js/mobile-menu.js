(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  const mainContainer = document.querySelector("[data-main-container]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
      mainContainer.classList.toggle("menu-open");

    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
      mainContainer.classList.toggle("menu-open");

    });
  })()