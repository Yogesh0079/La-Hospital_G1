import BloodReport from "../components/TestResults/BloodReport";
import XRayReport from "../components/TestResults/XRayReport";
import FullBodyReport from "../components/TestResults/FullBodyReport";
function TestResults ({testId, userId}) {
    return (
        <BloodReport testId={testId} userId={userId}/>
    )
}
export default TestResults;