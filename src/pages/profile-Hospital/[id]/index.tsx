import Banner from "@/components/Banners/GeneralBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileHospitalComponent from "@/components/ProfileHospital";

const ProfileHospital = () => {
  return (
    <>
      <Navbar />
      <Banner title="Profile" subtitle="Home/Profile" />
      <ProfileHospitalComponent />
      <Footer />
    </>
  );
};


export default ProfileHospital;
