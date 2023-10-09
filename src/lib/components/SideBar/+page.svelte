<script lang="ts">
import { goto } from '$app/navigation';

function navigateTo(rota: any) {
	todaSidebar = todaSidebar.map((sidebar) => ({
		...sidebar,
		status: sidebar.rota === rota
	}));
	goto(`${import.meta.env.BASE_URL}${rota}`);
}
let todaSidebar = [
	{ nome: 'Pereciveis', status: true, rota: 'doacoes/perecivel/criar' },
	{ nome: 'Não Pereciveis', status: false, rota: 'doacoes/nao-perecivel/criar' },
	{ nome: 'Roupas', status: false, rota: 'doacoes/roupas/criar' }
];
</script>

<ul class="menu bg-base-200 w-1/6 h-screen lg:text-xl">
	<li class="text-center criePadrao font-bold pb-1 border-b border-b-gray-700">Faça uma doação</li>
	{#each todaSidebar as sidebar}
		<li class="{sidebar.status ? 'criePadrao' : ''}">
			<button on:click="{() => navigateTo(sidebar.rota)}">{sidebar.nome}</button>
		</li>
	{/each}
</ul>
