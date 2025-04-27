// Function to toggle the menu visibility
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const burgerIcon = document.getElementById('burger-icon');
    const closeIcon = document.getElementById('close-icon');

    // Toggle the active class to show/hide the menu
    navMenu.classList.toggle('active');

    // Toggle the visibility of the icons
    if (navMenu.classList.contains('active')) {
        burgerIcon.style.display = 'none'; // Hide burger icon
        closeIcon.style.display = 'block'; // Show close icon
    } else {
        burgerIcon.style.display = 'block'; // Show burger icon
        closeIcon.style.display = 'none'; // Hide close icon
    }
}


var settingmenu = document.querySelector(".setting_menu");
function settingMennuToggel() {
    settingmenu.classList.toggle("setting_menu-height");
      
}
var messenger = document.querySelector(".messenger");
function messengerToggel() {
    messenger.classList.toggle("messenger-height");
      
}
