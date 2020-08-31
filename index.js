const display = document.querySelector(".display")
const simiSlider = document.querySelector(".simi-slider")

const simiImage = simiSlider.querySelectorAll(":scope > img")

const simi = document.querySelector(".simi")
simi.addEventListener('click', showImg)

for (var i = 0; i < simiImage.length; i++) {
	simiImage[i].style.display="none"
}

function showImg(e) {
	let i = 0
	simiSlider.style.display = "block"
	display.src = simiImage[i].src;
	display.addEventListener('click', changeImg(i))
}
function changeImg() {
	let current = i
	let total = simiImage.length - 1
	console.log(total)
	if (current < total) {
		console.log(i)
		i++
	} else {
		console.log(i)
		i = 0
	}
	display.src = simiImage[i].src;
}