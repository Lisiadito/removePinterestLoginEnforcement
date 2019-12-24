window.addEventListener('load', event => {
	if (location.pathname === '/') {
		location.href = `${location.href}search/pins/?q=pin&rs=typed`
	}

	const tags = document.querySelectorAll('[data-test-id="giftWrap"]')

	if (tags.length) {
		const observer = new MutationObserver(mutations => {
			mutations.forEach(mutation => {
				if (tags[0].style.display !== 'none') {
					tags[0].style.display = 'none'
				}
			})
		})
		observer.observe(tags[0], {attributes: true})
	}
})
