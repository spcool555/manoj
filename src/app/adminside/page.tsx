'use client'
// app/admin/page.tsx

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AdminSide = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in (checking the localStorage item)
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus !== 'true') {
      router.push('/login'); // Redirect to login if not logged in
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) return null; // Don't render admin panel until logged in

  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-6 text-xl font-semibold border-b">Admin Panel</div>
      <nav className="p-4 space-y-2">
        <Link href="admin" className="block text-gray-700 hover:text-green-600">Dashboard</Link>
        <Link href="enquirylist" className="block text-gray-700 hover:text-green-600">Enquiries</Link>
        <Link href="admincategory" className="block text-gray-700 hover:text-green-600">Category</Link>
        <Link href="adminproduct" className="block text-gray-700 hover:text-green-600">Products</Link>
        <Link href="/emailsender.html" className="block text-gray-700 hover:text-green-600">MultiEmail</Link>
        <a href="#" className="block text-gray-700 hover:text-green-600" onClick={handleLogout}>Logout</a>
      </nav>
    </aside>
  );

  function handleLogout() {
    localStorage.removeItem('isLoggedIn'); // Clear login status
    router.push('/login'); // Redirect to login page
  }
};

export default AdminSide;
