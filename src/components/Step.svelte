<script>
	export let step;
</script>

<div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid text-center group">
	<div
		class="bg-mainColorLight dark:bg-mainColorDark grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-16 lg:-mt-16 mx-auto"
	>
		<i class={step.icon} />
	</div>
	<h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{step.name}</h3>
	<slot />
</div>
