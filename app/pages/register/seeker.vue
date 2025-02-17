<template>
	<div
		class="min-h-screen bg-white flex items-center justify-center p-4 mt-32 mb-20"
	>
		<div class="bg-gray-100 shadow-md rounded-lg w-full max-w-5xl p-6">
			<h1 class="text-2xl font-semibold text-center text-gray-700 mb-4">
				Join us today to connect with great ventures and make the most of your
				investments!
			</h1>

			<div
				class="bg-[#d1ac69] p-4 border border-gray-300 rounded mb-6 text-gray-800"
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

				<!-- NID and Passport -->
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
							>NID Image/PDF</label
						>
						<input
							@change="handleFileUpload('nidImage', $event)"
							type="file"
							accept=".pdf,image/*"
							class="w-full mt-1 px-3 py-2 border rounded-lg"
						/>
						<!-- <UploadButton /> -->
					</div>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
				</div>

				<!-- Passport and Address -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>Passport size photo</label
						>
						<input
							@change="handleFileUpload('passportPhoto', $event)"
							type="file"
							accept="image/*"
							class="w-full mt-1 px-3 py-2 border rounded-lg"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-600"
							>Passport Image (if any)</label
						>
						<input
							@change="handleFileUpload('passportImage', $event)"
							type="file"
							accept="image/*"
							class="w-full mt-1 px-3 py-2 border rounded-lg"
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

				<!-- Company Profile -->
				<div>
					<label class="block text-sm font-medium text-gray-600"
						>Company Profile</label
					>
					<input
						v-model="form.companyProfile"
						type="text"
						class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
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

				<!-- File Upload Section -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div v-for="(field, index) in additionalFiles" :key="index">
						<label class="block text-sm font-medium text-gray-600">{{
							field.label
						}}</label>
						<input
							@change="handleFileUpload(field.model, $event)"
							type="file"
							class="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm"
						/>
					</div>
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

			<!-- <p class="text-sm text-center text-gray-600 mt-4">
				<a href="#" class="text-blue-600 hover:underline"
					>Read terms and conditions</a
				>
			</p> -->
			<!-- Terms & Conditions Modal -->
			<div
				v-show="showModal"
				class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
			>
				<div
					class="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
				>
					<div class="flex justify-between items-center mb-4">
						<h2 class="text-2xl font-semibold">Terms & Conditions</h2>
						<button
							@click="toggleModal"
							class="text-gray-500 hover:text-gray-700"
						>
							<svg
								class="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div class="space-y-4 text-gray-600">
						<p>Please read these terms carefully before proceeding:</p>
						<!-- Add your actual terms content here -->
						<p>
							1. By registering, you agree to our privacy policy and terms of
							service.
						</p>
						<p>
							2. All investments carry risk, and past performance is not
							indicative of future results.
						</p>
						<p>
							3. You must maintain accurate and up-to-date registration
							information.
						</p>
						<p>
							4. We reserve the right to verify all submitted documents and
							information.
						</p>
						<p>
							5. Any fraudulent activity will result in immediate account
							termination.
						</p>
					</div>
					<div class="mt-6 text-right">
						<button
							@click="toggleModal"
							class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
						>
							I Understand
						</button>
					</div>
				</div>
			</div>

			<!-- Existing form content -->
			<div class="bg-gray-100 rounded-lg w-full max-w-5xl p-6">
				<!-- ... existing form elements ... -->

				<p class="text-sm text-center text-gray-600 mt-4">
					<a
						href="#"
						@click.prevent="toggleModal"
						class="text-blue-600 hover:underline"
					>
						Read terms and conditions
					</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showModal: false,
			// ... existing data properties ...
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
				companyProfile: "",
			},
			additionalFiles: [
				{ label: "Bank statement (last 2 years)", model: "bankStatement" },
				{ label: "Trade license (updated)", model: "tradeLicense" },
				{ label: "Sales invoice (last 1 year)", model: "salesInvoice" },
				{ label: "MOA (if any)", model: "moa" },
				{
					label: "Vendor payment receipt (last 6 months)",
					model: "vendorPaymentReceipt",
				},
				{
					label: "Investment Proposal (tech deck)",
					model: "investmentProposal",
				},
				{ label: "CIB report", model: "cibReport" },
				{ label: "Proprietor/MD/Chairman/CEO’s profile", model: "ceoProfile" },
				{ label: "Receivable and payables list", model: "receivablesPayables" },
				{ label: "Rental agreement/Deed", model: "rentalAgreement" },
				{ label: "TIN", model: "tin" },
				{ label: "BIN (if any)", model: "bin" },
				{
					label: "Audit report for last 2 years (if any)",
					model: "auditReport",
				},
				{
					label: "Company valuation report (if any)",
					model: "valuationReport",
				},
				{
					label: "RJSC/Incorporation certificate (if any)",
					model: "rjscCertificate",
				},
				{
					label: "Association membership certificate (if any)",
					model: "associationCertificate",
				},
			],
		};
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal;
		},
		// ... existing methods ...
		handleFileUpload(field, event) {
			const file = event.target.files[0];
			this.form[field] = file;
		},
		submitForm() {
			console.log("Form submitted:", this.form);
			alert("Form submitted successfully!");
		},
	},
};
</script>
