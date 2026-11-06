export const LIMA_LOCALE_CONFIG = {
	locale: 'es-PE',
	language: 'es',
	country: 'Perú',
	city: 'Lima',
	region: 'Lima Metropolitana',
	timezone: 'America/Lima',
	utcOffset: '-05:00',
	currency: {
		code: 'PEN',
		symbol: 'S/',
		name: 'Sol peruano'
	},
	contact: {
		companyName: 'KINTI DEVELOPER',
		taxId: 'RUC: 20608945123',
		phoneDisplay: '+51 937 294 256',
		phoneRaw: '51937294256',
		whatsappLink: 'https://wa.me/51937294256?text=Hola%20KINTI%20DEVELOPER,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios.',
		email: 'contacto@kintideveloper.com',
		address: 'Miraflores, Lima, Perú',
		businessHours: 'Lunes a Viernes de 8:30 a. m. a 6:30 p. m. (Hora Lima / GMT-5)'
	},
	geo: {
		latitude: -12.1215,
		longitude: -77.0298,
		regionCode: 'PE-LIM'
	}
};

/**
 * Format amount into Peruvian Soles (S/)
 */
export function formatPEN(amount: number): string {
	return new Intl.NumberFormat('es-PE', {
		style: 'currency',
		currency: 'PEN',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	}).format(amount);
}

/**
 * Format a Date object into Peru local date & time
 */
export function formatLimaDate(date: Date = new Date()): string {
	return new Intl.DateTimeFormat('es-PE', {
		timeZone: 'America/Lima',
		dateStyle: 'medium',
		timeStyle: 'short'
	}).format(date);
}
