import React from "react";
import {Auth} from "../Provider/AuthProvider";

export const useLogin = () => {
	return React.useContext(Auth)
}