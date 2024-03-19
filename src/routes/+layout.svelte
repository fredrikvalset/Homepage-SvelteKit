<script>
	import "../app.css";
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";

	let y;
	let innerHeight = 0;
	let innerWidth = 0;

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<svelte:head>
	<title>FreVal</title>
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
	<link rel="manifest" href="/favicon/site.webmanifest" />
	<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#282121" />
</svelte:head>

<div
	class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
		(y > 0 ? " opacity-full pointer-events-auto " : " pointer-events-none opacity-0 ")}
>
	<button
		on:click={goTop}
		class="ml-auto rounded-full bg-slate-900 text-white px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square"
	>
		<i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
	</button>
</div>
<div
	class="relative flex flex-col max-w-[1400px] mx-auto w-full
text-sm sm:text-base min-h-screen"
>
	<Header />
	<slot />
	<Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
