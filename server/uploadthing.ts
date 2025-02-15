// server/api/uploadthing.ts
import { createUploadthing, type FileRouter } from "uploadthing/h3";
import { defineEventHandler, H3Event } from "h3";

const f = createUploadthing();

const auth = (ev: H3Event) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const uploadRouter = {
	// Define as many FileRoutes as you like, each with a unique routeSlug
	imageUploader: f({
		image: {
			/**
			 * For full list of options and defaults, see the File Route API reference
			 * @see https://docs.uploadthing.com/file-routes#route-config
			 */
			maxFileSize: "4MB",
			maxFileCount: 1,
		},
	})
		// Set permissions and file types for this FileRoute
		.middleware(async ({ event }) => {
			// This code runs on your server before upload
			const user = await auth(event);

			// If you throw, the user will not be able to upload
			if (!user) throw new Error("Unauthorized");

			// Whatever is returned here is accessible in onUploadComplete as `metadata`
			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			// This code RUNS ON YOUR SERVER after upload
			console.log("Upload complete for userId:", metadata.userId);

			console.log("file url", file.url);
		}),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;

// this is very important, make sure you expose the handler correctly
export const { upload, utapi } = createUploadthing(uploadRouter);

export default defineEventHandler((event: H3Event) => {
	return upload(event);
});
