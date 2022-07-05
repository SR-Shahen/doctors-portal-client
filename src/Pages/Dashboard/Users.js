import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserTableRow from './UserTableRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('user', () => fetch('https://desolate-coast-39419.herokuapp.com/user', { method: "GET", headers: { 'authorization': `bearer ${localStorage.getItem('accessToken')}` } }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p>Total Users:{users.length}</p>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserTableRow
                                user={user}
                                key={index}
                                index={index}
                                refetch={refetch}
                            ></UserTableRow>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;