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
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
    }
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
