import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job
    return (
        <div className="card bg-base-200 shadow-lg mt-10">
            <figure>
                <img className='w-40' src={logo} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='font-bold'>
                    <button className='border border-green-400 rounded mr-2 px-5 py-1'>{remote_or_onsite}</button>
                    <button className='border border-green-400 rounded px-5 py-1'>{job_type}</button>
                </div>

                <div>
                    <div className='flex items-center gap-1'>
                        <CiLocationOn />
                        <p>{location}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <MdAttachMoney />
                        <p>{salary}</p>
                    </div>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;