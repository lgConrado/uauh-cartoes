declare namespace google.maps {
  class Map {
    constructor(mapDiv: HTMLElement, opts?: MapOptions);
    fitBounds(bounds: LatLngBounds): void;
    addListener(eventName: string, handler: Function): void;
    getBounds(): LatLngBounds;
  }

  interface MapOptions {
    center: LatLng | LatLngLiteral;
    zoom: number;
  }

  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map | null): void;
    addListener(eventName: string, handler: Function): void;
  }

  interface MarkerOptions {
    position: LatLng | LatLngLiteral;
    map?: Map;
    title?: string;
    icon?: string;
  }

  class InfoWindow {
    constructor(opts?: InfoWindowOptions);
    setContent(content: string | HTMLElement): void;
    open(map?: Map, marker?: Marker): void;
    close(): void;
  }

  interface InfoWindowOptions {
    content?: string | Node;
  }

  class LatLng {
    constructor(lat: number, lng: number);
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  class LatLngBounds {
    extend(latLng: LatLng | LatLngLiteral): void;
    union(bounds: LatLngBounds): void;
  }

  namespace places {
    class SearchBox {
      constructor(inputField: HTMLInputElement);
      getPlaces(): PlaceResult[];
      addListener(eventName: string, handler: Function): void;
      setBounds(bounds: LatLngBounds): void;
      setQuery(query: string): void;
    }

    interface PlaceResult {
      geometry?: {
        location: LatLng;
        viewport: LatLngBounds;
      };
    }
  }
}