import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {loginError, loginRequest, loginSuccess } from "../redux/AuthRedux/auth.action";
import axios from "axios";
export const Login = () => {
	const [email, setEmail] = useState("eve.holt@reqres.in");
	const [password, setPassword] = useState("cityslicka");

  const {isLoading, error} = useSelector(state => state.auth.auth)

	const dispatch = useDispatch();
	const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest())
		axios.post("https://reqres.in/api/login", {
				email,
				password,
			})
			.then((json) => {
				// console.log(json.data);
				// dispatch(authLoginAction(json.data));
        dispatch(loginSuccess(json.data))
      }).catch((err) => {
        dispatch(loginError(err));

        console.log(err);
      })
  };
  
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Something went wrong...</h1>;

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.currentTarget.value)}
				/>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.currentTarget.value)}
				/>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
};
