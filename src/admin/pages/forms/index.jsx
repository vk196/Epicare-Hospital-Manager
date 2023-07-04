import { Outlet } from "react-router-dom";

//images
import nurse from "../../../assets/images/nurse.jpg";
import logo from "../../../assets/icons/epicare-light-logo.svg";

//components
import SignUpBanner from "../../../components/SignUpBanner";

const AdminLogin = () => {
  return (
    <main className="h-screen">
      <section className="w-[50%] h-screen relative left-0 flex items-start justify-center">
        <section className="w-[60%] mx-auto pt-[74px]">
          <img className="w-[150px] mb-[8rem]" src={logo} alt="" />
          <Outlet />
        </section>
      </section>
      <SignUpBanner img={nurse} />
    </main>
  );
};

export default AdminLogin;
