import { AppDispath, RootState } from './index'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

export const useAppDispath: () => AppDispath = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;