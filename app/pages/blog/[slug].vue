<template>
	<div class="max-w-4xl mx-auto p-8">
		<div v-if="post" class="bg-white shadow-md rounded-lg p-6">
			<img
				:src="post.image"
				alt="Blog Image"
				class="w-full h-64 object-cover rounded-lg"
			/>
			<h1 class="text-4xl font-bold mt-4">{{ post.title }}</h1>
			<p class="text-gray-500 mt-2">{{ post.date }} · {{ post.readTime }}</p>
			<p class="text-gray-600 mt-6 leading-relaxed">{{ post.content }}</p>
		</div>
		<div v-else class="text-center text-gray-500">Loading...</div>
	</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watch, onMounted } from "vue";

const route = useRoute();
const post = ref(null);

const blogPosts = [
	{
		title: "Understanding the Basics of Investing",
		slug: "understanding-the-basics-of-investing",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image: "https://via.placeholder.com/600x400",
		content: "Detailed content about investing basics...",
	},
	{
		title: "Setting Up Your Investment Plan",
		slug: "setting-up-your-investment-plan",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image: "https://via.placeholder.com/600x400",
		content: "Step-by-step guide to setting up an investment plan...",
	},
];

// Function to load post data
const loadPost = () => {
	post.value = blogPosts.find((p) => p.slug === route.params.slug);
	if (!post.value) {
		console.error("⚠️ Blog post not found:", route.params.slug);
	}
};

// Load post on mount
onMounted(() => {
	loadPost();
});

// Watch for route changes & reload post data
watch(
	() => route.params.slug,
	(newSlug, oldSlug) => {
		console.log("✅ Route changed:", oldSlug, "→", newSlug);
		loadPost();
	}
);
</script>
