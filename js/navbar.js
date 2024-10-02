const navlinkli = document.querySelectorAll("#nav-link li");
console.log(navlinkli)
function borderButtonChange(borderChange) {
    for(let x of navlinkli) {
        x.style.borderBottom = "1px solid rgba(0, 0, 0, 0)"
    }
    borderChange.style.borderBottom = "1px solid #fff";
}
