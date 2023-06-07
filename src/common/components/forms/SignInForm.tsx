import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authThunks } from "features/auth/auth.slice";
import s from "common/components/forms/Form.module.css";
import { FormValues } from "common/components/forms/Form";
import { toast } from "react-toastify";
import { useAppDispatch } from "common/hooks";


export const SignInForm: React.FC = (  ) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>()
	
	const onSubmit = (data: FormValues) => {
		dispatch(authThunks.login(data))
			.unwrap()
			.then(()=> {
				toast.success('You have successfully logged in.')
				navigate( "/" );
			})
			.catch(e => {
				toast.error(e.message) //todo вывести ошибку
				console.warn( e.message );
			})
	};
	const signUpRedirect = () => navigate('/auth/register', { replace: true });//замена текущего адреса на новый.
	const redirectForForgot = () => navigate('/auth/forgot', { replace: true });//замена текущего адреса на новый.
	
	return (
		<div className={ s.form }>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p className={ s.heading }>Sign In</p>
				<div className={ s.field }>
					<svg className={ s.inputIcon }
					     width="16"
					     height="16"
					     fill="currentColor"
					     viewBox="0 0 16 16">
						<path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
					</svg>
					<input { ...register( 'email' ) }
					       autoComplete="off"
					       placeholder="Email"
					       className={ s.inputField }
					       type="text"/>
				</div>
				<div className={ s.field }>
					<svg className={ s.inputIcon }
					     width="16"
					     height="16"
					     fill="currentColor"
					     viewBox="0 0 16 16">
						<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
					</svg>
					<input { ...register( 'password' ) }
					       placeholder="Password"
					       className={ s.inputField }
					       type="password"/>
				</div>
				<div className={s.checkBox}>
					<input type="checkbox" { ...register( "rememberMe" ) }/>
					<label>Remember me</label>
				</div>
				<div className={ s.btn }>
					<button className={ s.button1 } type={'submit'}>Login</button>
				</div>
			</form>
			<button className={ s.button2 } onClick={signUpRedirect}>Sign Up</button>
			<button className={ s.button3 } onClick={redirectForForgot}>Forgot Password</button>
		</div>
	);
};