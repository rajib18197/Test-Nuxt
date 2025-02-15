import { defineEventHandler, H3Event } from "h3";
import { createUploadthing, type FileRouter } from "uploadthing/h3";

const f = createUploadthing();

// Fake authentication function
const auth = (ev: H3Event) => ({ id: "fakeId" });

// Define the file router
export const uploadRouter = {
	imageUploader: f({
		image: {
			maxFileSize: "4MB",
			maxFileCount: 1,
		},
	})
		.middleware(async ({ event }) => {
			const user = await auth(event);
			if (!user) throw new Error("Unauthorized");
			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			console.log("Upload complete for userId:", metadata.userId);
			console.log("File URL:", file.url);
		}),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;

// Export the handler for Nuxt
export const { upload } = createUploadthing(uploadRouter);

export default defineEventHandler((event: H3Event) => {
	return upload(event); // Ensure this handles UploadThing requests
});
