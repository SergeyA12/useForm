import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddUser } from './components/addUser'
import { UserList } from './components/userList'

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="container">
      <div className="row" style={{display:'flex', flexDirection:'row', gap:'20px'}}>
        
          <AddUser setUsers={setUsers} />
        
        
          <UserList users={users}/>
      
        <div className="col-md-6">
          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  );
}

export default App
