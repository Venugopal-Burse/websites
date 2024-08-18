function switchOff() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

    document.getElementById("offSwitch").style.backgroundColor = "grey";
    document.getElementById("onSwitch").style.backgroundColor = "green";
    document.getElementById("switchStatus").textContent = "Switched Off";
}

function switchOn() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("offSwitch").style.backgroundColor = "red";
    document.getElementById("onSwitch").style.backgroundColor = "grey";
    document.getElementById("switchStatus").textContent = "Switched On";
}