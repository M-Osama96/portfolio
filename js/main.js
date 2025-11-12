if (document.querySelector(".menu-btn") !== null) {
  const menu_btn = document.querySelector(".menu-btn");
  const body = document.body;
  const header = document.querySelector(".main-header");
  menu_btn.addEventListener("click", function () {
    header.classList.toggle("active");
    body.classList.toggle("overflow");
  });
}

Fancybox.bind("[data-fancybox]", {
  //
});

if (document.querySelector(".tabs") !== null) {
  const tab = document.querySelector(".tabs");
  const tabButtons = tab.querySelectorAll('[role="tab"]');
  const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

  function tabClickHandler(e) {
    console.log(123);
    //Hide All Tabpane
    tabPanels.forEach((panel) => {
      // panel.hidden = "true";
      panel.style.display = "none";
    });

    //Deselect Tab Button
    tabButtons.forEach((button) => {
      button.setAttribute("aria-selected", "false");
    });

    //Mark New Tab
    e.currentTarget.setAttribute("aria-selected", "true");

    //Show New Tab
    const { id } = e.currentTarget;

    const currentTab = tabPanels.find(
      (panel) => panel.getAttribute("aria-labelledby") === id
    );

    // currentTab.hidden = false;
    currentTab.style.display = null;
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", tabClickHandler);
    console.log(button);
  });
}
if (document.querySelector(".myHeader") !== null) {
  const header = document.querySelector(".myHeader");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // لما تنزل شوية
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
}
