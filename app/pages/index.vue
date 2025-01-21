<script setup lang="ts">
import { type RecipeResponse } from "../../types/types";

// Correct import paths
import _imports_0 from "@/assets/image_1.png";
import _imports_1 from "@/assets/image_2.png";
import _imports_3 from "@/assets/image_4.png";

// services img

import _imports_5 from "@/assets/Rectangle_1.png";
import _imports_6 from "@/assets/Rectangle_2.png";
import _imports_7 from "@/assets/Rectangle_3.png";
import _imports_8 from "@/assets/Rectangle_4.png";

import _imports_9 from "@/assets/image_p.png";

import _imports_10 from "@/assets/Rectangle_5.png";
import _imports_11 from "@/assets/Rectangle_6.png";
import _imports_12 from "@/assets/Rectangle_7.png";

import _imports_13 from "@/assets/Rectangle_8.png";

const { data, error } = await useFetch<RecipeResponse>(
	"https://dummyjson.com/recipes?limit=12"
);

useSeoMeta({
	title: "Nuxtcipes",
	description: "Recipes for you to cook!",
	ogTitle: "Nuxtcipes",
	ogDescription: "Recipes for you to cook!",
	ogImage: "/nuxt-course-hero.png",
	ogUrl: `http:localhost:3000`,
	twitterTitle: "Nuxtcipes",
	twitterDescription: "Recipes for you to cook!",
	twitterImage: "/nuxt-course-hero.png",
	twitterCard: "summary",
});
</script>

<template>
	<main>
		<section class="bg-white pt-24">
			<div
				class="max-w-[1520px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-16"
			>
				<!-- Left Content -->
				<div
					class="text-center md:text-left md:max-w-lg animate-fade-in-up animate-delay-200 animate-duration-700"
				>
					<h1
						class="text-5xl font-extrabold leading-normal mb-6 animate-slide-in-left animate-duration-1000"
					>
						A Better Way To <br />
						Raise Capital
					</h1>
					<p
						class="text-gray-600 text-lg leading-relaxed mb-8 animate-fade-in animate-delay-500 animate-duration-1000"
					>
						ICB provides investors and innovators with the tools to grow.
					</p>
					<button
						class="bg-blue-700 text-white font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition-transform transform hover:scale-110 hover:rotate-2 animate-bounce"
					>
						Contact Us
					</button>
				</div>

				<!-- Right Image -->
				<div
					class="mt-10 md:mt-0 md:ml-8 animate-fade-in animate-duration-1000 animate-delay-300 animate-zoom-in"
				>
					<NuxtImg
						src="https://img.freepik.com/free-photo/plant-growing-coins-glass-jar-money-green-grass_155003-5432.jpg?t=st=1736941867~exp=1736945467~hmac=4a0f08c13137a235046f68d581897e1ddfc0ada809e17ebf6bede8541a98edf2&w=1060"
						alt="Hero Section Illustration"
						class="w-[600px] h-auto rounded-lg"
						format="jpg"
						sizes="xs:100vw sm:667px"
					/>
				</div>
			</div>
		</section>

		<!-- Services -->
		<section class="bg-white py-16 animate-fade-in-up animate-duration-1000">
			<div class="max-w-[1200px] mx-auto text-center">
				<!-- Section Heading -->
				<h2
					class="text-gray-500 text-lg font-medium mb-2 animate-slide-in-top animate-delay-300"
				>
					Our Services
				</h2>
				<h3
					class="text-2xl md:text-3xl font-semibold text-gray-800 mb-12 animate-fade-in animate-duration-1000"
				>
					Choose what works best for you
				</h3>

				<!-- Cards -->
				<div
					class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 animate-fade-in-up animate-delay-200"
				>
					<!-- Card 1 -->
					<div
						class="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition flex flex-col justify-between"
					>
						<div>
							<img
								:src="_imports_1"
								alt="Become a part of a Franchise"
								class="w-12 h-12 mx-auto mb-4"
							/>
							<h4 class="text-lg font-semibold text-gray-800 mb-2">
								Invest in a Business
							</h4>
							<p class="text-gray-600 text-sm mb-4">
								Discover and invest in lucrative business opportunities to grow
								your wealth.
							</p>
						</div>
						<a
							href="#"
							class="text-blue-500 font-medium hover:underline mt-auto"
						>
							Learn More &gt;
						</a>
					</div>

					<!-- Card 2 -->
					<div
						class="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
					>
						<img
							:src="_imports_1"
							alt="Become a part of a Franchise"
							class="w-12 h-12 mx-auto mb-4"
						/>
						<h4 class="text-lg font-semibold text-gray-800 mb-2">
							Become a part of a Franchise
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							Join established franchises and benefit from proven success
							models.
						</p>
						<a href="#" class="text-blue-500 font-medium hover:underline">
							Learn More &gt;
						</a>
					</div>

					<!-- Card 3 -->
					<div
						class="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition flex flex-col justify-between"
					>
						<div>
							<img
								:src="_imports_3"
								alt="Become a part of a Franchise"
								class="w-12 h-12 mx-auto mb-4"
							/>
							<h4 class="text-lg font-semibold text-gray-800 mb-2">
								Sell your Business
							</h4>
							<p class="text-gray-600 text-sm mb-4">
								List your business and connect with serious buyers quickly and
								easily.
							</p>
						</div>
						<a
							href="#"
							class="text-blue-500 font-medium hover:underline mt-auto"
						>
							Learn More &gt;
						</a>
					</div>

					<!-- Card 4 -->
					<div
						class="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition flex flex-col justify-between"
					>
						<div>
							<img
								:src="_imports_0"
								alt="Become a part of a Franchise"
								class="w-12 h-12 mx-auto mb-4"
							/>
							<h4 class="text-lg font-semibold text-gray-800 mb-2">
								Apply for Investment
							</h4>
							<p class="text-gray-600 text-sm mb-4">
								Secure funding by showcasing your vision to trusted investors.
							</p>
						</div>
						<a
							href="#"
							class="text-blue-500 font-medium hover:underline mt-auto"
						>
							Learn More &gt;
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Services 2nd part -->

		<section class="bg-white py-16">
			<div class="max-w-[1200px] mx-auto">
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
					<!-- Card 1 -->
					<div
						class="bg-white shadow-md rounded-lg border border-gray-200 p-4 hover:shadow-lg transition flex flex-col"
					>
						<img
							:src="_imports_5"
							alt="Investor Management"
							class="rounded-lg w-full h-60 object-cover mb-4"
						/>
						<h4 class="text-lg font-semibold text-gray-800 mb-2">
							Investor Management
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							<strong>Investor relations reimagined.</strong> Leverage software
							to drive meaningful, actionable engagement.
						</p>
						<div class="flex items-center justify-end mt-auto"></div>
					</div>

					<!-- Card 2 -->
					<div
						class="bg-white shadow-md rounded-lg border border-gray-200 p-4 hover:shadow-lg transition flex flex-col"
					>
						<img
							:src="_imports_6"
							alt="Financial Services"
							class="rounded-lg w-full h-60 object-cover mb-4"
						/>
						<h4 class="text-lg font-semibold text-gray-800 mb-2">
							Financial Services
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							<strong>Consolidate your capital management.</strong> Leverage
							seamless, flexible, and secure banking solutions.
						</p>
						<div class="flex items-center justify-end mt-auto"></div>
					</div>

					<!-- Card 3 -->
					<div
						class="bg-white shadow-md rounded-lg border border-gray-200 p-4 hover:shadow-lg transition flex flex-col"
					>
						<img
							:src="_imports_7"
							alt="Full Service Funds"
							class="rounded-lg w-full h-60 object-cover mb-4"
						/>
						<h4 class="text-lg font-semibold text-gray-800 mb-2">
							Full Service Funds
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							<strong>Investor relations reimagined.</strong> Leverage software
							to drive meaningful, actionable engagement.
						</p>
						<div class="flex items-center justify-end mt-auto"></div>
					</div>

					<!-- Card 4 -->
					<div
						class="bg-white shadow-md rounded-lg border border-gray-200 p-4 hover:shadow-lg transition flex flex-col"
					>
						<img
							:src="_imports_8"
							alt="Equity Management"
							class="rounded-lg w-full h-60 object-cover mb-4"
						/>
						<h4 class="text-lg font-semibold text-gray-800 mb-2">
							Equity Management
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							<strong>Investor relations reimagined.</strong> Leverage software
							to drive meaningful, actionable engagement.
						</p>
						<div class="flex items-center justify-end mt-auto"></div>
					</div>
				</div>
			</div>
		</section>

		<!-- Provides Section -->

		<section class="bg-[#0F172A] text-white py-12 px-6">
			<div class="container mx-auto flex flex-col md:flex-row items-center">
				<!-- Text Section -->
				<div class="md:w-1/2 text-center md:text-left">
					<p class="text-sm text-gray-400">
						ICB provides investors and innovators with the tools to grow.
					</p>
					<h1 class="text-3xl md:text-4xl font-bold mt-4 leading-tight">
						Your trusted platform for unlocking opportunities in venture and
						private equity.
					</h1>
					<ul class="mt-8 space-y-4">
						<li class="flex items-center">
							<span class="flex-grow border-b border-gray-600 pb-1">
								Attract investors
							</span>
						</li>
						<li class="flex items-center">
							<span class="flex-grow border-b border-gray-600 pb-1">
								Engage investors
							</span>
						</li>
						<li class="flex items-center">
							<span class="flex-grow border-b border-gray-600 pb-1">
								Seamless onboarding
							</span>
						</li>
						<li class="flex items-center">
							<span class="flex-grow border-b border-gray-600 pb-1">
								Optimize portfolio
							</span>
						</li>
					</ul>
				</div>

				<!-- Image Section -->
				<div class="md:w-1/2 mt-8 md:mt-0 flex justify-center">
					<img
						:src="_imports_9"
						alt="Investors working together"
						class="rounded-lg shadow-lg max-w-full"
					/>
				</div>
			</div>
		</section>

		<!-- Fund Section -->

		<section class="bg-[#0F172A] py-28">
			<div class="max-w-7xl mx-auto px-6">
				<!-- Content Wrapper -->
				<div
					class="bg-gray-700 rounded-lg py-10 px-8 flex flex-col lg:flex-row items-center lg:justify-between"
				>
					<!-- Text Content -->
					<div class="text-center lg:text-left lg:max-w-lg mb-8 lg:mb-0">
						<h2 class="text-white text-2xl lg:text-3xl font-semibold mb-4">
							Full Service Fund Management
						</h2>
						<p class="text-gray-300 text-base lg:text-lg mb-6">
							ICB provides services to simplify fund management, removing
							barriers and streamlining operations.
						</p>
						<a
							href="#"
							class="text-white font-medium border-b border-white hover:text-gray-300 hover:border-gray-300"
						>
							Explore our fund offerings
						</a>
					</div>

					<!-- Image Section -->
					<div class="flex gap-6 lg:gap-8">
						<!-- Image 1 -->
						<div class="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-60">
							<img
								:src="_imports_10"
								alt="Person 1"
								class="object-cover w-full h-full"
							/>
						</div>
						<!-- Image 2 -->
						<div class="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-60">
							<img
								:src="_imports_11"
								alt="Person 2"
								class="object-cover w-full h-full"
							/>
						</div>
						<!-- Image 3 -->
						<div class="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-60">
							<img
								:src="_imports_12"
								alt="Person 3"
								class="object-cover w-full h-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Fueling Section -->

		<section class="bg-white py-32">
			<div
				class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-40 items-center"
			>
				<!-- Left Text Section -->
				<div>
					<h2 class="text-5xl lg:text-7xl font-bold text-gray-900 mb-14">
						Fueling <br />
						innovation
					</h2>
					<p class="text-gray-600 text-base lg:text-lg mb-14">
						ICB manages a large number of venture capital deals, leading the way
						in digitalizing the process. This innovation makes investing faster,
						simpler, and more accessible for users.
					</p>
					<img
						:src="_imports_13"
						alt="Chart Display"
						class="rounded-lg shadow-md"
					/>
				</div>

				<!-- Right Statistics Section -->
				<div class="space-y-8 mt-28">
					<!-- Top Statistic -->
					<hr />
					<div class="mb-40 flex flex-col items-center">
						<hr />
						<h3 class="text-5xl lg:text-[150px] font-bold text-gray-900">
							$120B
						</h3>
						<p class="text-gray-600 text-base mt-2">assets on platform</p>
					</div>
					<hr />
					<!-- Other Stats Grid -->
					<div class="grid grid-cols-2 gap-x-10 gap-y-16 justify-items-center">
						<div>
							<h4 class="text-2xl lg:text-5xl font-bold text-gray-900">24k+</h4>
							<p class="text-gray-600 text-sm mt-1">funds</p>
						</div>
						<div>
							<h4 class="text-2xl lg:text-5xl font-bold text-gray-900">12k+</h4>
							<p class="text-gray-600 text-sm mt-1">investment seekers</p>
						</div>
						<div>
							<h4 class="text-2xl lg:text-5xl font-bold text-gray-900">85k+</h4>
							<p class="text-gray-600 text-sm mt-1">active investors</p>
						</div>
						<div>
							<h4 class="text-2xl lg:text-5xl font-bold text-gray-900">$8B</h4>
							<p class="text-gray-600 text-sm mt-1">
								raised by investor seekers
							</p>
						</div>
					</div>
					<hr />
				</div>
			</div>
		</section>
	</main>
</template>
