<script>
	import Step from "./Step.svelte";
	import Form from "./Form.svelte";

	let steps = [
		{ name: "Software Development", icon: "fa-solid fa-code" },
		{ name: "Game Design", icon: "fa-solid fa-gamepad" },
		{ name: "3D Modelling", icon: "fa-regular fa-pen-to-square" }
	];
</script>

<main class="flex flex-col flex-1 p-4">
	<section id="intro-page" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 lg:py-32">
		<div class="relative grid place-items-center lg:place-items-end">
			<img
				src="images/bilde.jpg"
				alt="Profile"
				class="object-cover h-[20rem] w-[20rem] sm:h-[25rem] sm:w-[25rem] rounded-full border-4 border-white"
			/>
		</div>
		<div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
			<h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Fredrik Valset</h2>
			<div class="flex justify-center lg:justify-start">
				<p class="text-start text-base sm:text-lg md:text-xl">
					🌐 Software development <br />
					🎮 Game Design <br />
					🖼️ 3D Modeling
				</p>
			</div>

			<a
				href="#contact"
				class="mx-auto lg:mr-auto lg:ml-0 mt-[40px] lg:mt-0 text-base sm:text-lg md:text-xl relative overflow-hidden px-6 py-3 group rounded-full text-
				bg-cardLight dark:bg-cardDark focus:bg-cardLight focus:dark:bg-cardDark hover:bg-[#071221] dark:hover:bg-[#1B9DB9] border border-solid"
			>
				<h4 class="">Get in touch</h4></a
			>
		</div>
	</section>

	<div class="max-w-[800px] mx-auto p-4 sm:p-6 md:p-8 flex flex-col gap-4 text-center">
		<h3 class=" text-center text-2xl sm:text-3xl md:text-4xl">
			&lt; Behind the code <span class="text-amber-600 dark:text-blue-600">/</span>&gt;
		</h3>

		<p class="text-center text-xl">
			<span class="font-semibold">Hello!</span> I'm Fredrik, a passionate software engineer who embarked
			on a thrilling journey into the world of technology. My fascination with programming stared when
			I first delved into the creation of webpages. The ability to craft digital experiences and bring
			ideas to life through code quickly became my driving force.
		</p>
	</div>

	<section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
		<div class="flex flex-col gap-2 text-center">
			<h3 class="font-semibold text-2xl sm:text-4xl md:text-5xl">Some of my passions are</h3>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
			<Step step={steps[0]}>
				<p>
					Driving innovation through software development, I engineer digital solutions, from
					concept to code, to make technological visions a reality.
				</p>
			</Step>
			<Step step={steps[1]}>
				<p>
					Designing captivating gameplay mechanics, creating compelling narratives, and constructing
					immersive virtual worlds.
				</p>
			</Step>
			<Step step={steps[2]}>
				<p>
					Creating intricate 3D models, bringing ideas to life with precision and artistry, ready
					for use in various applications.
				</p>
			</Step>
		</div>
		<div class="max-w-[800px] mx-auto text-center">
			<p class="text-lg sm:text-2xl md:text-3xl">
				<span class="font-semibold text-xl sm:text-3xl md:text-4xl">With technologies like</span>
				<br />
				<br />SvelteKit, TailwindCSS, Node.js, Java, PostgreSQL, Unity & Blender!
			</p>
		</div>
		<Form />
	</section>
</main>
