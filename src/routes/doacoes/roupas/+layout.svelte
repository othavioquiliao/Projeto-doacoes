<script>
import Tabs from '$lib/components/Tabs/+page.svelte';
let todasTabs = [
	{ nome: 'Fazer uma doação', status: true, rota: 'doacoes/roupas/criar' },
	{ nome: 'Deletar uma doação', status: false, rota: 'doacoes/roupas/deletar' },
	{ nome: 'Estoque', status: false, rota: 'doacoes/roupas/estoque' }
];
</script>

<Tabs todasTabs="{todasTabs}" />
<slot />
