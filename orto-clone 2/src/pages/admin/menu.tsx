import Head from 'next/head';
import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  active: boolean;
}

export default function AdminMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const categories = ["STARTERS", "SMALL PLATES", "PASTA", "MAINS", "SIDES", "DESSERTS"];
  
  useEffect(() => {
    const fetchMenuItems = async () => {
      // In a real application, this would fetch data from Sanity CMS or another API
      // This is just a simulation
      setTimeout(() => {
        const dummyItems: MenuItem[] = [
          {
            id: '1',
            name: 'HOUSE FOCACCIA',
            description: 'extra virgin olive oil',
            price: '6',
            category: 'STARTERS',
            active: true
          },
          {
            id: '2',
            name: 'MIXED OLIVES',
            description: 'orange zest, fennel seed',
            price: '7',
            category: 'STARTERS',
            active: true
          },
          {
            id: '3',
            name: 'BURRATA',
            description: 'grilled apricot, prosciutto, pistachios, aged balsamic',
            price: '18',
            category: 'SMALL PLATES',
            active: true
          },
          {
            id: '4',
            name: 'SPAGHETTI',
            description: 'manila clams, garlic, white wine, chili, parsley',
            price: '26',
            category: 'PASTA',
            active: true
          }
        ];
        
        setMenuItems(dummyItems);
        setIsLoading(false);
      }, 800);
    };

    fetchMenuItems();
  }, []);

  const handleAddNew = () => {
    setEditingItem({
      id: '',
      name: '',
      description: '',
      price: '',
      category: 'STARTERS',
      active: true
    });
    setIsModalOpen(true);
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!editingItem) return;
    
    if (editingItem.id) {
      // Update existing item
      setMenuItems(menuItems.map(item => 
        item.id === editingItem.id ? editingItem : item
      ));
    } else {
      // Add new item with a generated ID
      const newItem = {
        ...editingItem,
        id: Date.now().toString()
      };
      setMenuItems([...menuItems, newItem]);
    }
    
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this menu item?')) {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  const handleToggleActive = (id: string) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? {...item, active: !item.active} : item
    ));
  };

  return (
    <>
      <Head>
        <title>Manage Menu | ORTO Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <AdminLayout>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Menu Management</h1>
            <p className="text-gray-600 mt-2">Add, edit, or remove menu items</p>
          </div>
          <button
            onClick={handleAddNew}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Add New Item
          </button>
        </div>
        
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin h-8 w-8 border-4 border-gray-500 rounded-full border-t-transparent"></div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {menuItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{item.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500 max-w-md truncate">{item.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">${item.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">{item.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {item.active ? 'Active' : 'Hidden'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleToggleActive(item.id)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        {item.active ? 'Hide' : 'Show'}
                      </button>
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Edit/Add Modal */}
        {isModalOpen && editingItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">{editingItem.id ? 'Edit Menu Item' : 'Add New Menu Item'}</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={editingItem.name}
                    onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    id="description"
                    value={editingItem.description}
                    onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                    <input
                      id="price"
                      type="text"
                      value={editingItem.price}
                      onChange={(e) => setEditingItem({...editingItem, price: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      id="category"
                      value={editingItem.category}
                      onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="active"
                    type="checkbox"
                    checked={editingItem.active}
                    onChange={(e) => setEditingItem({...editingItem, active: e.target.checked})}
                    className="h-4 w-4 text-black border-gray-300 rounded"
                  />
                  <label htmlFor="active" className="ml-2 block text-sm text-gray-700">
                    Active (visible on menu)
                  </label>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
}