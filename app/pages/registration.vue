<template>
	<div
		class="flex flex-col justify-center items-center min-h-screen bg-white mx-20 my-32"
	>
		<!-- Header Section -->
		<div class="text-center max-w-4xl">
			<h1 class="text-4xl font-bold text-gray-800">
				Invest in the founders you believe in
			</h1>
			<p class="text-xl text-gray-600 mt-4">
				Join over 1 million investors who are funding the future
			</p>
			<p class="mt-4 text-gray-600">
				Already have an account?
				<nuxt-link to="/login" class="text-blue-500 hover:underline"
					>Sign In</nuxt-link
				>
			</p>
		</div>

		<!-- Registration Section -->
		<div class="mt-12 w-full max-w-5xl bg-gray-100 rounded-lg shadow-lg p-16">
			<h2 class="text-3xl font-bold text-center text-gray-800">
				Register for an account
			</h2>
			<p class="text-lg text-center text-gray-600 mt-4">
				Choose the type of account you would like to register for.
			</p>
			<div class="mt-10 space-y-6">
				<!-- Button: Register as an Investor -->
				<button
					@click="navigateTo('/register/investor')"
					class="w-full py-4 text-xl font-medium text-gray-800 border border-gray-300 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Register as an Investor
				</button>

				<!-- Button: Register as an Investment Seeker -->
				<button
					@click="navigateTo('/register/seeker')"
					class="w-full py-4 text-xl font-medium text-gray-800 border border-gray-300 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Register as an Investment Seeker
				</button>

				<!-- Button: Register as a General Member -->
				<button
					@click="navigateTo('/register/member')"
					class="w-full py-4 text-xl font-medium text-gray-800 border border-gray-300 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Register as a General Member
				</button>
			</div>
		</div>

		<!-- Footer Section -->
		<div class="mt-12 text-center">
			<p class="text-lg text-gray-600">
				Read our
				<nuxt-link to="/terms" class="text-blue-500 hover:underline"
					>terms and conditions</nuxt-link
				>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		navigateTo(route) {
			// Programmatically navigate to the specified route
			this.$router.push(route);
		},
	},
};
</script>

<style>
/* Add custom styles here if needed */
</style>
