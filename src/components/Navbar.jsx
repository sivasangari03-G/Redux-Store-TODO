import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authLogoutAction } from "../redux/AuthRedux/auth.action";

export const Navbar = () => {
	const dispatch = useDispatch();
	const isUserLoggedIn = useSelector(
		(state) => state.auth.auth.isUserLoggedIn
	);

	// console.log(isUserLoggedIn);

	return (
		<div style={{ display: "flex", gap: "30px", margin: "30px" }}>
			<NavLink to="/">Home</NavLink>
			<NavLink to="about">About</NavLink>
			<NavLink to="contact">Contact</NavLink>
			{isUserLoggedIn && (
				<button
					onClick={() => {
						dispatch(authLogoutAction());
					}}
				>
					LOGOUT
				</button>
			)}
		</div>
	);
};
