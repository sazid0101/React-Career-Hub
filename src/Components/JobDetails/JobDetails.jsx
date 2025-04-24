import { useLoaderData, useParams } from "react-router-dom";
import { MdAttachMoney,MdSubtitles,MdLocalPhone,MdOutlineEmail,MdLocationOn} from "react-icons/md";

const JobDetails = () => {
    const allJobs = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)
    const SingleJob = allJobs.find(job => job.id === intId)
    const {job_description,job_responsibility,educational_requirements,experiences,job_title,job_type,salary,location} =SingleJob
    return (
            <div>
                <h2 className="text-4xl font-bold flex justify-center pb-10 mt-10">Job Details</h2>
                <div className=" grid grid-cols-4 gap-4">

                <div className="border col-span-3 p-5 bg-slate-300 rounded-lg">
                    <p className="pb-2"><span className="font-bold">Job Description:</span>  {job_description}</p>

                    <p className="pb-2"><span className="font-bold">Job Responsibility:</span>  {job_responsibility}</p>

                    <p className="pb-2"><span className="font-bold">Educational Requirement:</span> <br />{educational_requirements}</p>

                    <p><span className="font-bold">Experience: <br /></span> {experiences}</p>
                    <p><span className="font-bold">Job Type: </span>{job_type}</p>
                </div>


                <div className="border p-5 bg-gray-200 rounded-lg">
                    <h3 className="font-bold flex justify-center pb-1">Job Details</h3>
                    <div className="border-t-2 border-gray-300 pt-4"></div>

                    <div className='flex items-center gap-1 pb-1'><MdAttachMoney />
                    <p>Salary: {salary}</p> </div>

                    <div className='flex items-center gap-1 pb-1'><MdSubtitles />
                    <p>Job Title: {job_title}</p> </div>

                    
                    <h3 className="font-bold flex justify-center pb-1">Contact Information</h3>
                    <div className="border-t-2 border-gray-300 pt-4"></div>

                    <div className='flex items-center gap-1 pb-1'><MdLocalPhone />
                    <p>Phone: {SingleJob.contact_information.phone}</p> </div>
                    
                    <div className='flex items-center gap-1 pb-1'><MdOutlineEmail />
                    <p>Email: {SingleJob.contact_information.email}</p> </div>

                    <div className='flex items-center gap-1 pb-1'><MdLocationOn />
                    <p>Address: {location}</p> </div>

                    <button className="btn btn-outline btn-accent mt-20 px-10 py-2 text-xl w-full">Apply</button>
                </div>
            </div>
            </div>
        
    );
};

export default JobDetails;