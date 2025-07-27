import Head from 'next/head';
import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { formatDate } from '@/lib/utils';

interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  notes: string;
}

export default function AdminReservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchReservations = async () => {
      // In a real application, this would fetch data from an API
      // This is just a simulation
      setTimeout(() => {
        const dummyReservations: Reservation[] = [
          {
            id: '1',
            name: 'John Smith',
            email: 'john@example.com',
            phone: '(310) 555-1234',
            date: '2025-07-23',
            time: '19:00',
            partySize: 4,
            status: 'confirmed',
            notes: ''
          },
          {
            id: '2',
            name: 'Emma Johnson',
            email: 'emma@example.com',
            phone: '(310) 555-5678',
            date: '2025-07-23',
            time: '20:00',
            partySize: 2,
            status: 'confirmed',
            notes: 'Anniversary dinner'
          },
          {
            id: '3',
            name: 'Michael Brown',
            email: 'michael@example.com',
            phone: '(310) 555-9012',
            date: '2025-07-23',
            time: '19:30',
            partySize: 6,
            status: 'pending',
            notes: 'Requested window table'
          },
          {
            id: '4',
            name: 'Lisa Davis',
            email: 'lisa@example.com',
            phone: '(310) 555-3456',
            date: '2025-07-24',
            time: '18:30',
            partySize: 3,
            status: 'confirmed',
            notes: ''
          }
        ];
        
        setReservations(dummyReservations);
        setIsLoading(false);
      }, 800);
    };

    fetchReservations();
  }, []);

  const filteredReservations = reservations.filter(reservation => {
    const dateMatches = reservation.date === selectedDate;
    const statusMatches = filter === 'all' || reservation.status === filter;
    return dateMatches && statusMatches;
  });

  const handleStatusChange = (id: string, newStatus: 'confirmed' | 'pending' | 'cancelled') => {
    setReservations(reservations.map(reservation => 
      reservation.id === id ? { ...reservation, status: newStatus } : reservation
    ));
  };

  return (
    <>
      <Head>
        <title>Manage Reservations | ORTO Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <AdminLayout>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Reservations</h1>
          <p className="text-gray-600 mt-2">Manage and track restaurant reservations</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <label htmlFor="date-filter" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                id="date-filter"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div>
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                id="status-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="all">All</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            
            <div className="ml-auto mt-auto">
              <span className="text-sm font-medium text-gray-700">
                {filteredReservations.length} reservation(s) found
              </span>
            </div>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin h-8 w-8 border-4 border-gray-500 rounded-full border-t-transparent"></div>
          </div>
        ) : filteredReservations.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <p className="text-gray-500">No reservations found for the selected date and filter.</p>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Party</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredReservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td className="px-6 py-4">
                        <div className="font-medium">{reservation.name}</div>
                        <div className="text-sm text-gray-500">{reservation.email}</div>
                        <div className="text-sm text-gray-500">{reservation.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {new Date(`${reservation.date}T${reservation.time}`).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: true
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">{reservation.partySize} guests</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span 
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            reservation.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                            reservation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {reservation.notes || 'No notes'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <select
                          value={reservation.status}
                          onChange={(e) => handleStatusChange(
                            reservation.id, 
                            e.target.value as 'confirmed' | 'pending' | 'cancelled'
                          )}
                          className="mr-2 text-sm border border-gray-300 rounded p-1"
                        >
                          <option value="confirmed">Confirm</option>
                          <option value="pending">Pending</option>
                          <option value="cancelled">Cancel</option>
                        </select>
                        <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
}