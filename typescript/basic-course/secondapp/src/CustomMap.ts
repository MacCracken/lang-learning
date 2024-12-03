/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';

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

  addUserMarker(user: User): void {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: { 
        lat: user.location.lat, 
        lng: user.location.lng
      },
      title: user.name,
    })
  }

  addCompanyMarker(company: Company): void {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: { 
        lat: company.location.lat, 
        lng: company.location.lng
      },
      title: company.companyName,
    })
  }
}