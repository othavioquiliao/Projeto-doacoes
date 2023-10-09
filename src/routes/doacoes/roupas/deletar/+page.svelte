<script lang="ts">
import { AppleIcon } from 'lucide-svelte';
import type { PageData } from './$types';

export let data: PageData;
$: ({ estoqueRoupas } = data);
</script>

<div class="overflow-x-auto">
	<table class="table w-full">
		<!-- head -->
		<thead>
			<tr class="text-base">
				<th> </th>

				<th>Name</th>
				<th>Categoria</th>
				<th>Quantidade</th>
				<th></th>
			</tr>
		</thead>

		{#each estoqueRoupas as itens}
			<tbody>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td>
					<div class="flex items-center space-x-2 gap-5">
						<div class="avatar">
							<AppleIcon />
						</div>
						<div>
							<div class="font-bold">{itens.nome}</div>
						</div>
					</div>
				</td>
				<td>{itens.categoria}</td>
				<td>{itens.quantidade}</td>
				<th>
					<button class="btn btn-neutral criePadrao btn-md">Deletar</button>
				</th>
			</tbody>
		{/each}
	</table>
</div>
