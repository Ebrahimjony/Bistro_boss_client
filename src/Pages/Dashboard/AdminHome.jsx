import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import { FaDollarSign, FaLifeRing, FaUsers } from 'react-icons/fa';

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxios()

    const { data: status } = useQuery({
        queryKey: ['admin-status'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-status');
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-3xl">
                <span className='text-3xl'>Hi, Wellcome</span>
                {
                    user?.displayName ? user.displayName : 'back'
                }
            </h2>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                      <FaDollarSign className='text-3xl'></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{status.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                       <FaUsers className='text-3xl'></FaUsers>
                    </div>
                    <div className="stat-title"> Users</div>
                    <div className="stat-value">{status.users}</div>
                    <div className="stat-desc">customer</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">orders</div>
                    <div className="stat-value">{status.orders}</div>
                    <div className="stat-desc">item</div>
                </div>
                 <div className="stat">
                    <div className="stat-figure text-secondary">
                       <FaLifeRing></FaLifeRing>
                    </div>
                    <div className="stat-title">product</div>
                    <div className="stat-value">{status.menuItems}</div>
                    <div className="stat-desc">item</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;