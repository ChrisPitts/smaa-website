document.addEventListener('click', (event) => {
    const isDropdownButton = (event.target as HTMLElement).matches("[data-dropdown-button]");
    if(!isDropdownButton && (event.target as HTMLElement).closest("[data-dropdown]") !== null) return;

    let currentDropdown : HTMLElement;
    if(isDropdownButton){
        currentDropdown = (event.target as HTMLElement).closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
        
    }

    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
        if(dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    });
});