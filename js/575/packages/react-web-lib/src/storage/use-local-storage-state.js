import { getStorageItem, useUpdateStorage } from './helper'
import { useSafeState } from '@575/react-common-lib'

export const useLocalStorageState = (key, initialValue) => {
	const [state, setState] = useSafeState(
		getStorageItem(key, initialValue, localStorage),
	)
	useUpdateStorage(key, state, localStorage)
	return [state, setState]
}
