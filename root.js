const urlPageTitle = "Velmora Coding";
document.addEventListener("click", (e) => {
	const { target } = e;
	if (!target.matches("nav li a")) {
		return;
	}
	e.preventDefault();
	urlRoute();
});
const urlRoutes = {
	404: {
		template: "/vis-principal.html",
		title: "404 | " + urlPageTitle,
		description: "Page not found",
	},
	"/": {
		template: "/vis-principal.html",
		title: "Home | " + urlPageTitle,
		description: "This is the home page",
	},
	"/Donar": {
		template: "/vis-donar.html",
		title: "Donacion | " + urlPageTitle,
		description: "",
	},
	"/Descargas": {
		template: "/vis-Descargas.html",
		title: "Descargas | " + urlPageTitle,
		description: "",
	},
};
const urlRoute = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	urlLocationHandler();
};
const urlLocationHandler = async () => {
	const location = window.location.pathname;
	if (location.length == 0) {
		location = "/";
	}
	const route = urlRoutes[location] || urlRoutes["404"];
	const html = await fetch(route.template).then((response) => response.text());
	document.getElementById("content").innerHTML = html;
	document.title = route.title;
	document
		.querySelector('meta[name="description"]')
		.setAttribute("content", route.description);
};
window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler();