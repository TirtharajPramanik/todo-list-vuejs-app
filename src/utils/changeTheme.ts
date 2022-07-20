export default function changeTheme(theme: any) {
	theme == 'dark'
		? document.documentElement.classList.add('dark')
		: document.documentElement.classList.remove('dark');
}
