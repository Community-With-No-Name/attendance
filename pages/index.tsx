import AuthPages from "@/components/Auth/AuthPages";
import Input from "@/components/FormFields/Input";
import SelectComp from "@/components/SelectComp";
import Image from "next/image";

export default function Home() {
  const handleClick = null;
  return (
    <AuthPages>
      <div>
        <div className=" flex flex-col justify-start gap-2  border-b-2 py-4 ">
          <div className=" text-xl font-bold ">
            Welcome Back to Musa-School{" "}
          </div>
          <div className=" text-lg font-normal">
            Here are some insights into your daily activities
          </div>
        </div>
        <div className=" flex justify-between mt-5">
          <div>
            {" "}
            <Input
              label=""
              type="name"
              value={""}
              change={handleClick}
              id="1"
              placeholder="Input Name"
              description=""
              disabled={false}
              required
            ></Input>
          </div>
          <div> <SelectComp/></div>
        </div>
      </div>
    </AuthPages>
  );
}
