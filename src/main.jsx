import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import "./assets/css/Common.css";

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ComponentLoader from "./ui/loader/ComponentLoader.jsx";
const Products = lazy(()=>import("./pages/Products.jsx"))
const About = lazy(()=> import("./pages/About.jsx"))
const Layout = lazy(()=> import("./pages/Dashboard/Layout.jsx"))
const Contact = lazy(()=> import("./pages/Contact.jsx"));
const LazyLogin = lazy(()=> import("./components/Login.jsx"))
const LazySignUp = lazy(()=> import("./components/Registration.jsx"));



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
		<Route  path="/products" element={<Products/>}/>
		<Route  path="/about" element={<About/>}/>
		<Route  path="/contact" element={<Contact/>}/>
		{/* dashboard*/}
		<Route path="/dashboard" element={<Layout/>}>
		
		</Route>
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
		
		
		<RouterProvider router={router} />
		
		</Suspense>
	</React.StrictMode>
);
