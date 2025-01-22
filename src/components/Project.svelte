<script lang="ts">
	import { onMount } from "svelte";
	export let title : string = "Project title";
	export let description : string = "Description";
	export let linkTitle : string = "linktitle"
	export let link : string = "_blank";
	export let image : string = "rick.gif"
	export let imageAlt : string = "cool image or gif"
	export let repo : string = "Anki2Notes"
	const endpoint = "https://api.github.com/repos/c-facade/" + repo;
	let lastUpdate : Date = new Date(2025);
	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		console.log(data);
		link = data.html_url;
		description = data.description;
		lastUpdate = new Date(data.updated_at);
		linkTitle = data.name;
	});
</script>

<div>
	<h2>{title}</h2>
	<span class="last-update">Last updated: {lastUpdate.toDateString()}</span>
	<figure><img src={image} width=300px alt={imageAlt}/>
	</figure>
	<p>{description}. <slot></slot></p>
	See more: <a href={link}>{linkTitle} repository</a>.
</div>
