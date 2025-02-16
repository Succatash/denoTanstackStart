// deno-lint-ignore-file

import {defineConfig} from '@tanstack/start/config';
import * as _react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	vite: {
		plugins: [tailwindcss() as any],
	},
	tsr: {addExtensions: true},
});
