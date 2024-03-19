<script>
	import { browser } from "$app/environment";

	let dark = true;
	if (browser) {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			dark = true;
		} else if (localStorage.theme === "light") {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			dark = false;
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			dark = true;
		}
	}

	function toggleDarkMode() {
		const currentTheme = localStorage.getItem("theme");

		if (currentTheme === "dark") {
			localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
			dark = false;
		} else if (currentTheme === "light") {
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
			dark = true;
		}
	}
</script>

<header class=" top-0 px-6 flex items-center py-4 bg-slage-950 justify-between">
	<div class="background-blur bg-lightBlur dark:bg-darkBlur" />
	<h1 class="text-2xl">
		<b class="font-bold">Fre</b><span class="text-amber-600 dark:text-blue-600">/</span>Val
	</h1>
	<!-- <div class="gap-12 flex"> -->
	<button class="" on:click={toggleDarkMode}>
		{#if dark}
			<i class="fa-solid fa-moon text-2xl" />
		{:else}
			<i class="fa-solid fa-sun text-2xl" />
		{/if}
	</button>
</header>
