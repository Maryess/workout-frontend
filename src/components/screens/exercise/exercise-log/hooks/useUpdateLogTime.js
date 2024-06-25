import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../../../services/exercise/exercise-log.service'

export const useUpdateLogTime = () => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const { mutate, isSuccess } = useMutation(
		['update exercise-log time'],
		({ timeId, body }) => ExerciseLogService.updateTime(timeId, body),
		{
			onSuccess: () => {
				// queryClient.invalidateQueries(['get exercise log', id])
				window.location.reload()
				// Router.dispatch(location.getCurrentPath(), null)
			}
		}
	)

	return {
		mutate,
		isSuccess
	}
}
