import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`https://machine-parts.web.app/user/admin/${email}`, {
            method: "PUT",
            headers: {
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
         }
        })
        .then(res =>{
            if(res.status === 403){
                toast.error('Failed make an admin')
            }
          return res.json()
        })
        .then(data => {
           if(data.modifiedCount >0){
            toast('you are made an admin');
            refetch()
           }
        })
    }
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm">Make Admin</button>}</td>
        <td><button class="btn btn-sm">Remove User</button></td>
      </tr>
    );
};

export default UserRow;