import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authStart } from '../../store/actions';
import { useKeyPress } from '../../hooks/useKeyPress';

const LoginPage = () => {
	const [isRegister, setIsRegister] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const authError = useSelector((state) => state.auth.authError);

	const submitForm = (e) => {
		e.preventDefault();
		dispatch(authStart({ email, password, isRegister }));
	};

	useKeyPress('Enter', submitForm);

	return (
		<>
			<button onClick={() => setIsRegister((prev) => !prev)}>
				Switch to {isRegister ? 'Login' : 'Register'}
			</button>
			<form>
				<label htmlFor='name'>Email</label>
				<input
					name='email'
					type='text'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<label htmlFor='password'>Password</label>
				<input
					name='password'
					type='password'
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				{authError && <p>{authError}</p>}
				<button onClick={submitForm}>
					{isRegister ? 'Register' : 'Login'}
				</button>
			</form>
		</>
	);
};

export default LoginPage;
