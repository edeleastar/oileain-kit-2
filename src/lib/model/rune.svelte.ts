import type { MarkerSpec } from "./markers";
import type { Island } from "./oileain-types";

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

export const sharedMarker = rune<MarkerSpec | null>(null);
export const sharedIsland = rune<Island | null>(null);
