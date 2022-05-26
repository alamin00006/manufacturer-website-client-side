import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
const {data: users, isLoading, refetch} = useQuery('users', () => fetch('https://secure-anchorage-88576.herokuapp.com/user', {
    method: "GET",
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
 }
}).then(res =>res.json()))
 if(isLoading){
  return <Loading></Loading>
 }
    return (
        <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Make Admin</th>
        <th>Remove User</th>
      </tr>
    </thead>
    <tbody>
     {
         users.map((user, index) => <UserRow index={index} key={user._id} refetch={refetch} user={user}></UserRow>)
     }
      
     
    </tbody>
  </table>
</div>
    );
};

export default MakeAdmin;