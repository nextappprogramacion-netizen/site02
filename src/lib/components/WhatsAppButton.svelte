<script lang="ts">
	import { LIMA_LOCALE_CONFIG } from '../config/locale';
</script>

<!-- WhatsApp Floating Button tailored for Lima, Peru -->
<aside aria-label="Contacto por WhatsApp" class="fixed bottom-6 right-6 z-40 flex items-center group">
	<!-- Tooltip pill -->
	<a
		href={LIMA_LOCALE_CONFIG.contact.whatsappLink}
		target="_blank"
		rel="noopener noreferrer"
		class="hidden md:inline-flex items-center gap-2 mr-3 px-3.5 py-2 bg-slate-900/90 text-white text-xs font-semibold rounded-full shadow-lg border border-slate-700/60 backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity hover:bg-slate-900"
	>
		<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
		<span>¿Consultas en Lima? Escríbenos</span>
	</a>

	<!-- Floating Circular Button -->
	<a
		href={LIMA_LOCALE_CONFIG.contact.whatsappLink}
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Chatear por WhatsApp con NovaLyne Perú"
		class="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transform hover:scale-108 active:scale-95 transition-all duration-200"
	>
		<!-- WhatsApp Icon -->
		<svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
			<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.761.881 2.796.882h.005c3.179 0 5.766-2.587 5.767-5.766.002-3.18-2.584-5.769-5.772-5.769zm9.969 5.766c-.003 5.518-4.49 10.005-10.008 10.005-1.761 0-3.479-.462-4.994-1.339l-5.598 1.468 1.493-5.454c-.96-1.574-1.467-3.385-1.469-5.241.003-5.518 4.49-10.005 10.009-10.005 5.518.001 10.004 4.488 10.006 10.005zm-4.757 3.32c-.261-.131-1.545-.762-1.785-.85-.239-.087-.414-.131-.588.131-.174.262-.676.85-.828 1.025-.153.174-.306.196-.567.065-.261-.131-1.104-.407-2.102-1.297-.777-.694-1.302-1.552-1.455-1.813-.153-.262-.016-.403.115-.533.118-.117.261-.306.392-.459.131-.153.175-.262.262-.436.087-.175.044-.327-.022-.459-.065-.131-.588-1.417-.806-1.942-.213-.51-.43-.44-.589-.448-.152-.008-.327-.01-.502-.01-.174 0-.458.065-.698.327-.239.262-.916.895-.916 2.182 0 1.288.938 2.532 1.069 2.707.131.174 1.846 2.819 4.472 3.953.625.27 1.113.431 1.494.553.628.2 1.2.172 1.652.104.505-.075 1.545-.631 1.763-1.242.218-.611.218-1.134.153-1.242-.066-.109-.24-.175-.502-.306z"/>
		</svg>
	</a>
</aside>
