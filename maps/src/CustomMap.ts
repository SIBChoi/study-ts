// 공통? 타입주석 추출
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  // google.maps.Map자체에 접근하지 못하도록 조치. 이 앱에 사용하고자 하는 기능만을 표시하기 위함.
  // 작업에 필요한 api만을 노출시킨다.
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // 하나의 메소드로 통합 not addUserMaker and addCompanyMarker
  addMarker({ location, markerContent }: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: location.lat,
        lng: location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
