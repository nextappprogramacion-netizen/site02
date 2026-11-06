<script lang="ts">
	interface Project {
		id: string;
		title: string;
		category: string;
		tag: string;
		description: string;
		stats: string;
		tech: string[];
	}

	const projects: Project[] = [
		{
			id: 'ecommerce',
			title: 'Tienda Virtual E-Commerce',
			category: 'Comercio Electrónico con Pasarelas Peruanas',
			tag: 'E-Shop 2.0',
			description: 'Desarrollo de plataforma e-commerce de alto rendimiento optimizada para Perú: checkout fluido en 1 paso, cobros con Yape, Plin y tarjetas, cálculo de envíos en Lima y provincias, y sincronización de inventario.',
			stats: '+142% en Ventas',
			tech: ['SvelteKit', 'Yape / Plin', 'Culqi & Izipay', 'Tailwind CSS']
		},
		{
			id: 'refonte',
			title: 'Renovación Web Corporativa',
			category: 'Portal Institucional & Experiencia B2B',
			tag: 'Corporativo & B2B',
			description: 'Rediseño integral de la imagen digital de destacada firma en Lima: velocidad de carga optimizada a menos de 1 segundo, arquitectura moderna y primeros lugares en Google Perú.',
			stats: '-65% Tasa de Rebote',
			tech: ['TypeScript', 'Diseño UI/UX', 'SEO Perú', 'Arquitectura Cloud']
		},
		{
			id: 'marketing',
			title: 'Campaña de Ads & Captación',
			category: 'Publicidad Digital & Tráfico Calificado',
			tag: 'Growth & Leads',
			description: 'Estrategia omnicanal en Google Ads y Meta Ads para captación masiva de clientes en Lima y provincias, con embudos de alta conversión adaptados al usuario móvil peruano.',
			stats: 'x3.8 Retorno (ROAS)',
			tech: ['Meta Ads', 'Google Ads Perú', 'Landing Pages', 'Analítica Avanzada']
		}
	];

	let selectedProject = $state<Project | null>(null);

	function openProject(project: Project) {
		selectedProject = project;
	}

	function closeProject() {
		selectedProject = null;
	}
</script>

<section
	id="proyectos"
	class="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white scroll-mt-[56px] sm:scroll-mt-[62px] py-14 sm:py-16 lg:py-20"
>
	<!-- Hidden anchor for backwards compatibility -->
	<div id="realisations" class="absolute -top-10 opacity-0 pointer-events-none"></div>

	<!-- Subtle ambient background curves & waves -->
	<div class="absolute inset-0 pointer-events-none opacity-40">
		<svg class="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
			<path d="M0,160 C320,300 420,100 720,200 C1020,300 1120,150 1440,240 L1440,800 L0,800 Z" fill="rgba(241, 245, 249, 0.6)"/>
			<path d="M0,320 C400,200 600,450 1000,320 C1200,260 1350,340 1440,300" stroke="rgba(203, 213, 225, 0.4)" stroke-width="2" stroke-dasharray="6 6"/>
		</svg>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
		
		<!-- Section Header with dividing horizontal lines matching reference -->
		<div class="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
			<div class="flex items-center justify-center gap-4">
				<div class="w-12 sm:w-20 lg:w-24 h-[1.5px] bg-slate-300"></div>
				<h2 class="text-[28px] sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-[#0e172e] tracking-tight">
					Nuestros Proyectos
				</h2>
				<div class="w-12 sm:w-20 lg:w-24 h-[1.5px] bg-slate-300"></div>
			</div>
			<p class="text-base sm:text-lg lg:text-[20px] xl:text-[21px] text-slate-500 font-medium mt-3">
				Casos de Éxito y Soluciones Digitales en Lima y Perú
			</p>
		</div>

		<!-- 3 Showcase Cards Grid -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
			
			<!-- Card 1: Tienda e-Commerce (Multi-device view with Soles) -->
			<div
				class="group bg-white rounded-2xl p-6 sm:p-7 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_40px_rgba(0,102,255,0.14)] border border-slate-100 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col cursor-pointer"
				onclick={() => openProject(projects[0])}
				onkeydown={(e) => e.key === 'Enter' && openProject(projects[0])}
				role="button"
				tabindex="0"
			>
				<!-- Mockup Screen Container -->
				<div class="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-gradient-to-br from-[#0c1533] via-[#101b44] to-[#0a1027] p-3 flex flex-col justify-center items-center shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
					
					<!-- Multi-device layout inside card 1: Desktop display + Tablet + Smartphone -->
					<div class="relative w-full h-full flex items-center justify-center">
						
						<!-- Main monitor mockup -->
						<div class="w-[78%] h-[82%] bg-slate-900 rounded-lg border-2 border-slate-700 shadow-xl overflow-hidden flex flex-col">
							<!-- Top bar -->
							<div class="bg-slate-800 px-2 py-1 flex items-center gap-1 border-b border-slate-700">
								<div class="w-1.5 h-1.5 rounded-full bg-red-400"></div>
								<div class="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
								<div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
								<span class="text-[7px] text-slate-400 ml-2">mitienda.pe</span>
							</div>
							<!-- E-commerce content in PEN -->
							<div class="p-2 bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex-1 flex flex-col justify-between">
								<div class="flex items-center justify-between text-[8px] text-slate-300 border-b border-slate-700 pb-1">
									<span class="font-bold text-cyan-400">TIENDA PERÚ</span>
									<span class="bg-blue-600 text-white px-1.5 py-0.5 rounded text-[7px]">Carrito (3)</span>
								</div>
								<div class="grid grid-cols-3 gap-1.5 my-1">
									<div class="bg-slate-800/80 rounded p-1 text-center">
										<div class="h-8 bg-blue-500/20 rounded mb-1 flex items-center justify-center text-[10px]">👟</div>
										<div class="text-[7px] text-white font-medium">Urban Boost</div>
										<div class="text-[6px] text-cyan-300 font-bold">S/ 189</div>
									</div>
									<div class="bg-slate-800/80 rounded p-1 text-center">
										<div class="h-8 bg-purple-500/20 rounded mb-1 flex items-center justify-center text-[10px]">🎧</div>
										<div class="text-[7px] text-white font-medium">Audífonos Pro</div>
										<div class="text-[6px] text-cyan-300 font-bold">S/ 249</div>
									</div>
									<div class="bg-slate-800/80 rounded p-1 text-center">
										<div class="h-8 bg-emerald-500/20 rounded mb-1 flex items-center justify-center text-[10px]">⌚</div>
										<div class="text-[7px] text-white font-medium">Smartwatch</div>
										<div class="text-[6px] text-cyan-300 font-bold">S/ 320</div>
									</div>
								</div>
								<div class="h-2 bg-emerald-500 rounded-sm w-3/4 mx-auto flex items-center justify-center text-[6px] text-slate-950 font-bold">
									Yape · Plin · Tarjetas
								</div>
							</div>
						</div>

						<!-- Mini floating phone in front left -->
						<div class="absolute -bottom-2 -left-1 w-16 h-28 bg-slate-950 rounded-xl border-2 border-slate-600 p-1 shadow-2xl flex flex-col justify-between">
							<div class="w-4 h-1 bg-slate-800 mx-auto rounded-full"></div>
							<div class="bg-blue-950/80 rounded p-1 text-[6px] text-white text-center">
								<div class="text-[5px] text-cyan-400">Checkout</div>
								<div class="font-bold text-emerald-400">Pagado ✓</div>
							</div>
							<div class="w-2 h-2 rounded-full bg-slate-800 mx-auto"></div>
						</div>

						<!-- Mini tablet on right -->
						<div class="absolute -top-1 -right-1 w-20 h-24 bg-slate-900 rounded-lg border-2 border-slate-700 p-1 shadow-lg flex flex-col justify-between">
							<div class="text-[6px] text-white font-semibold">Ventas Hoy</div>
							<div class="h-8 bg-cyan-950/60 rounded flex items-end gap-0.5 p-0.5">
								<div class="w-1 bg-cyan-400 h-2"></div>
								<div class="w-1 bg-cyan-400 h-4"></div>
								<div class="w-1 bg-cyan-400 h-6"></div>
								<div class="w-1 bg-cyan-400 h-5"></div>
							</div>
							<div class="text-[5px] text-emerald-400 text-right">+142% Ventas</div>
						</div>

					</div>

					<!-- Hover overlay badge -->
					<div class="absolute top-3 right-3 bg-blue-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
						{projects[0].stats}
					</div>
				</div>

				<!-- Label underneath image matching reference -->
				<div class="mt-5 text-center">
					<h3 class="text-xl sm:text-[22px] font-bold text-[#0e172e] group-hover:text-blue-600 transition-colors">
						Tienda Virtual E-Commerce
					</h3>
					<p class="text-sm sm:text-[15px] lg:text-[17px] text-slate-500 mt-1.5 leading-relaxed">Plataforma con pagos rápidos Yape / Plin / Tarjetas</p>
				</div>
			</div>

			<!-- Card 2: Renovación Corporativa (Corporate Laptop view) -->
			<div
				class="group bg-white rounded-2xl p-6 sm:p-7 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_40px_rgba(0,102,255,0.14)] border border-slate-100 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col cursor-pointer"
				onclick={() => openProject(projects[1])}
				onkeydown={(e) => e.key === 'Enter' && openProject(projects[1])}
				role="button"
				tabindex="0"
			>
				<!-- Mockup Screen Container -->
				<div class="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-gradient-to-br from-[#0c1533] via-[#101b44] to-[#0a1027] p-3 flex flex-col justify-center items-center shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
					
					<!-- Centered Laptop Mockup -->
					<div class="relative w-[92%] h-[80%] bg-slate-900 rounded-t-lg border-2 border-slate-700 shadow-2xl overflow-hidden flex flex-col">
						<!-- Top bar -->
						<div class="bg-slate-800 px-3 py-1 flex items-center justify-between border-b border-slate-700">
							<div class="flex items-center gap-1">
								<div class="w-1.5 h-1.5 rounded-full bg-red-400"></div>
								<div class="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
								<div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
							</div>
							<div class="text-[8px] text-slate-400">grupoindustrial.pe</div>
							<div class="w-4"></div>
						</div>
						<!-- Enterprise portal content -->
						<div class="p-3 bg-gradient-to-br from-[#0b132b] to-[#1c2541] flex-1 flex flex-col justify-between">
							<div class="flex items-center justify-between border-b border-blue-900/50 pb-1.5">
								<div class="flex items-center gap-1.5">
									<div class="w-3.5 h-3.5 rounded bg-blue-500"></div>
									<span class="text-[8px] font-bold text-white">GRUPO CORPORATIVO LIMA</span>
								</div>
								<span class="text-[7px] text-cyan-400 bg-blue-950 px-1 rounded border border-blue-700/50">Empresarial B2B</span>
							</div>

							<!-- Corporate hero mockup inside laptop -->
							<div class="my-auto py-2">
								<div class="text-[9px] font-extrabold text-white">Innovación & Soluciones para la Industria</div>
								<div class="text-[7px] text-slate-300 mt-0.5">Transformación digital integral para empresas líderes en el Perú</div>
								<div class="mt-2 flex items-center gap-2">
									<div class="px-2 py-0.5 rounded bg-blue-600 text-white text-[7px] font-medium">Ver Servicios</div>
									<div class="px-2 py-0.5 rounded bg-white/10 text-slate-300 text-[7px]">Contactar</div>
								</div>
							</div>

							<!-- Analytics mini footer -->
							<div class="grid grid-cols-3 gap-1 pt-1 border-t border-slate-700/50 text-[7px]">
								<div class="text-slate-400">SEO Perú: <span class="text-emerald-400 font-bold">100/100</span></div>
								<div class="text-slate-400">Carga: <span class="text-cyan-400 font-bold">0.4s</span></div>
								<div class="text-slate-400">Seguridad: <span class="text-blue-400 font-bold">SSL A+</span></div>
							</div>
						</div>
					</div>

					<!-- Laptop base shelf -->
					<div class="w-[98%] h-2 bg-slate-700 rounded-b-md shadow-lg border-t border-slate-600"></div>

					<!-- Hover overlay badge -->
					<div class="absolute top-3 right-3 bg-blue-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
						{projects[1].stats}
					</div>
				</div>

				<!-- Label underneath image matching reference -->
				<div class="mt-5 text-center">
					<h3 class="text-xl sm:text-[22px] font-bold text-[#0e172e] group-hover:text-blue-600 transition-colors">
						Renovación Web Corporativa
					</h3>
					<p class="text-sm sm:text-[15px] lg:text-[17px] text-slate-500 mt-1.5 leading-relaxed">Identidad digital y portal empresarial B2B</p>
				</div>
			</div>

			<!-- Card 3: Campaña de Ads & Marketing -->
			<div
				class="group bg-white rounded-2xl p-6 sm:p-7 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_40px_rgba(0,102,255,0.14)] border border-slate-100 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col cursor-pointer"
				onclick={() => openProject(projects[2])}
				onkeydown={(e) => e.key === 'Enter' && openProject(projects[2])}
				role="button"
				tabindex="0"
			>
				<!-- Mockup Screen Container -->
				<div class="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-gradient-to-br from-[#0c1533] via-[#101b44] to-[#0a1027] p-3 flex flex-col justify-center items-center shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
					
					<!-- Hand + Phone Mockup Visual Representation -->
					<div class="relative w-full h-full flex items-center justify-center">
						
						<!-- Smartphone holding visual -->
						<div class="w-32 sm:w-36 h-48 bg-slate-950 rounded-[24px] border-4 border-slate-700 shadow-2xl p-1.5 flex flex-col justify-between relative z-10">
							<!-- Notch -->
							<div class="w-12 h-2.5 bg-black mx-auto rounded-full"></div>
							
							<!-- Mobile Marketing Screen -->
							<div class="bg-gradient-to-b from-[#0e1738] via-[#142254] to-[#0a112c] rounded-[18px] p-2 flex-1 flex flex-col justify-between my-1 border border-blue-800/40">
								<!-- App Header -->
								<div class="flex items-center justify-between text-[8px] text-white">
									<span class="font-bold text-cyan-300">Google Ads Perú</span>
									<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
								</div>

								<!-- Campaign Card -->
								<div class="bg-blue-600/30 rounded-lg p-1.5 border border-blue-400/30">
									<div class="text-[7px] text-cyan-200">Campaña Multicanal</div>
									<div class="text-[10px] font-extrabold text-white">+380% Clientes</div>
									<div class="text-[6px] text-slate-300 mt-0.5">Costo por lead reducido 42%</div>
								</div>

								<!-- Interactive engagement graph inside phone -->
								<div class="bg-slate-900/80 rounded p-1">
									<div class="text-[6px] text-slate-400 mb-1">Crecimiento Semanal</div>
									<svg class="w-full h-6" viewBox="0 0 100 30" fill="none">
										<path d="M0,25 Q25,20 50,12 T100,4" stroke="#38BDF8" stroke-width="2" fill="none"/>
										<path d="M0,25 Q25,20 50,12 T100,4 L100,30 L0,30 Z" fill="url(#mobileGraphGrad)" opacity="0.4"/>
										<defs>
											<linearGradient id="mobileGraphGrad" x1="0" y1="0" x2="0" y2="1">
												<stop offset="0%" stop-color="#38BDF8" />
												<stop offset="1" stop-color="#38BDF8" stop-opacity="0" />
											</linearGradient>
										</defs>
									</svg>
								</div>

								<!-- Target metrics -->
								<div class="grid grid-cols-2 gap-1 text-[7px] text-center">
									<div class="bg-blue-900/60 rounded py-0.5 text-white font-semibold">1.4M Vistas</div>
									<div class="bg-emerald-900/60 rounded py-0.5 text-emerald-300 font-semibold">+24.5k Clics</div>
								</div>
							</div>

							<!-- Home indicator -->
							<div class="w-10 h-1 bg-slate-700 mx-auto rounded-full"></div>
						</div>

						<!-- Background ambient phone glow -->
						<div class="absolute w-40 h-40 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"></div>
					</div>

					<!-- Hover overlay badge -->
					<div class="absolute top-3 right-3 bg-blue-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
						{projects[2].stats}
					</div>
				</div>

				<!-- Label underneath image matching reference -->
				<div class="mt-5 text-center">
					<h3 class="text-xl sm:text-[22px] font-bold text-[#0e172e] group-hover:text-blue-600 transition-colors">
						Campaña de Ads & Marketing
					</h3>
					<p class="text-sm sm:text-[15px] lg:text-[17px] text-slate-500 mt-1.5 leading-relaxed">Generación de prospectos y conversión en Perú</p>
				</div>
			</div>

		</div>

		<!-- Centered CTA Button -->
		<div class="mt-10 sm:mt-12 text-center">
			<button
				type="button"
				onclick={() => openProject(projects[0])}
				class="cursor-pointer inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base sm:text-[17px] font-semibold text-white bg-gradient-to-r from-[#0066ff] to-[#0052cc] hover:from-[#0052cc] hover:to-[#0041b8] shadow-[0_4px_18px_rgba(0,102,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,102,255,0.55)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
			>
				Ver Todos los Proyectos
				<svg class="w-4.5 h-4.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
				</svg>
			</button>
		</div>

	</div>

	<!-- Interactive Modal for Project Details in Spanish -->
	{#if selectedProject}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
			role="dialog"
			aria-modal="true"
		>
			<div
				class="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 transform transition-all animate-in fade-in zoom-in-95 duration-200"
			>
				<div class="flex items-center justify-between pb-4 border-b border-slate-100">
					<div>
						<span class="text-xs font-bold uppercase tracking-wider text-blue-600">
							{selectedProject.tag}
						</span>
						<h3 class="text-2xl font-bold text-slate-900 mt-1">
							{selectedProject.title}
						</h3>
					</div>
					<button
						type="button"
						onclick={closeProject}
						aria-label="Cerrar ventana"
						class="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
					>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
						</svg>
					</button>
				</div>

				<div class="py-5 space-y-4">
					<p class="text-slate-600 leading-relaxed text-sm">
						{selectedProject.description}
					</p>

					<div class="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
						<span class="text-xs font-semibold text-blue-900">Resultado obtenido:</span>
						<span class="text-lg font-bold text-blue-600">{selectedProject.stats}</span>
					</div>

					<div>
						<div class="text-xs font-semibold text-slate-500 mb-2 uppercase">Tecnologías & Enfoque</div>
						<div class="flex flex-wrap gap-2">
							{#each selectedProject.tech as t}
								<span class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
									{t}
								</span>
							{/each}
						</div>
					</div>
				</div>

				<div class="pt-4 border-t border-slate-100 flex justify-end gap-3">
					<button
						type="button"
						onclick={closeProject}
						class="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
					>
						Cerrar
					</button>
				</div>
			</div>
		</div>
	{/if}
</section>
