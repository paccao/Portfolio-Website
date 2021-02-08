// Save the sidebar of the document, the scrollbar.
let sidebar = document.querySelector(".sidebar");

// Save 'scroll location' from the current session.
let scrollPos = sessionStorage.getItem("sidebar-scroll");

// If the 'scroll location' is not equals to null, 
// then parse the string argument from sidebar.scrollTop and 
// return an integer BASED on the specified radix 
// (the base in mathematical numeric systems) 
// which is ten in the decimal system.
if (scrollPos !== null) {
  sidebar.scrollTop = parseInt(scrollPos, 10);
}

// The beforeunload event is activated when the window and documents resources
// are about to be unloaded. In this case I want to use it to set
// the scroll location of the document to where it was before
// the document gets unloaded when the user refreshes the page.
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("sidebar-scroll", sidebar.scrollTop);
});
