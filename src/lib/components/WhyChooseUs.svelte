<script lang="ts">
	const reasons = [
		{
			id: 'expertise',
			title: 'Experiencia e Innovación',
			description: 'Tecnología moderna de alto nivel',
			detail: 'Dominio de arquitecturas web modernas (SvelteKit, Tailwind CSS, Cloud Serverless) para crear productos digitales ultrarrápidos, estables y preparados para escalar.',
			icon: 'lightbulb'
		},
		{
			id: 'acompanamiento',
			title: 'Atención en Horario Lima',
			description: 'Acompañamiento cercano y directo',
			detail: 'Equipo disponible en tu misma zona horaria (GMT-5 Lima). Coordinación ágil por WhatsApp, videollamadas o reuniones en Lima para guiarte en cada etapa.',
			icon: 'handshake'
		},
		{
			id: 'resultats',
			title: 'Resultados y Retorno de Inversión',
			description: 'Estrategias pensadas para vender',
			detail: 'Optimización de velocidad de carga, diseño centrado en la conversión y posicionamiento SEO estratégico para destacar en el mercado peruano.',
			icon: 'chart'
		},
		{
			id: 'support',
			title: 'Soporte y Respaldo Continuo',
			description: 'Tranquilidad total para tu negocio',
			detail: 'Asistencia técnica constante, mantenimiento preventivo y respuesta rápida para garantizar que tu sitio web esté operativo y seguro las 24 horas del día.',
			icon: 'support'
		}
	];
</script>

<section
	id="nosotros"
	class="relative overflow-hidden bg-slate-50/60 scroll-mt-[56px] sm:scroll-mt-[62px] py-14 sm:py-16 lg:py-20"
>
	<!-- Hidden anchor for backwards compatibility -->
	<div id="pourquoi-nous" class="absolute -top-10 opacity-0 pointer-events-none"></div>

	<!-- Background subtle line wave decoration -->
	<div class="absolute inset-0 pointer-events-none opacity-30">
		<svg class="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
			<path d="M0,100 C480,250 960,-50 1440,120" stroke="rgba(203, 213, 225, 0.5)" stroke-width="2"/>
			<path d="M0,350 C480,180 960,400 1440,250" stroke="rgba(203, 213, 225, 0.4)" stroke-width="1.5" stroke-dasharray="4 4"/>
		</svg>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
		
		<!-- Section Header with dividing horizontal lines matching reference -->
		<div class="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
			<div class="flex items-center justify-center gap-4">
				<div class="w-10 sm:w-16 lg:w-20 h-[1.5px] bg-slate-300"></div>
				<h2 class="text-[28px] sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-[#0e172e] tracking-tight">
					¿Por Qué Elegir NovaLyne?
				</h2>
				<div class="w-10 sm:w-16 lg:w-20 h-[1.5px] bg-slate-300"></div>
			</div>
			<p class="text-base sm:text-lg lg:text-[20px] xl:text-[21px] text-slate-500 font-medium mt-3">
				Aliados estratégicos en diseño web y crecimiento digital para empresas en Lima y todo el Perú
			</p>
		</div>

		<!-- 4 Feature Cards Grid matching reference -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
			{#each reasons as item}
				<div
					class="group bg-white rounded-2xl p-6 sm:p-7 lg:p-8 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgba(0,102,255,0.12)] border border-slate-100 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center relative overflow-hidden"
				>
					<!-- Top soft glow on hover -->
					<div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

					<!-- Icon Container with 3D gradient look matching reference -->
					<div class="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-100/80">
						
						{#if item.icon === 'lightbulb'}
							<!-- Lightbulb Icon (Expertise & Innovation) -->
							<svg class="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M24 4V8" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
								<path d="M10 14L13 17" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
								<path d="M38 14L35 17" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
								<path d="M4 28H8" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
								<path d="M40 28H44" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
								<path d="M24 10C16.8203 10 11 15.8203 11 23C11 27.5 13.5 31.5 17 33.5V37C17 37.5523 17.4477 38 18 38H30C30.5523 38 31 37.5523 31 37V33.5C34.5 31.5 37 27.5 37 23C37 15.8203 31.1797 10 24 10Z" fill="url(#bulbGrad)" />
								<path d="M20 38H28M21 42H27" stroke="#1E3A8A" stroke-width="2.5" stroke-linecap="round"/>
								<path d="M21 24L24 20L27 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<defs>
									<linearGradient id="bulbGrad" x1="11" y1="10" x2="37" y2="38" gradientUnits="userSpaceOnUse">
										<stop stop-color="#38BDF8"/>
										<stop offset="1" stop-color="#0066FF"/>
									</linearGradient>
								</defs>
							</svg>

						{:else if item.icon === 'handshake'}
							<!-- Handshake Icon (Atención en Horario Lima) -->
							<svg class="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="6" y="16" width="10" height="16" rx="2" fill="#1E40AF" />
								<rect x="32" y="16" width="10" height="16" rx="2" fill="#0284C7" />
								<path d="M16 22L22 18C23.5 17 25.5 17.5 26.5 19L27 20L21 26L16 22Z" fill="#F59E0B" />
								<path d="M32 22L26 27C24.5 28.5 22.5 28 21.5 26.5L21 26L27 20L32 22Z" fill="#FBBF24" />
								<circle cx="24" cy="24" r="4" fill="#0066FF" opacity="0.3" />
								<path d="M18 25L24 31L30 25" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>

						{:else if item.icon === 'chart'}
							<!-- Chart Icon (Resultados Garantis) -->
							<svg class="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="6" y="6" width="36" height="36" rx="8" fill="url(#chartBgGrad)" />
								<!-- Grid line -->
								<line x1="10" y1="36" x2="38" y2="36" stroke="#93C5FD" stroke-width="2" stroke-linecap="round"/>
								<!-- Bars -->
								<rect x="12" y="24" width="5" height="12" rx="1.5" fill="#38BDF8"/>
								<rect x="21" y="18" width="5" height="18" rx="1.5" fill="#0066FF"/>
								<rect x="30" y="12" width="5" height="24" rx="1.5" fill="#10B981"/>
								<!-- Arrow line -->
								<path d="M14 20L23 14L32 8L37 10" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
								<polygon points="35,6 40,8 38,13" fill="#F59E0B" />
								<defs>
									<linearGradient id="chartBgGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
										<stop stop-color="#EFF6FF" />
										<stop offset="1" stop-color="#DBEAFE" />
									</linearGradient>
								</defs>
							</svg>

						{:else if item.icon === 'support'}
							<!-- Support Icon (Support Réactif) -->
							<svg class="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="24" cy="24" r="18" fill="url(#headsetGrad)" />
								<!-- Headset arch -->
								<path d="M14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24V28" stroke="white" stroke-width="3" stroke-linecap="round"/>
								<!-- Ear pads -->
								<rect x="12" y="22" width="4" height="8" rx="2" fill="white" />
								<rect x="32" y="22" width="4" height="8" rx="2" fill="white" />
								<!-- Mic -->
								<path d="M34 28V30C34 32 32 34 30 34H26" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
								<circle cx="24" cy="34" r="2" fill="#F59E0B" />
								<defs>
									<linearGradient id="headsetGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
										<stop stop-color="#0284C7" />
										<stop offset="1" stop-color="#1E3A8A" />
									</linearGradient>
								</defs>
							</svg>
						{/if}

					</div>

					<!-- Text Content -->
					<h3 class="text-lg sm:text-xl lg:text-[21px] font-bold text-[#0e172e] mb-2 group-hover:text-blue-600 transition-colors">
						{item.title}
					</h3>
					<div class="text-xs sm:text-[13px] lg:text-[14px] font-semibold text-blue-600 mb-2.5">
						{item.description}
					</div>
					<p class="text-sm sm:text-[15px] lg:text-[17px] text-slate-500 leading-relaxed">
						{item.detail}
					</p>

				</div>
			{/each}
		</div>

	</div>
</section>
