// NAVBAR background change/visible on scroll

window.addEventListener("scroll", () => {
	const navbar = document.getElementById("navbar");
	if (window.scrollY > 10) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});

// PORFOLIO swiper popup

const popup = document.querySelector(".swiper-popup");
const overlay = document.querySelector(".popup-overlay");

document.querySelector(".view-project").addEventListener("click", function (e) {
	e.preventDefault();
	popup.style.display = "flex";
	new Swiper(".swiper-container", {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
		},
	});
});

overlay.addEventListener("click", function () {
	popup.style.display = "none";
});
