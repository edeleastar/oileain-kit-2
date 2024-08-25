import { generateMarkerSpec } from "$lib/model/oileain-utils";
import { oileainService } from "$lib/model/oileain-service";
import type { PageLoad } from "./$types";

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
  await oileainService.getCoasts();
  const island = await oileainService.getIslandById(encodeURI(params.id));
  const marker = generateMarkerSpec(island);
  return {
    island,
    marker,
    markerLayers: oileainService.markerLayers
  };
};
