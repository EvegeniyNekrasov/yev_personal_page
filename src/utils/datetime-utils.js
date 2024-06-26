export function formatHumanReadableDate(dateString, locale) {
	const [year, month] = dateString.split('-').map(Number);
	const date = new Date(year, month - 1);
	return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date);
}
