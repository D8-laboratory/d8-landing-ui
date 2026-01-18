import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { TranslatedText } from "@/components/client/TranslatedText";
import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "benefits.title",
  desc: "benefits.description",
  image: benefitOneImg,
  bullets: [
    {
      title: "benefits.benefit1",
      desc: "benefits.benefit1description",
      icon: <FaceSmileIcon />,
    },
    {
      title: "benefits.benefit2",
      desc: "benefits.benefit2description",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "benefits.benefit3",
      desc: "benefits.benefit3description",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "benefits2.title",
  desc: "benefits2.description",
  image: benefitTwoImg,
  bullets: [
    {
      title: "benefits2.benefit1",
      desc: "benefits2.benefit1description",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "benefits2.benefit2",
      desc: "benefits2.benefit2description",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
       title: "benefits2.benefit3",
      desc: "benefits2.benefit3description",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
