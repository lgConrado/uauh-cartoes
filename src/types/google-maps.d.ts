declare namespace google.maps {
    class Map {
      constructor(mapDiv: HTMLElement, opts?: MapOptions);
      fitBounds(bounds: LatLngBounds): void;
    }
  
    interface MapOptions {
      center: LatLng | LatLngLiteral;
      zoom: number;
    }
  
    class LatLngBounds {
      extend(latLng: LatLng | LatLngLiteral): void;
      union(bounds: LatLngBounds): void;
    }
  
    class LatLng {
      constructor(lat: number, lng: number);
    }
  
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
  
    namespace places {
      class SearchBox {
        constructor(inputField: HTMLInputElement);
        getPlaces(): PlaceResult[];
        addListener(eventName: string, handler: Function): void;
      }
  
      interface PlaceResult {
        geometry?: {
          location: LatLng;
          viewport: LatLngBounds;
        };
      }
    }
  }