import type { PageLoad } from "./$types";
import { oileainService } from "../../services/oileain-service";
export const ssr = false;

export const load: PageLoad = async ({ params }) => {
	await oileainService.getCoasts();
	return {
		markerLayers: oileainService.markerLayers
	};
};
