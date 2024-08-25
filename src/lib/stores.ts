import type { MarkerSpec } from "./model/markers";
import { writable } from "svelte/store";
import type { Island } from "./model/oileain-types";

export const markerSelected = writable<MarkerSpec>();
export const currentIsland = writable<Island>();
