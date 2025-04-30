<script lang="ts">
	import { onMount } from "svelte";
	export let title : string = "Project title";
	export let description : string = "Description";
	export let linkTitle : string = "linktitle";
	export let link : string = "#";
	export let image : string = "rick.gif"
	export let imageAlt : string = "cool image or gif";
	export let repo : string = "Anki2Notes"
	let repotime : string = repo+"_TIMESTAMP";
	const endpoint = "https://api.github.com/repos/c-facade/" + repo;
	let lastUpdate : Date = new Date(2025, 1);

	async function updateRepo(){
		let data;
		let valid = false;
		if(repotime in localStorage){
			let timestamp : number = Number(localStorage.getItem(repotime));
			if(Date.now() - timestamp < 3600*1000){
				//console.log("now - timestamp = ", Date.now()-timestamp);
				valid = true;
			}
		}
		if(!valid){	
			// fetching
			//console.log("Fetching again");
			const response = await fetch(endpoint);
			if(!response.ok) {
				throw new Error(`Response status: ${response.status ?? "error"}`);
			}
			else{
				// no error, storing response
				data = await response.json();
				console.debug(JSON.stringify(data));
				localStorage.setItem(repo, JSON.stringify(data));
				localStorage.setItem(repotime, Date.now().toString());
			}
		}
		else{	
			//console.log("valid: not fetching again");
			// cache value is still valid
			var jsons = localStorage.getItem(repo);
			if(jsons != null){
				console.debug(JSON.stringify(jsons));
				data = JSON.parse(jsons);
			}
		}
		return data;
}

	onMount(async function () {
		let data = await updateRepo();

/*
		if(!(repo in localStorage)){
			// fetching for the first time
			const response = await fetch(endpoint);
			if(!response.ok) {
				throw new Error(`Response status: ${response.status ?? "error"}`);
			}
			else{
				// no error, storing response
				data = await response.json();
				console.debug(JSON.stringify(data));
				localStorage.setItem(repo, JSON.stringify(data));
				localStorage.setItem(repotime, Date.now().toString());
			}
		}
		else{
			let timestamp : number = Number(localStorage.getItem(repotime));
			if(Date.now() - 100000 > timestamp){
			}
			else{
				// cache value is still valid
				var jsons = localStorage.getItem(repo);
				if(jsons != null){
					console.debug(JSON.stringify(jsons));
					data = JSON.parse(jsons);
				}
			}
		}
		*/

		link = data.html_url;
		description = data.description;
		lastUpdate = new Date(data.updated_at);
		linkTitle = data.name;
	});
</script>

<div class="project">
	<h2>{title}</h2>
	<p class="last-update">Last updated: {lastUpdate.toDateString()}</p>
	<figure style="margin: 0px; align:right;"><img style="max-width: 100%;" src="image/{image}" alt={imageAlt}/>
	</figure>
	<p>{description}. <slot></slot></p>
	See more: <a href={link}>{linkTitle} repository</a>.
</div>
