import "../../styles/BloodReport.css"; // Import the CSS file for styling

export default function FullBodyReport({ testId, userId }) {
    return (
        <>
             <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-20 mb-20">
                <div className="report-header text-white p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold">FULL BODY SCAN REPORT</h1>
                            <p className="opacity-90 mt-1">Comprehensive Imaging Record</p>
                        </div>
                        <div className="text-right">
                            <p className="font-medium">Report Date: <span className="font-normal">May 4, 2025</span></p>
                            <p className="font-medium mt-1">Lab ID: <span className="font-normal">FBS-2025-0504-001</span></p>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white border-opacity-20">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <p className="text-sm opacity-80">Patient Name</p>
                                <p className="font-medium">Michael Carter</p>
                            </div>
                            <div>
                                <p className="text-sm opacity-80">Age/Gender</p>
                                <p className="font-medium">50 Years / Male</p>
                            </div>
                            <div>
                                <p className="text-sm opacity-80">Referral Doctor</p>
                                <p className="font-medium">Dr. Elizabeth Green</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Full Body CT Scan Findings</h2>

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
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Brain</td>
                                    <td className="px-6 py-4 text-sm normal-finding">No evidence of masses, hemorrhages, or ischemic changes</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Normal
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Chest</td>
                                    <td className="px-6 py-4 text-sm normal-finding">Clear lung fields, normal cardiac silhouette, no mediastinal widening</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Normal
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Abdomen</td>
                                    <td className="px-6 py-4 text-sm normal-finding">Liver, spleen, kidneys, and pancreas appear normal; no masses or calcifications</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Normal
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pelvis</td>
                                    <td className="px-6 py-4 text-sm normal-finding">No abnormalities in pelvic bones or soft tissues</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Normal
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Spine</td>
                                    <td className="px-6 py-4 text-sm abnormal-finding">Mild degenerative changes in lumbar spine, small osteophytes noted</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                            Abnormal
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Extremities</td>
                                    <td className="px-6 py-4 text-sm normal-finding">No fractures or dislocations in major joints</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Normal
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <h4 className="font-semibold text-blue-800 mb-2">Radiologist's Remarks</h4>
                        <p className="text-gray-700">
                            Full body CT scan shows predominantly normal findings. Mild degenerative changes in the lumbar spine are noted, consistent with age-related wear.
                            Recommend clinical correlation for back pain or mobility issues. Follow-up imaging in 12 months if symptoms persist.
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Imaging Center Information</h4>
                                <p className="text-gray-600">City Central Imaging Lab</p>
                                <p className="text-gray-600">789 Medical Center Drive</p>
                                <p className="text-gray-600">Lab Director: Dr. Steven Harris</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Report Verified By</h4>
                                <p className="text-gray-600">Dr. Anna Patel, Radiologist</p>
                                <p className="text-gray-600">License: RAD-456789</p>
                                <p className="text-gray-600">Date: May 5, 2025</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                        <p>This is an electronically generated report. No signature required.</p>
                        <p className="mt-1">For any queries, please contact the imaging center at imaging@citycentral.com or call (555) 321-9876</p>
                    </div>
                </div>
            </div>
        </>
    )
}