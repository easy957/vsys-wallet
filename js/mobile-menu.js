(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const siteWrapper = document.querySelector("[data-site-wrapper]")
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
      siteWrapper.classList.toggle("menu-open");

    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
      siteWrapper.classList.toggle("menu-open");

    });
  })()