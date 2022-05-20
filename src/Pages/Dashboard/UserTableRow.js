import React from 'react';
import { toast } from 'react-toastify';

const UserTableRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: { 'authorization': `bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Successfully make an Admin')
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-red-500 btn-xs">Remove User</button></td>

        </tr>
    );
};

export default UserTableRow;