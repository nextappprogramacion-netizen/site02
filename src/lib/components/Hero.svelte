<script lang="ts">
	interface Props {
		onDiscoverServices?: () => void;
	}

	let { onDiscoverServices }: Props = $props();

	function scrollToServices() {
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
	class="relative min-h-[92vh] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#050b1d] text-white flex items-center"
>
	<!-- Background glow effects & tech grid -->
	<div class="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

	<!-- Glowing Orb / Planet behind devices -->
	<div
		class="absolute top-1/4 right-[5%] sm:right-[15%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-radial from-cyan-500/20 via-blue-600/15 to-transparent blur-3xl pointer-events-none animate-pulse-soft"
	></div>
	
	<div
		class="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-700/10 blur-3xl pointer-events-none"
	></div>

	<!-- Planet Sphere Graphic in upper right -->
	<div
		class="hidden lg:block absolute top-16 right-[28%] w-28 h-28 rounded-full pointer-events-none opacity-80"
		style="background: radial-gradient(circle at 30% 30%, #a5f3fc 0%, #0284c7 40%, #0c4a6e 80%, #082f49 100%); box-shadow: 0 0 35px rgba(56, 189, 248, 0.45), inset -8px -8px 20px rgba(0, 0, 0, 0.8);"
	>
		<!-- Atmospheric ring/glow -->
		<div class="absolute inset-[-4px] rounded-full border border-cyan-400/30 blur-[1px]"></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
			
			<!-- Left column: Typography & CTA -->
			<div class="lg:col-span-5 text-left space-y-6">
				<!-- Subtitle / Eyebrow badge with Peru flag accent -->
				<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-cyan-300">
					<span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
					<span>Agencia Digital · Lima, Perú</span>
				</div>

				<h1 class="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15]">
					Impulsa Tu <br class="hidden sm:inline" />
					<span class="text-white drop-shadow-md">Presencia en Línea</span>
				</h1>

				<p class="text-base sm:text-lg text-slate-300 font-normal max-w-xl leading-relaxed">
					Soluciones Digitales Innovadoras para Tu Empresa. Diseñamos páginas web de alto impacto, tiendas virtuales e impulsamos estrategias de marketing digital para marcas en Perú y el mundo.
				</p>

				<!-- Buttons -->
				<div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
					<button
						type="button"
						onclick={scrollToServices}
						class="cursor-pointer inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#0066ff] to-[#0052cc] hover:from-[#0052cc] hover:to-[#0041b8] shadow-[0_8px_25px_rgba(0,102,255,0.45)] hover:shadow-[0_10px_30px_rgba(0,102,255,0.65)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
					>
						Descubre Nuestros Servicios
						<svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
						</svg>
					</button>

					<a
						href="#proyectos"
						class="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm sm:text-base font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700/60 transition-colors"
					>
						Nuestros Proyectos
					</a>
				</div>

				<!-- Mini Trust Badges tailored for Lima, Peru -->
				<div class="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-5 text-xs text-slate-400">
					<div class="flex items-center gap-2">
						<svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
						</svg>
						<span>Diseño 100% a Medida</span>
					</div>
					<div class="flex items-center gap-2">
						<svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
						</svg>
						<span>Optimizado para SEO Perú</span>
					</div>
					<div class="flex items-center gap-2">
						<svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
						</svg>
						<span>Horario Lima (GMT-5)</span>
					</div>
				</div>
			</div>

			<!-- Right column: Modern Multi-Device Tech Mockup -->
			<div class="lg:col-span-7 relative flex justify-center items-center mt-6 lg:mt-0">
				
				<!-- Ambient glow behind laptop -->
				<div class="absolute -inset-4 bg-gradient-to-tr from-blue-600/25 via-cyan-500/20 to-indigo-600/10 rounded-3xl blur-2xl transform -rotate-1 pointer-events-none"></div>

				<!-- Device Composition Container -->
				<div class="relative w-full max-w-2xl animate-float-slow">
					
					<!-- Modern 3D-styled Laptop -->
					<div class="relative mx-auto rounded-t-2xl bg-[#0f172a] border-[3px] border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,102,255,0.4)] overflow-hidden">
						
						<!-- Laptop Screen Top Bar -->
						<div class="bg-[#1e293b] px-4 py-2 border-b border-slate-700/80 flex items-center justify-between">
							<div class="flex items-center gap-1.5">
								<div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
								<div class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
								<div class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
							</div>
							<!-- Search bar fake -->
							<div class="bg-[#0f172a] text-slate-400 text-[11px] px-6 py-0.5 rounded-md flex items-center gap-2 border border-slate-700/60 w-1/2 justify-center">
								<svg class="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
								</svg>
								https://novalyne.pe/dashboard
							</div>
							<div class="w-8"></div>
						</div>

						<!-- Laptop Display Content (Modern Dashboard Preview in Soles) -->
						<div class="bg-gradient-to-br from-[#0c1533] via-[#091129] to-[#060b1c] p-4 sm:p-6 text-left min-h-[250px] sm:min-h-[310px]">
							<!-- Dashboard Header -->
							<div class="flex items-center justify-between pb-4 border-b border-blue-900/40">
								<div class="flex items-center gap-3">
									<div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
										NL
									</div>
									<div>
										<div class="text-xs font-semibold text-white">Panel de Rendimiento Digital</div>
										<div class="text-[10px] text-cyan-400">Tráfico y ROI Perú: +248%</div>
									</div>
								</div>
								<div class="flex items-center gap-2">
									<span class="px-2.5 py-1 rounded bg-blue-500/20 text-cyan-300 text-[11px] font-medium border border-blue-400/30 flex items-center gap-1.5">
										<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
										Campaña Activa
									</span>
								</div>
							</div>

							<!-- Dashboard Grid with Peruvian Currency S/. -->
							<div class="grid grid-cols-3 gap-3 mt-4">
								<div class="bg-[#121c42]/80 border border-blue-800/40 rounded-xl p-3">
									<div class="text-[10px] text-slate-400">Visitas Mensuales</div>
									<div class="text-sm sm:text-base font-bold text-white mt-1">128.4K</div>
									<div class="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
										<span>↑ 32.4%</span> este mes
									</div>
								</div>
								<div class="bg-[#121c42]/80 border border-blue-800/40 rounded-xl p-3">
									<div class="text-[10px] text-slate-400">Tasa de Conversión</div>
									<div class="text-sm sm:text-base font-bold text-cyan-300 mt-1">4.82%</div>
									<div class="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
										<span>↑ 18.2%</span> vs mercado
									</div>
								</div>
								<div class="bg-[#121c42]/80 border border-blue-800/40 rounded-xl p-3">
									<div class="text-[10px] text-slate-400">Ventas Generadas</div>
									<div class="text-sm sm:text-base font-bold text-emerald-300 mt-1">S/ 84,920</div>
									<div class="text-[10px] text-cyan-400 font-medium flex items-center gap-1 mt-0.5">
										Meta superada
									</div>
								</div>
							</div>

							<!-- Hero image banner inside laptop -->
							<div class="mt-4 rounded-xl overflow-hidden relative border border-blue-500/30 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 p-4 flex items-center justify-between">
								<div class="space-y-1">
									<div class="text-xs font-bold text-white">Tienda Virtual E-Commerce</div>
									<div class="text-[10px] text-slate-300">Integración pasarelas: Yape, Plin & Tarjetas</div>
								</div>
								<div class="flex items-center gap-2">
									<!-- Visual mini graph bars -->
									<div class="flex items-end gap-1 h-8">
										<div class="w-1.5 bg-blue-500 rounded-t h-4"></div>
										<div class="w-1.5 bg-blue-400 rounded-t h-6"></div>
										<div class="w-1.5 bg-cyan-400 rounded-t h-8"></div>
										<div class="w-1.5 bg-blue-300 rounded-t h-5"></div>
										<div class="w-1.5 bg-cyan-300 rounded-t h-7"></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Laptop Base & Keyboard Shelf -->
					<div class="relative w-[108%] -left-[4%] h-3.5 sm:h-4 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-b-xl shadow-2xl border-t border-slate-600 flex items-center justify-center">
						<div class="w-16 h-1 bg-slate-950 rounded-full opacity-60"></div>
					</div>
					<!-- Laptop Bottom Lip Reflection -->
					<div class="w-[96%] mx-auto h-2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent blur-sm"></div>

					<!-- Angled Mobile Device floating in front on the right -->
					<div
						class="absolute -bottom-6 sm:-bottom-8 right-0 sm:right-2 w-36 sm:w-48 rounded-[28px] bg-slate-950 border-4 border-slate-800 p-2 shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(0,102,255,0.4)] transform rotate-6 hover:rotate-2 transition-transform duration-300"
					>
						<!-- Mobile notch / camera -->
						<div class="w-14 h-3 bg-black mx-auto rounded-full mb-1 flex items-center justify-center">
							<div class="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
						</div>

						<!-- Screen Content -->
						<div class="bg-gradient-to-b from-[#0a122e] to-[#040817] rounded-[20px] p-2.5 text-left border border-blue-900/50 space-y-2">
							<div class="flex items-center justify-between">
								<span class="text-[9px] font-bold text-white">NovaLyne App</span>
								<div class="w-2 h-2 rounded-full bg-emerald-400"></div>
							</div>
							
							<div class="rounded-lg bg-blue-600/30 border border-blue-500/40 p-2">
								<div class="text-[8px] text-cyan-300 font-semibold">Campaña Google Ads Perú</div>
								<div class="text-[11px] font-bold text-white">+340% Clics</div>
							</div>

							<!-- Mini cards -->
							<div class="space-y-1">
								<div class="flex items-center gap-1.5 bg-white/5 p-1 rounded">
									<div class="w-3.5 h-3.5 rounded bg-blue-500 flex items-center justify-center text-[7px] text-white">✓</div>
									<span class="text-[8px] text-slate-300">Posicionamiento SEO</span>
								</div>
								<div class="flex items-center gap-1.5 bg-white/5 p-1 rounded">
									<div class="w-3.5 h-3.5 rounded bg-cyan-500 flex items-center justify-center text-[7px] text-white">★</div>
									<span class="text-[8px] text-slate-300">Diseño Móvil First</span>
								</div>
							</div>

							<button class="w-full bg-[#0066ff] text-[8px] font-bold text-white py-1 rounded shadow-sm">
								Ver Proyecto
							</button>
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
</section>
