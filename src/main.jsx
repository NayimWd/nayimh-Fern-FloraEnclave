import React, { lazy, Suspense } from "react";
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
import DoadLoader from "./ui/loader/DoadLoader.jsx";
const HomePage = lazy(() => import("./pages/Home.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));
const ProductDetails = lazy(()=> import("./pages/ProductDetails.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Layout = lazy(() => import("./pages/Dashboard/Layout.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const LazyLogin = lazy(() => import("./components/Login.jsx"));
const LazySignUp = lazy(() => import("./components/Registration.jsx"));
const ForgetPassword = lazy(() => import("./components/ForgetPassword.jsx"));
const EnterCode = lazy(()=>import("./components/ResetPassword.jsx"));
const ChagnePassword = lazy(()=> import("./components/ChangePassword.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

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
			<Route index={true} path="/" element={<HomePage />} />
			<Route path="/products" element={<Products />} />
			<Route path="/products/:id" element={<ProductDetails />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			{/* Dashboard*/}
			<Route path="/dashboard" element={<Layout />}></Route>
			{/* Authentication routes*/}
			<Route path="/signin" element={<LazyLogin />} />
			<Route path="/signup" element={<LazySignUp />} />
			<Route path="/ForgetPassword" element={<ForgetPassword />} />
			<Route path="/EnterOTPCode" element={<EnterCode />} />
			<Route path="/ChagnePassword" element={<ChagnePassword />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

{
	/* Render app */
}
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Suspense fallback={<DoadLoader />}>
			<RouterProvider router={router} />
		</Suspense>
	</React.StrictMode>
);
