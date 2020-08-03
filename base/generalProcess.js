
    <!-- Add Fast Click plugin to prevent delays it click on mobile -->
    <script src="https://raw.githack.com/ftlabs/fastclick/master/lib/fastclick.js"></script>

    <!-- PREVENT SCROLLING -->
    <script src="https://raw.githack.com/willmcpo/body-scroll-lock/master/lib/bodyScrollLock.js"></script>

// 1. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
// Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
// This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
const targetElement = document.querySelector("#Main");

// 2. ...in some event handler after showing the target element...disable body scroll
bodyScrollLock.disableBodyScroll(targetElement);

//Hide the Download Button on default
var theDownload = document.getElementById("download-share");
theDownload.style.display = "none";

var scrollingElement = document.scrollingElement || document.body;
scrollingElement.scrollTop = 1000;

//Prevent finger zooming
document.addEventListener(
    "touchmove",
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);
//Hide the Social Menu if Main Menu is opened
function MainClick() {
    //Toggle the state of the Main Menu Button
    document.getElementById("mainMenu").classList.toggle("active");
    var theDownload = document.getElementById("download-share");
    var theShare = document.getElementById("share");
    var theMenu = document.getElementById("menu");

    //If the Download Button is showing
    if (theDownload.style.display != "none") {
        //Close the Share Menu
        //CHANGE MENU BUTTON BACK TO PLUS BUTTON
        theMenu.className = "fa fa-plus";
        theMenu.style.transform = "rotate(-45deg)";
        document.getElementById("shareMenu").classList.remove("active");
        document.getElementById("mainMenu").classList.add("active");

        shareClick();
    } else {
        //Reset to no transition delay
        document.getElementById("share").style.transitionDelay = "0s";
        document.getElementById("cart").style.transitionDelay = "0s";
        document.getElementById("camera").style.transitionDelay = "0s";

        if (
            document.getElementById("mainMenu").classList.contains("active") ==
            false
        ) {
            theMenu.style.transform = "rotate(0deg)";
        } else {
            theMenu.style.transform = "rotate(-45deg)";
        }
    }

    //Show the share button
    theShare.style.visibility = "visible";

    //Close the Social Menu
    document.getElementById("socialMenu").classList.remove("active");
}
//Hide the Social Menu if Main Menu is opened
function shareClick() {
    document.getElementById("cart").style.transitionDelay = "0.2s";
    document.getElementById("camera").style.transitionDelay = "0.25s";
    var theShare = document.getElementById("share");
    var theDownload = document.getElementById("download-share");
    var theMenu = document.getElementById("menu");
    if (theDownload.style.display === "none") {
        document.getElementById("shareMenu").classList.add("active");
        theDownload.style.display = "block";

        theShare.style.visibility = "hidden";
        //CHANGE MENU BUTTON TO WINDOW CLOSE BUTTON
        theMenu.className = "fas fa-window-close";
        theMenu.style.transform = "rotate(-90deg)";
    } else {
        theDownload.style.display = "none";
    }
    var theCart = document.getElementById("cart");
    if (theCart.className == "menu-item fas fa-cart-plus") {
        theCart.className = "";
        //Set initial delay timing when opening share menu
        document.getElementById("sms-share").style.transitionDelay = "0s";
        document.getElementById("instagram-share").style.transitionDelay =
            "0.05s";
        document.getElementById("facebook-share").style.transitionDelay =
            "0.1s";
        document.getElementById("twitter-share").style.transitionDelay =
            "0.15s";
    } else {
        theCart.className = "menu-item fas fa-cart-plus";
        //Set delay timing when closing share menu
        document.getElementById("share").style.transitionDelay = "0.25s";
        document.getElementById("sms-share").style.transitionDelay = "0.2s";
        document.getElementById("instagram-share").style.transitionDelay =
            "0.15s";
        document.getElementById("facebook-share").style.transitionDelay =
            "0.1s";
        document.getElementById("twitter-share").style.transitionDelay =
            "0.05s";
    }
    var theCam = document.getElementById("camera");
    if (theCam.className == "menu-item fas fa-camera") {
        theCam.className = "";
    } else {
        theCam.className = "menu-item fas fa-camera";
    }
}

function socialMenu() {
    var theMenu = document.getElementById("menu");
    document.getElementById("share").style.transitionDelay = "0s";
    document.getElementById("cart").style.transitionDelay = "0s";
    document.getElementById("camera").style.transitionDelay = "0s";
    var theShare = document.getElementById("share");
    theShare.style.display = "initial";

    if (theDownload.style.display != "none") {
        //Close the Share Menu
        //CHANGE MENU BUTTON TO PLUS BUTTON
        theMenu.className = "fa fa-plus";
        theMenu.style.transform = "rotate(0deg)";
        theDownload.style.display = "none";

        document.getElementById("shareMenu").classList.remove("active");
    } else {
        theMenu.style.transform = "rotate(0deg)";
    }
    //Hide the Main Menu if Social Menu is opened
    document.getElementById("mainMenu").classList.remove("active");

    //Toggle t
    document.getElementById("socialMenu").classList.toggle("active");
    var theCart = document.getElementById("cart");
    if (theCart.className == "menu-item fas fa-cart-plus") {
        if (
            document.getElementById("shareMenu").classList.contains("active") ==
            true
        ) {
            theCart.className = "";
        }
    } else {
        theCart.className = "menu-item fas fa-cart-plus";
    }
    var theCam = document.getElementById("camera");
    if (theCam.className == "menu-item fas fa-camera") {
        if (
            document.getElementById("shareMenu").classList.contains("active") ==
            true
        ) {
            theCam.className = "";
        }
    } else {
        if (
            document.getElementById("shareMenu").classList.contains("active") ==
            false
        ) {
            theCam.className = "menu-item fas fa-camera";
        }
    }
}

function Init() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.1;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}%`);
    
    //FOR USING CODEPEN WINDOW VIEWPORT - REMOVE IN OFFICIAL
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    
    if (typeof window.orientation === "undefined") {
    }
    if (Math.abs(window.orientation) === 90) {
    } else if (Math.abs(window.orientation) === 0) {
        // Portrait
    }

    isMobileDevice();
}
//Activate the Fast Click Plugin to prevent delays in buttons activating on click for mobile
if ("addEventListener" in document) {
    document.addEventListener(
        "DOMContentLoaded",
        function () {
            FastClick.attach(document.body);
        },
        false
    );
}

//Check if using mobile
function isMobileDevice() {
    return (
        typeof window.orientation !== "undefined" ||
        navigator.userAgent.indexOf("IEMobile") !== -1
    );
}
function hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
    // Good to go!
    // alert("getUserMedia() is supported by your browser");
} else {
    // alert("getUserMedia() is not supported by your browser");
}
function Screenshot() {
    document.querySelector("#MainGIF").pause();
    var aScene = document
        .querySelector("a-scene")
        .components.screenshot.getCanvas("perspective");
    var frame = CaptureVideoFrame("video", "png");
    aScene = resizeCanvas(aScene, frame.width, frame.height);
    frame = frame.dataUri;
    mergeImages([frame, aScene]).then((b64) => {
        var link = document.getElementById("download-link", "png");
        link.setAttribute("download", "AR.png");
        link.setAttribute("href", b64);
        //window.open(link.getAttribute("href"));
        //link.click();
        document.querySelector("#MainGIF").play();
    });
}

function CaptureVideoFrame(video, format, width, height) {
    if (typeof video === "string") {
        video = document.querySelector(video);
        consoleLog("Video:" + video);
    }
    format = format || "jpeg";
    if (!video || (format !== "png" && format !== "jpeg")) {
        return false;
    }
    var canvas = document.createElement("CANVAS");
    canvas.width = width || video.videoWidth;
    canvas.height = height || video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    var dataUri = canvas.toDataURL("image/" + format);
    var data = dataUri.split(",")[1];
    var mimeType = dataUri.split(";")[0].slice(5);
    var bytes = window.atob(data);
    var buf = new ArrayBuffer(bytes.length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < bytes.length; i++) {
        arr[i] = bytes.charCodeAt(i);
    }
    var blob = new Blob([arr], {
        type: mimeType
    });
    return {
        blob: blob,
        dataUri: dataUri,
        format: format,
        width: canvas.width,
        height: canvas.height
    };
}

function Screenshot() {
    document.querySelector("#MainGIF").pause();
    var aScene = document
        .querySelector("a-scene")
        .components.screenshot.getCanvas("perspective");
    var frame = CaptureVideoFrame("video", "png");
    aScene = resizeCanvas(aScene, frame.width, frame.height);
    frame = frame.dataUri;
    mergeImages([frame, aScene]).then((b64) => {
        var link = document.getElementById("download-link", "png");
        link.setAttribute("download", "AR.png");
        link.setAttribute("href", b64);
        //window.open(link.getAttribute("href"));
        //link.click();
        document.querySelector("#MainGIF").play();
    });
}

function CaptureVideoFrame(video, format, width, height) {
    if (typeof video === "string") {
        video = document.querySelector(video);
        consoleLog("Video:" + video);
    }
    format = format || "jpeg";
    if (!video || (format !== "png" && format !== "jpeg")) {
        return false;
    }
    var canvas = document.createElement("CANVAS");
    canvas.width = width || video.videoWidth;
    canvas.height = height || video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    var dataUri = canvas.toDataURL("image/" + format);
    var data = dataUri.split(",")[1];
    var mimeType = dataUri.split(";")[0].slice(5);
    var bytes = window.atob(data);
    var buf = new ArrayBuffer(bytes.length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < bytes.length; i++) {
        arr[i] = bytes.charCodeAt(i);
    }
    var blob = new Blob([arr], {
        type: mimeType
    });
    return {
        blob: blob,
        dataUri: dataUri,
        format: format,
        width: canvas.width,
        height: canvas.height
    };
}
