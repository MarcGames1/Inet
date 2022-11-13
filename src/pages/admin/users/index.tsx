import React from 'react'
import {tw} from 'twind'
import AdminLayout from '@/layout/AdminLayout';
import {AddUsers, UpdateUsers,UsersList } from '@/components/admin/users'
const Users = () => {
  return (
    <AdminLayout>
      <div className={tw('w-full flex flex-col items-center ')}>
        <h1
          className={tw('font-sans font-bold text-4xl md:text-3xl lg:text-5xl text-center leading-snug text-gray-800')}
        >
          Users
        </h1>
        <div>
          <UsersList />
        </div>
        <div>
          <UpdateUsers />
        </div>
        <div>Sterge Users</div>
      </div>
    </AdminLayout>
  );
}

export default Users