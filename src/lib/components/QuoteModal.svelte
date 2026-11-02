<script lang="ts">
	interface Props {
		open: boolean;
		initialService?: string;
		onClose: () => void;
	}

	let { open, initialService = '', onClose }: Props = $props();

	let service = $state('Diseño y Desarrollo Web');
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let budget = $state('S/ 3,000 - S/ 6,000');
	let details = $state('');
	let isSubmitting = $state(false);
	let success = $state(false);

	$effect(() => {
		if (initialService) {
			service = initialService;
		}
	});

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;
		await new Promise((r) => setTimeout(r, 700));
		isSubmitting = false;
		success = true;
	}

	function handleModalClose() {
		success = false;
		onClose();
	}
</script>

{#if open}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
		role="dialog"
		aria-modal="true"
	>
		<div
			class="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-in zoom-in-95 duration-200"
		>
			<!-- Top gradient bar -->
			<div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-700"></div>

			<!-- Close button -->
			<button
				type="button"
				onclick={handleModalClose}
				aria-label="Cerrar ventana"
				class="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			{#if success}
				<div class="text-center py-10 space-y-4">
					<div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl font-bold">
						✓
					</div>
					<h3 class="text-2xl font-extrabold text-slate-900">¡Solicitud Recibida!</h3>
					<p class="text-slate-600 text-sm max-w-sm mx-auto">
						Gracias <strong class="text-slate-800">{name}</strong>, nuestro equipo en Lima revisará tu solicitud y te contactará con una cotización personalizada en menos de 24 horas.
					</p>
					<div class="pt-4">
						<button
							type="button"
							onclick={handleModalClose}
							class="px-6 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 text-sm shadow-md"
						>
							¡Excelente, gracias!
						</button>
					</div>
				</div>
			{:else}
				<div class="mb-6">
					<span class="inline-block px-3 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100">
						Cotización gratuita · Lima, Perú
					</span>
					<h3 class="text-2xl font-extrabold text-[#0e172e] mt-2">
						Solicitar Cotización Personalizada
					</h3>
					<p class="text-xs sm:text-sm text-slate-500 mt-1">
						Cuéntanos los requerimientos de tu proyecto y te enviaremos una propuesta formal en Soles (S/).
					</p>
				</div>

				<form onsubmit={handleSubmit} class="space-y-4 text-left">
					<!-- Service selection -->
					<div>
						<label for="modal-service" class="block text-xs font-bold text-slate-700 mb-1.5">
							Tipo de proyecto :
						</label>
						<select
							id="modal-service"
							bind:value={service}
							class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
						>
							<option value="Diseño y Desarrollo Web">Diseño y Desarrollo de Páginas Web</option>
							<option value="Tienda Virtual E-Commerce">Tienda Virtual E-Commerce (Yape / Plin / Tarjetas)</option>
							<option value="Marketing Digital & Ads">Marketing Digital & Campañas Ads</option>
							<option value="Diseño & Identidad de Marca">Diseño & Identidad Visual de Marca</option>
							<option value="Renovación de Sitio Web">Renovación de Sitio Web Existente</option>
							<option value="Solución Web a Medida">Desarrollo Web / Sistema a Medida</option>
						</select>
					</div>

					<!-- Two-column inputs -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
						<div>
							<label for="modal-name" class="block text-xs font-bold text-slate-700 mb-1">
								Nombres y Apellidos *
							</label>
							<input
								id="modal-name"
								type="text"
								required
								bind:value={name}
								placeholder="Ej. Juan Pérez"
								class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div>
							<label for="modal-email" class="block text-xs font-bold text-slate-700 mb-1">
								Correo Corporativo *
							</label>
							<input
								id="modal-email"
								type="email"
								required
								bind:value={email}
								placeholder="juan@empresa.pe"
								class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
						<div>
							<label for="modal-phone" class="block text-xs font-bold text-slate-700 mb-1">
								Teléfono / WhatsApp (+51) *
							</label>
							<input
								id="modal-phone"
								type="tel"
								bind:value={phone}
								placeholder="+51 987 654 321"
								class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div>
							<label for="modal-budget" class="block text-xs font-bold text-slate-700 mb-1">
								Presupuesto Estimado (S/)
							</label>
							<select
								id="modal-budget"
								bind:value={budget}
								class="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								<option value="S/ 1,500 - S/ 3,000">S/ 1,500 - S/ 3,000 (Plan Inicio)</option>
								<option value="S/ 3,000 - S/ 6,000">S/ 3,000 - S/ 6,000 (Pymes & Negocios)</option>
								<option value="S/ 6,000 - S/ 15,000">S/ 6,000 - S/ 15,000 (Tiendas & Plataformas)</option>
								<option value="+ S/ 15,000">+ S/ 15,000 (Corporativo a Medida)</option>
							</select>
						</div>
					</div>

					<div>
						<label for="modal-details" class="block text-xs font-bold text-slate-700 mb-1">
							Detalles del proyecto (opcional)
						</label>
						<textarea
							id="modal-details"
							rows="2"
							bind:value={details}
							placeholder="Cuéntanos brevemente qué necesitas, plazos o funcionalidades..."
							class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						></textarea>
					</div>

					<div class="pt-2 flex justify-end gap-3">
						<button
							type="button"
							onclick={handleModalClose}
							class="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-sm font-medium transition-colors"
						>
							Cancelar
						</button>
						<button
							type="submit"
							disabled={isSubmitting}
							class="px-6 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30 text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 flex items-center gap-2 cursor-pointer"
						>
							{#if isSubmitting}
								<svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
								</svg>
								<span>Enviando requerimiento...</span>
							{:else}
								<span>Solicitar Cotización</span>
							{/if}
						</button>
					</div>
				</form>
			{/if}
		</div>
	</div>
{/if}
