const SingleJobCategory = ({ job }) => {
    const { logo, category_name, availability } = job
    return (
        <div className="ml-10 p-5 bg-teal-400 rounded-lg text-white">
            <div className="flex justify-center">
                <img src={logo} alt="" />
            </div>
            <p className="font-bold pt-5">{category_name}</p>
            <p>{availability}</p>
        </div>
    );
};

export default SingleJobCategory;