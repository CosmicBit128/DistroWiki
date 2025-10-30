//document.addEventListener('ready', () => {
let selected_tags = document.querySelector("#search > ul:first-child");
let tags = document.querySelectorAll("#search > ul > li")
tags.forEach(
    (element) => {
        element.addEventListener("click", () => {
            if (selected_tags.childNodes[0].nodeName == "SPAN") selected_tags.removeChild(selected_tags.childNodes[0]);
            selected_tags.innerHTML = selected_tags.innerHTML + element.outerHTML.replace("</li>", "") + "<i class=\"icon-cross\" onclick=\"javascript:remove(this)\"></i>" + "</li>";
        });
    }
);

search_button = document.getElementById("search-submit");
search_button.addEventListener("click", () => {
    fetch()
});

function remove(element) {
    if (element.parentElement.parentElement.childNodes.length == 1) element.parentElement.parentElement.innerHTML = "<span class=\"gray\">Tags</gray>"
    else element.parentElement.outerHTML = "";
}