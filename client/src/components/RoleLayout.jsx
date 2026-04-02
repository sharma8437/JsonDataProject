import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.avua.online/admin/internal/v1/category?category=';

const RoleLayout = ({ role, onBack, roleData, setRoleData }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSection, setActiveSection] = useState('overview');
    const [rawData, setRawData] = useState(null);

    useEffect(() => {
        fetchRoleData();
    }, [role]);

    const fetchRoleData = async () => {
        try {
            setLoading(true);
            setError(null);
            console.log('Fetching data for role:', role);
            console.log('API URL:', `${API_URL}/${role}`);
            
            const res = await axios.get(`${API_URL}/${role}`);
            console.log('API Response:', res.data);
            
            // Store the raw data for debugging
            setRawData(res.data);
            
            // The data is stored in the 'data' field from MongoDB
            const actualData = res.data.data || res.data;
            setRoleData(actualData);
            console.log('Processed data:', actualData);
            
        } catch (err) {
            console.error('Error details:', err);
            setError(`Unable to load role data: ${err.response?.data?.error || err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const formatRoleName = (roleStr) => {
        return roleStr.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <nav className="border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                        <button onClick={onBack} className="text-sm text-gray-600 hover:text-gray-900">
                            ← Back
                        </button>
                    </div>
                </nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-gray-900 border-t-transparent"></div>
                    <p className="mt-4 text-sm text-gray-500">Loading {formatRoleName(role)} data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white">
                <nav className="border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                        <button onClick={onBack} className="text-sm text-gray-600 hover:text-gray-900">
                            ← Back
                        </button>
                    </div>
                </nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                        <p className="text-red-600 mb-2 font-semibold">Error Loading Data</p>
                        <p className="text-red-500 text-sm">{error}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                        <p className="text-sm text-gray-600 mb-3">Debug Information:</p>
                        <p className="text-xs text-gray-500 mb-2">Role requested: <strong>{role}</strong></p>
                        <p className="text-xs text-gray-500 mb-2">API URL: {API_URL}/{role}</p>
                        <p className="text-xs text-gray-500">Make sure you have saved data with "id": "{role}" in your JSON</p>
                    </div>
                    <button 
                        onClick={fetchRoleData}
                        className="mt-6 px-4 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    if (!roleData) {
        return (
            <div className="min-h-screen bg-white">
                <nav className="border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                        <button onClick={onBack} className="text-sm text-gray-600 hover:text-gray-900">
                            ← Back
                        </button>
                    </div>
                </nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <p className="text-gray-600">No data found for "{role}"</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="border-b border-gray-200 sticky top-0 bg-white z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={onBack}
                                className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
                            >
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back
                            </button>
                            <span className="text-sm text-gray-400">/</span>
                            <span className="text-sm font-medium text-gray-900">{formatRoleName(role)}</span>
                        </div>
                        
                        <button 
                            onClick={() => {
                                navigator.clipboard.writeText(JSON.stringify(roleData, null, 2));
                                alert('Copied to clipboard!');
                            }}
                            className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Copy JSON
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                Sections
                            </h3>
                            <div className="space-y-1">
                                <button 
                                    onClick={() => setActiveSection('overview')}
                                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                                        activeSection === 'overview' 
                                            ? 'bg-gray-100 text-gray-900' 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    Overview
                                </button>
                                <button 
                                    onClick={() => setActiveSection('details')}
                                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                                        activeSection === 'details' 
                                            ? 'bg-gray-100 text-gray-900' 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    Details
                                </button>
                                <button 
                                    onClick={() => setActiveSection('json')}
                                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                                        activeSection === 'json' 
                                            ? 'bg-gray-100 text-gray-900' 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    Raw JSON
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        {activeSection === 'overview' && (
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                                    {formatRoleName(role)}
                                </h1>
                                
                                {/* Display Meta Information */}
                                {roleData.meta && (
                                    <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Meta Information</h2>
                                        {roleData.meta.title && (
                                            <div className="mb-3">
                                                <label className="text-xs font-semibold text-gray-500 uppercase">Title</label>
                                                <p className="text-gray-900 mt-1">{roleData.meta.title}</p>
                                            </div>
                                        )}
                                        {roleData.meta.metaDescription && (
                                            <div>
                                                <label className="text-xs font-semibold text-gray-500 uppercase">Description</label>
                                                <p className="text-gray-700 mt-1">{roleData.meta.metaDescription}</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Display First Section */}
                                {roleData.sectionA && roleData.sectionA[0] && (
                                    <div className="mb-8">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                            {roleData.sectionA[0].title || 'Overview'}
                                        </h2>
                                        <div className="space-y-3">
                                            {roleData.sectionA[0].content && roleData.sectionA[0].content.map((text, idx) => (
                                                <p key={idx} className="text-gray-700 leading-relaxed">{text}</p>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Display Section B */}
                                {roleData.sectionB && roleData.sectionB[0] && (
                                    <div className="mb-8">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                            {roleData.sectionB[0].title}
                                        </h2>
                                        <div className="space-y-3">
                                            {roleData.sectionB[0].content && roleData.sectionB[0].content.map((text, idx) => (
                                                <p key={idx} className="text-gray-700 leading-relaxed">{text}</p>
                                            ))}
                                        </div>
                                        {roleData.sectionB[0].bottomText && (
                                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                                {roleData.sectionB[0].bottomText.map((text, idx) => (
                                                    <p key={idx} className="text-blue-800 text-sm">{text}</p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* If no structured data, show a message */}
                                {!roleData.meta && !roleData.sectionA && !roleData.sectionB && (
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <p className="text-yellow-800">No structured content found. View the Raw JSON tab to see all available data.</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeSection === 'details' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">All Available Data</h2>
                                
                                {Object.keys(roleData).map((key) => {
                                    // Skip internal fields
                                    if (key === '_id' || key === '__v' || key === 'createdAt' || key === 'updatedAt') {
                                        return null;
                                    }
                                    
                                    const value = roleData[key];
                                    
                                    return (
                                        <div key={key} className="mb-8 border-b border-gray-200 pb-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3 capitalize">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </h3>
                                            
                                            {Array.isArray(value) ? (
                                                value.map((item, idx) => (
                                                    <div key={idx} className="mb-4">
                                                        {item.title && (
                                                            <h4 className="font-medium text-gray-800 mb-2">{item.title}</h4>
                                                        )}
                                                        {item.content && (
                                                            <div className="space-y-2">
                                                                {Array.isArray(item.content) ? (
                                                                    item.content.map((text, i) => (
                                                                        <p key={i} className="text-gray-700 text-sm">{text}</p>
                                                                    ))
                                                                ) : (
                                                                    <p className="text-gray-700 text-sm">{item.content}</p>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))
                                            ) : typeof value === 'object' && value !== null ? (
                                                <pre className="bg-gray-50 p-3 rounded text-xs overflow-auto">
                                                    {JSON.stringify(value, null, 2)}
                                                </pre>
                                            ) : (
                                                <p className="text-gray-700">{String(value)}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {activeSection === 'json' && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Raw JSON Data</h2>
                                <div className="bg-gray-900 rounded-lg p-4 overflow-auto">
                                    <pre className="text-gray-300 text-sm font-mono" style={{ maxHeight: '600px' }}>
                                        {JSON.stringify(roleData, null, 2)}
                                    </pre>
                                </div>
                                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                                    <span>Total fields: {Object.keys(roleData).length}</span>
                                    <span>Size: {(JSON.stringify(roleData).length / 1024).toFixed(2)} KB</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-xs text-gray-500 text-center">
                        JSON Role Manager • Data loaded for "{role}"
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default RoleLayout;