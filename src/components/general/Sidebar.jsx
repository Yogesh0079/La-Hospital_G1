import "../../styles/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Sidebar() {
    return (
        <>
            <div className="sidebar bg-white w-64 border-r border-gray-200 flex flex-col">
            <div className="flex items-center justify-center h-16 px-4 bg-primary">
                <div className="flex items-center">
                    <FontAwesomeIcon icon="hospital" className="text-white text-2xl mr-2" />
                    <span className="text-white font-semibold text-xl">La-Hospital</span>
                </div>
            </div>
            <div className="flex-grow px-4 py-6 c-white">
                <div className="space-y-1">
                    <a href="#" className="flex items-center px-4 py-3 bg-primaryLight bg-opacity-10 text-black rounded-lg">
                        <FontAwesomeIcon icon="boxes" className="mr-3" />
                        <span className="font-medium">Inventory</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-white hover:bg-gray-100 rounded-lg">
                        <FontAwesomeIcon icon="prescription-bottle-alt" className="mr-3" />
                        <span>Medications</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-white hover:bg-gray-100 rounded-lg">
                        <FontAwesomeIcon icon="syringe" className="mr-3" />
                        <span>Injections</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-white hover:bg-gray-100 rounded-lg">
                        <FontAwesomeIcon icon="flask" className="mr-3" />
                        <span>Lab Supplies</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-white hover:bg-gray-100 rounded-lg">
                        <FontAwesomeIcon icon="procedures" className="mr-3" />
                        <span>Equipment</span>
                    </a>
                </div>

                <div className="mt-8">
                    <h3 className="text-xs font-semibold text-black uppercase tracking-wider px-4 mb-2">Reports</h3>
                    <div className="space-y-1">
                        <a href="#" className="flex items-center px-4 py-3 text-white hover:bg-gray-100 rounded-lg">
                            <FontAwesomeIcon icon="chart-line" className="mr-3" />
                            <span>Inventory Analytics</span>
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-white hover:bg-gray-100 rounded-lg">
                            <FontAwesomeIcon icon="exclamation-triangle" className="mr-3" />
                            <span>Low Stock</span>
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-white hover:bg-gray-100 rounded-lg">
                            <FontAwesomeIcon icon="history" className="mr-3" />
                            <span>Expiring Soon</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 border-t border-gray-200">
                <div className="flex items-center">
                    <img className="h-9 w-9 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile"/>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">Dr. Sarah Johnson</p>
                        <p className="text-xs text-white">Administrator</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}