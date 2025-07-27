import Head from 'next/head';
import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    reservations: 0,
    menuItems: 0,
    events: 0,
    messages: 0
  });
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // In a real application, this would fetch data from an API
      // This is just a simulation
      setTimeout(() => {
        setStats({
          reservations: 18,
          menuItems: 42,
          events: 5,
          messages: 8
        });
        setIsLoading(false);
      }, 800);
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Admin Dashboard | ORTO Santa Monica</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <AdminLayout>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to the ORTO admin panel.</p>
        </div>
        
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin h-8 w-8 border-4 border-gray-500 rounded-full border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-sm font-medium text-gray-600">Today's Reservations</h2>
                    <p className="text-2xl font-semibold">{stats.reservations}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-sm font-medium text-gray-600">Menu Items</h2>
                    <p className="text-2xl font-semibold">{stats.menuItems}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-sm font-medium text-gray-600">Upcoming Events</h2>
                    <p className="text-2xl font-semibold">{stats.events}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-sm font-medium text-gray-600">New Messages</h2>
                    <p className="text-2xl font-semibold">{stats.messages}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow mb-8">
              <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                      <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">Reservation</td>
                      <td className="py-3 px-4">John Smith - Party of 4</td>
                      <td className="py-3 px-4">Today, 7:30 PM</td>
                      <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Confirmed</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Menu Update</td>
                      <td className="py-3 px-4">Added "Summer Pasta Special"</td>
                      <td className="py-3 px-4">Today, 2:15 PM</td>
                      <td className="py-3 px-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Published</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Event Inquiry</td>
                      <td className="py-3 px-4">Corporate Dinner - Tech Solutions Inc.</td>
                      <td className="py-3 px-4">Today, 11:30 AM</td>
                      <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Message</td>
                      <td className="py-3 px-4">Question about wine pairing</td>
                      <td className="py-3 px-4">Yesterday, 4:45 PM</td>
                      <td className="py-3 px-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Unread</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 flex items-center justify-center">
                  <span>Add Menu Item</span>
                </button>
                <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 flex items-center justify-center">
                  <span>View Reservations</span>
                </button>
                <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 flex items-center justify-center">
                  <span>Update Hours</span>
                </button>
                <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 flex items-center justify-center">
                  <span>Check Messages</span>
                </button>
              </div>
            </div>
          </>
        )}
      </AdminLayout>
    </>
  );
}