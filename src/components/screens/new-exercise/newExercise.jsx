import cn from 'clsx'
import stylesLayout from '../../layout/Layout.module.scss'

import Button from '../../ui/button/Button'

import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import ExerciseService from '../../../services/exercise.service'
import Header from '../../layout/header/Header'
import Field from '../../ui/field/Field'
import styles from './NewExercise.module.scss'
const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
	const { register, handleSubmit, reset } = useForm({
		mode: 'onChange'
	})
	const { mutate } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				alert('success')
				reset()
			}
		}
	)

	const onSubmit = async data => {
		mutate(data)
		console.log(data)
	}

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/exercise-bg.svg')`,
					height: 280,
					borderRadius: '0 0 23px 23px'
				}}
			>
				<Header />
				<div className={styles.center}>
					<h1 className={stylesLayout.heading}>Create new exercise</h1>
				</div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					name={'name'}
					placeholder='Name '
					type='text'
					register={register}
					options={{ required: 'Exercise is required' }}
				/>

				<Field
					placeholder='Times'
					register={register}
					name={'times'}
					options={{
						required: 'Times is required',
						valueAsNumber: true,
						validate: value => value > 0
					}}
				/>
				<Field
					placeholder='Enter icons'
					type='text'
					register={register}
					name={'iconPath'}
					options={{ required: 'Icons is required' }}
				/>

				{data.map(name => (
					<img
						key={name}
						src={`uploads/exercises/${name}.svg`}
						alt=''
						style={{ width: 30 }}
					/>
				))}

				<Button heading='Create' />
			</form>
		</>
	)
}

export default NewExercise
