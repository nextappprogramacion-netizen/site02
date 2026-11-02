<script lang="ts">
	interface Props {
		onOpenQuote?: () => void;
	}

	let { onOpenQuote }: Props = $props();
	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function handleQuoteClick(e: MouseEvent) {
		e.preventDefault();
		closeMobileMenu();
		if (onOpenQuote) {
			onOpenQuote();
		} else {
			const el = document.getElementById('contacto') || document.getElementById('contact');
			el?.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 20)} />

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-[#060d24]/90 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-black/20 py-3'
		: 'bg-transparent py-5'}"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="#hero" class="flex items-center gap-2.5 group">
				<div class="relative w-8 h-8 flex items-center justify-center">
					<!-- Geometric origami N icon -->
					<svg
						viewBox="0 0 36 36"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="w-full h-full transform transition-transform group-hover:scale-105"
					>
						<defs>
							<linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stop-color="#38bdf8" />
								<stop offset="100%" stop-color="#2563eb" />
							</linearGradient>
							<linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stop-color="#0284c7" />
								<stop offset="100%" stop-color="#1e3a8a" />
							</linearGradient>
							<linearGradient id="logoGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stop-color="#60a5fa" />
								<stop offset="100%" stop-color="#0284c7" />
							</linearGradient>
						</defs>
						<!-- Left wing -->
						<path
							d="M6 28L18 8L15 6L3 26L6 28Z"
							fill="url(#logoGrad1)"
						/>
						<!-- Diagonal cross -->
						<path
							d="M12 28L28 10L32 12L16 30L12 28Z"
							fill="url(#logoGrad2)"
						/>
						<!-- Central geometric fold -->
						<polygon
							points="14,14 26,10 20,24"
							fill="url(#logoGrad3)"
							opacity="0.9"
						/>
						<polygon
							points="8,26 16,16 19,26"
							fill="#38bdf8"
							opacity="0.8"
						/>
					</svg>
				</div>
				<span class="text-xl sm:text-2xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
					Nova<span class="text-blue-400">Lyne</span>
				</span>
				<span class="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 border border-blue-400/30">
					<span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
					Lima · Perú
				</span>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-8">
				<a
					href="#hero"
					class="text-sm font-medium text-white/90 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
				>
					Inicio
				</a>
				<a
					href="#services"
					class="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
				>
					Servicios
				</a>
				<a
					href="#proyectos"
					class="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
				>
					Proyectos
				</a>
				<a
					href="#nosotros"
					class="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
				>
					Nosotros
				</a>
				<a
					href="#contacto"
					class="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
				>
					Contacto
				</a>
			</nav>

			<!-- Right CTA Button -->
			<div class="hidden md:flex items-center gap-3">
				<button
					type="button"
					onclick={handleQuoteClick}
					class="cursor-pointer bg-gradient-to-r from-[#0062ff] to-[#0051e0] hover:from-[#0052d4] hover:to-[#0041b8] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-[0_4px_18px_rgba(0,102,255,0.4)] hover:shadow-[0_6px_22px_rgba(0,102,255,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
				>
					Solicitar Cotización
				</button>
			</div>

			<!-- Mobile menu button -->
			<div class="flex md:hidden">
				<button
					type="button"
					onclick={toggleMobileMenu}
					aria-label="Abrir Menú"
					class="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
				>
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						{#if mobileMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Dropdown -->
		{#if mobileMenuOpen}
			<div
				class="md:hidden mt-3 pt-3 pb-4 border-t border-blue-900/40 bg-[#070e28]/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl space-y-3"
			>
				<a
					href="#hero"
					onclick={closeMobileMenu}
					class="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-blue-600/20"
				>
					Inicio
				</a>
				<a
					href="#services"
					onclick={closeMobileMenu}
					class="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-blue-600/20"
				>
					Servicios
				</a>
				<a
					href="#proyectos"
					onclick={closeMobileMenu}
					class="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-blue-600/20"
				>
					Proyectos
				</a>
				<a
					href="#nosotros"
					onclick={closeMobileMenu}
					class="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-blue-600/20"
				>
					Nosotros
				</a>
				<a
					href="#contacto"
					onclick={closeMobileMenu}
					class="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-blue-600/20"
				>
					Contacto
				</a>
				<div class="pt-2">
					<button
						type="button"
						onclick={handleQuoteClick}
						class="w-full text-center bg-[#0062ff] text-white text-sm font-semibold px-5 py-3 rounded-lg shadow-lg shadow-blue-600/30"
					>
						Solicitar Cotización
					</button>
				</div>
			</div>
		{/if}
	</div>
</header>
