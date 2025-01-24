<script lang="ts">
	import Project from "../components/Project.svelte";
</script>

<p style="padding: 10px">My new website uses SvelteKit!</p>

<main>
<div class="project-container box rajdani">
<Project title="LTC3350 driver" repo="ltc3350-driver" image="ltc3350-driver.png" imageAlt="Silicon Chip"/>
<Project title="LTC3350 monitor" repo="ltc-monitor" image="ltc-monitor.png" imageAlt="LTC3350 STATUS REPORT"/>
<Project title="Dado USB" repo="dado-usb2" image="dado-rp3.jpg"/>
<Project title="Hotelier" repo="hotelier_pinna"/>
<Project title="Svelte Mood Tracker" repo="svelte-mood-tracker" image="svelte-mood.png">See it in action: <a href="https://svelte-mood-tracker.pages.dev/">Svelte Mood Tracker</a></Project>
	<Project title="Anki2Notes" repo="Anki2Notes" image="anki2notes.png">Go to <a href="https://c-facade.github.io/Anki2Notes">Anki2Notes</a></Project>
		<Project title="Lambda Calculus Visualiser" repo="lambda-js" image="lambda.png">Go to <a href="https://c-facade.github.io/lambda-js">Lambda Calculus Visualiser</a></Project>
</div>
</main>
