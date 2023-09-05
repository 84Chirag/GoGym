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
