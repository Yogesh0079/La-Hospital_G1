import React from "react";
import '../styles/Squidward.css';
import '../scripts/Squidward.commons.js';

export default function Squidward() {
    return (
        <>
    <div className="container mx-auto px-4 py-6">
        {/* <!-- Header --> */}
        <header className="flex justify-between items-center mb-8 ">
            <div className="bedward-top-content">
                <h1 className="text-3xl font-bold text-gray-800">
                <svg
                    className="la-hospital-logo-bedward"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                >
                    <rect x="8" y="20" width="12" height="32" fill="#4285f4" rx="2"/>
                    <rect x="44" y="20" width="12" height="32" fill="#4285f4" rx="2"/>
                    <rect x="20" y="8" width="24" height="44" fill="#4285f4" rx="4"/>
                    <rect x="29" y="40" width="6" height="12" fill="#FFFFFF"/>
                    <path
                    d="M30 20h4v4h4v4h-4v4h-4v-4h-4v-4h4z"
                    fill="#FFFFFF"
                    />
                </svg>
                    La Hospital
                </h1>
                <p className="text-gray-600">Bed & Ward Management System</p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative1">
                    <button className="rounded-full bg-gray-100 hover:bg-gray-200 notification-button-squidward">
                    <svg className="squidward-notification-bell" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00008B" strokeWidth="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            <circle cx="18" cy="6" r="3" fill="#ff4d4f">
                                <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
                            </circle>
                        </svg>
                    </button>
                </div>
                <div className="flex items-center">
                    <span className="font-medium">Dr. Sarah Smith</span>
                </div>
            </div>
        </header>

        {/* <!-- Dashboard Overview --> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-500">Total Beds</p>
                        <h3 className="text-2xl font-bold">120</h3>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                    <svg width="44" height="40" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                    {/* <!-- Bed frame --> */}
                    <rect x="20" y="70" width="160" height="60" fill="#8B4513" stroke="#000" stroke-width="1"/>
                    
                    {/* <!-- Mattress --> */}
                    <rect x="25" y="50" width="150" height="25" fill="#4169E1" stroke="#000" stroke-width="1"/>
                    
                    {/* <!-- Pillows --> */}
                    <rect x="30" y="55" width="30" height="15" fill="#F5F5DC" stroke="#000" stroke-width="0.5" rx="2"/>
                    <rect x="65" y="55" width="30" height="15" fill="#F5F5DC" stroke="#000" stroke-width="0.5" rx="2"/>
                    
                    {/* <!-- Headboard --> */}
                    <rect x="20" y="30" width="160" height="20" fill="#A0522D" stroke="#000" stroke-width="1"/>
                    
                    {/* <!-- Bed legs --> */}
                    <rect x="30" y="130" width="10" height="10" fill="#8B4513"/>
                    <rect x="160" y="130" width="10" height="10" fill="#8B4513"/>
                    </svg>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-500">Available</p>
                        <h3 className="text-2xl font-bold text-green-600">42</h3>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                    {/* <!-- Green Checkmark SVG --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        {/* <!-- Green Circle --> */}
                        <circle cx="24" cy="24" r="22" fill="#10B981"/>
                        {/* <!-- White Checkmark --> */}
                        <path d="M16 24l6 6 10-12" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-500">Occupied</p>
                        <h3 className="text-2xl font-bold text-red-600">68</h3>
                    </div>
                    <div className="bg-red-100 p-3 rounded-full">
                    <svg width="44" height="40" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
                    {/* <!-- Head with bandages --> */}
                    <circle cx="100" cy="60" r="40" fill="#FFD399" stroke="#000" stroke-width="1.5"/>
                    <rect x="70" y="40" width="60" height="10" fill="white" stroke="#999" stroke-width="1" rx="2"/>
                    <rect x="80" y="65" width="40" height="8" fill="white" stroke="#999" stroke-width="1" rx="2"/>
                    
                    {/* <!-- Body --> */}
                    <rect x="80" y="100" width="40" height="80" fill="#7FB4E2" stroke="#000" stroke-width="1.5"/>
                    
                    {/* <!-- Arm with bandages --> */}
                    <rect x="60" y="110" width="20" height="50" fill="#FFD399" stroke="#000" stroke-width="1.5" rx="5"/>
                    <rect x="120" y="110" width="20" height="50" fill="#FFD399" stroke="#000" stroke-width="1.5" rx="5"/>
                    <rect x="65" y="125" width="10" height="25" fill="white" stroke="#999" stroke-width="1" rx="2"/>
                    
                    {/* <!-- Legs with bandages --> */}
                    <rect x="85" y="180" width="15" height="70" fill="#4A6FA5" stroke="#000" stroke-width="1.5" rx="3"/>
                    <rect x="100" y="180" width="15" height="70" fill="#4A6FA5" stroke="#000" stroke-width="1.5" rx="3"/>
                    <rect x="90" y="200" width="20" height="15" fill="white" stroke="#999" stroke-width="1" rx="2"/>
                    
                    {/* <!-- Face details --> */}
                    <circle cx="85" cy="50" r="5" fill="#333"/>
                    <circle cx="115" cy="50" r="5" fill="#333"/>
                    <path d="M90 75 Q100 85 110 75" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
                    
                    {/* <!-- Crutch --> */}
                    <line x1="140" y1="100" x2="170" y2="250" stroke="#8B4513" stroke-width="4"/>
                    <line x1="170" y1="250" x2="190" y2="240" stroke="#8B4513" stroke-width="4"/>
                    </svg>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-500">Maintenance</p>
                        <h3 className="text-2xl font-bold text-blue-600">10</h3>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                    <svg width="44" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        {/* <!-- Screwdriver --> */}
                        <rect x="85" y="30" width="10" height="80" fill="#555" stroke="#333" stroke-width="1"/>
                        <rect x="85" y="110" width="10" height="40" fill="#AAA" stroke="#333" stroke-width="1"/> 
                        <rect x="80" y="150" width="20" height="5" fill="#777" stroke="#333" stroke-width="1"/> 
                        
                        {/* <!-- Wrench --> */}
                        <path d="M130 60 L170 20 L180 30 L140 70 Z" fill="#D22" stroke="#333" stroke-width="1"/> 
                        <rect x="110" y="65" width="30" height="10" fill="#D22" stroke="#333" stroke-width="1"/> 
                        <rect x="60" y="65" width="50" height="10" fill="#D22" stroke="#333" stroke-width="1"/>
                        <circle cx="70" cy="70" r="5" fill="#D22" stroke="#333" stroke-width="1"/> 
                        
                        {/* <!-- Cross effect - screwdriver on top --> */}
                        <rect x="85" y="30" width="10" height="80" fill="#555" stroke="#333" stroke-width="1" transform="rotate(45 90 90)"/>
                        <rect x="85" y="110" width="10" height="40" fill="#AAA" stroke="#333" stroke-width="1" transform="rotate(45 90 90)"/>
                        <rect x="80" y="150" width="20" height="5" fill="#777" stroke="#333" stroke-width="1" transform="rotate(45 90 90)"/>
                        
                        {/* <!-- Cross effect - wrench on bottom --> */}
                        <path d="M130 60 L170 20 L180 30 L140 70 Z" fill="#D22" stroke="#333" stroke-width="1" transform="rotate(-45 140 70)"/>
                        <rect x="110" y="65" width="30" height="10" fill="#D22" stroke="#333" stroke-width="1" transform="rotate(-45 140 70)"/>
                        <rect x="60" y="65" width="50" height="10" fill="#D22" stroke="#333" stroke-width="1" transform="rotate(-45 140 70)"/>
                        <circle cx="70" cy="70" r="5" fill="#D22" stroke="#333" stroke-width="1" transform="rotate(-45 140 70)"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Main Content --> */}
        <div className="flex flex-col md:flex-row gap-6">
            {/* <!-- Ward Navigation --> */}
            <div className="w-full md:w-1/4 bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Wards</h2>
                    <button id="addWardBtn" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className="space-y-2">
                    <div className="ward-item p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500 cursor-pointer">
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium">General Ward</h3>
                            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">25 Beds</span>
                        </div>
                        <p className="text-sm text-gray-600">Floor 1, Wing A</p>
                    </div>
                    <div className="ward-item p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium">ICU</h3>
                            <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-full">12 Beds</span>
                        </div>
                        <p className="text-sm text-gray-600">Floor 2, Wing B</p>
                    </div>
                    <div className="ward-item p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium">Pediatrics</h3>
                            <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-full">18 Beds</span>
                        </div>
                        <p className="text-sm text-gray-600">Floor 1, Wing C</p>
                    </div>
                    <div className="ward-item p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium">Maternity</h3>
                            <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-full">20 Beds</span>
                        </div>
                        <p className="text-sm text-gray-600">Floor 3, Wing A</p>
                    </div>
                    <div className="ward-item p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium">Orthopedics</h3>
                            <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-full">15 Beds</span>
                        </div>
                        <p className="text-sm text-gray-600">Floor 2, Wing C</p>
                    </div>
                </div>
            </div>

            {/* <!-- Bed Management --> */}
            <div className="w-full md:w-3/4 bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-semibold">General Ward</h2>
                        <p className="text-gray-600">Floor 1, Wing A</p>
                    </div>
                    <div className="flex space-x-2">
                        <div className="relative">
                            <input type="text" placeholder="Search beds..." className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="8 12 20 20" fill="none" stroke="#00008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="M21 21l-4.35-4.35"/>
                        </svg>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                        <svg class="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                        <path d="M3 5h18v2H3V5zm4 6h10v2H7v-2zm4 6h2v2h-2v-2z"/>
                        </svg> Filter
                        </button>
                    </div>
                </div>

                {/* <!-- Status Legend --> */}
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center">
                        <span className="status-indicator bg-green-500"></span>
                        <span className="text-sm">Available (12)</span>
                    </div>
                    <div className="flex items-center">
                        <span className="status-indicator bg-red-500"></span>
                        <span className="text-sm">Occupied (10)</span>
                    </div>
                    <div className="flex items-center">
                        <span className="status-indicator bg-blue-500"></span>
                        <span className="text-sm">Maintenance (2)</span>
                    </div>
                    <div className="flex items-center">
                        <span className="status-indicator bg-yellow-500"></span>
                        <span className="text-sm">Reserved (1)</span>
                    </div>
                </div>

                {/* <!-- Bed Grid --> */}
                <div className="ward-view">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {/* <!-- Bed Card Template --> */}
                        <div className="bed-card bg-white border rounded-lg p-4 transition-all duration-200 cursor-pointer bed-available" data-bed-id="101" data-status="available">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg">Bed #101</h3>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Available</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                                <p> Room 101A</p>
                                <p> Standard</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg><p>Details</p>
                                </button>
                                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                                    Assign
                                </button>
                            </div>
                        </div>

                        {/* <!-- Occupied Bed --> */}
                        <div className="bed-card bg-white border rounded-lg p-4 transition-all duration-200 cursor-pointer bed-occupied" data-bed-id="102" data-status="occupied">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg">Bed #102</h3>
                                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Occupied</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                                <p> Room 101A</p>
                                <p> Standard</p>
                                <p> John Doe (ID: 78945)</p>
                                <p> Admitted: 12/05/2023</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg> <p>Details</p>
                                </button>
                                <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm">
                                    Discharge
                                </button>
                            </div>
                        </div>

                        {/* <!-- Maintenance Bed --> */}
                        <div className="bed-card bg-white border rounded-lg p-4 transition-all duration-200 cursor-pointer bed-maintenance" data-bed-id="103" data-status="maintenance">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg">Bed #103</h3>
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Maintenance</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                                <p> Room 101B</p>
                                <p> Standard</p>
                                <p> Equipment repair</p>
                                <p> Est. ready: 18/05/2023</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg> <p>Details</p>
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                                    Mark Ready
                                </button>
                            </div>
                        </div>

                        {/* <!-- Reserved Bed --> */}
                        <div className="bed-card bg-white border rounded-lg p-4 transition-all duration-200 cursor-pointer bed-reserved" data-bed-id="104" data-status="reserved">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg">Bed #104</h3>
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Reserved</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                                <p> Room 101B</p>
                                <p> Standard</p>
                                <p> Scheduled for: Jane Smith</p>
                                <p> Expected: 15/05/2023</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg> <p>Details</p>
                                </button>
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm">
                                    Cancel
                                </button>
                            </div>
                        </div>

                        {/* <!-- More beds would be listed here in a real application --> */}
                        <div className="bed-card bg-white border rounded-lg p-4 transition-all duration-200 cursor-pointer bed-available" data-bed-id="105" data-status="available">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg">Bed #105</h3>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Available</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                                <p> Room 102A</p>
                                <p> Standard</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg> <p>Details</p>
                                </button>
                                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                                    Assign
                                </button>
                            </div>
                        </div>

                        <div className="bed-card bg-white border rounded-lg p-4 transition-all duration-200 cursor-pointer bed-occupied" data-bed-id="106" data-status="occupied">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg">Bed #106</h3>
                                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Occupied</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                                <p> Room 102A</p>
                                <p> Standard</p>
                                <p> Robert Johnson (ID: 78235)</p>
                                <p> Admitted: 10/05/2023</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg> <p>Details</p>
                                </button>
                                <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm">
                                    Discharge
                                </button>
                            </div>
                        </div>

                        <div className="bed-card bg-white border rounded-lg p-4 transition-all duration-200 cursor-pointer bed-available" data-bed-id="107" data-status="available">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg">Bed #107</h3>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Available</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                                <p> Room 102B</p>
                                <p> ICU</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg> <p>Details</p>
                                </button>
                                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                                    Assign
                                </button>
                            </div>
                        </div>

                        <div className="bed-card bg-white border rounded-lg p-4 transition-all duration-200 cursor-pointer bed-maintenance" data-bed-id="108" data-status="maintenance">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg">Bed #108</h3>
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Maintenance</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                                <p> Room 102B</p>
                                <p> ICU</p>
                                <p> Ventilator replacement</p>
                                <p> Est. ready: 20/05/2023</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg> <p>Details</p>
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                                    Mark Ready
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Bed Details Modal --> */}
        <div id="bedDetailsModal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
                <div className="flex justify-between items-center border-b p-4">
                    <h3 className="text-xl font-semibold">Bed Details - #<span id="modalBedNumber">101</span></h3>
                    <button id="closeModalBtn" className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-medium text-gray-700 mb-2">Basic Information</h4>
                            <div className="space-y-3">
                                <p><span className="font-medium">Ward:</span> <span id="modalWard">General Ward</span></p>
                                <p><span className="font-medium">Room:</span> <span id="modalRoom">101A</span></p>
                                <p><span className="font-medium">Bed Type:</span> <span id="modalBedType">Standard</span></p>
                                <p><span className="font-medium">Status:</span> <span id="modalStatus" className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Available</span></p>
                            </div>
                        </div>
                        <div id="patientInfoSection">
                            <h4 className="font-medium text-gray-700 mb-2">Patient Information</h4>
                            <div className="space-y-3">
                                <p><span className="font-medium">Name:</span> <span id="modalPatientName">-</span></p>
                                <p><span className="font-medium">Patient ID:</span> <span id="modalPatientId">-</span></p>
                                <p><span className="font-medium">Admission Date:</span> <span id="modalAdmissionDate">-</span></p>
                                <p><span className="font-medium">Diagnosis:</span> <span id="modalDiagnosis">-</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6" id="maintenanceInfoSection">
                        <h4 className="font-medium text-gray-700 mb-2">Maintenance Information</h4>
                        <div className="space-y-3">
                            <p><span className="font-medium">Reason:</span> <span id="modalMaintenanceReason">-</span></p>
                            <p><span className="font-medium">Reported By:</span> <span id="modalReportedBy">-</span></p>
                            <p><span className="font-medium">Estimated Completion:</span> <span id="modalEstCompletion">-</span></p>
                            <p><span className="font-medium">Notes:</span> <span id="modalMaintenanceNotes">-</span></p>
                        </div>
                    </div>
                    <div className="mt-6" id="reservationInfoSection">
                        <h4 className="font-medium text-gray-700 mb-2">Reservation Information</h4>
                        <div className="space-y-3">
                            <p><span className="font-medium">Patient Name:</span> <span id="modalReservedFor">-</span></p>
                            <p><span className="font-medium">Expected Admission:</span> <span id="modalExpectedAdmission">-</span></p>
                            <p><span className="font-medium">Reason:</span> <span id="modalReservationReason">-</span></p>
                            <p><span className="font-medium">Booked By:</span> <span id="modalBookedBy">-</span></p>
                        </div>
                    </div>
                </div>
                <div className="border-t p-4 flex justify-end space-x-3">
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Print</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Edit Details</button>
                </div>
            </div>
        </div>

        {/* <!-- Add Ward Modal --> */}
        <div id="addWardModal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="flex justify-between items-center border-b p-4">
                    <h3 className="text-xl font-semibold">Add New Ward</h3>
                    <button id="closeAddWardModalBtn" className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="p-6">
                    <form id="addWardForm">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ward Name</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Pediatrics" required/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                            <option value="">Select Floor</option>
                                            <option value="1">Floor 1</option>
                                            <option value="2">Floor 2</option>
                                            <option value="3">Floor 3</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                            <option value="">Select Wing</option>
                                            <option value="A">Wing A</option>
                                            <option value="B">Wing B</option>
                                            <option value="C">Wing C</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ward Type</label>
                                <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                    <option value="">Select Type</option>
                                    <option value="general">General</option>
                                    <option value="icu">ICU</option>
                                    <option value="pediatrics">Pediatrics</option>
                                    <option value="maternity">Maternity</option>
                                    <option value="orthopedics">Orthopedics</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Beds</label>
                                <input type="number" min="1" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., 20" required/>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end space-x-3">
                            <button type="button" id="cancelAddWardBtn" className="px-4 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add Ward</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}