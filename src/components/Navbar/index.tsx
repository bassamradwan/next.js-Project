import NavbarWithDrawer from "@/components/NavbarWithDrawer";
import { useTranslations } from "next-intl";

interface NavbarProps {}
const Navbar = (props: NavbarProps) => {
  const t = useTranslations("Index");

  return (
    <>
    <NavbarWithDrawer />   
    </>
  );
};
export default Navbar;
