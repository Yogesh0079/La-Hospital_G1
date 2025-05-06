import BloodReport from "../components/TestResults/BloodReport";
import XRayReport from "../components/TestResults/XRayReport";
import FullBodyReport from "../components/TestResults/FullBodyReport";
import {useParams} from 'react-router-dom';
function TestResults ({userId}) {
    const params = useParams(); // Get the test ID from the URL parameters
    return (
        <BloodReport testId={params.testId} userId={localStorage.getItem('uid')}/>
    )
}
export default TestResults;