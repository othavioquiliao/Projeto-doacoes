<script>
import Tabs from '$lib/components/Tabs/+page.svelte';
let todasTabs = [
	{ nome: 'Fazer uma doação', status: true, rota: 'doacoes/perecivel/criar' },
	{ nome: 'Deletar uma doação', status: false, rota: 'doacoes/perecivel/deletar' },
	{ nome: 'Estoque', status: false, rota: 'doacoes/perecivel/estoque' }
];
</script>

<Tabs todasTabs="{todasTabs}" />
<slot />
