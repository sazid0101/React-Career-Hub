import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const allJobs = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)
    const SingleJob = allJobs.find(job => job.id === intId)
    const {job_description,job_responsibility,educational_requirements,experiences,job_title,job_type,location,salary,    } =SingleJob
    return (
            <div>
                <h2 className="text-4xl font-bold flex justify-center pb-10">Job Details</h2>
                <div className=" grid grid-cols-4 gap-4">
                <div className="border col-span-3 p-5">
                    <p className="pb-2"><span className="font-bold">Job Description:</span>  {job_description}</p>

                    <p className="pb-2"><span className="font-bold">Job Responsibility:</span>  {job_responsibility}</p>

                    <p className="pb-2"><span className="font-bold">Educational Requirement:</span> <br />{educational_requirements}</p>

                    <p><span className="font-bold">Experience: <br /></span> {experiences}</p>
                </div>
                <div className="border ">
                    <h3>rf</h3>
                </div>
            </div>
            </div>
        
    );
};

export default JobDetails;