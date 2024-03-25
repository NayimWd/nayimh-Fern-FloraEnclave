import { useEffect } from "react";

const useClickOutSide = (ref, handler) => {
	useEffect(() => {
		const listner = (e) => {
			const elem = ref?.current;

			if (!elem || elem.contains(e.target)) {
				return;
			}
			handler(e);
		};

		document.addEventListener("mousedown", listner);
		document.addEventListener("touchstart", listner);

		return () => {
			document.removeEventListener("mousedown", listner);
			document.removeEventListener("touchstart", listner);
		};
	}, [ref, handler]);
};

export default useClickOutSide;
