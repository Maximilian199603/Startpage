
// Function to toggle the left sidebar visibility
function toggleNav() {
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
