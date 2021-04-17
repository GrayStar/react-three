import { createUseThemedStyles } from '@/theme';

const spacerSize: number = 4;
const iterations: number = 40;

const m: Record<string, Record<string, string>> = {};
const ml: Record<string, Record<string, string>> = {};
const mr: Record<string, Record<string, string>> = {};
const mt: Record<string, Record<string, string>> = {};
const mb: Record<string, Record<string, string>> = {};
const mx: Record<string, Record<string, string>> = {};
const my: Record<string, Record<string, string>> = {};

const p: Record<string, Record<string, string>> = {};
const pl: Record<string, Record<string, string>> = {};
const pr: Record<string, Record<string, string>> = {};
const pt: Record<string, Record<string, string>> = {};
const pb: Record<string, Record<string, string>> = {};
const px: Record<string, Record<string, string>> = {};
const py: Record<string, Record<string, string>> = {};

for (let i: number = 0; i <= iterations; i++) {
	m[`.m-${i}`] = { margin: `${spacerSize * i}px !important` };
	ml[`.ml-${i}`] = { marginLeft: `${spacerSize * i}px !important` };
	mr[`.mr-${i}`] = { marginRight: `${spacerSize * i}px !important` };
	mt[`.mt-${i}`] = { marginTop: `${spacerSize * i}px !important` };
	mb[`.mb-${i}`] = { marginBottom: `${spacerSize * i}px !important` };
	mx[`.mx-${i}`] = { marginLeft: `${spacerSize * i}px !important`, marginRight: `${spacerSize * i}px !important` };
	my[`.my-${i}`] = { marginTop: `${spacerSize * i}px !important`, marginBottom: `${spacerSize * i}px !important` };

	p[`.p-${i}`] = { padding: `${spacerSize * i}px !important` };
	pl[`.pl-${i}`] = { paddingLeft: `${spacerSize * i}px !important` };
	pr[`.pr-${i}`] = { paddingRight: `${spacerSize * i}px !important` };
	pt[`.pt-${i}`] = { paddingTop: `${spacerSize * i}px !important` };
	pb[`.pb-${i}`] = { paddingBottom: `${spacerSize * i}px !important` };
	px[`.px-${i}`] = { paddingLeft: `${spacerSize * i}px !important`, paddingRight: `${spacerSize * i}px !important` };
	py[`.py-${i}`] = { paddingTop: `${spacerSize * i}px !important`, paddingBottom: `${spacerSize * i}px !important` };
}

export const useThemedBootstrapStyles = createUseThemedStyles((_theme) => ({
	'@global': {
		/* ----------------------------------------------------------- */
		/* Spacer overrides */
		/* ----------------------------------------------------------- */
		...m,
		...ml,
		...mr,
		...mt,
		...mb,
		...mx,
		...my,
		...p,
		...pl,
		...pr,
		...pt,
		...pb,
		...px,
		...py,
	},
}));
