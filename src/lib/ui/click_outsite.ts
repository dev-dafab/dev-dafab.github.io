export function click_outside(node: any, callbackFunction: (srcElement: any) => {}) {
	const handleClick = (event: any) => {
		if (!node.contains(event.target)) {
			callbackFunction(event.target);
			// node.dispatchEvent(new CustomEvent('outclick', { detail: { src: event.target } }));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		update(newCallbackFunction: any) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
