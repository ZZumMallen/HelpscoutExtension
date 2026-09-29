
(function() {
    'use strict';

    const style = document.createElement('style');
    style.textContent = `
        .title-bar-module__container {
            background-color: #431283 !important;
        }
    `;
    document.documentElement.appendChild(style);
})();


function setSidebarWidth(width = "0px") {
  const aside = document.querySelector("#hs-app > div > div > aside");
  if (!aside) return console.warn("Sidebar element not found");
  aside.style.setProperty("--sidebar-width", width);
}

