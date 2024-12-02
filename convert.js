const vitesseInput = document.getElementById('vitesse-input')
const allureMn = document.getElementById('allure-mn')
const allureSec = document.getElementById('allure-sec')

function convert() {
	let mn = parseInt(allureMn.value)
	let sec = parseInt(allureSec.value) / 60
	let allureDecimale = (mn + sec).toFixed(2)
	console.log('allure décimale : ', allureDecimale)
}
