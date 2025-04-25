import bannerImg from '../../assets/assets/images/user.png'
const Banner = () => {
    return (
        <div className ="grid grid-cols-2 bg-slate-100 mt-5 mb-10 rounded-2xl">
            <div className ="col-span-1 pl-20 pt-20">
                <h2 className='text-5xl font-bold'>One Step <br/> Closer To Your <br/> <span className='text-teal-700'>Dream Job</span></h2>

                <p className='pt-5 pb-5'>Explore thousands of job opportunities with all the ,<br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>

                <button className="btn btn-outline btn-success">Get Started</button>
            </div>

            <div>
                <img src={bannerImg} alt=""  />
            </div>
        </div>
    );
};

export default Banner;