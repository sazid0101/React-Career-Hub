import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [showAllData, setShowAllData] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div >
            <h2 className="text-4xl font-bold text-center pb-5">Featured Jobs: {jobs.length}</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-10 ">
                {
                    jobs.slice(0, showAllData).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="mt-5 flex justify-center">
                <button onClick={()=> setShowAllData(jobs.length)} className="btn btn-success text-white">Show All</button></div>
        </div>
    );
};

export default FeaturedJobs;