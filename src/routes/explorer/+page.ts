import type { PageLoad } from "./$types";
import { oileainService } from "$lib/model/oileain-service";
export const ssr = false;

export const load: PageLoad = async ({ params }) => {
  await oileainService.getCoasts();
  return {
    markerLayers: oileainService.markerLayers
  };
};
