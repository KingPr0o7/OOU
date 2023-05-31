import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: 'dist',
		publicDir: 'public',
		rollupOptions: {
		  input: {
			index: resolve(__dirname, 'index.html')
		  },
		},
	},
	server: {
		open: 'index.html'
	}
})