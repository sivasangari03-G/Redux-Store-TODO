import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/AuthRedux/auth.api";
export const Login = () => {
	const [email, setEmail] = useState("eve.holt@reqres.in");
	const [password, setPassword] = useState("cityslicka");

  const {isLoading, error} = useSelector(state => state.auth.auth)

	const dispatch = useDispatch();
	const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
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
