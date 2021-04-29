import React, {useContext} from 'react';
import User from '../components/user';
export const MyContext = React.createContext();

export default function Index(){
    const users = [
        {id:1,name:'keith bharath'},
        {id:2,name:'ajith'},
        {id:3,name:'farish'},
      ]

    return(
        <MyContext.Provider value={users}>
          <User/>
        </MyContext.Provider>)
}


