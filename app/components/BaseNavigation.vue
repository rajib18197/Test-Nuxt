<template>
	<nav class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
		<div
			class="max-w-[1480px] mx-auto flex items-center justify-between px-4 py-[5px]"
		>
			<!-- Left Section: Logo and Navigation Links -->
			<div class="flex items-center gap-6 md:gap-10">
				<!-- Logo -->
				<NuxtLink to="/" class="flex items-center" @click="closeMenu">
					<img
						src="@/assets/Icb-logo.png"
						alt="ICB Logo"
						class="h-[50px] w-[60px] md:h-[70px] md:w-[80px]"
					/>
				</NuxtLink>

				<!-- Desktop Navigation Links beside the logo -->
				<div class="hidden md:flex items-center space-x-6">
					<!-- Desktop Dropdown for Services -->
					<div class="relative group">
						<NuxtLink
							to="/services"
							class="text-gray-800 font-medium hover:text-blue-500 flex items-center"
						>
							Services
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4 ml-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</NuxtLink>
					</div>
					<NuxtLink
						to="/blog"
						class="text-gray-800 font-medium hover:text-blue-500"
					>
						Blog
					</NuxtLink>
				</div>
			</div>

			<!-- Desktop Right Section -->
			<div class="hidden md:flex space-x-4">
				<NuxtLink
					to="/login"
					class="text-gray-800 font-medium hover:text-blue-500 focus:outline-none pt-[8px]"
				>
					Login
				</NuxtLink>
				<NuxtLink
					to="/registration"
					class="bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 focus:outline-none"
				>
					Registration
				</NuxtLink>
			</div>

			<!-- Mobile Menu Button -->
			<button @click="toggleMenu" class="md:hidden focus:outline-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-gray-800"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			isMenuOpen: false,
			isDropdownVisible: false,
		};
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		},
		toggleDropdown() {
			this.isDropdownVisible = !this.isDropdownVisible;
		},
		closeMenu() {
			this.isMenuOpen = false;
			this.isDropdownVisible = false;
		},
	},
};
</script>

<style scoped>
body {
	padding-top: 64px; /* Adjust for the navbar height */
}
</style>
