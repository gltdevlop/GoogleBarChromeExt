function centerGoogleElements() {
    const searchForm = document.querySelector("form[role='search']");
    const navBar = document.querySelector("div.qogDvd"); // Google navigation bar

    if (searchForm && navBar) {
        console.log("Merging Search Bar and Navigation Bar...");

        // Create a new unified container if it doesn’t already exist
        let unifiedContainer = document.getElementById("unifiedSearchNav");
        if (!unifiedContainer) {
            unifiedContainer = document.createElement("div");
            unifiedContainer.id = "unifiedSearchNav";
            unifiedContainer.style.display = "flex";
            unifiedContainer.style.flexDirection = "column";
            unifiedContainer.style.alignItems = "center";
            unifiedContainer.style.justifyContent = "center";
            unifiedContainer.style.width = "fit-content";
            unifiedContainer.style.margin = "auto";
            unifiedContainer.style.background = "#202124"; // Dark mode background
            unifiedContainer.style.borderRadius = "24px";
            unifiedContainer.style.padding = "10px 20px";

            searchForm.parentNode.insertBefore(unifiedContainer, searchForm);
        }

        // Append elements only if they are not already inside
        if (!unifiedContainer.contains(searchForm)) {
            unifiedContainer.appendChild(searchForm);
        }
        if (!unifiedContainer.contains(navBar)) {
            unifiedContainer.appendChild(navBar);
        }

        // Ensure search bar remains properly aligned
        searchForm.style.width = "600px";
        searchForm.style.maxWidth = "100%";
        searchForm.style.margin = "0";
        searchForm.style.border = "none";
        searchForm.style.background = "transparent";

        // Ensure navigation bar is truly centered
        navBar.style.display = "flex";
        navBar.style.justifyContent = "center";
        navBar.style.alignItems = "center";
        navBar.style.width = "fit-content";
        navBar.style.maxWidth = "100%";
        navBar.style.margin = "0 auto";
    } else {
        console.log("Elements not found. Retrying...");
        setTimeout(centerGoogleElements, 1000);
    }
}

// Run script after DOM is loaded
document.addEventListener("DOMContentLoaded", centerGoogleElements);
