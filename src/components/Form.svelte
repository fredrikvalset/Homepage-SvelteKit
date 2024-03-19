<script>
	let name = "";
	let email = "";
	let message = "";

	let displaySuccessMessage = false;
	let displayErrorMessage = false;

	async function handleSubmit() {
		const formData = { name, email, message };

		const response = await fetch("/api", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formData)
		});

		if (response.ok) {
			displaySuccessMessage = true;
			name = "";
			email = "";
			message = "";
		} else {
			displayErrorMessage = true;
		}
	}
</script>

<div class="max-w-md mx-auto" id="contact">
	<h3 class="font-semibold text-center text-3xl sm:text-4xl md:text-5xl p-10">
		Let's get in touch...
	</h3>

	{#if displaySuccessMessage}
		<div class="text-center p-5 mb-5 bg-green-500" id="displayMessage">
			<p>Your message has been sent!</p>
		</div>
	{:else if displayErrorMessage}
		<div class="text-center p-5 mb-5 bg-red-500" id="displayMessage">
			<p>Sorry, there was an error. Please try again later.</p>
		</div>{/if}
	<form
		class="bg-cardLight dark:bg-cardDark rounded px-8 p-6 mb-4 border border-solid"
		on:submit|preventDefault={handleSubmit}
	>
		<div class="mb-4">
			<label class="block text-white text-sm font-bold mb-2" for="name"> Name </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-slate-950 leading-tight focus:outline-none focus:shadow-outline"
				id="name"
				type="text"
				placeholder="Your Name"
				bind:value={name}
				autocomplete="on"
				required
			/>
		</div>
		<div class="mb-4">
			<label class="block text-white text-sm font-bold mb-2" for="email"> Email </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-slate-950 leading-tight focus:outline-none focus:shadow-outline"
				id="email"
				type="email"
				placeholder="youremail@example.com"
				bind:value={email}
				autocomplete="on"
				required
			/>
		</div>
		<div class="mb-4">
			<label class="block text-white text-sm font-bold mb-2" for="message"> Message </label>
			<textarea
				class="shadow appearance-none border rounded w-full py-2 px-3 text-slate-950 leading-tight focus:outline-none focus:shadow-outline"
				id="message"
				placeholder="Your Message"
				bind:value={message}
				autocomplete="on"
				required
				rows="4"
			/>
		</div>
		<div class="flex items-center justify-between">
			<button
				class="bg-mainColorLight dark:bg-mainColorDark focus:bg-mainColorLight focus:dark:bg-mainColorDark hover:bg-[#071221] dark:hover:bg-[#1B9DB9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Send
			</button>
		</div>
	</form>
	<div class="text-center flex text-base gap-2 justify-center">
		<i class="fa-solid fa-envelope flex flex-col justify-center" />
		<p>post@freval.no</p>
	</div>
</div>
