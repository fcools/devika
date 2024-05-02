import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";

export default defineConfig({
<<<<<<< HEAD
	plugins: [sveltekit()],
	server: {
	    port: 3000,
		host: "0.0.0.0",
	},
=======
  plugins: [sveltekit(), wasm()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3001,
  },
  build: {
    target: "esnext",
  },
>>>>>>> cdfb782b0e634b773b10963c8034dc9207ba1f9f
});
