<script lang="ts">
import SideBar from '$lib/components/SideBar/+page.svelte';
import Tabs from '$lib/components/Tabs/+page.svelte';
</script>

<main class="flex">
	<SideBar />
	<div class="flex-nowrap w-full p-20">
		<slot>Algo deu errado</slot>
	</div>
</main>
