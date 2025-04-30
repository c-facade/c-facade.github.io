<script lang="ts">
	import Project from "../components/Project.svelte";
</script>

<main>
<div class="project-container box rajdani">
	<Project 
	 	title="LTC3350 driver" 
		repo="ltc3350-driver"
 		image="ltc3350-driver.png" 
		imageAlt="Silicon Chip" 	
 		description="driver for LTC3350 device" 
 		linkTitle="ltc3350-driver"/>
	<Project 
		title="LTC3350 monitor" 
		repo="ltc-monitor" 
		image="ltc-monitor.png" 
		imageAlt="LTC3350 STATUS REPORT"
		description="application that exploits the LTC3350 driver"
		linkTitle="ltc-monitor"
	
	/>
	<Project 
	 title="Dado USB" 
		repo="dado-usb2" 
		image="dado-rp3.jpg" 
		imageAlt="Dado rp3" 
		description="Experiments to make the dado-rp3 board into a USB device"
		linkTitle="dado-rp3"
	/>
	<Project 
	 title="Hotelier" 
		repo="hotelier_pinna" 
		image="hotelier.png" 
		imageAlt="terminal running hotelier"
 		description="tripadvisor inspired service"
		linkTitle="hotelier"
	/>

	<Project 
	 title="Svelte Mood Tracker" 
	repo="svelte-mood-tracker" 
 image="svelte-mood.png" 
 imageAlt="Mood tracker: how are you today?"
	description="mood tracker in the svelte framework"
 	linkTitle="Mood Tracker"

	>See it in action: <a href="https://svelte-mood-tracker.pages.dev/">Svelte Mood Tracker</a></Project>

	<Project 
	 title="Anki2Notes" 
	repo="Anki2Notes" 
 image="anki2notes.png" 
 imageAlt="Anki to written notes: Generate notes from anki decks"
	description="Generate notes from anki decks"
 	linkTitle="Anki2Notes"
 >Go to <a href="https://c-facade.github.io/Anki2Notes">Anki2Notes</a></Project>
	<Project 
	 title="Lambda Calculus Visualiser" 
		repo="lambda-js" 
 		image="lambda.png" 
 		imageAlt="Replace step"
		description="visualize lambda calculus"
		linkTitle="lambda-js"
	 >Go to <a href="https://c-facade.github.io/lambda\-js">Lambda Calculus Visualiser</a></Project>
</div>
</main>
