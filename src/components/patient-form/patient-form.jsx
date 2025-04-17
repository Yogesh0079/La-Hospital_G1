// import Header from '../components/general/Header.jsx'
function Form(){
    return(
        <>
        {/* <Header /> */}
        <div className="Form">
            <div className="Form-on-image">
                <form >
                    <b>Patient ID: </b>
                    <input type="text" name="patient-id" id="patient-id" placeholder='Ex: 048535335AB' />
                    <br></br>
                    <b>Symptoms: </b>
                    <input type="textarea" name="symptoms" id="symptoms" placeholder="Ex: Nausea, Cough" />
                    <br></br>
                    <b>Date and Time: </b>
                    <input type="date" name="date-and-time" id="date-and-time" />
                    <br></br>
                    <b>Department: </b>
                    <select>
                    </select>
                </form>
            </div>
        </div>
        </>
    )
}
export default Form