<template>
	<div class="min-h-screen flex items-center justify-center bg-gray-100">
		<div class="bg-white p-12 rounded-lg shadow-xl max-w-3xl w-full">
			<!-- Back Button -->
			<nuxt-link to="/" class="text-blue-500 hover:underline mb-8 block">
				← Back
			</nuxt-link>

			<!-- Heading and Description -->
			<h1 class="text-4xl font-bold text-center text-gray-800 mb-8">
				Invest in the founders you believe in
			</h1>
			<p class="text-center text-xl text-gray-600 mb-10">
				Join over 1 million investors who are funding the future
			</p>

			<!-- Registration Buttons -->
			<div class="space-y-8">
				<nuxt-link to="/register/investor">
					<button
						class="w-full py-4 text-xl font-medium text-gray-800 border border-gray-300 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Register as an Investor
					</button>
				</nuxt-link>

				<nuxt-link to="/register/seeker">
					<button
						class="w-full py-4 mt-2 text-xl font-medium text-gray-800 border border-gray-300 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Register as an Investment Seeker
					</button>
				</nuxt-link>

				<nuxt-link to="/register/member">
					<button
						class="w-full py-4 mt-2 text-xl font-medium text-gray-800 border border-gray-300 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Register as a General Member
					</button>
				</nuxt-link>
			</div>

			<!-- Terms and Conditions Link -->
			<div class="text-center mt-8">
				<a
					href="#"
					class="text-lg text-blue-500 hover:underline"
					@click.prevent="openModal"
					>Read terms and conditions</a
				>
			</div>
		</div>

		<!-- Modal -->
		<div
			v-if="isModalOpen"
			class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
		>
			<div class="bg-white p-8 rounded-lg w-3/4 md:w-1/2">
				<h2 class="text-2xl font-bold text-gray-800 mb-4">
					ICB Terms & Conditions
				</h2>
				<p class="text-xl text-gray-700 mb-4">
					These are the terms and conditions. Please read them carefully.
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<p class="text-xl text-gray-700 mb-4">
					These are the terms and conditions. Please read them carefully.
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<p class="text-xl text-gray-700 mb-4">
					These are the terms and conditions. Please read them carefully.
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div class="flex justify-end">
					<button
						class="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
						@click="closeModal"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "RegistrationPage",
	data() {
		return {
			isModalOpen: false,
		};
	},
	methods: {
		openModal() {
			this.isModalOpen = true;
		},
		closeModal() {
			this.isModalOpen = false;
		},
	},
};
</script>

<style scoped>
/* Additional styling can go here */
</style>
