import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import RoleLayout from './components/RoleLayout';
import SectionB from './components/ass/SectionB';
import SectionA from './components/ass/SectionA';
import SectionC from './components/ass/SectionC';
import SectionD from './components/ass/SectionD';
import SectionE from './components/ass/SectionE';

function App() {
    // const [currentPage, setCurrentPage] = useState('home');
    // const [selectedRole, setSelectedRole] = useState(null);
    // const [roleData, setRoleData] = useState(null);

    // useEffect(() => {
    //     const path = window.location.pathname;
    //     if (path.startsWith('/role/')) {
    //         const roleFromUrl = path.replace('/role/', '');
    //         if (roleFromUrl) {
    //             setSelectedRole(roleFromUrl);
    //             setCurrentPage('role');
    //         }
    //     }
    // }, []);

    // const handleRoleClick = (role) => {
    //     window.history.pushState({}, '', `/role/${role}`);
    //     setSelectedRole(role);
    //     setCurrentPage('role');
    // };

    // const handleBackToHome = () => {
    //     window.history.pushState({}, '', '/');
    //     setCurrentPage('home');
    //     setSelectedRole(null);
    //     setRoleData(null);
    // };

    // if (currentPage === 'home') {
    //     return <Home onRoleClick={handleRoleClick} />;
    // }

    return (
        // <RoleLayout 
        //     role={selectedRole} 
        //     onBack={handleBackToHome}
        //     roleData={roleData}
        //     setRoleData={setRoleData}
        // />
        <>
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
        </>
    );
}

export default App;