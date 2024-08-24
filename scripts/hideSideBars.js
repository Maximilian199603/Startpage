// Function to hide both sidebars on page load
function hideSidebars() {
    var sidepanelLeft = document.getElementById("mySidepanel");
    var sidepanelRight = document.getElementById("SidepanelRight");

    // Hide both sidebars
    sidepanelLeft.style.width = "0";
    sidepanelRight.style.width = "0";
    }

// Call hideSidebars() function when the page is fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        hideSidebars();
        limitListElements();
        limitListElementsRight();
    });