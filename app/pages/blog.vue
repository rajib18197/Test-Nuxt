/* File: pages/blog.vue */
<template>
	<div class="bg-gray-100 min-h-screen pt-32">
		<div class="max-w-7xl mx-auto">
			<!-- Featured Post -->
			<div
				class="grid grid-cols-1 md:grid-cols-2 items-center gap-12 bg-white p-12 rounded-lg shadow-lg"
			>
				<div class="flex flex-col justify-center">
					<p class="text-blue-500 font-medium text-sm">New Post</p>
					<h1 class="text-5xl font-bold mt-4 leading-tight">
						Understanding the Basics of Investing
					</h1>
					<p class="text-gray-500 mt-4 text-lg">March 15, 2025 · 8 min read</p>
					<p class="text-gray-600 mt-6 text-lg leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
						ullamcorper sed posuere consectetur viverra non iaculis porta.
					</p>
				</div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Blog image"
						class="rounded-lg w-full h-full object-cover shadow-md"
					/>
				</div>
			</div>

			<!-- Recent Posts -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
				<NuxtLink
					v-for="(post, index) in posts"
					:key="index"
					:to="'/blog/' + post.slug"
				>
					<BlogCard :post="post" class="h-full" />
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import BlogCard from "@/components/BlogCard.vue";

const posts = ref([
	{
		title: "Understanding the Basics of Investing",
		slug: "understanding-the-basics-of-investing",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image:
			"https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"It is a long established fact that a reader will be distracted by the readable content of its layout.",
	},
	{
		title: "Setting Up Your Investment Plan",
		slug: "setting-up-your-investment-plan",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image:
			"https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"It is a long established fact that a reader will be distracted by the readable content of its layout.",
	},
	{
		title: "First Steps to Making Your Investments",
		slug: "first-steps-to-making-your-investments",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image:
			"https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"It is a long established fact that a reader will be distracted by the readable content of its layout.",
	},
]);
</script>

<style scoped>
.grid-cols-3 > * {
	display: flex;
	flex-direction: column;
}
</style>
