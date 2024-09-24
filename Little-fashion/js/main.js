const navItems = document.querySelectorAll(".nav-link");

navItems.forEach((item) => {
	item.addEventListener("click", function () {
		navItems.forEach((link) => link.classList.remove("active"));

		this.classList.add("active");
	});
});

document.getElementById("hamburger").addEventListener("click", function () {
	const nav = document.getElementById("navbarSupportedContent");
	nav.classList.toggle("show");
});

function showSection(sectionId, button) {
	// Hide all sections
	const sections = document.querySelectorAll(".sections");
	sections.forEach((section) => {
		section.style.display = "none";
	});

	// Show the selected section
	document.getElementById(sectionId).style.display = "block";

	// Remove active class from all buttons
	const buttons = document.querySelectorAll(".intro button");
	buttons.forEach((btn) => {
		btn.classList.remove("active-button");
	});

	// Add active class to the clicked button
	button.classList.add("active-button");
}

// Optionally show the first section by default
window.onload = function () {
	const firstButton = document.querySelector(".intro button");
	showSection("firstSection", firstButton);
};
