import { useContextBridge } from '@react-three/drei';

import { ThemeContext } from '@/theme';

export function useCustomContextBridge() {
	return useContextBridge(ThemeContext);
}
