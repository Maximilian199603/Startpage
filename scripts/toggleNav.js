
// Function to toggle the left sidebar visibility
function toggleNavleft() {
    var sidepanel = document.getElementById("mySidepanel");
    if (sidepanel.style.width === "0px" || sidepanel.style.width === "") {
		sidepanel.style.width = "25vw";
    } else {
        sidepanel.style.width = "0";
    }
}

// Function to toggle the right sidebar visibility
function toggleNavright() {
    var sidepanel = document.getElementById("SidepanelRight");
    if (sidepanel.style.width === "0px" || sidepanel.style.width === "") {
		sidepanel.style.width = "25vw";
    } else {
        sidepanel.style.width = "0";
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
    document.addEventListener("DOMContentLoaded", function() {
        hideSidebars();
        limitListElements();
        limitListElementsRight();
    });
	
document.addEventListener("keydown", (event) => {
    if (event.repeat) return; // Prevents continuous firing when holding the key

    switch (event.code) {
        case "ArrowLeft":
            toggleNavleft();
            break;
        case "ArrowRight":
            toggleNavright();
            break;
    }
});