function limitListElements() {
    var sidepanel = document.getElementById("mySidepanel");
    var links = sidepanel.querySelectorAll("a");

    // Check if number of links exceeds 35
    if (links.length > 35) {
        // Hide excess links
        for (var i = 35; i < links.length; i++) {
            links[i].style.display = "none";
        }
    }
}

function limitListElementsRight() {
    var sidepanel = document.getElementById("SidepanelRight");
    var links = sidepanel.querySelectorAll("a");

    // Check if number of links exceeds 35
    if (links.length > 35) {
        // Hide excess links
        for (var i = 35; i < links.length; i++) {
            links[i].style.display = "none";
        }
    }
}

// Function to hide both sidebars on page load
function hideSidebars() {
    var sidepanelLeft = document.getElementById("mySidepanel");
    var sidepanelRight = document.getElementById("SidepanelRight");

    // Hide both sidebars
    sidepanelLeft.style.width = "0";
    sidepanelRight.style.width = "0";
    }

// Call hideSidebars() function when the page is fully loaded
window.addEventListener("pageshow", function(event) {
    hideSidebars();
    limitListElements();
    limitListElementsRight();
});


limitListElements();
limitListElementsRight();