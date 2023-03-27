import type { MarkerSpec } from "./markers";
import { writable } from "svelte/store";
import type { Island } from "./oileain-types";

export const markerSelected = writable<MarkerSpec>();
export const currentIsland = writable<Island>();
