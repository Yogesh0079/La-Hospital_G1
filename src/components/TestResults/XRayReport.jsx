import "../../styles/BloodReport.css"; // Import the CSS file for styling

export default function XRayReport({ testId, userId }) {
    return (
    <>
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-20 mb-20">
            <div className="report-header text-white p-6">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-bold">X-RAY REPORT</h1>
                    <p className="opacity-90 mt-1">Patient Radiology Record</p>
                </div>
                <div className="text-right">
                    <p className="font-medium">Report Date: <span className="font-normal">May 4, 2025</span></p>
                    <p className="font-medium mt-1">Lab ID: <span className="font-normal">XRY-2025-0504-002</span></p>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white border-opacity-20">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <p className="text-sm opacity-80">Patient Name</p>
                        <p className="font-medium">Jane Smith</p>
                    </div>
                    <div>
                        <p className="text-sm opacity-80">Age/Gender</p>
                        <p className="font-medium">42 Years / Female</p>
                    </div>
                    <div>
                        <p className="text-sm opacity-80">Referral Doctor</p>
                        <p className="font-medium">Dr. Robert Brown</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Chest X-Ray Findings</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Observation</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lungs</td>
                            <td className="px-6 py-4 text-sm normal-finding">Clear lung fields, no evidence of focal consolidation or pneumothorax</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Normal
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Heart</td>
                            <td className="px-6 py-4 text-sm normal-finding">Normal cardiac silhouette, no cardiomegaly</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Normal
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Bones</td>
                            <td className="px-6 py-4 text-sm normal-finding">No fractures or lytic lesions in ribs or clavicles</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Normal
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Diaphragm</td>
                            <td className="px-6 py-4 text-sm normal-finding">Normal diaphragmatic contours</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Normal
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mediastinum</td>
                            <td className="px-6 py-4 text-sm abnormal-finding">Slight widening of mediastinum, possible lymph node enlargement</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    Abnormal
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">Radiologist's Remarks</h4>
                <p className="text-gray-700">
                    Chest X-ray shows mostly normal findings except for slight mediastinal widening, which may suggest lymph node enlargement.
                    Recommend follow-up CT scan of the chest to evaluate further. Clinical correlation advised.
                </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Radiology Center Information</h4>
                        <p className="text-gray-600">City Central Radiology Lab</p>
                        <p className="text-gray-600">456 Medical Center Drive</p>
                        <p className="text-gray-600">Lab Director: Dr. Laura Thompson</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Report Verified By</h4>
                        <p className="text-gray-600">Dr. James Lee, Radiologist</p>
                        <p className="text-gray-600">License: RAD-789012</p>
                        <p className="text-gray-600">Date: May 5, 2025</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                <p>This is an electronically generated report. No signature required.</p>
                <p className="mt-1">For any queries, please contact the radiology center at radiology@citycentral.com or call (555) 987-6543</p>
            </div>
        </div>
    </div>
    </>
    )
}