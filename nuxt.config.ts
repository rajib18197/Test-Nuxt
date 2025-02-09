// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4,
	},

	colorMode: {
		preference: "light",
	},

	experimental: {
		sharedPrerenderData: false,
		compileTemplate: true,
		resetAsyncDataToUndefined: true,
		templateUtils: true,
		relativeWatchPaths: true,
		defaults: {
			useAsyncData: {
				deep: true,
			},
		},
	},

	unhead: {
		renderSSRHeadOptions: {
			omitLineBreaks: false,
		},
	},

	image: {
		domains: ["https://cdn.dummyjson.com"],
	},

	devtools: { enabled: true },

	modules: [
		"@nuxt/icon",
		"@nuxtjs/google-fonts",
		"@nuxt/image",
		"@nuxt/ui",
		"@uploadthing/nuxt",
	],

	runtimeConfig: {
		kitKey: process.env.KIT_KEY,
		public: {
			uploadthingSecret: process.env.NUXT_UPLOADTHING_SECRET,
			uploadthingToken: process.env.NUXT_UPLOADTHING_TOKEN,
			uploadthingIngestUrl: process.env.NUXT_UPLOADTHING_INGEST_URL,
			uploadthingCallbackUrl: process.env.NUXT_UPLOADTHING_CALLBACK_URL,
		},

		// public: {
		// 	utAppId: process.env.NUXT_UT_APP_ID,
		// },
		// utSecretKey: process.env.NUXT_UT_SECRET_KEY,
	},

	googleFonts: {
		families: {
			Montserrat: true,
		},
	},
});
