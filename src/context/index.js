import React, {useContext} from 'react';
import User from '../components/user';
export const MyContext = React.createContext();

export default function Index(){
    const users = [
        {id:1,name:'keith'},
        {id:2,name:'max'},
        {id:3,name:'yanfei'},
      ]

    return(
        <MyContext.Provider value={users}>
          <User/>
        </MyContext.Provider>)
}


