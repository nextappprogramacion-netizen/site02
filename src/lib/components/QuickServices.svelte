<script lang="ts">
	interface Props {
		onSelectService?: (serviceName: string) => void;
	}

	let { onSelectService }: Props = $props();

	const services = [
		{
			id: 'web',
			title: 'Desarrollo de Páginas Web',
			description: 'Sitios web modernos, veloces y optimizados para convertir',
			badge: 'A Medida',
			icon: 'screen'
		},
		{
			id: 'marketing',
			title: 'Marketing Digital & Ads',
			description: 'Estrategias para multiplicar tu visibilidad y clientes en Perú',
			badge: 'ROI & Leads',
			icon: 'megaphone'
		},
		{
			id: 'design',
			title: 'Diseño & Identidad de Marca',
			description: 'Branding profesional y experiencia visual a tu medida',
			badge: 'UI/UX & Marca',
			icon: 'design'
		}
	];
</script>

<section id="services" class="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
		{#each services as item}
			<div
				class="group bg-white rounded-2xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,102,255,0.12)] border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-5 cursor-pointer"
				onclick={() => onSelectService?.(item.title)}
				onkeydown={(e) => e.key === 'Enter' && onSelectService?.(item.title)}
				role="button"
				tabindex="0"
			>
				<!-- Icon Container with 3D gradient look matching reference -->
				<div class="relative shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/70 border border-blue-100 flex items-center justify-center p-3 shadow-inner group-hover:scale-105 transition-transform duration-300">
					
					{#if item.icon === 'screen'}
						<!-- Screen / Laptop Web Dev Icon -->
						<svg class="w-10 h-10 text-blue-600 drop-shadow-sm" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="4" y="8" width="40" height="26" rx="4" fill="#0066FF" />
							<rect x="7" y="11" width="34" height="20" rx="2" fill="#FFFFFF" />
							<!-- Code symbols / interface -->
							<rect x="10" y="14" width="8" height="2" rx="1" fill="#0066FF" />
							<rect x="10" y="18" width="16" height="2" rx="1" fill="#93C5FD" />
							<rect x="10" y="22" width="12" height="2" rx="1" fill="#93C5FD" />
							<path d="M30 18L33 21L30 24" stroke="#0066FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M26 18L23 21L26 24" stroke="#0066FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<!-- Screen stand -->
							<path d="M18 34L16 40H32L30 34" fill="#1E293B" />
							<rect x="14" y="39" width="20" height="2" rx="1" fill="#64748B" />
						</svg>

					{:else if item.icon === 'megaphone'}
						<!-- Megaphone Marketing Icon -->
						<svg class="w-10 h-10 drop-shadow-sm" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<!-- Megaphone body -->
							<path d="M12 20H8C6.89543 20 6 20.8954 6 22V28C6 29.1046 6.89543 30 8 30H12L28 38V12L12 20Z" fill="url(#megaGrad)" />
							<!-- Sound waves -->
							<path d="M34 16C36.5 18.5 38 21.5 38 25C38 28.5 36.5 31.5 34 34" stroke="#0066FF" stroke-width="3" stroke-linecap="round" />
							<path d="M39 12C42.5 15.5 44 20 44 25C44 30 42.5 34.5 39 38" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" />
							<!-- Handle -->
							<path d="M14 30L17 40H22L19 30" fill="#1E40AF" />
							<defs>
								<linearGradient id="megaGrad" x1="6" y1="12" x2="28" y2="38" gradientUnits="userSpaceOnUse">
									<stop stop-color="#38BDF8" />
									<stop offset="1" stop-color="#0066FF" />
								</linearGradient>
							</defs>
						</svg>

					{:else if item.icon === 'design'}
						<!-- Design / Brand Identity Compass & Sphere Icon -->
						<svg class="w-10 h-10 drop-shadow-sm" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<!-- Outer gradient circle -->
							<circle cx="24" cy="24" r="18" fill="url(#designGrad)" />
							<path d="M14 32C18 24 30 16 34 16C34 16 32 28 24 34C19 37 15 35 14 32Z" fill="white" opacity="0.9" />
							<circle cx="24" cy="24" r="4" fill="#0066FF" />
							<path d="M18 18L30 30" stroke="#0066FF" stroke-width="2.5" stroke-linecap="round" />
							<defs>
								<linearGradient id="designGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
									<stop stop-color="#0066FF" />
									<stop offset="0.6" stop-color="#38BDF8" />
									<stop offset="1" stop-color="#F59E0B" />
								</linearGradient>
							</defs>
						</svg>
					{/if}

				</div>

				<!-- Text Content in Spanish -->
				<div class="flex-1 min-w-0">
					<h3 class="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
						{item.title}
					</h3>
					<p class="text-sm text-slate-500 mt-1 leading-snug">
						{item.description}
					</p>
				</div>

				<!-- Subtle right arrow on hover -->
				<div class="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</div>
			</div>
		{/each}
	</div>
</section>
