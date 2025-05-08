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

document.addEventListener("DOMContentLoaded", () => {
	const swipers = {};
	const buttons = document.querySelectorAll(".view-project");

	buttons.forEach((button) => {
		const popupId = button.getAttribute("data-popup");
		const popup = document.getElementById(popupId);
		const overlay = document.querySelector(".popup-overlay");
		const container = popup.querySelector(".swiper-container");

		swipers[popupId] = new Swiper(container, {
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

		// on click, show popup and reset swiper to first slide
		button.addEventListener("click", (e) => {
			e.preventDefault();
			popup.style.display = "flex";
			document.body.style.overflow = "hidden";

			// update layout and reset to first slide
			setTimeout(() => {
				swipers[popupId].update();
				swipers[popupId].slideTo(0, 500);
			}, 50);
		});

		// close overlay
		overlay.addEventListener("click", () => {
			popup.style.display = "none";
			document.body.style.overflow = "";
		});
	});
});
