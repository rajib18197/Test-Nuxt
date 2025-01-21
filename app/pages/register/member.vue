<template>
	<div
		class="flex flex-col justify-center items-center min-h-screen bg-white mt-32 m-20"
	>
		<!-- Header Section -->
		<div class="text-center max-w-5xl">
			<h1 class="text-4xl font-bold text-gray-800">
				Join us today to connect with great ventures and make the most of your
				investments!
			</h1>
		</div>

		<!-- Registration Notice -->
		<div
			class="mt-8 w-full max-w-6xl bg-[#d1ac69] border border-yellow-300 text-gray-800 rounded-lg p-8"
		>
			<p class="text-xl font-bold">*Registration Notice</p>
			<p class="mt-4 text-lg">
				To complete your registration, please note that a payment of [amount] is
				required. You can make this payment through any of the following
				methods:
			</p>
			<ul class="mt-4 list-disc list-inside text-lg">
				<li>Mobile Wallet: [Mobile Wallet Number]</li>
				<li>Bank Transfer: [Bank Account Details]</li>
				<li>Cash Payment: [Applicable for offline registration]</li>
			</ul>
			<p class="mt-4 text-lg">
				Once the payment is made, kindly retain the receipt or transaction ID as
				proof of payment. For any queries or assistance, feel free to contact us
				at [Contact Information].
			</p>
		</div>

		<!-- Registration Form -->
		<div class="mt-10 w-full max-w-6xl bg-gray-100 rounded-lg shadow-lg p-12">
			<form @submit.prevent="handleSubmit" class="space-y-8">
				<!-- Full Name and Email -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<label
							for="fullName"
							class="block text-xl font-medium text-gray-700"
							>Your Full Name</label
						>
						<input
							id="fullName"
							v-model="form.fullName"
							type="text"
							class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-4 text-lg focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your full name"
						/>
					</div>
					<div>
						<label for="email" class="block text-xl font-medium text-gray-700"
							>Email Address</label
						>
						<input
							id="email"
							v-model="form.email"
							type="email"
							class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-4 text-lg focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your email"
						/>
					</div>
				</div>

				<!-- NID and NID Image -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<label
							for="nidNumber"
							class="block text-xl font-medium text-gray-700"
							>NID Number</label
						>
						<input
							id="nidNumber"
							v-model="form.nidNumber"
							type="text"
							class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-4 text-lg focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your NID number"
						/>
					</div>
					<div>
						<label class="block text-xl font-medium text-gray-700"
							>NID Image/PDF</label
						>
						<input
							type="file"
							@change="handleFileUpload($event, 'nidImage')"
							class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 text-lg text-gray-600 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
				</div>

				<!-- Phone Number and Passport Number -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<label
							for="phoneNumber"
							class="block text-xl font-medium text-gray-700"
							>Phone Number</label
						>
						<input
							id="phoneNumber"
							v-model="form.phoneNumber"
							type="text"
							class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-4 text-lg focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your phone number"
						/>
					</div>
					<div>
						<label
							for="passportNumber"
							class="block text-xl font-medium text-gray-700"
							>Passport Number (if any)</label
						>
						<input
							id="passportNumber"
							v-model="form.passportNumber"
							type="text"
							class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-4 text-lg focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your passport number"
						/>
					</div>
				</div>

				<!-- Passport Photo and Passport Image -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<label class="block text-xl font-medium text-gray-700"
							>Passport Size Photo</label
						>
						<input
							type="file"
							@change="handleFileUpload($event, 'passportPhoto')"
							class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 text-lg text-gray-600 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div>
						<label class="block text-xl font-medium text-gray-700"
							>Passport Image (if any)</label
						>
						<input
							type="file"
							@change="handleFileUpload($event, 'passportImage')"
							class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 text-lg text-gray-600 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
				</div>

				<!-- Division, District, and Thana -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<label
							for="division"
							class="block text-xl font-medium text-gray-700"
							>Division</label
						>
						<select
							id="division"
							v-model="form.division"
							@change="updateDistricts"
							class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-4 text-lg focus:ring-blue-500 focus:border-blue-500"
						>
							<option value="" disabled>Select Division</option>
							<option
								v-for="division in divisions"
								:key="division"
								:value="division"
							>
								{{ division }}
							</option>
						</select>
					</div>
					<div>
						<label
							for="district"
							class="block text-xl font-medium text-gray-700"
							>District</label
						>
						<select
							id="district"
							v-model="form.district"
							@change="updateThanas"
							:disabled="!form.division"
							class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-4 text-lg focus:ring-blue-500 focus:border-blue-500"
						>
							<option value="" disabled>Select District</option>
							<option
								v-for="district in districts"
								:key="district"
								:value="district"
							>
								{{ district }}
							</option>
						</select>
					</div>
					<div>
						<label for="thana" class="block text-xl font-medium text-gray-700"
							>Thana</label
						>
						<select
							id="thana"
							v-model="form.thana"
							:disabled="!form.district"
							class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-4 text-lg focus:ring-blue-500 focus:border-blue-500"
						>
							<option value="" disabled>Select Thana</option>
							<option v-for="thana in thanas" :key="thana" :value="thana">
								{{ thana }}
							</option>
						</select>
					</div>
				</div>

				<!-- Full Address -->
				<div>
					<label
						for="fullAddress"
						class="block text-xl font-medium text-gray-700"
						>Full Address</label
					>
					<textarea
						id="fullAddress"
						v-model="form.fullAddress"
						rows="4"
						class="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm px-4 py-4 text-lg focus:ring-blue-500 focus:border-blue-500"
						placeholder="Enter your full address"
					></textarea>
				</div>

				<!-- Submit Button -->
				<div class="text-center">
					<button
						type="submit"
						class="w-full md:w-auto bg-blue-600 text-white py-4 px-10 text-xl rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				fullName: "",
				email: "",
				nidNumber: "",
				phoneNumber: "",
				passportNumber: "",
				division: "",
				district: "",
				thana: "",
				fullAddress: "",
			},
			divisions: ["Dhaka", "Chattogram", "Sylhet", "Khulna"],
			districts: [],
			thanas: [],
			divisionData: {
				Dhaka: ["Dhaka", "Gazipur", "Narayanganj"],
				Chattogram: ["Chattogram", "Coxs Bazar", "Bandarban"],
				Sylhet: ["Sylhet", "Moulvibazar", "Habiganj"],
				Khulna: ["Khulna", "Jessore", "Satkhira"],
			},
			thanaData: {
				Dhaka: ["Tejgaon", "Gulshan", "Mohammadpur"],
				Gazipur: ["Tongi", "Kaliakair", "Kapasia"],
				Narayanganj: ["Fatullah", "Siddhirganj", "Sonargaon"],
				Chattogram: ["Pahartali", "Halishahar", "Double Mooring"],
			},
		};
	},
	methods: {
		updateDistricts() {
			this.districts = this.divisionData[this.form.division] || [];
			this.form.district = "";
			this.form.thana = "";
			this.thanas = [];
		},
		updateThanas() {
			this.thanas = this.thanaData[this.form.district] || [];
			this.form.thana = "";
		},
		handleFileUpload(event, field) {
			this.form[field] = event.target.files[0];
		},
		handleSubmit() {
			console.log("Form submitted:", this.form);
			alert("Form submitted successfully!");
		},
	},
};
</script>

<style>
/* Add any custom styles if needed */
</style>
