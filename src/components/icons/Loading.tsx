/* eslint-disable react/react-in-jsx-scope */
import { LoadingProps } from '../../types/global'

export const Loading = ({ type = 'loading-spinner', size = 'loading-lg' }: LoadingProps) => {
  return <span className={`loading ${type} ${size} mx-auto`}></span>
}
