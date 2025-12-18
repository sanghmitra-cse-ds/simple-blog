const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
	body.classList.toggle('dark-theme');
	const isDark = body.classList.contains('dark-theme');
	themeToggle.textContent = isDark ? '☀️' : '🌙';
});
