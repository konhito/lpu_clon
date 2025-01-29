const LoginPart = () => {
  return (
    <div className="w-[50%] bg-[#fbf1f1]">
      <div className="flex justify-between pt-18 px-35 items-center">
        <img
          src="https://ums.lpu.in/lpuums/assets/login/img/logos/seal.svg"
          className="h-[80px] "
        />

        <img
          src="https://ums.lpu.in/lpuums/assets/login/img/logos/ums_logo1.svg"
          alt="logo2"
          className="h-[40px] "
        />
      </div>
      <div className="bg-white  rounded-xl shadow-3xl h-[550px] w-[550px] mx-[90px] my-5">
        <div className="p-[60px]">
          <form action="">
            <div className="flex gap-2">
              <label htmlFor="" className="text-[28px]">
                Log in
              </label>
              <select
                name="cars"
                id="cars"
                className="pt-[14.5px] pb-[14.5px] pr-[50px] pl-[25px]  w-[80%] float-left bg-[#fceaea]"
              >
                <option value="volvo">HeadOffice</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="pt-5">
              <input
                type="text"
                placeholder="User ID"
                className="pt-[14.5px] pb-[14.5px] pr-[50px] pl-[25px]  w-[100%]  bg-[#fceaea]"
              />
            </div>
            <div className=" mt-5">
              <input
                type="text"
                placeholder="User ID"
                className="pt-[14.5px] pb-[14.5px] pr-[50px] pl-[25px]  w-[100%]  bg-[#fceaea]"
              />
            </div>
            <div className="pt-5">
              <input
                type="text"
                placeholder="User ID"
                className="pt-[14.5px] pb-[14.5px] pr-[50px] pl-[25px]  w-[100%]  bg-[#fceaea]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPart;
