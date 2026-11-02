<script lang="ts">
	import Navbar from '#lib/components/Navbar.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import QuickServices from '#lib/components/QuickServices.svelte';
	import Portfolio from '#lib/components/Portfolio.svelte';
	import WhyChooseUs from '#lib/components/WhyChooseUs.svelte';
	import ContactFooter from '#lib/components/ContactFooter.svelte';
	import QuoteModal from '#lib/components/QuoteModal.svelte';
	import WhatsAppButton from '#lib/components/WhatsAppButton.svelte';

	let quoteOpen = $state(false);
	let targetService = $state('');

	function handleOpenQuote(serviceName: string = '') {
		targetService = serviceName;
		quoteOpen = true;
	}

	function handleCloseQuote() {
		quoteOpen = false;
	}
</script>

<svelte:head>
	<title>NovaLyne | Agencia Digital en Lima, Perú | Desarrollo Web & Marketing</title>
</svelte:head>

<div class="min-h-screen bg-white text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
	<!-- Fixed Header Navbar -->
	<Navbar onOpenQuote={() => handleOpenQuote()} />

	<main class="flex-1">
		<!-- Hero Section with 3D Tech device composition -->
		<Hero onDiscoverServices={() => {
			const el = document.getElementById('services');
			el?.scrollIntoView({ behavior: 'smooth' });
		}} />

		<!-- 3 Floating White Service Cards -->
		<QuickServices onSelectService={(s) => handleOpenQuote(s)} />

		<!-- "Nuestros Proyectos" Section -->
		<Portfolio />

		<!-- "¿Por Qué Elegir NovaLyne?" Section -->
		<WhyChooseUs />

		<!-- "Contáctanos" & Deep Midnight Footer Bar -->
		<ContactFooter />
	</main>

	<!-- WhatsApp Floating Quick Contact for Peru -->
	<WhatsAppButton />

	<!-- Interactive Quote Modal Dialog -->
	<QuoteModal
		open={quoteOpen}
		initialService={targetService}
		onClose={handleCloseQuote}
	/>
</div>
