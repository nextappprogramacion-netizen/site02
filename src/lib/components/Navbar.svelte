<script lang="ts">
	interface Props {
		onOpenQuote?: () => void;
	}

	let { onOpenQuote }: Props = $props();
	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);
	let activeSection = $state('hero');

	const navLinks = [
		{ id: 'hero', label: 'Inicio', href: '#hero' },
		{ id: 'services', label: 'Servicios', href: '#services' },
		{ id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
		{ id: 'nosotros', label: 'Nosotros', href: '#nosotros' }
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function handleNavClick(e: MouseEvent, href: string, id: string) {
		e.preventDefault();
		closeMobileMenu();
		activeSection = id;
		const targetId = href.replace('#', '');
		const el = document.getElementById(targetId);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function handleContactClick(e: MouseEvent) {
		e.preventDefault();
		closeMobileMenu();
		const el = document.getElementById('contacto') || document.getElementById('contact');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		} else if (onOpenQuote) {
			onOpenQuote();
		}
	}

	$effect(() => {
		const sectionIds = ['hero', 'services', 'proyectos', 'nosotros'];

		function handleScroll() {
			scrolled = window.scrollY > 16;

			const scrollPosition = window.scrollY + 140;
			for (let i = sectionIds.length - 1; i >= 0; i--) {
				const id = sectionIds[i];
				const el = document.getElementById(id);
				if (el) {
					const top = el.offsetTop;
					if (scrollPosition >= top) {
						activeSection = id;
						break;
					}
				}
			}
		}

		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === 'Escape' && mobileMenuOpen) {
				closeMobileMenu();
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('keydown', handleKeyDown);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 font-['Inter',sans-serif] transition-all duration-300 ease-in-out {scrolled
		? 'bg-[#071224]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.38)]'
		: 'bg-[#071224]/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none'}"
>
	<div class="w-[92%] max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6">
		<div
			class="relative z-50 flex items-center justify-between border-b transition-all duration-300 ease-in-out {scrolled
				? 'h-[56px] sm:h-[62px] border-white/[0.08]'
				: 'h-[62px] sm:h-[70px] border-white/[0.11]'}"
		>
			<!-- Brand Logo: Geometric Hummingbird + KINTI DEVELOPER -->
			<a
				href="#hero"
				onclick={(e) => handleNavClick(e, '#hero', 'hero')}
				class="flex items-center gap-2 sm:gap-3 group focus:outline-none min-h-[44px]"
				aria-label="KINTI DEVELOPER - Inicio"
			>
				<div
					class="relative w-8 h-7 sm:w-10 sm:h-9 flex items-center justify-center shrink-0"
				>
					<svg
						viewBox="0 0 48 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="w-full h-full transition-transform duration-300 group-hover:scale-105"
					>
						<!-- Upper Wing (Bright Turquoise) -->
						<polygon points="3,4 24,11 9.5,14.5" fill="#39D6E5" />
						<!-- Lower Wing Fold (Deep Teal) -->
						<polygon points="9.5,14.5 24,11 18.8,19.5" fill="#1B869A" />
						<!-- Head & Beak (Vibrant Tech Blue) -->
						<polygon
							points="24,11 29.5,4.2 34.8,4.3 45.5,4.8 35.5,9.5 34,13.2"
							fill="#1677F0"
						/>
						<!-- Eye -->
						<circle cx="32.2" cy="7.1" r="1.15" fill="#071224" />
						<!-- Right Breast Facet -->
						<polygon points="24,11 34,13.2 31.5,23.2" fill="#115BB2" />
						<!-- Center Body Facet -->
						<polygon points="24,11 31.5,23.2 18.8,19.5" fill="#1C88FA" />
						<!-- Upper Tail Facet -->
						<polygon points="18.8,19.5 31.5,23.2 15.2,27.5" fill="#116CEB" />
						<!-- Lower Tail Tip Facet -->
						<polygon points="15.2,27.5 31.5,23.2 10.5,36.2" fill="#1052B0" />
					</svg>
				</div>

				<div class="flex flex-col justify-center select-none">
					<span
						class="text-[19px] sm:text-[22.5px] font-extrabold tracking-[0.035em] leading-none text-white font-['Manrope','Inter',sans-serif]"
					>
						KINTI
					</span>
					<span
						class="text-[7.5px] sm:text-[9px] font-semibold tracking-[0.28em] leading-none text-[#CBD5E1]/80 mt-1 uppercase"
					>
						DEVELOPER
					</span>
				</div>
			</a>

			<!-- Desktop Navigation Links with Active Indicator & Subtle Hover -->
			<nav class="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Navegación principal">
				{#each navLinks as link}
					{@const isActive = activeSection === link.id}
					<a
						href={link.href}
						onclick={(e) => handleNavClick(e, link.href, link.id)}
						class="text-[14px] xl:text-[14.5px] font-medium transition-all duration-200 py-1.5 relative group {isActive
							? 'text-white font-semibold'
							: 'text-[#CBD5E1]/90 hover:text-white'}"
					>
						<span>{link.label}</span>
						<!-- Visual Indicator for Active / Hover Section -->
						<span
							class="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-all duration-200 {isActive
								? 'bg-[#31B6AD] opacity-100 scale-x-100'
								: 'bg-[#31B6AD]/70 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'}"
						></span>
					</a>
				{/each}
			</nav>

			<!-- Right CTA Button: Contáctanos -->
			<div class="hidden lg:flex items-center">
				<a
					href="#contacto"
					onclick={handleContactClick}
					class="inline-flex items-center justify-center bg-[#1966D2] hover:bg-[#2563EB] active:bg-[#1D4ED8] text-white text-[13.5px] xl:text-[14px] font-semibold px-5.5 py-2 rounded-lg shadow-[0_3px_12px_rgba(25,102,210,0.32)] hover:shadow-[0_5px_18px_rgba(37,99,235,0.46)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/50"
				>
					Contáctanos
				</a>
			</div>

			<!-- Mobile Animated Hamburger Button (Accessible 44x44px touch target) -->
			<div class="flex lg:hidden items-center">
				<button
					type="button"
					onclick={toggleMobileMenu}
					aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
					aria-expanded={mobileMenuOpen}
					class="w-11 h-11 flex items-center justify-center rounded-lg text-[#CBD5E1] hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/60"
				>
					<div class="relative w-5 h-4 flex flex-col justify-between">
						<span
							class="w-full h-0.5 bg-current rounded-full transition-all duration-300 transform origin-left {mobileMenuOpen
								? 'rotate-45 translate-x-0.5 -translate-y-0.5'
								: ''}"
						></span>
						<span
							class="w-full h-0.5 bg-current rounded-full transition-opacity duration-200 {mobileMenuOpen
								? 'opacity-0'
								: 'opacity-100'}"
						></span>
						<span
							class="w-full h-0.5 bg-current rounded-full transition-all duration-300 transform origin-left {mobileMenuOpen
								? '-rotate-45 translate-x-0.5 translate-y-0.5'
								: ''}"
						></span>
					</div>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation Backdrop & Drawer -->
		{#if mobileMenuOpen}
			<!-- Outside Click Backdrop -->
			<button
				type="button"
				class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden cursor-default transition-opacity"
				onclick={closeMobileMenu}
				aria-label="Cerrar menú"
				tabindex="-1"
			></button>

			<!-- Mobile Drawer -->
			<nav
				aria-label="Menú móvil"
				class="lg:hidden relative z-50 mt-2 mb-4 bg-[#0B1426]/98 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl space-y-1"
			>
				{#each navLinks as link}
					{@const isActive = activeSection === link.id}
					<a
						href={link.href}
						onclick={(e) => handleNavClick(e, link.href, link.id)}
						class="min-h-[44px] flex items-center justify-between px-4 py-2.5 rounded-xl text-[15px] font-medium transition-all {isActive
							? 'text-white bg-[#2563EB]/25 font-semibold border-l-2 border-[#31B6AD]'
							: 'text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10'}"
					>
						<span>{link.label}</span>
						{#if isActive}
							<span class="w-1.5 h-1.5 rounded-full bg-[#31B6AD]"></span>
						{/if}
					</a>
				{/each}
				<div class="pt-2 mt-2 border-t border-white/10">
					<a
						href="#contacto"
						onclick={handleContactClick}
						class="min-h-[44px] flex items-center justify-center w-full text-center bg-[#1966D2] hover:bg-[#2563EB] active:bg-[#1D4ED8] text-white text-[14.5px] font-semibold px-4 py-2.5 rounded-xl shadow-md transition-colors"
					>
						Contáctanos
					</a>
				</div>
			</nav>
		{/if}
	</div>
</header>
