function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'style.css') { 
        theme.href = 'nightStyle.css';
        // if(/iPhone|iPad|iPod|BlackBerry|Firefox|MSIE/i.test(navigator.userAgent)){
        //     document.getElementById("mymenu").style.backgroundColor = "rgb(48, 55, 61)";
        // }
    } 
    else { 
        theme.href = 'style.css';
        // if(/iPhone|iPad|iPod|BlackBerry|Firefox|MSIE/i.test(navigator.userAgent)){
        //     document.getElementById("mymenu").style.backgroundColor = "rgb(226, 234, 240)";
        // }
    }

    // Saves the value of checkbox
    var check = document.getElementById('cb');
    localStorage.setItem("cb", check.checked);
}

// Loading the saved value of checkbox
var checked = JSON.parse(localStorage.getItem("cb"));
document.getElementById("cb").checked = checked;

var theme = document.getElementsByTagName('link')[0];
if (document.getElementById('cb').checked ==  true) {
    theme.href = 'nightStyle.css';
//     if(/iPhone|iPad|iPod|BlackBerry|Firefox|MSIE/i.test(navigator.userAgent)){
//         document.getElementById("mymenu").style.backgroundColor = "rgb(48, 55, 61)";
//     }
}
else {
    theme.href = 'style.css';
//     if(/iPhone|iPad|iPod|BlackBerry|Firefox|MSIE/i.test(navigator.userAgent)){
//         document.getElementById("mymenu").style.backgroundColor = "rgb(226, 234, 240)";
//     }
}

function disableScroll() {
    window.scrollTo(0, 0);
}

function navSideOpen() {
    document.getElementById("mymenu").style.width = "100%";
    window.addEventListener('scroll', disableScroll);

}

function navSideClosed() {
    document.getElementById("mymenu").style.width = "0";
    window.removeEventListener('scroll', disableScroll);
}

document.addEventListener('keydown', function(e){
	if (e.key === "Escape") {
		document.getElementById("mymenu").style.width = "0";
        window.removeEventListener('scroll', disableScroll);
	}
    if (e.key === "m") {
        document.getElementById("mymenu").style.width = "100%";
        window.addEventListener('scroll', disableScroll);

    }
});

var name = "Cédrick Gontran Khandy Nicolas";
var i = 0
var speed = 75;
function typedEffect() {
    if (i < name.length) {
        document.getElementById("typed").innerHTML += name.charAt(i);
        i++
        setTimeout(typedEffect, speed);
    }
}
