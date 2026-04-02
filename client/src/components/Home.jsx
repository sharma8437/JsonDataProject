// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/data'; // Changed to 8000

// const Home = ({ onRoleClick }) => {
//     const [roles, setRoles] = useState([]);
//     const [showAddForm, setShowAddForm] = useState(false);
//     const [newRole, setNewRole] = useState('');
//     const [jsonInput, setJsonInput] = useState('');
//     const [message, setMessage] = useState({ type: '', text: '' });
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         fetchAllData();
//     }, []);

//     const fetchAllData = async () => {
//         try {
//             const res = await axios.get(API_URL);
//             // Extract custom IDs from the data (the "id" field in each JSON)
//             const roleNames = res.data.map(item => item.data?.id || item._id);
//             setRoles(roleNames);
//         } catch (err) {
//             console.log('Error fetching data:', err);
//             setMessage({ type: 'error', text: 'Failed to fetch data. Make sure backend is running on port 8000' });
//         }
//     };

//     const saveRoleData = async (e) => {
//         e.preventDefault();
        
//         if (!newRole.trim() || !jsonInput.trim()) {
//             setMessage({ type: 'error', text: 'Please fill all fields' });
//             return;
//         }

//         try {
//             setLoading(true);
//             let parsedJson = JSON.parse(jsonInput);
            
//             // Add the custom ID to the JSON if not present
//             if (!parsedJson.id) {
//                 parsedJson.id = newRole.toLowerCase().replace(/\s+/g, '-');
//             }
            
//             await axios.post(API_URL, parsedJson);
            
//             setMessage({ type: 'success', text: 'Data saved successfully' });
//             setNewRole('');
//             setJsonInput('');
//             setShowAddForm(false);
//             fetchAllData(); // Refresh the list
            
//             setTimeout(() => setMessage({ type: '', text: '' }), 3000);
//         } catch (err) {
//             setMessage({ type: 'error', text: 'Invalid JSON format: ' + err.message });
//         } finally {
//             setLoading(false);
//         }
//     };

//     const roleCategories = [
//         {
//             title: "Roles",
//             roles: [
//                 { name: 'Construction', icon: '🏗️', roleKey: 'construction' },
//                 { name: 'Frontend', icon: '🎨', roleKey: 'frontend' },
//                 { name: 'Backend', icon: '⚙️', roleKey: 'backend' },
//                 { name: 'Estimator', icon: '💰', roleKey: 'estimator' },
//                 { name: 'Business Analyst', icon: '📊', roleKey: 'businessanalyst' },
//             ]
//         },
//     ];

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Navigation */}
//             <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center h-16">
//                         <div className="flex items-center space-x-3">
//                             <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
//                                 <span className="text-white text-sm font-bold">JR</span>
//                             </div>
//                             <span className="font-semibold text-gray-900">JSON Roles</span>
//                         </div>
                        
//                         <div className="flex items-center space-x-4">
//                             <button
//                                 onClick={() => setShowAddForm(!showAddForm)}
//                                 className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//                             >
//                                 {showAddForm ? 'Cancel' : 'New Role'}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             <div className="bg-gray-50 border-b border-gray-200">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                     <div className="max-w-3xl">
//                         <h1 className="text-4xl font-light text-gray-900 mb-4">
//                             Role-based JSON
//                             <span className="font-semibold text-gray-900"> Management</span>
//                         </h1>
//                         <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                             A simple, schema-less system for storing and managing JSON data by role. 
//                             Perfect for configuration files, role-specific content, and structured data.
//                         </p>
//                         <div className="flex space-x-3">
//                             <button 
//                                 onClick={() => setShowAddForm(true)}
//                                 className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
//                             >
//                                 Create New Role
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 {/* Add JSON Form */}
//                 {showAddForm && (
//                     <div className="mb-12 bg-white border border-gray-200 rounded-lg">
//                         <div className="px-6 py-4 border-b border-gray-200">
//                             <h2 className="text-base font-medium text-gray-900">Create New Role</h2>
//                         </div>
                        
//                         <form onSubmit={saveRoleData} className="p-6">
//                             <div className="space-y-5">
//                                 <div>
//                                     <label className="block text-sm text-gray-600 mb-2">
//                                         Role name (will be used as ID)
//                                     </label>
//                                     <input
//                                         type="text"
//                                         value={newRole}
//                                         onChange={(e) => setNewRole(e.target.value)}
//                                         placeholder="e.g., construction"
//                                         className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm text-gray-600 mb-2">
//                                         JSON data (must include "id" field matching role name)
//                                     </label>
//                                     <textarea
//                                         value={jsonInput}
//                                         onChange={(e) => setJsonInput(e.target.value)}
//                                         placeholder='{"id": "construction", "title": "My Data", ...}'
//                                         rows="8"
//                                         className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
//                                     />
//                                 </div>

//                                 {message.text && (
//                                     <div className={`p-3 rounded-md text-sm ${
//                                         message.type === 'error' 
//                                             ? 'bg-red-50 text-red-600' 
//                                             : 'bg-green-50 text-green-600'
//                                     }`}>
//                                         {message.text}
//                                     </div>
//                                 )}

//                                 <div className="flex justify-end space-x-3">
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowAddForm(false)}
//                                         className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         type="submit"
//                                         disabled={loading}
//                                         className="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 disabled:opacity-50"
//                                     >
//                                         {loading ? 'Saving...' : 'Save Role'}
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 )}

//                 {/* Role Categories */}
//                 <div className="space-y-10">
//                     {roleCategories.map((category) => (
//                         <div key={category.title}>
//                             <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
//                                 {category.title}
//                             </h2>
//                             <div className="flex flex-wrap gap-2">
//                                 {category.roles.map((role) => (
//                                     <button
//                                         key={role.name}
//                                         onClick={() => onRoleClick(role.roleKey)}
//                                         className="inline-flex items-center px-4 py-2 bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100 transition-colors text-sm border border-gray-200"
//                                     >
//                                         <span className="mr-2 text-base">{role.icon}</span>
//                                         {role.name}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Saved Roles Section */}
//                 <div className="mt-12 pt-8 border-t border-gray-200">
//                     <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
//                         Saved Roles ({roles.length})
//                     </h2>
                    
//                     {roles.length === 0 ? (
//                         <div className="bg-gray-50 rounded-lg p-8 text-center">
//                             <p className="text-sm text-gray-500">No saved roles yet. Create your first role above.</p>
//                         </div>
//                     ) : (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//                             {roles.map(role => (
//                                 <div
//                                     key={role}
//                                     onClick={() => onRoleClick(role)}
//                                     className="group flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer transition-colors border border-gray-200"
//                                 >
//                                     <span className="text-sm text-gray-700 flex-1">{role}</span>
//                                     <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                     </svg>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {/* Stats Section */}
//                 <div className="mt-12 pt-8 border-t border-gray-200">
//                     <div className="grid grid-cols-3 gap-6">
//                         <div>
//                             <div className="text-2xl font-light text-gray-900">{roles.length}</div>
//                             <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Total Roles</div>
//                         </div>
//                         <div>
//                             <div className="text-2xl font-light text-gray-900">100%</div>
//                             <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Schema Free</div>
//                         </div>
//                         <div>
//                             <div className="text-2xl font-light text-gray-900">JSON</div>
//                             <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Format</div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default Home;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = ({ onRoleClick }) => {
    const API_BASE_URL = import.meta.env.VITE_API_API_BASE_URL ;
    const [roles, setRoles] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [jsonInput, setJsonInput] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchAllData();
    }, []);

    const fetchAllData = async () => {
        try {
            const res = await axios.get(API_URL);
            const roleNames = res.data.map(item => item.data?.id || item._id);
            setRoles(roleNames);
        } catch (err) {
            console.log('Error fetching data:', err);
            toast.error('Failed to fetch data. Make sure backend is running on port 8000');
        }
    };

    const saveRoleData = async (e) => {
        e.preventDefault();
        
        if (!jsonInput.trim()) {
            toast.error('JSON data is required');
            return;
        }

        try {
            setLoading(true);
            let parsedJson = JSON.parse(jsonInput);
            
            if (!parsedJson.id) {
                const firstKey = Object.keys(parsedJson)[0];
                parsedJson.id = firstKey ? firstKey.toLowerCase().replace(/\s+/g, '-') : 'role-' + Date.now();
            }
            
            await axios.post(`${API_BASE_URL}/admin/internal/v1/category`, parsedJson);
            
            toast.success('Role created successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            
            setJsonInput('');
            setShowAddForm(false);
            fetchAllData();
        } catch (err) {
            toast.error('Invalid JSON format: ' + err.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    const roleCategories = [
        {
            title: "Roles",
            roles: [
                { name: 'Construction', icon: '🏗️', roleKey: 'construction' },
                { name: 'Frontend', icon: '🎨', roleKey: 'frontend' },
                { name: 'Backend', icon: '⚙️', roleKey: 'backend' },
                { name: 'Estimator', icon: '💰', roleKey: 'estimator' },
                { name: 'Business Analyst', icon: '📊', roleKey: 'businessanalyst' },
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Toast Container */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            {/* Navigation */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm font-bold">JR</span>
                            </div>
                            <span className="font-semibold text-gray-900">JSON Roles</span>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setShowAddForm(!showAddForm)}
                                className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                            >
                                {showAddForm ? 'Cancel' : 'New Role'}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-light text-gray-900 mb-4">
                            Role-based JSON
                            <span className="font-semibold text-gray-900"> Management</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            A simple, schema-less system for storing and managing JSON data by role. 
                            Perfect for configuration files, role-specific content, and structured data.
                        </p>
                        <div className="flex space-x-3">
                            <button 
                                onClick={() => setShowAddForm(true)}
                                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                            >
                                Create New Role
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Add JSON Form */}
                {showAddForm && (
                    <div className="mb-12 bg-white border border-gray-200 rounded-lg">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-base font-medium text-gray-900">Create New Role</h2>
                        </div>
                        
                        <form onSubmit={saveRoleData} className="p-6">
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">
                                        JSON data <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={jsonInput}
                                        onChange={(e) => setJsonInput(e.target.value)}
                                        placeholder='{"id": "construction", "title": "My Data", ...}'
                                        rows="8"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                                        required
                                    />
                                    <p className="mt-1 text-xs text-gray-500">
                                        Must include an "id" field or it will be auto-generated from the first key
                                    </p>
                                </div>

                                <div className="flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddForm(false)}
                                        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 disabled:opacity-50"
                                    >
                                        {loading ? 'Saving...' : 'Save Role'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}

              

              
            </main>
        </div>
    );
};

export default Home;