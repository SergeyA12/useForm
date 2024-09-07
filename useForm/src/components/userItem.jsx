import Types from 'prop-types'

export const UserItem = ({ user }) => {
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{user.login}</td>
        <td>{user.age}</td>
      </tr>
    );
  };

  UserItem.propTypes = {
    id:Types.number,
    name:Types.string,
    surname:Types.string,
    login:Types.string,
    age:Types.number
};