import React, { useState, useContext, useEffect } from 'react';
import Page from '@/components/page';
import AdminLayout from '@/layout/AdminLayout';
import { AuthContext } from '@/context/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '@/components/button';
import axios from 'axios';
// import { toast } from 'react-hot-toast';

const Admin = () => {
  const router = useRouter();
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <AdminLayout>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </AdminLayout>
  );
};

export default Admin;
