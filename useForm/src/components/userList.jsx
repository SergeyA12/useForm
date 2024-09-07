import { UserItem } from "./userItem"
import Types from 'prop-types'

export const UserList = ({users}) => {
    return (
        <div>
            <h3>userlist</h3>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>name</td>
                        <td>email</td>
                        <td>age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(elm=><UserItem key={elm.id} user={elm}/>)
                    }
                </tbody>
            </table>
            
            
        </div>
    )
}

UserList.propTypes = {
    id:Types.number,
    name:Types.string,
    surname:Types.string,
    email:Types.string,
    age:Types.number
};