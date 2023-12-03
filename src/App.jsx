import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import FullScreenLoader from "./ui/loader/FullScreenLoader";
import {  useEffect, useState } from "react";



function App() {
	// full screen loader
	const [loading, setLoading] = useState(false);


	let pageLoading = window.onload;

	useEffect(()=>{
		setLoading(true);
		setTimeout(() => {
			setLoading(false)
		}, pageLoading);
	},[])



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
