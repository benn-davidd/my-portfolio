// NAVBAR background change on scroll

window.addEventListener("scroll", () => {
	const navbar = document.getElementById("navbar");
	if (window.scrollY > 10) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});
