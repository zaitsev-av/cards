import React from 'react';
import s from './ForgotPassword.module.css'
import { ForgotPasswordForm } from "common/components/forms/ForgotPasswordForm";
export type ForgotPasswordPropsType = {

};
export const ForgotPassword: React.FC<ForgotPasswordPropsType> = ( props ) => {
	const {} = props
	return (
		<div className={s.wrapper}>
		<ForgotPasswordForm/>
		</div>
	);
};