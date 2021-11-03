/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const maps = [
  {
    el: 'contact-map',
    center: [47.4752108, 7.7419468],
    markers: [
      [{ lat: 47.4746108, lng: 7.7419468 }],
    ],
  },
]

function initMap({ el, center, markers }) {
  const elem = document.getElementById(el);

  if (elem) {
    const map = new google.maps.Map(elem, {
      center: new google.maps.LatLng(...center),
      zoom: 18,
    });
    markers.forEach(([position]) => {
      const marker = new google.maps.Marker({
        position,
        map,
        optimized: false,
      });
    });
  }
}

maps.forEach(initMap)

window.initMap = initMap
