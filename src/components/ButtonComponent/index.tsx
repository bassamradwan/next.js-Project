import { useRouter } from "next/navigation";

import { useTranslations } from "next-intl";
import { ButtonShared } from "./Style.button";
interface buttonProps {
  title: string;
}

const MyButtonComponent = (props: buttonProps) => {
  const t = useTranslations("ads");
  return (
<ButtonShared>{props.title}</ButtonShared>
  );
};

export default MyButtonComponent;
