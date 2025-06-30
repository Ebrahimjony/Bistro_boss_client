import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserHome = () => {
    const {user}=useAuth();
    return (
        <div>
              <h2 className="text-3xl">
                <span>Hi,Wellcome</span>
                {
                    user.dispalyName?user.dispalyName:'back'
                }
            </h2>
        </div>
    );
};

export default UserHome;