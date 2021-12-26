const form = document.querySelector("#signup-form");

const creditCard = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const axisSelect = document.querySelector("#axis");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	console.log("cc", creditCard.value);
	console.log("terms", termsCheckbox.checked);
	console.log("axis", axisSelect.value);
});

const formData = {};
// creditCard.addEventListener("input", function (e) {
// 	formData["cc"] = e.target.value;
// });

// axisSelect.addEventListener("input", function (e) {
// 	formData["axis"] = e.target.value;
// });

// termsCheckbox.addEventListener("input", function (e) {
// 	formData["terms"] = e.target.checked;
// });

// for (let input of [cc, terms, axis]) {
// 	input.addEventListener("input", (e) => {
// 		formData[e.target.name] = e.target.value;
// 	});
// }
//for checkbox to work

for (let input of [cc, terms, axis]) {
	input.addEventListener("input", ({ target }) => {
		const { name, type, value, checked } = target;
		formData[name] = type === "checkbox" ? checked : value;
	});
}
