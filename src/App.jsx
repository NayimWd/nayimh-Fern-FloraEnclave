import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import FullScreenLoader from "./ui/loader/FullScreenLoader";
import { Suspense, useState } from "react";
import ComponentLoader from "./ui/loader/ComponentLoader";


function App() {
	// full screen loader
	const [loading, setLoading] = useState(true);

	const loader = document.querySelectorAll(".loader");
	// let loadingPage = window.onload;
	if (loader) {
		setTimeout(() => {
			
			setLoading(false);
		}, 100);
		// loadingPage
	}

	return !loading ? (
		
		<div className=" overflow-hidden">
			<Toaster />
		
			<Outlet />
			</div>
		
	) : (
		<div className="fixed top-0 left-0 w-full h-full ">
			<FullScreenLoader />
			
		</div>
	);
}

export default App;
