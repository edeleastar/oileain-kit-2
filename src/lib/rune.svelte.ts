import { LatLng } from "leaflet";
import type { MarkerSpec } from "./model/markers";
import type { Island } from "./model/oileain-types";

export const rune = <T>(initialValue: T) => {
  let _rune = $state(initialValue);
  return {
    get value() {
      return _rune;
    },
    set value(v: T) {
      _rune = v;
    }
  };
};

export const sharedMarker = rune<MarkerSpec>({
  id: "",
  title: "",
  location: new LatLng(0, 0)
});

export const sharedIsland = rune<Island>();
