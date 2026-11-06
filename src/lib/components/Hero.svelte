<script lang="ts">
	interface Props {
		onOpenQuote?: () => void;
		onDiscoverServices?: () => void;
	}

	let { onOpenQuote, onDiscoverServices }: Props = $props();

	function handleRequestQuote() {
		if (onOpenQuote) {
			onOpenQuote();
		} else {
			const el = document.getElementById('contacto') || document.getElementById('contact');
			el?.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function handleDiscoverServices() {
		if (onDiscoverServices) {
			onDiscoverServices();
		} else {
			const el = document.getElementById('services');
			el?.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<section
	id="hero"
	class="relative w-full bg-[#071224] text-white overflow-hidden font-['Inter',sans-serif] min-h-[100svh] flex flex-col justify-between scroll-mt-0"
>
	<!-- Anchor alias for Inicio -->
	<div id="inicio" class="absolute top-0 left-0 pointer-events-none"></div>

	<!-- Continuous background base (full-width navy background) -->
	<div class="absolute inset-0 bg-[#071224] pointer-events-none"></div>

	<!-- Desktop Image Composition (lg+) positioned with full-width container access -->
	<div
		class="hidden lg:flex lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-[50%] xl:w-[52%] 2xl:w-[52%] max-w-[1300px] items-center justify-end pointer-events-none select-none z-0 overflow-hidden"
	>
		<div class="relative w-full h-full flex items-center justify-end">
			<img
				src="/images/hero-workspace.png"
				alt="Ambiente tecnológico profesional con monitor mostrando sitio web corporativo, laptop con código y equipos informáticos"
				class="w-full h-full object-cover object-left lg:object-center xl:object-right-bottom max-h-[820px] transition-opacity duration-300"
				width="644"
				height="453"
				fetchpriority="high"
			/>

			<!-- Gradient mask overlays for 100% seamless integration with #071224 -->
			<!-- Left fade: broad gentle dissolution of the wall behind texts/buttons -->
			<div
				class="absolute inset-y-0 left-0 w-36 sm:w-48 lg:w-64 xl:w-80 bg-gradient-to-r from-[#071224] via-[#071224]/90 to-transparent pointer-events-none z-10"
			></div>

			<!-- Right fade: completely eliminates any vertical cut on large screens -->
			<div
				class="absolute inset-y-0 right-0 w-28 sm:w-36 lg:w-48 xl:w-60 bg-gradient-to-l from-[#071224] via-[#071224]/85 to-transparent pointer-events-none z-10"
			></div>

			<!-- Bottom fade: desk softly dissolves into the dark section footer -->
			<div
				class="absolute bottom-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-t from-[#071224] via-[#071224]/60 to-transparent pointer-events-none z-10"
			></div>

			<!-- Top fade: smooth tone under the header -->
			<div
				class="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#071224]/70 to-transparent pointer-events-none z-10"
			></div>
		</div>
	</div>

	<!-- Content Grid (Expanded 92% container up to 1500px, aligned with Navbar) -->
	<div
		class="relative z-10 w-[92%] max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6 pt-22 sm:pt-28 lg:pt-[106px] xl:pt-[116px] pb-6 sm:pb-8 lg:pb-12 flex-1 flex flex-col justify-center"
	>
		<div class="w-full lg:w-[52%] xl:w-[50%] max-w-[660px] xl:max-w-[720px] text-left">
			<!-- Top Eyebrow Text with Turquoise Accent Line -->
			<div class="flex items-center gap-2.5 sm:gap-3.5 mb-3.5 sm:mb-4">
				<span class="w-8 sm:w-12 h-[2px] bg-[#31B6AD] shrink-0 rounded-full"></span>
				<p
					class="text-[10.5px] sm:text-[12px] xl:text-[12.5px] font-semibold tracking-[0.12em] sm:tracking-[0.16em] uppercase text-[#CBD5E1]/90"
				>
					DESARROLLO WEB · SOLUCIONES TI · TECNOLOGÍA
				</p>
			</div>

			<!-- Main Heading with Fluid Typography (64-72px on Desktop) & Responsive Line-Height -->
			<h1
				class="text-[clamp(1.875rem,3.75vw+0.75rem,4.5rem)] font-extrabold tracking-[-0.03em] leading-[1.08] sm:leading-[1.06] text-white font-['Manrope','Inter',sans-serif]"
			>
				<span class="sm:whitespace-nowrap">Tecnología que impulsa</span>
				<span class="block text-[#4FB4F8] mt-1 sm:mt-1.5">tu negocio.</span>
			</h1>

			<!-- Description with Proportional Scale (18-20px on Desktop) and Refined Measure -->
			<p
				class="mt-4 sm:mt-5 text-[clamp(0.95rem,0.65vw+0.75rem,1.25rem)] text-[#CBD5E1] font-normal leading-[1.62] max-w-[560px] xl:max-w-[640px]"
			>
				Diseñamos sitios web, implementamos soluciones informáticas y suministramos equipos
				tecnológicos para que tu empresa avance con confianza.
			</p>

			<!-- CTA Buttons with Proportionally Scaled Sizes and Unified Arrows -->
			<div
				class="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6"
			>
				<!-- Primary Button: Solicitar cotización -->
				<button
					type="button"
					onclick={handleRequestQuote}
					class="cursor-pointer min-h-[48px] sm:min-h-[52px] group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-[15px] sm:text-[16px] xl:text-[16.5px] font-semibold text-white bg-[#0A6DF3] hover:bg-[#1A77F5] active:bg-[#085FD8] shadow-[0_4px_16px_rgba(10,109,243,0.38)] hover:shadow-[0_6px_24px_rgba(10,109,243,0.52)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071224]"
				>
					<span>Solicitar cotización</span>
					<svg
						class="w-4.5 h-4.5 xl:w-5 xl:h-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						viewBox="0 0 24 24"
					>
						<path d="M5 12h14m-6-6l6 6-6 6" />
					</svg>
				</button>

				<!-- Secondary Button: Conocer servicios -->
				<button
					type="button"
					onclick={handleDiscoverServices}
					class="cursor-pointer min-h-[46px] sm:min-h-[50px] group inline-flex items-center justify-center sm:justify-start gap-2.5 px-4 sm:px-4 py-3 sm:py-3.5 -ml-0 sm:-ml-2 rounded-xl text-[15px] sm:text-[16px] xl:text-[16.5px] font-semibold text-white/90 hover:text-white hover:bg-white/[0.06] active:bg-white/[0.1] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071224]"
				>
					<span>Conocer servicios</span>
					<svg
						class="w-4.5 h-4.5 xl:w-5 xl:h-5 shrink-0 text-white/80 group-hover:text-white transition-all duration-200 group-hover:translate-x-1"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						viewBox="0 0 24 24"
					>
						<path d="M5 12h14m-6-6l6 6-6 6" />
					</svg>
				</button>
			</div>

			<!-- Bottom 3 Indicators with Proportionally Scaled Icons & Symmetrical Distribution -->
			<div class="mt-8 sm:mt-10 xl:mt-11 pt-5 sm:pt-6 border-t border-white/[0.14] w-full max-w-[540px] xl:max-w-[620px]">
				<div
					class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 sm:gap-2 w-full"
				>
					<!-- Indicator 1: Desarrollo web -->
					<div class="flex items-center gap-3">
						<svg
							class="w-6 h-6 sm:w-7 sm:h-7 xl:w-[30px] xl:h-[30px] text-[#38D3E3] shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<rect x="3" y="4" width="18" height="12" rx="2" />
							<path d="M2 19h20" />
						</svg>
						<span class="text-[13px] sm:text-[14px] xl:text-[14.5px] font-semibold text-white/95 whitespace-nowrap">
							Desarrollo web
						</span>
					</div>

					<!-- Vertical Divider 1 -->
					<div class="hidden sm:block h-7 xl:h-8 w-px bg-white/[0.16] shrink-0"></div>

					<!-- Indicator 2: Soluciones informáticas -->
					<div class="flex items-center gap-3">
						<svg
							class="w-6 h-6 sm:w-7 sm:h-7 xl:w-[30px] xl:h-[30px] text-[#38D3E3] shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="3" />
							<path
								d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
							/>
						</svg>
						<span class="text-[13px] sm:text-[13.5px] xl:text-[14px] sm:leading-[1.25] font-semibold text-white/95">
							Soluciones <br class="hidden sm:inline" />informáticas
						</span>
					</div>

					<!-- Vertical Divider 2 -->
					<div class="hidden sm:block h-7 xl:h-8 w-px bg-white/[0.16] shrink-0"></div>

					<!-- Indicator 3: Equipos tecnológicos -->
					<div class="flex items-center gap-3">
						<svg
							class="w-6 h-6 sm:w-7 sm:h-7 xl:w-[30px] xl:h-[30px] text-[#38D3E3] shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polygon points="12 2 2 7 12 12 22 7 12 2" />
							<path d="M2 12l10 5 10-5" />
							<path d="M2 17l10 5 10-5" />
						</svg>
						<span class="text-[13px] sm:text-[13.5px] xl:text-[14px] sm:leading-[1.25] font-semibold text-white/95">
							Equipos <br class="hidden sm:inline" />tecnológicos
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile & Tablet Workspace Visual (< lg) -->
	<div class="lg:hidden relative w-full max-w-[580px] mx-auto mt-6 sm:mt-8 px-3 sm:px-6 overflow-hidden">
		<!-- Multi-directional smooth gradient blend on mobile -->
		<div
			class="absolute top-0 inset-x-0 h-10 sm:h-14 bg-gradient-to-b from-[#071224] to-transparent z-10 pointer-events-none"
		></div>
		<div
			class="absolute bottom-0 inset-x-0 h-12 sm:h-16 bg-gradient-to-t from-[#071224] via-[#071224]/85 to-transparent z-10 pointer-events-none"
		></div>
		<div
			class="absolute inset-y-0 left-0 w-6 sm:w-16 bg-gradient-to-r from-[#071224] to-transparent z-10 pointer-events-none"
		></div>
		<div
			class="absolute inset-y-0 right-0 w-6 sm:w-16 bg-gradient-to-l from-[#071224] to-transparent z-10 pointer-events-none"
		></div>
		<img
			src="/images/hero-workspace.png"
			alt="Ambiente tecnológico profesional con monitor mostrando sitio web corporativo, laptop con código y equipos informáticos"
			class="w-full h-auto object-cover rounded-lg sm:rounded-xl"
			width="644"
			height="453"
		/>
	</div>
</section>
