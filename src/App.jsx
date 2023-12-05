import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import DoadLoader from "./ui/loader/DoadLoader";
import { useEffect, useState } from "react";

function App() {
	// full screen loader
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, []);

	return !loading ? (
		<div className=" overflow-hidden">
			<Toaster />

			<Outlet />
		</div>
	) : (
		<div className="fixed top-0 left-0 w-full h-full ">
			<DoadLoader />
		</div>
	);
}

export default App;
