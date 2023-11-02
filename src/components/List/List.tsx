import React from 'react'

interface IListProps {
    list: {
        id: number,
        name: string
    }[]
    handlerBtn: (e: IUser) => void
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import classes from './list.module.css'
import { IUser } from '../../App'
export const List = ({list, handlerBtn}: IListProps) => {
  return (
    <div className={classes.container}>
        {list.map((item) => (
            <div onClick={() => handlerBtn(item)} className={classes.item} key={item.id}>{item.name}</div>
        ))}
    </div>
  )
}
