import modifyReportsCommons from "../scripts/modifyReports.commons";
import { Box, Chip ,FormControl, Button, Checkbox, Radio, Select, TextField, RadioGroup, FormGroup, InputLabel, MenuItem, Autocomplete, FormLabel, FormControlLabel} from "@mui/material";
import { useEffect, useState } from "react";

function GetFindings({ currType, findingTemplates, changeState }) {
    const out = [];

    for (let i = 0; i < findingTemplates[currType].fields.length; i++) {
        const field = findingTemplates[currType].fields[i];

        if (field.type === 'select') {
            out.push(
                <FormControl fullWidth key={field.label} style={{ marginBottom: '16px' }}>
                    <InputLabel id={`select-label-${field.label}`}>{field.label}</InputLabel>
                    <Select
                        labelId={`select-label-${field.label}`}
                        id={field.label}
                        name={field.label}
                        onChange={changeState}
                        style={{ marginBottom: '16px', width: '40%', marginRight: '16px' }}
                        label={field.label}
                    >
                        {field.options.map((option) => (
                            <MenuItem key={option} value={option.toLowerCase()}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
        } else {
            out.push(
                <TextField
                    key={field.label}
                    id={field.label}
                    label={field.label}
                    name={field.label}
                    variant="outlined"

                    onChange={changeState}
                    style={{ marginBottom: '16px', width: '40%', marginRight: '16px' }}
                />
            );
        }
    }
    out.push(<Button style={{ marginBottom: '16px', width: '40%', marginRight: '16px', display: "inline" }} >Add Entry</Button>)
    return <>{out}</>;
}

function ModifyReports() {
    let [currType, setCurrType] = useState("blood_test");
    let [findingsState, setFindingsState] = useState([]);
    const handleTypeChange = (event) => {
        setCurrType(event.target.value);
    };
    const handleFindingsChange = (event) => {
        const { name, value } = event.target;
        setFindingsState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const findingTemplates = {
        blood_test: {
            fields: [
                { label: 'Test', type: 'text', placeholder: 'e.g., Hemoglobin' },
                { label: 'Result', type: 'text', placeholder: 'e.g., 14.2' },
                { label: 'Unit', type: 'text', placeholder: 'e.g., g/dL' },
                { label: 'Normal Range', type: 'text', placeholder: 'e.g., 13.5-17.5' },
                { label: 'Status', type: 'select', options: ['Normal', 'Low', 'High'] }
            ]
        },
        xray: {
            fields: [
                { label: 'Region', type: 'text', placeholder: 'e.g., Lungs' },
                { label: 'Observation', type: 'text', placeholder: 'e.g., Clear lung fields' },
                { label: 'Status', type: 'select', options: ['Normal', 'Abnormal'] }
            ]
        },
        full_body_scan: {
            fields: [
                { label: 'Region', type: 'text', placeholder: 'e.g., Brain' },
                { label: 'Observation', type: 'text', placeholder: 'e.g., No evidence of masses' },
                { label: 'Status', type: 'select', options: ['Normal', 'Abnormal'] }
            ]
        }
    };
    useEffect(() => {
        modifyReportsCommons();

      return () => {
      }
    }, []);
  return (
    <>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-20 mb-20">
                <div className="report-header text-white p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold">MEDICAL REPORT ENTRY</h1>
                            <p className="opacity-90 mt-1">Doctor's Report Creation</p>
                        </div>
                        <div className="text-right">
                            <p className="font-medium">Date: <span id="currentDate" className="font-normal"></span></p>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <form id="reportForm" className="space-y-6">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Patient Information</h2>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <TextField
                                        id="input-fname"
                                        label="First Name"
                                        name="first_name"
                                        variant="outlined"
                                        fullWidth
                                        />
                                </div>
                                <div>
                                    <TextField
                                        id="input-age"
                                        label="Age"
                                        name="age"
                                        type="number"
                                        variant="outlined"
                                        fullWidth
                                        />
                                </div>
                                <div>
                                    <TextField
                                        id="input-ref"
                                        label="Referral Doctor"
                                        name="ref"
                                        variant="outlined"
                                        fullWidth
                                        />
                                </div>
                            </div>
                        </div>

                        <div>

                            <h2 className="text-xl font-bold text-gray-800 mb-4">Report Details</h2>
                                <FormControl className="md:w-1/2 sm:w-1" fullWidth>
                                    <InputLabel id="select-label-rt">Report Type</InputLabel>
                                    <Select
                                        value={currType}
                                        onChange={handleTypeChange}
                                        labelId="select-label-rt"
                                        id="reportType"
                                        name="report_type"
                                        label="Report Type"
                                    >
                                        <MenuItem value="blood_test">Blood Test</MenuItem>
                                        <MenuItem value="xray">X-Ray</MenuItem>
                                        <MenuItem value="full_body_scan">Full Body Scan</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    <TextField
                                        id="input-lid"
                                        label="Lab ID"
                                        name="lab_id"
                                        variant="outlined"
                                        fullWidth
                                        />
                                </div>
                            </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Findings</h2>
                                <GetFindings currType={currType} findingTemplates={findingTemplates} changeState={setFindingsState}/>
                            <button id="addFinding" type="button" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" style={{display: "none"}}>Add Finding</button>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Doctor's Remarks</h2>
                            <TextField
                                id="input-remarks"
                                label="Remarks"
                                name="remarks"
                                variant="outlined"
                                multiline
                                rows={4}
                                fullWidth
                                />

                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Lab Information</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <TextField
                                        id="input-labName"
                                        label="Laboratory Name"
                                        name="lab_name"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="input-labAddress"
                                        label="Laboratory Address"
                                        name="lab_address"
                                        variant="outlined"
                                        fullWidth
                                        />
                                </div>
                                <div>
                                    <TextField
                                        id="input-labDirector"
                                        label="Laboratory Director"
                                        name="lab_director"
                                        variant="outlined"
                                        fullWidth
                                        />
                                </div>
                                <div>
                                <TextField
                                        id="input-verifiedBy"
                                        label="Verified By"
                                        name="lab_verified_by"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </div>

                        <span className="text-right ma block mt-4">
                            <Button >Submit Report</Button>
                        </span>
                    </form>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                    <p>Electronic Report Creation System</p>
                    <p className="mt-1">For support, contact support@medicalsystem.com or call (555) 123-4567</p>
                </div>
            </div>
    </>
  );
}
export default ModifyReports;