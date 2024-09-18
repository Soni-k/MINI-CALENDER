const month = document.querySelector(".month");
const week = document.querySelector(".week");
const day = document.querySelector(".day");
const year = document.querySelector(".year");

window.addEventListener("DOMContentLoaded", () => {

	const date = new Date();
	console.log(date, "date");

	console.log("month", date.toLocaleDateString("en-US",
		{ month: "long" }))
	console.log("week", date.toLocaleDateString("en-US",
		{ week: "long" }));

	console.log("day", date.getDate());
	console.log("year", date.getFullYear());

	month.textContent = date.toLocaleDateString("en-US", { month: "long" });
	week.textContent = date.toLocaleDateString("en-US", { week: "long" });

	day.textContent = date.getDate();
	year.textContent = date.getFullYear();

})




