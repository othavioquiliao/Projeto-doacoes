<script lang="ts">
import type { PageData } from './$types';

export let data: PageData;

$: ({ estoquePerecivel } = data);
</script>

<div class="overflow-x-auto justify-center flex">
	<table class="table">
		<!-- head -->
		<thead>
			<tr class="text-base text-md">
				<th>ID</th>
				<th>Nome</th>
				<th>Categoria</th>
				<th>Quantidade</th>
			</tr>
		</thead>
		<tbody>
			{#each estoquePerecivel as item}
				<tr class="text-base hover">
					<td>{item.id}</td>
					<td>{item.nome}</td>
					<td>{item.categoria}</td>
					<td>{item.quantidade}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
