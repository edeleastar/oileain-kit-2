import type { MarkerSpec } from "./markers";
import type { Island } from "./oileain-types";
import { rune } from "./runes.svelte";

export const sharedMarker = rune<MarkerSpec | null>(null);
export const sharedIsland = rune<Island | null>(null);
