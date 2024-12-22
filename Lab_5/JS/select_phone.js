function select_phone () {
	let country = document.getElementById('country')
	let phone = document.getElementById('phone')

	if (country.options[country.selectedIndex].text == 'US') {
		phone.value = '+1 (555) 000-0000';
	} else if (country.options[country.selectedIndex].text == 'RU') {
		phone.value = '+7 (900) 000-0000';
	}

	// const index = country.options[country.selectedIndex].text

	// switch (index) {
	// 	case 'US': 
	// 		phone.value = '+1 (555) 000-0000';
	// 	case 'RU': 
	// 		phone.value = '+7 (900) 000-0000';
	// }

}
