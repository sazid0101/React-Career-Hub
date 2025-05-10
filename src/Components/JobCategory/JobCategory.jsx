import { useEffect, useState } from "react";
import SingleJobCategory from "../SingleJobCategory/SingleJobCategory";

const JobCategory = () => {
    const [jobsCategory,setJobsCategory] = useState([])

    useEffect(()=>{

        fetch('categories.json')
        .then(Response => Response.json())
        .then(data => setJobsCategory(data))
    },[])
    
    return (
        <div>
            <h2 className="text-4xl font-bold text-center pb-5">Job Category List</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-4 mx-auto w-fit m-10">
                {
                    jobsCategory.map(job => <SingleJobCategory job={job} key ={job.id}></SingleJobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategory;