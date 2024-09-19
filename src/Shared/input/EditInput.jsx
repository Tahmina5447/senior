
const EditInput = ({ label, type, register, defaultValue }) => {
    return (
        <div className="flex flex-col items-start w-full mt-3">
            <label
                htmlFor="otp"
                className="mb-1 font-medium text-[13px] text-[#1B2559]"
            >
                {label}
            </label>
            <input
            defaultValue={defaultValue}
                className="py-[18px] px-4 text-text-primary placeholder:text-[#A3AED0] h-[50px]  rounded-[16px] w-full text-base outline-none   border-[1px] focus:border-primary"
                type={type}
                id="otp"
                {...register}
            />

        </div>
    );
};

export default EditInput;