<script>
import Tabs from '$lib/components/Tabs/+page.svelte';
let todasTabs = [
	{ nome: 'Fazer uma doação', status: true, rota: 'doacoes/nao-perecivel/criar' },
	{ nome: 'Deletar uma doação', status: false, rota: 'doacoes/nao-perecivel/deletar' },
	{ nome: 'Estoque', status: false, rota: 'doacoes/nao-perecivel/estoque' }
];
</script>

<Tabs todasTabs="{todasTabs}" />
<slot />
