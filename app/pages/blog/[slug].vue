<template>
	<div class="max-w-3xl mx-auto py-16 px-4">
		<div v-if="post" class="flex flex-col space-y-8">
			<h1 class="text-4xl font-bold">{{ post.title }}</h1>
			<p class="text-gray-500 text-sm">{{ post.date }} · {{ post.readTime }}</p>
			<div class="mt-6">
				<img
					:src="post.image"
					alt="Blog Post"
					class="rounded-lg w-full h-96 object-cover mb-8"
				/>
				<p class="text-gray-600 text-lg">{{ post.content }}</p>
			</div>
		</div>
		<div v-else class="text-center text-gray-500">
			<p>Loading...</p>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const post = ref(null);

// Simulated fetching of a post based on the slug
const posts = [
	{
		title: "Understanding the Basics of Investing",
		slug: "understanding-the-basics-of-investing",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image:
			"https://images.unsplash.com/photo-1568359415705-47e98104af04?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ullamcorper sed posuere consectetur viverra non iaculis porta. Sed euismod dui nec pharetra cursus. Nulla eget tristique lorem. Donec sollicitudin felis at neque suscipit, non tempus ipsum fermentum.",
	},
	{
		title: "Setting Up Your Investment Plan",
		slug: "setting-up-your-investment-plan",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image:
			"https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ullamcorper sed posuere consectetur viverra non iaculis porta. Sed euismod dui nec pharetra cursus. Nulla eget tristique lorem. Donec sollicitudin felis at neque suscipit, non tempus ipsum fermentum.",
	},
	// More posts...
];

// Fetch post based on slug
onMounted(() => {
	const slug = route.params.slug;
	post.value = posts.find((post) => post.slug === slug);
});
</script>

<style scoped>
/* Styles for the blog post page */
</style>
