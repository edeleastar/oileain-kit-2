import { generateMarkerSpec } from "../../../services/oileain-utils";
import { oileainService } from "../../../services/oileain-service";
import type { PageLoad } from "./$types";

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
	const island = await oileainService.getIslandById(encodeURI(params.id));
	const marker = generateMarkerSpec(island);
	return {
		island,
		marker
	};
};
