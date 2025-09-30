// ANIMATIONS - ScrollReveal

// heading
ScrollReveal().reveal(".heading", {
	origin: "top",
	distance: "10px",
	duration: 1100,
	delay: 150,
	easing: "ease-out",
	reset: false,
	opacity: 0,
});

//subheading
// ScrollReveal().reveal(".subheading", {
// 	origin: "right",
// 	distance: "25px",
// 	duration: 1200,
// 	easing: "ease-in-out",
// 	reset: false,
// 	opacity: 0,
// });

// NAVBAR Active Link on click and scroll position

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Highlight on scroll
window.addEventListener("scroll", () => {
	let currentSection = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - 100;
		if (pageYOffset >= sectionTop) {
			currentSection = section.getAttribute("id");
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href") === `#${currentSection}`) {
			link.classList.add("active");
		}
	});
});

// Highlight on click
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navLinks.forEach((l) => l.classList.remove("active"));
		link.classList.add("active");
	});
});

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

// CONTACT FORM

// using EmailJS api create an account here: https://www.emailjs.com

document.addEventListener("DOMContentLoaded", function () {
	emailjs.init("JTiXE0QegyIWEZ__F");
	const contactForm = document.querySelector(".contact-form");

	if (!contactForm) {
		console.error("Error: Contact form not found!");
		return;
	}

	contactForm.addEventListener("submit", function (event) {
		event.preventDefault();

		const formData = new FormData(contactForm);

		// take the data from your html for emailing
		const formValues = {
			from_name: formData.get("fullname"),
			from_email: formData.get("email"),
			email_subject: formData.get("subject"),
			message: formData.get("message"),
		};

		console.log("Form values being sent:", formValues);

		if (
			!formValues.from_name ||
			!formValues.from_email ||
			!formValues.message
		) {
			alert("Please fill in all required fields.");
			return;
		}

		// service_id and template-id from your emailJs
		emailjs.send("service_zdif93d", "template_hxmp3fm", formValues).then(
			function (response) {
				alert("Email sent successfully!");
				console.log("Email sent successfully!", response);
				contactForm.reset();
			},
			function (error) {
				alert("Error sending message: " + JSON.stringify(error));
				console.error("Error sending message: ", error);
			}
		);
	});
});

// COPYRIGHT

const currentYear = new Date().getFullYear();

document.getElementById("copyright").innerHTML =
	"&copy; " + currentYear + ". David Ben-Emu";
