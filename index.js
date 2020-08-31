const slider = document.querySelectorAll(".grid-img")

for (var i = 0; i < slider.length; i++) {
	const display = slider[i].querySelector(":scope > .display")
	let image = slider[i].querySelectorAll(":scope > img")
	for (var i = 1; i < image.length; i++) {
		image[i].style.display="none"
	}
	let a = 1
	display.src = image[1].src
	display.addEventListener('click', function function_name(argument) {
		let total = image.length - 1
		if (a < total) {
			a++
		} else if (i = total) {
			a = 1
		}
		console.log(a)
		display.src = image[a].src
	})
}