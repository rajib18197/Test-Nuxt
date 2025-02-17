<template>
	<div
		class="min-h-screen bg-white flex items-center justify-center p-4 mt-32 mb-20"
	>
		<div class="bg-gray-100 shadow-md rounded-lg w-full max-w-4xl p-6">
			<h1 class="text-2xl font-semibold text-center text-gray-700 mb-4">
				Join us today to connect with great ventures and make the most of your
				investments!
			</h1>

			<div
				class="bg-[#d1ac69] p-4 border border-gray-300 rounded mb-6 text-gray-600"
			>
				<p class="font-semibold mb-2">*Registration Notice</p>
				<p>
					To complete your registration, please note that a payment of [amount]
					is required. You can make this payment through any of the following
					methods:
				</p>
				<ul class="list-disc pl-5 mb-2">
					<li>Mobile Wallet: [Mobile Wallet Number]</li>
					<li>Bank Transfer: [Bank Account Details]</li>
					<li>Cash Payment: [Applicable for offline registration]</li>
				</ul>
				<p>
					Once the payment is made, kindly retain the receipt or transaction ID
					as proof of payment. For any queries or assistance, feel free to
					contact us at [Contact Information].
				</p>
			</div>

			<form @submit.prevent="submitForm" class="space-y-6">
				<!-- Full Name and Email -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>Your Full Name</label
						>
						<input
							v-model="form.fullName"
							type="text"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>Email address</label
						>
						<input
							v-model="form.email"
							type="email"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
				</div>

				<!-- NID, Phone, and Passport Number -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>NID number</label
						>
						<input
							v-model="form.nid"
							type="text"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>Phone number</label
						>
						<input
							v-model="form.phone"
							type="tel"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-600"
						>Passport number (if any)</label
					>
					<input
						v-model="form.passportNumber"
						type="text"
						class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
					/>
				</div>

				<!-- File Uploads -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>NID Image/PDF</label
						>
						<input
							@change="handleFileUpload('nidImage', $event)"
							type="file"
							accept=".pdf,image/*"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>Passport size photo</label
						>
						<input
							@change="handleFileUpload('passportPhoto', $event)"
							type="file"
							accept="image/*"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm"
						/>
					</div>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-600"
						>Passport Image (if any)</label
					>
					<input
						@change="handleFileUpload('passportImage', $event)"
						type="file"
						accept="image/*"
						class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm"
					/>
				</div>

				<!-- Payment Method and Transaction ID -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>Select payment method</label
						>
						<select
							v-model="form.paymentMethod"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
						>
							<option disabled value="">Choose a payment method</option>
							<option>Mobile Wallet</option>
							<option>Bank Transfer</option>
							<option>Cash Payment</option>
						</select>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>Transaction ID</label
						>
						<input
							v-model="form.transactionId"
							type="text"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
						/>
					</div>
				</div>

				<!-- Division, District, and Thana -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>Division</label
						>
						<select
							v-model="form.division"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
						>
							<option disabled value="">Select Division</option>
							<option>Division 1</option>
							<option>Division 2</option>
							<option>Division 3</option>
						</select>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>District</label
						>
						<select
							v-model="form.district"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
						>
							<option disabled value="">Select District</option>
							<option>District 1</option>
							<option>District 2</option>
							<option>District 3</option>
						</select>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-600">Thana</label>
						<select
							v-model="form.thana"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
						>
							<option disabled value="">Select Thana</option>
							<option>Thana 1</option>
							<option>Thana 2</option>
							<option>Thana 3</option>
						</select>
					</div>
				</div>

				<!-- Full Address -->
				<div>
					<label class="block text-sm font-medium text-gray-600"
						>Full Address</label
					>
					<textarea
						v-model="form.address"
						rows="3"
						class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
					></textarea>
				</div>

				<!-- Investment Amount -->
				<div>
					<label class="block text-sm font-medium text-gray-600"
						>Investment amount</label
					>
					<input
						v-model="form.investmentAmount"
						type="number"
						class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
					/>
				</div>

				<!-- Submit Button -->
				<div class="text-center">
					<button
						type="submit"
						class="bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
					>
						Submit
					</button>
				</div>
			</form>

			<p class="text-sm text-center text-gray-600 mt-4">
				<a
					href="#"
					class="text-blue-600 hover:underline"
					@click.prevent="openModal"
					>Read terms and conditions</a
				>
			</p>
		</div>
	</div>

	<!-- Modal for Terms and Conditions -->
	<div
		v-if="isModalOpen"
		class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
	>
		<div class="bg-white p-8 rounded-lg w-3/4 md:w-1/2">
			<h1 class="text-2xl font-bold mb-6">ICB Terms & Conditions</h1>
			<p class="text-gray-700 mb-4">
				Terms and Conditions content goes here...
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
</template>

<script>
export default {
	data() {
		return {
			form: {
				fullName: "",
				email: "",
				nid: "",
				phone: "",
				passportNumber: "",
				nidImage: null,
				passportPhoto: null,
				passportImage: null,
				paymentMethod: "",
				transactionId: "",
				division: "",
				district: "",
				thana: "",
				address: "",
				investmentAmount: null,
			},
			isModalOpen: false,
		};
	},
	methods: {
		handleFileUpload(field, event) {
			const file = event.target.files[0];
			this.form[field] = file;
		},
		submitForm() {
			console.log("Form Data:", this.form);
			alert("Form submitted successfully!");
		},
		openModal() {
			this.isModalOpen = true;
		},
		closeModal() {
			this.isModalOpen = false;
		},
	},
};
</script>
