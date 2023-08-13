import { useRouter } from "next/navigation";

import { useTranslations } from "next-intl";
import { ButtonShared } from "./Style.button";
import { Spin } from "antd";
interface buttonProps {
  title: string;
}


const MyButtonComponent = (props: buttonProps) => {
  const t = useTranslations("ads");
  return (
<>

<Spin><ButtonShared>{props.title}</ButtonShared></Spin>
</>
  );
};

export default MyButtonComponent;
