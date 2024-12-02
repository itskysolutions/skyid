import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";

export const AddNewVSO = () => {
  const { control } = useForm();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container text-center max-w-4xl px-4">
        <h3 className="text-2xl font-bold mb-6">Add New VSO</h3>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-2xl space-y-4">
            <div className="mb-8 flex flex-wrap justify-center gap-4">
                <div className="w-full md:w-[325px]">
                    <CustomInput
                    name="firstName"
                    label="First Name"
                    style="w-full"
                    asterisk
                    control={control as never}
                    />
                </div>
                <div className="w-full md:w-[320px]">
                    <CustomInput
                    name="lastName"
                    label="Last Name"
                    style="w-full"
                    asterisk
                    control={control as never}
                    />
                </div>
            </div>
            <CustomInput
              name="email"
              label="Email"
              asterisk
              control={control as never}
            />
            <CustomInput
              name="Phone"
              label="Phone"
              asterisk
              control={control as never}
            />
            <CustomInput
              name="address"
              label="Address"
              asterisk
              control={control as never}
            />
            <CustomInput
              name="state"
              label="State"
              asterisk
              control={control as never}
            />
            <CustomInput
              name="NIN"
              label="NIN"
              asterisk
              control={control as never}
            />
            <div className="mt-5 mb-5">
                <a href="/success" className="no-underline"><button
                className="bg-[#515151] text-white rounded-md py-2 w-full max-w-2xl"
                >
                Submit
                </button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
