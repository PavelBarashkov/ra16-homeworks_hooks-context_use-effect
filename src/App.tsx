import { useEffect, useState } from 'react'
import './App.css'
import { List } from './components/List/List';
import { Details } from './components/Details/Details';
export interface IUser {
    id: number,
    name: string
}

function App() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [id, setId] = useState<number>(0);
    const [user, setUser] = useState<IUser>({
        id: 0,
        name: ''
    })
    const [isloading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
                if(!response.status) {
                    throw new Error(response.statusText);
                }
                const data= await response.json();
                setIsLoading(false)
                setUsers(data)
                console.log(users)
            } catch(error) {
                console.log(error)
            }
        }
        fetchData();
      }, []); 

      function handlerBtnlist(e: IUser): void {
        setId(e.id);
      }
    useEffect(() => {
        async function featchUser() {
            try {
                const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`);
                if(!response.status) {
                    throw new Error(response.statusText);
                }
                const data= await response.json();
                setUser(data)
                return (
                    <Details user={data}/>
                )
            } catch(error) {
                console.log(error)
            }
        }
        if(id !== 0){ 
            featchUser()
        } 
    }, [id])


  return (
    <>  
        {isloading && <div>Загрузка</div>}
        {!isloading && <List handlerBtn={handlerBtnlist} list={users}/>}
        {id !== 0 && <Details user={user}/>}
        
    </>
  )
}

export default App
