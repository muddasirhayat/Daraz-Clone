import { Link, useNavigate } from 'react-router-dom';

const TopBar = () => {
    const user = JSON.parse(localStorage.getItem('daraz_logged_in_user'));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('daraz_logged_in_user');
        navigate('/login');
        window.location.reload();
    };

    return (
        <div className="bg-[#f5f5f5] py-1.5 hidden md:block">
            <div className="container flex justify-end items-center text-[12px] gap-6 text-[#757575]">
                <a href="#" className="hover:text-daraz-orange transition-colors uppercase">Save More on App</a>
                <a href="#" className="hover:text-daraz-orange transition-colors uppercase">Sell on Daraz</a>
                <a href="#" className="hover:text-daraz-orange transition-colors uppercase">Customer Care</a>
                <a href="#" className="hover:text-daraz-orange transition-colors uppercase">Track My Order</a>

                {user ? (
                    <>
                        <span className="text-daraz-orange font-medium uppercase truncate max-w-[100px]">{user.fullName}</span>
                        <button onClick={handleLogout} className="hover:text-daraz-orange transition-colors uppercase">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="hover:text-daraz-orange transition-colors uppercase">Login</Link>
                        <Link to="/signup" className="hover:text-daraz-orange transition-colors uppercase">Signup</Link>
                    </>
                )}

                <a href="#" className="hover:text-daraz-orange transition-colors text-[14px] ml-4 font-medium">زبان تبدیل کریں</a>
            </div>
        </div>
    );
};

export default TopBar;
