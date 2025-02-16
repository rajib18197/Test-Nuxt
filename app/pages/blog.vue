/* File: pages/blog.vue */
<template>
	<div
		class="max-w-[1520px] mx-auto flex flex-col items-center px-4 md:px-8 py-16 pt-28"
	>
		<div class="max-w-[1520px] mx-auto">
			<!-- Featured Post -->
			<div
				class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-gray-200 p-12 rounded-lg shadow-lg"
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
			<div
				class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-8 justify-center"
			>
				<NuxtLink
					v-for="(post, index) in posts"
					:key="index"
					:to="'/blog/' + post.slug"
					class="flex justify-center"
					:class="{ 'mt-8': index >= 3 }"
				>
					<BlogCard :post="post" class="h-full w-[90%] md:w-[80%]" />
				</NuxtLink>
			</div>

			<!-- Load More Button -->
			<div class="mt-12 flex justify-center">
				<button
					class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
				>
					Read more
				</button>
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
			"https://images.unsplash.com/photo-1568359415705-47e98104af04?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"It is a long established fact that a reader will be distracted by the readable content of its layout.",
	},
	{
		title: "Setting Up Your Investment Plan",
		slug: "setting-up-your-investment-plan",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image:
			"https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"It is a long established fact that a reader will be distracted by the readable content of its layout.",
	},
	{
		title: "First Steps to Making Your Investments",
		slug: "first-steps-to-making-your-investments",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image:
			"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"It is a long established fact that a reader will be distracted by the readable content of its layout.",
	},
	{
		title: "Investing in Stocks: A Beginner's Guide",
		slug: "investing-in-stocks-beginner-guide",
		date: "Oct 25, 2024",
		readTime: "10 min read",
		image:
			"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Understanding how to start investing in stocks with simple strategies and tips.",
	},
	{
		title: "Cryptocurrency Investment Strategies",
		slug: "cryptocurrency-investment-strategies",
		date: "Nov 01, 2024",
		readTime: "15 min read",
		image:
			"https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Exploring different cryptocurrency investment strategies for long-term success.",
	},
	{
		title: "How to Build a Diversified Portfolio",
		slug: "how-to-build-a-diversified-portfolio",
		date: "Nov 05, 2024",
		readTime: "14 min read",
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Learn how to minimize risks by building a diversified investment portfolio.",
	},
	{
		title: "Investing in Stocks: A Beginner's Guide",
		slug: "investing-in-stocks-beginner-guide",
		date: "Oct 25, 2024",
		readTime: "10 min read",
		image:
			"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Understanding how to start investing in stocks with simple strategies and tips.",
	},
	{
		title: "Cryptocurrency Investment Strategies",
		slug: "cryptocurrency-investment-strategies",
		date: "Nov 01, 2024",
		readTime: "15 min read",
		image:
			"https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Exploring different cryptocurrency investment strategies for long-term success.",
	},
	{
		title: "How to Build a Diversified Portfolio",
		slug: "how-to-build-a-diversified-portfolio",
		date: "Nov 05, 2024",
		readTime: "14 min read",
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Learn how to minimize risks by building a diversified investment portfolio.",
	},
]);
</script>

<style scoped>
.grid-cols-3 > * {
	display: flex;
	flex-direction: column;
}
</style>
