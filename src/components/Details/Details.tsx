import classes from './details.module.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Details = ({user}: any) => {
  return (
    <div className={classes.card}>
        <div className={classes.header}>
            <img className={classes.header__img} src={user.avatar}></img>
        </div>
        <div className={classes.info}>
            <div className={classes.name}>{user.name}</div>
            <div className={classes.city}>{user?.details?.city}</div>
            <div className={classes.company}>{user?.details?.company}</div>
            <div className={classes.position}>{user?.details?.position}</div>
        </div>
    </div>
  )
}
