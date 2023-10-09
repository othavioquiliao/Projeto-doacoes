<script lang="ts">
</script>

<form method="POST" action="?/criarDoacao" class="flex justify-center items-center flex-col mt-5">
	<div class="flex w-full justify-center gap-5">
		<div class="form-control w-full max-w-xs">
			<label class="label flex-col items-start">
				<span class="label-text text-lg">Nome do produto:</span>
				<input
					type="text"
					name="nome"
					id="nome"
					placeholder="Digite aqui"
					class="input input-bordered w-full max-w-xs" />
			</label>
		</div>
		<div class="form-control w-full max-w-xs">
			<label class="label flex-col items-start">
				<span class="label-text text-lg">Quantidade:</span>
				<input
					name="quantidade"
					type="number"
					id="quantidade"
					placeholder="Digite aqui"
					class="input input-bordered w-full max-w-xs" />
			</label>
		</div>
		<!-- Adicione outros campos do formulário conforme necessário -->
	</div>

	<button type="submit" class="criePadrao btn sm:btn-sm md:btn-md lg:btn-lg mt-10">
		Criar Doação
	</button>
</form>
