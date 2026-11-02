<script lang="ts">
	import { LIMA_LOCALE_CONFIG } from '../config/locale';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
	let submitting = $state(false);
	let submitted = $state(false);
	let errorMessage = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!email.trim() || !name.trim()) {
			errorMessage = 'Por favor completa tu nombre y correo electrónico.';
			return;
		}

		errorMessage = '';
		submitting = true;

		// Simular envío de formulario
		await new Promise((resolve) => setTimeout(resolve, 800));
		submitting = false;
		submitted = true;

		setTimeout(() => {
			name = '';
			email = '';
			phone = '';
			message = '';
		}, 500);
	}
</script>

<!-- Contacto Section -->
<section id="contacto" class="py-16 md:py-24 bg-white relative">
	<!-- Hidden anchor for backwards compatibility -->
	<div id="contact" class="absolute -top-10 opacity-0 pointer-events-none"></div>

	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<!-- Section Header -->
		<h2 class="text-3xl sm:text-4xl font-extrabold text-[#0e172e] tracking-tight">
			Contáctanos
		</h2>
		<p class="text-base sm:text-lg text-slate-500 font-medium mt-3">
			¿Listo para impulsar la presencia digital de tu marca? <span class="text-blue-600 font-semibold">¡Hablemos hoy!</span>
		</p>

		<!-- Trust / Info Pills for Peru -->
		<div class="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-slate-600">
			<div class="flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
				<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
				<span>Respuesta en menos de 24h</span>
			</div>
			<div class="flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
				<span class="w-2 h-2 rounded-full bg-blue-500"></span>
				<span>Cotización gratuita sin compromiso</span>
			</div>
			<div class="flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
				<span class="w-2 h-2 rounded-full bg-cyan-500"></span>
				<span>Horario Lima (GMT-5)</span>
			</div>
			<div class="flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
				<span class="w-2 h-2 rounded-full bg-amber-500"></span>
				<span>Facturación Electrónica Sunat</span>
			</div>
		</div>

		<!-- Direct Contact Channels Cards -->
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 text-left">
			<!-- Teléfono / WhatsApp -->
			<div class="bg-slate-50/80 p-4 rounded-xl border border-slate-200/70 flex items-center gap-3">
				<div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
					</svg>
				</div>
				<div>
					<div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">WhatsApp & Llamadas</div>
					<a href={LIMA_LOCALE_CONFIG.contact.whatsappLink} target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors">
						{LIMA_LOCALE_CONFIG.contact.phoneDisplay}
					</a>
				</div>
			</div>

			<!-- Ubicación Lima -->
			<div class="bg-slate-50/80 p-4 rounded-xl border border-slate-200/70 flex items-center gap-3">
				<div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
					</svg>
				</div>
				<div>
					<div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Sede Principal</div>
					<div class="text-sm font-bold text-slate-800">
						Miraflores, Lima · Perú
					</div>
				</div>
			</div>

			<!-- Correo -->
			<div class="bg-slate-50/80 p-4 rounded-xl border border-slate-200/70 flex items-center gap-3">
				<div class="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
					</svg>
				</div>
				<div>
					<div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Correo Electrónico</div>
					<a href="mailto:{LIMA_LOCALE_CONFIG.contact.email}" class="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors">
						{LIMA_LOCALE_CONFIG.contact.email}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Deep Dark Navy Footer Bar matching the exact design of the reference image -->
<footer class="bg-[#050b1d] text-white py-8 sm:py-10 border-t border-blue-950/60 relative z-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		{#if submitted}
			<div class="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-sm flex items-center justify-between animate-in fade-in duration-300">
				<div class="flex items-center gap-3">
					<svg class="w-5 h-5 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
					</svg>
					<span>¡Gracias! Tu mensaje ha sido enviado. Nuestro equipo en Lima te contactará a la brevedad.</span>
				</div>
				<button type="button" onclick={() => (submitted = false)} class="text-xs text-emerald-400 hover:text-white underline">
					Cerrar
				</button>
			</div>
		{/if}

		{#if errorMessage}
			<div class="mb-4 text-xs text-red-400 bg-red-950/60 p-2.5 rounded-lg border border-red-800/50">
				{errorMessage}
			</div>
		{/if}

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
			
			<!-- Left side: Copyright & Legal links in Lima, Peru -->
			<div class="lg:col-span-5 space-y-2">
				<div class="flex items-center gap-2">
					<span class="text-sm text-slate-300">
						© 2026 <strong class="text-white font-bold">NovaLyne Perú</strong>. Todos los derechos reservados.
					</span>
				</div>
				<div class="text-[11px] text-slate-400">
					{LIMA_LOCALE_CONFIG.contact.address} · {LIMA_LOCALE_CONFIG.contact.taxId}
				</div>
				<div class="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
					<a href="#hero" class="hover:text-cyan-400 transition-colors underline decoration-slate-600 underline-offset-2">
						Políticas de Privacidad
					</a>
					<span class="text-slate-600">•</span>
					<a href="#hero" class="hover:text-cyan-400 transition-colors underline decoration-slate-600 underline-offset-2">
						Términos del Servicio
					</a>
					<span class="text-slate-600">•</span>
					<a href="#hero" class="hover:text-cyan-400 transition-colors underline decoration-slate-600 underline-offset-2 flex items-center gap-1">
						<span>Libro de Reclamaciones</span>
					</a>
					<span class="text-slate-600">•</span>
					<a href="#hero" class="hover:text-cyan-400 transition-colors underline decoration-slate-600 underline-offset-2">
						Mapa del Sitio
					</a>
				</div>
			</div>

			<!-- Right side: Quick Inline Contact Form -->
			<div class="lg:col-span-7">
				<form
					onsubmit={handleSubmit}
					class="flex flex-col sm:flex-row items-stretch sm:items-end gap-3 justify-end"
				>
					<!-- Input: Nombre -->
					<div class="flex-1 min-w-[130px]">
						<label for="footer-name" class="block text-[11px] font-medium text-slate-300 mb-1">
							Nombre :
						</label>
						<input
							id="footer-name"
							type="text"
							bind:value={name}
							placeholder="Tu nombre"
							required
							class="w-full px-3.5 py-2 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
						/>
					</div>

					<!-- Input: Correo -->
					<div class="flex-1 min-w-[140px]">
						<label for="footer-email" class="block text-[11px] font-medium text-slate-300 mb-1">
							Correo :
						</label>
						<input
							id="footer-email"
							type="email"
							bind:value={email}
							placeholder="correo@empresa.pe"
							required
							class="w-full px-3.5 py-2 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
						/>
					</div>

					<!-- Input: Teléfono / WhatsApp -->
					<div class="flex-1 min-w-[140px]">
						<label for="footer-phone" class="block text-[11px] font-medium text-slate-300 mb-1">
							WhatsApp / Teléfono :
						</label>
						<input
							id="footer-phone"
							type="tel"
							bind:value={phone}
							placeholder="+51 987 654 321"
							class="w-full px-3.5 py-2 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
						/>
					</div>

					<!-- Button: Enviar -->
					<div class="sm:shrink-0">
						<button
							type="submit"
							disabled={submitting}
							class="cursor-pointer w-full sm:w-auto px-6 py-2 rounded-lg text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0066ff] to-[#0052cc] hover:from-[#0052cc] hover:to-[#0041b8] shadow-[0_4px_16px_rgba(0,102,255,0.4)] hover:shadow-[0_6px_22px_rgba(0,102,255,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 h-[38px] disabled:opacity-60"
						>
							{#if submitting}
								<svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
								</svg>
								<span>Enviando...</span>
							{:else}
								<span>Enviar Mensaje</span>
							{/if}
						</button>
					</div>
				</form>
			</div>

		</div>

	</div>
</footer>
