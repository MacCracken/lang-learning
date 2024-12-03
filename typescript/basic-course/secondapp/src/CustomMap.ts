/// <reference types="@types/google.maps" />

// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}


export class CustomMap{
  private googleMap: google.maps.Map;

  constructor(divId: string, mapId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: { 
        lat: 0, 
        lng: 0
      },
      mapId: mapId,
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: { 
        lat: mappable.location.lat, 
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there'
      });

      infoWindow.open(this.googleMap, marker)
    })
  }
}