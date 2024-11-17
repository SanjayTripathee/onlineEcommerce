import { useDispatch, useSelector } from 'react-redux';
import FolderIcon from '@mui/icons-material/Folder';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChatIcon from '@mui/icons-material/Chat';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../actions/userAction';

const Sidebar = ({ activeTab }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { user } = useSelector(state => state.user);

    const handleLogout = () => {
        dispatch(logoutUser());
        enqueueSnackbar("Logout Successfully", { variant: "success" });
        navigate("/login");
    }

    return (
        <div className="hidden sm:flex flex-col gap-4 w-1/4 px-1">

            {/* <!-- profile card --> */}
            <div className="flex items-center gap-4 p-3 bg-white rounded-sm shadow">
                {/* <!-- user icon --> */}
                <div className="w-12 h-12 rounded-full">
                    <img draggable="false" className="h-full w-full object-cover rounded-full" src={user.avatar.url} alt="Avatar" />
                </div>
                {/* <!-- user icon --> */}
                <div className="flex flex-col gap-1">
                    <p className="text-xs">Hello,</p>
                    <h2 className="font-medium">{user.name}</h2>
                </div>
            </div>
            {/* <!-- profile card --> */}

            {/* <!-- nav tiles --> */}
            <div className="flex flex-col bg-white rounded-sm shadow">

                {/* <!-- my orders tab --> */}
                <div className="flex items-center gap-5 px-4 py-4 border-b">
                    <span className="text-primary-green"><FolderIcon /></span>
                    <Link className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-green" to="/orders">
                        MY ORDERS
                        <span><ChevronRightIcon /></span>
                    </Link>
                </div>
                {/* <!-- my orders tab --> */}

                {/* <!-- account settings tab --> */}
                <div className="flex items-center gap-5 px-4 py-4">
    <p className="flex w-full font-medium text-gray-500">
        <span className="text-primary-green "><PersonIcon /></span>
        &nbsp; &nbsp; ACCOUNT SETTINGS
    </p>
</div>

                <div className="flex flex-col pb-3 border-b text-sm">
                    <Link to="/account" className={`${activeTab === "profile" ? "bg-blue-50 text-primary-green font-medium" : "hover:bg-blue-50 hover:text-primary-green"} p-3 pl-14`}>Profile Information</Link>
                       </div>
                {/* <!-- account settings tab --> */}

                {/* <!-- payments tab --> */}
               

                {/* <!-- my chats tab --> */}
             
                {/* <!-- my chats tab --> */}

                {/* <!-- my stuff tab --> */}
                <div className="flex items-center gap-5 px-4 py-4">
                    
                    <p className="flex w-full font-medium text-gray-500">
                    <span className="text-primary-green" ><FolderSharedIcon /></span>
                    &nbsp; &nbsp;   MY STUFF</p>
                </div>
                <div className="flex flex-col pb-3 border-b text-sm">
                   
                    <Link to="/wishlist" className={`${activeTab === "wishlist" ? "bg-blue-50 text-primary-green font-medium" : "hover:bg-blue-50 hover:text-primary-green"} p-3 pl-14`}>My Wishlist</Link>
                </div>
                {/* <!-- my stuff tab --> */}

                {/* <!-- logout tab --> */}
                <div className="flex items-center gap-5 px-4 py-4 border-b">
                
                    <div className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-green cursor-pointer" onClick={handleLogout}>
                            <span className="text-primary-green"><PowerSettingsNewIcon /></span>
                        Logout
                        <span><ChevronRightIcon /></span>
                    </div>
                </div>
                {/* <!-- logout tab --> */}

            </div>
            {/* <!-- nav tiles --> */}

            {/* <!-- frequenty visited tab --> */}
           
            {/* <!-- frequenty visited tab --> */}
        </div>
    );
};

export default Sidebar;
