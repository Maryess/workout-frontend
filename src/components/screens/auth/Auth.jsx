import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import AuthService from '../../../services/auth.service'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import styles from './Auth.module.scss'
const Auth = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const [type, setType] = useState('register')
	const { mutate } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),

		{
			onSuccess: data => {
				alert('success')
				navigate('/')
				reset()
			}
		}
	)

	const onSubmit = async data => {
		mutate(data)
	}

	return (
		<>
			<div className={styles.wrapper}>
				<img src='/src/assets/icons/main.svg' style={{ height: 56 }} alt='' />
			</div>
			<div className={styles.value}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<Field
						error={errors?.email?.message}
						name={'email'}
						placeholder='Enter email'
						type='text'
						register={register}
						options={{ required: 'Email is required' }}
					/>

					<Field
						placeholder='Enter password'
						type='password'
						register={register}
						name={'password'}
						options={{ required: 'Password is required' }}
					/>

					<a href=''>FORGOT YOUR PASSWORD?</a>

					<div className={styles.wrapperButtons} style={{ marginTop: '4rem' }}>
						<Button
							click={() => {
								setType('login')
							}}
							heading={'Sign in'}
						/>

						<button
							onClick={() => {
								setType('register')
							}}
						>
							Sign out
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
