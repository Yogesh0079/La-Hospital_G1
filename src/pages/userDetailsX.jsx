import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/userdetails.css";
import Grid from '@mui/material/Grid';
import { Box, Chip ,FormControl, Button, Checkbox, Radio, Select, TextField, RadioGroup, FormGroup, InputLabel, MenuItem, Autocomplete, FormLabel, FormControlLabel} from "@mui/material";
import HorizontalLinearStepper from "../components/general/Stepper";
import { prescriptionsMap } from "../scripts/mappings";

const steps = ["Basic Details", "Medical Details", "Medical History","Emergency Contacts"];
let finData;
function StepComponentFunction (activeStep) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        relation: "",
        address: "",
        emergency_contact: "",
        contact: "",
        gender: "",
        blood_group: "",
        dob: Date.now(),
        weight: "",
        height: "",
        prescriptions: [],
        new: false
    });
    // const handleSubmit () => {updateUser(formData)};
    const handleChange = (e) => {
        console.log(formData)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        finData = formData
    };
    const [value, setValue] = useState('');
    const [prescriptions, setPrescriptionValue] = useState([]);
    const handlePrescriptionAdd = () => {
        if (!prescriptions.includes(value)) {
            setPrescriptionValue([...prescriptions, value])
            console.log(prescriptions)
        }
    }
    if (activeStep == 0) {
        return (
        <React.Fragment>
        <Grid container spacing={{xs: 1, sm: 1, md: 2}} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={{md: 6, xs: 3, sm: 3}}>
                <TextField
                    id="input-fname"
                    label="First Name"
                    name="first_name"
                    variant="outlined"
                    value={formData.first_name}
                    onChange={handleChange}
                    fullWidth
                    />
            </Grid>
            <Grid size={{md: 6, xs: 3, sm: 3}}>
                <TextField
                    id="input-lname"
                    label="Last Name"
                    name="last_name"
                    variant="outlined"
                    value={formData.last_name}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid size={{md: 6, xs: 3, sm: 3}}>
                <TextField
                    id="contact"
                    label="Contact"
                    name="contact"
                    variant="outlined"
                    type="text"
                    value={formData.contact}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid size={{md: 6, xs: 3, sm: 3}}>
                <TextField
                    id="email"
                    label="Email"
                    name="email"
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid size={{md: 12, xs: 6, sm: 6}}>
                    <TextField
                            id="address"
                            label="Address"
                            name="address"
                            variant="outlined"
                            value={formData.address}
                            onChange={handleChange}
                            fullWidth
                    />
            </Grid>
            <Grid size={{md: 6, xs: 3, sm: 3}}>
                <FormControl>
                    <FormLabel id="radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="radio-buttons-group-label"
                        defaultValue="female"
                        id="gender"
                        onChange={handleChange}
                        value={formData.gender}
                        name="gender"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid size={{md: 6, xs: 3, sm: 3}}>
                <FormLabel id="dob-label">Date of Birth</FormLabel>
                <input onChange={handleChange} id="dob" className="bg-inherit relative t-2" type="date" value={formData.dob} name="dob"/>
            </Grid>
        </Grid>
        </React.Fragment>
    )
    }
    else if (activeStep == 1) {
        return (
            <React.Fragment>
                <Grid container spacing={{xs: 1, sm: 1, md: 2}} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid size={{md: 6, xs: 3, sm: 3}}>
                    <TextField
                        id="weight"
                        label="Weight (kg)"
                        name="weight"
                        variant="outlined"
                        type="number"
                        value={formData.weight}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid size={{md: 6, xs: 3, sm: 3}}>
                    <TextField
                        id="height"
                        label="Height (cm)"
                        name="height"
                        variant="outlined"
                        type="number"
                        value={formData.height}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid size={{md: 6, xs: 3, sm: 3}}>
                    <FormControl className="md:w-1/2 sm:w-1" fullWidth>
                        <InputLabel id="select-label-bg">Blood Group</InputLabel>
                        <Select
                            labelId="select-label-bg"
                            id="select-bg"
                            name="blood_group"
                            value={formData.blood_group}
                            onChange={handleChange}
                            label="Blood Group"
                        >
                            <MenuItem value="A+">A+</MenuItem>
                            <MenuItem value="A-">A-</MenuItem>
                            <MenuItem value="B+">B+</MenuItem>
                            <MenuItem value="B-">B-</MenuItem>
                            <MenuItem value="AB+">AB+</MenuItem>
                            <MenuItem value="AB-">AB-</MenuItem>
                            <MenuItem value="O+">O+</MenuItem>
                            <MenuItem value="O-">O-</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={{md: 6, xs: 3, sm: 3}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Diet Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.diet}
                            name="diet"
                            label="Diet Type"
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Vegetarian</MenuItem>
                            <MenuItem value={1}>Non-Vegetarian</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={{md: 6, xs: 3, sm: 3}}>
                    <FormControl>
                        <FormLabel id="smoke-radio-label">Do you Smoke?</FormLabel>
                        <RadioGroup
                            aria-labelledby="smoke-radio-label"
                            defaultValue="nsmoke"
                            onChange={handleChange}
                            value={formData.smoke}
                            name="smoke-radio"
                        >
                            <FormControlLabel value="nsmoke" control={<Radio />} label="Never" />
                            <FormControlLabel value="msmoke" control={<Radio />} label="Less than thrice a week" />
                            <FormControlLabel value="fsmoke" control={<Radio />} label="More than thrice a week" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid size={{md: 6, xs: 3, sm: 3}}>
                    <FormControl>
                        <FormLabel id="drink-radio-label">Do you Drink?</FormLabel>
                        <RadioGroup
                            aria-labelledby="drink-radio-label"
                            defaultValue="ndrink"
                            onChange={handleChange}
                            value={formData.drink}
                            name="drink-radio"
                        >
                            <FormControlLabel value="ndrink" control={<Radio />} label="Never" />
                            <FormControlLabel value="mdrink" control={<Radio />} label="Less than thrice a week" />
                            <FormControlLabel value="fdrink" control={<Radio />} label="More than thrice a week" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                </Grid>
            </React.Fragment>
        )
    }
    else if (activeStep == 2) {
        return (
            <React.Fragment>
                <Grid container spacing={{xs: 1, sm: 1, md: 2}} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid className="flex flex-row" size={{md: 12, xs: 6, sm: 6}}>
                    <FormLabel id="prescriptions-label">Current Prescriptions</FormLabel>
                    <Autocomplete
                        disablePortal
                        options={prescriptionsMap}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        renderInput={(params) => <TextField {...params} label="Search Prescription " />}
                        fullWidth
                    />
                    <Button onClick={handlePrescriptionAdd}>Add</Button>
                    </Grid>
                    <Grid size={{md: 12, xs: 6, sm: 6}}>
                        {
                            prescriptions.map(element => {
                               return <Chip label={element} />
                            })
                        }
                    </Grid>
                    <hr />
                    <Grid size={{md: 12, xs: 6, sm: 6}}>
                        <FormGroup>
                            <Box className="flex flex-column flex-wrap justify-around">
                            <FormControlLabel control={<Checkbox name="nut_allergy" />} label="Peanuts" />
                                <FormControlLabel control={<Checkbox name="gluten_allergy" />} label="Wheat" />
                                <FormControlLabel control={<Checkbox name="meat_allergy" />} label="Meat" />
                                <FormControlLabel control={<Checkbox name="lactose_intolerant" />} label="Lactose" />
                                <FormControlLabel control={<Checkbox name="soy_allergy" />} label="Soy" />
                                <FormControlLabel control={<Checkbox name="egg_allergy" />} label="Eggs" />
                                <FormControlLabel control={<Checkbox name="fish_allergy" />} label="Fish" />
                                <FormControlLabel control={<Checkbox name="shellfish_allergy" />} label="Shellfish" />
                            </Box>
                        </FormGroup>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
    else if (activeStep == 3) {
        return (
            <React.Fragment>
                <Grid container spacing={{xs: 1, sm: 1, md: 2}} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid size={{md: 6, xs: 3, sm: 3}}>
                        <TextField
                            id="input-rname"
                            label="Full Name"
                            name="relation"
                            variant="outlined"
                            value={formData.relation}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 6, xs: 3, sm: 3}}>
                        <TextField
                            id="input-emergency"
                            label="Contact Number"
                            name="emergency_contact"
                            variant="outlined"
                            value={formData.emergency_contact}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

const UserDetails = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        console.log("SUbmite Called!!!")
        e.preventDefault();
        fetch(`http://localhost:5000/updateUser/${window.location.pathname.split("/").pop()}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(finData),
        });
        console.log("Form Data Submitted: ", finData);
    };

    return (
        <div className="w-100 details-form">
            <h2 className="form-heading">Let's Get to Know You. A bit more..</h2>
            <Box sx={{ flexGrow: 1 }}>
                    {/* <Box sx={{ width: '100%' }}> */}
                    <HorizontalLinearStepper
                        steps={steps}
                        StepComponentFunction={(stepNumber) => StepComponentFunction(stepNumber)}
                        handleSubmit={handleSubmit}
                    />
                    {/* </ Box> */}
            </Box>
            </div>
    );
};

export default UserDetails;
