import Link from 'next/link'
import React from 'react'

const AdminSide = () => {
  return (

       <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 text-xl font-semibold border-b">Admin Panel</div>
        <nav className="p-4 space-y-2">
          <Link href="admin" className="block text-gray-700 hover:text-green-600">Dashboard</Link>
          <Link href="enquirylist" className="block text-gray-700 hover:text-green-600">Enquiries</Link>
          <Link href="admincategory" className="block text-gray-700 hover:text-green-600">Category</Link>
          <Link href="adminproduct" className="block text-gray-700 hover:text-green-600">Products</Link>
          <a href="#" className="block text-gray-700 hover:text-green-600">Logout</a>
        </nav>
      </aside>

  )
}

export default AdminSide
