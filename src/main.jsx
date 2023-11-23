import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import "./assets/css/Common.css";
import TopBarProgress from "react-topbar-progress-indicator";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ComponentLoader from "./ui/loader/ComponentLoader.jsx";
const LazyLogin = lazy(()=> import("./components/Login.jsx"))
const LazySignUp = lazy(()=> import("./components/Registration.jsx"));

let loading = window.onload;

TopBarProgress.config({
	barColors: {
	  "0": "#388E3C",
	  "1.0": "#388E3C"
	},
	shadowBlur: 5
  });

{
	/* ---- OnBlur Title set ---- */
}
let docTitle = document.title;
window.addEventListener("blur", () => {
	document.title = "We are waiting! ❤️";
});



window.addEventListener("focus", () => {
	document.title = docTitle;
});
{
	/* ---------------------------------- */
}
// Router setup
const router = createBrowserRouter(
	createRoutesFromElements(
		
		<Route path="/" element={<App />}>
		<Route index={true} path="/" element={<Home/>}/>
      <Route path="/signin" element={<LazyLogin/>}/>
      <Route path="/signup" element={<LazySignUp/>}/>
	  </Route>
	  
	)
);

{
	/* Render app */
}
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
	<Suspense fallback={<ComponentLoader/>}>
		{
			loading && <TopBarProgress />
		}
		<RouterProvider router={router} />
		</Suspense>
	</React.StrictMode>
);
