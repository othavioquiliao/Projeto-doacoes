<script lang="ts">
import { goto } from '$app/navigation';

export let todasTabs = [
	{ nome: 'Fazer uma doação', status: true, rota: 'doacoes/perecivel/criar' },
	{ nome: 'Deletar uma doação', status: false, rota: 'doacoes/perecivel/deletar' },
	{ nome: 'Estoque', status: false, rota: 'doacoes/perecivel/estoque' }
];

function navigateTo(rota: any) {
	todasTabs = todasTabs.map((tab) => ({
		...tab,
		status: tab.rota === rota
	}));
	goto(`${import.meta.env.BASE_URL}${rota}`);
}
</script>

<div class="flex flex-col w-full">
	<div class="tab pb-3 gap-1">
		{#each todasTabs as tab}
			<button
				class="tab tab-lifted text-lg {tab.status ? 'tab-active criePadrao' : ''}"
				on:click="{() => navigateTo(tab.rota)}">{tab.nome}</button>
		{/each}
	</div>
</div>
