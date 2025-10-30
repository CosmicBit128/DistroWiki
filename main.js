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

const distros = {
    'arch': ['rolling-release', 'minimal', 'customizable', 'big-community'],
    'mint': ['beginner-friendly', 'windows-like', 'stable', 'home-pc', 'no-terminal', 'big-community'],
    'alpine': ['lightweight', 'server-ready'],
    'ubuntu': ['beginner-friendly', 'big-community', 'enterprise', 'home-pc', 'stable', 'server-ready'],
    'debian': ['stable', 'big-community', 'enterprise', 'windows-like', 'server-ready'],
    'pop-os': ['gaming-focused', 'nvidia-compatible', 'beginner-friendly', 'for-devs', 'home-pc', 'big-community', 'customizable'],
    'fedora': ['for-devs', 'enterprise', 'experimental', 'big-community'],
    'gentoo': ['rolling-release', 'customizable', 'minimal'],
    'nobara': ['gaming-focused', 'beginner-friendly', 'nvidia-support', 'home-pc'],
    'garuda': ['gaming-focused', 'customizable', 'rolling-release'],
    'manjaro': ['rolling-release', 'gaming-focused', 'nvidia-support', 'customizable'],
    'zorin-os': ['beginner-friendly', 'windows-like', 'home-pc', 'no-terminal'],
    'open-suse': ['rolling-release', 'enterprise', 'experimental', 'big-community'],
    'kali-linux': ['privacy-focused', 'minimal'],
    'void-linux': ['minimal', 'lightweight'],
    'rocky-linux': ['stable', 'enterprise', 'server-ready'],
    'elementary-os': ['beginner-friendly', 'mac-like', 'home-pc', 'no-terminal'],
}