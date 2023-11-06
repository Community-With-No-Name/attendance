import React from 'react'
import router, { useRouter } from 'next/router';
import { LoginType } from '@/Interfaces/Auth';
import { getSchool, login } from '@/api/apiCall';
import { GETSCHOOL, LOGIN_URL } from '@/api/apiUrl';
import { queryKeys } from '@/api/queryKey';
import AuthForm from '@/components/Auth/AuthForm';
import { useQuery, useMutation } from '@tanstack/react-query';
import jwtDecode from 'jwt-decode';
import { useParams } from 'next/navigation';
import { FaEye, FaMailBulk, FaSignInAlt } from "react-icons/fa"
import { WebFormImage, MobileFormImage } from '@/components/Auth/FormImage';
import AuthPages from '@/components/Auth/AuthPages';
export default function loginPage() {
    const router = useRouter();
    const params:{slug: string} = useParams();
    const school = params?.slug;
    const { data } = useQuery({
      queryKey:[queryKeys.getSchool, school],
      queryFn: async () => await getSchool({ url: GETSCHOOL(school) }),
        retry: 2,
        enabled: !!school,
    });
  
    const [schoolData, setSchoolData] = React.useState(data?.data);
    React.useEffect(() => {
      setSchoolData(data?.data);
    }, [data?.data]);
    const [state, setState] = React.useState<LoginType>({
      email: "",
      password: "",
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [event.target.id]: event.target.value });
    };
    const { mutate } = useMutation(login, {
      onSuccess() {
        localStorage.setItem("schoolId", schoolData?.uid);
        localStorage.setItem("schoolName", schoolData?.name);
        localStorage.setItem("schoolLogo", schoolData?.logo);
        if (school) {
          localStorage.setItem("schoolSlug", school.toString());
        }
        const token = localStorage?.getItem("easysch_token");
        const easysch_token: false | "" | { groups: string[] } | null =
          typeof window !== "undefined" && token && jwtDecode(token);
          
        if (easysch_token) {

            window.location.href = "/inactive"
        }
      },
    });
    const submitForm = (e: any) => {
      e.preventDefault();
      mutate({
        url: LOGIN_URL(schoolData?.uid),
        data: {
          username: state.email,
          password: state.password,
          school_id: schoolData?.uid,
        },
      });
    };
  return (
    <div className="grid w-full h-full grid-cols-1 gap-10 sm:grid-cols-2">
        <WebFormImage logo={schoolData?.logo} />
        <div className="flex flex-col justify-center min-h-screen col-span-1 px-4 sm:py-12 sm:px-6 lg:px-8">
          <MobileFormImage logo={schoolData?.logo} name={schoolData?.name} title="Sign In" />
          <AuthForm
            inputs={[
              {
                label: "Phone Number Or Email Address",
                type: "text",
                value: state.email,
                change: handleChange,
                required: true,
                id: "email",
                placeholder: "",
                description:
                "Email address or mobile number attached to your account",
                icon: FaMailBulk,
                disabled: false,
              },
              {
                label: "Password",
                type: "password",
                value: state.password,
                change: handleChange,
                required: true,
                id: "password",
                placeholder: "",
                description: "Password attached to your account",
                icon: FaEye,
                disabled: false,
              },
            ]}
            submit={submitForm}
            url={`/${school}/otp`}
            btn={{
              size: "md",
              value: "Login",
              click: () => {},
              location: "end",
              Icon: FaSignInAlt,
              disabled: false,
              type: "submit",
            }}
          />
        </div>
      </div>
  )
}
