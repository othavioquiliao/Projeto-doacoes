<script lang="ts">
import { UserCircle2 } from 'lucide-svelte';
</script>

<main class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar bg-base-300 items-center">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"></path
						></svg>
				</label>
			</div>
			<div class="lg:w-1/3 justify-center w-full lg:block lg:ml-4">
				<img src="/img/logos/logo-crie-ti.png" alt="Logo Eurovias" class="h-10" />
			</div>
			<div class="flex-none items-center hidden lg:flex w-2/3 lg:justify-between">
				<ul class="menu menu-horizontal w-1/2 justify-center gap-4 text-xl font-bold">
					<!-- Navbar menu content here -->
					<li><a href="/">Home</a></li>
					<li><a href="/doacoes/perecivel/criar">Doações</a></li>
				</ul>
				<div class=" w-12 mr-5 rounded-full criePadrao ring-offset-base-100 ring-offset-2">
					<UserCircle2 size="full" />
				</div>
			</div>
		</div>
		<!-- Page content here -->
		<slot>ALGO DEU ERRADO</slot>
		<!--  -->
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-1/3 min-h-full bg-base-200">
			<!-- Sidebar content here -->
			<li><a href="/">Home</a></li>
			<li><a href="/doacoes/perecivel/criar">Doaçoes</a></li>
		</ul>
	</div>
</main>
