//Set the animation for the image when enter the mouse
window.addEventListener("load", function() {
    const table = [...document.querySelectorAll("#keyword")];
    table.forEach(item => item.addEventListener("mouseenter", handleHoverLink));

    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);

    //Add a rect use left, top, width, height are taken from the "td" FTWH by enter mouse on it
    function handleHoverLink(event) {
        const {left, top, width, height} = event.target.getBoundingClientRect();

        line.style.left = `${left}px`;
        line.style.top = `${top + height - 10}px`;
        line.style.width = `${width}px`;
        line.style.height = `${2}px`;
    }

    //Disapear rect when leave mouse
    const menu = document.querySelector(".menu-bar");
    menu.addEventListener("mouseleave", function() {
        line.style.left = 0;
        line.style.top = 0;
        line.style.width = 0;
        line.style.height = 0;
    })
});