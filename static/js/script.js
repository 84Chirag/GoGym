// const successMessage = "<%= sucessMessage %>";

// if (successMessage.trim() !=="") {
//     const successMessagecontainer = document.getElementById("success-message");
//     successMessagecontainer.innerHTML = successMessage;
// }

// let messagecontainer = document.getElementById("success-message");
// let message1 = () => {
//     setTimeout(() => {
//         let message = document.querySelector('#success-message')
//         message.classList.toggle = ('success-message')
//     }, 3000);
// }




function initMap() {
    const mapOptions = {
        center: { lat: 19.065911491290013, lng: 73.00095132170408 },
        zoom: 14,
    }
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("uparrow").style.display = "block";
    } else {
        document.getElementById("uparrow").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true') {
    document.getElementById("successMessage").style.display = "block";
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 4000);
}