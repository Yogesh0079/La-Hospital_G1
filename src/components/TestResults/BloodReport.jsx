import "../../styles/BloodReport.css"; // Import the CSS file for styling

export default function BloodReport() {
  return (
    <>
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-20 mb-20">
        <div className="report-header text-white p-6">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-bold">BLOOD TEST REPORT</h1>
                    <p className="opacity-90 mt-1">Patient Health Record</p>
                </div>
                <div className="text-right">
                    <p className="font-medium">Report Date: <span className="font-normal">June 15, 2023</span></p>
                    <p className="font-medium mt-1">Lab ID: <span className="font-normal">BLD-2023-0615-001</span></p>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white border-opacity-20">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <p className="text-sm opacity-80">Patient Name</p>
                        <p className="font-medium">John Doe</p>
                    </div>
                    <div>
                        <p className="text-sm opacity-80">Age/Gender</p>
                        <p className="font-medium">35 Years / Male</p>
                    </div>
                    <div>
                        <p className="text-sm opacity-80">Referral Doctor</p>
                        <p className="font-medium">Dr. Sarah Smith</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Complete Blood Count (CBC)</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Normal Range</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Hemoglobin</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm normal-value">14.2</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">g/dL</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13.5-17.5</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Normal
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">WBC Count</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm normal-value">6.8</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">x10³/µL</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.0-11.0</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Normal
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Platelets</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm normal-value">210</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">x10³/µL</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">150-450</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Normal
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RBC Count</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm normal-value">4.8</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">x10⁶/µL</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.5-5.9</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Normal
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Hematocrit</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm normal-value">42.5</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">%</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">40.0-52.0</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Normal
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">MCV</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm abnormal-value">78.0</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">fL</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">80.0-100.0</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    Low
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">Doctor's Remarks</h4>
                <p className="text-gray-700">
                    Overall blood count is normal except for slightly low MCV which may indicate mild microcytosis.
                    Recommend checking iron studies if symptoms of anemia are present. Follow up in 3 months for repeat CBC.
                </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Laboratory Information</h4>
                        <p className="text-gray-600">City Central Diagnostic Lab</p>
                        <p className="text-gray-600">123 Medical Center Drive</p>
                        <p className="text-gray-600">Lab Director: Dr. Michael Johnson</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Report Verified By</h4>
                        <p className="text-gray-600">Dr. Emily Wilson, Pathologist</p>
                        <p className="text-gray-600">License: PAT-123456</p>
                        <p className="text-gray-600">Date: June 16, 2023</p>
                    </div>
                </div>
            </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                <p>This is an electronically generated report. No signature required.</p>
                <p className="mt-1">For any queries, please contact the laboratory at lab@citycentral.com or call (555) 123-4567</p>
            </div>
        </div>
    </div>
    </>
  );
}