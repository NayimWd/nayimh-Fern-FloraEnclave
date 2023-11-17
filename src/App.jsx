import { Toaster } from "react-hot-toast";
import {
	ErrorToast,
	SuccessToast,
	LoadingToast,
	sweetSuccess,
	sweeterror,
} from "./ui/helper";
import FullScreenLoader from "./ui/loader/FullScreenLoader";
import { useState } from "react";
import Login from "./components/Login";

function App() {
	// full screen loader
	const [loading, setLoading] = useState(true);

	const loader = document.querySelectorAll(".loader");

	if (loader) {
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}

	return !loading ? (
		<div className="container overflow-hidden">
			<Toaster />
			<Login />
		</div>
	) : (
		<div className="fixed top-0 left-0 w-full h-full ">
			<FullScreenLoader />
		</div>
	);
}

export default App;
