<script lang="ts">
	import { onMount } from "svelte";
	export let title : string = "Project title";
	export let description : string = "Description";
	export let linkTitle : string = "linktitle";
	export let link : string = "#";
	export let image : string = "rick.gif"
	export let imageAlt : string = "cool image or gif";
	export let repo : string = "Anki2Notes"
	const endpoint = "https://api.github.com/repos/c-facade/" + repo;
	let lastUpdate : Date = new Date(2025);
	onMount(async function () {
		let data;
		if(!(repo in localStorage)){
			const response = await fetch(endpoint);
			if(!response.ok) {
				throw new Error(`Response status: ${response.status ?? "error"}`);
			}
			else{
				data = await response.json();
				console.log(data);
				console.log(JSON.stringify(data));
				localStorage.setItem(repo, JSON.stringify(data));
			}
		}
		else{
			var jsons = localStorage.getItem(repo);
			if(jsons != null){
				console.log(JSON.stringify(jsons));
				data = JSON.parse(jsons);
			}
		}
		link = data.html_url;
		description = data.description;
		lastUpdate = new Date(data.updated_at);
		linkTitle = data.name;
	});
</script>

<div class="project">
	<h2>{title}</h2>
	<span class="last-update">Last updated: {lastUpdate.toDateString()}</span>
	<figure><img src="image/{image}" width=200px alt={imageAlt}/>
	</figure>
	<p>{description}. <slot></slot></p>
	See more: <a href={link}>{linkTitle} repository</a>.
</div>
