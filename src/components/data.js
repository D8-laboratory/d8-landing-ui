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
  title: "Benefits for your company",
  desc: "Garantizaremos que la solución brindada creara un impacto disruptivo que hara evolucionar la forma en que se realizan las actividades manuales dando transición a una automatización",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand the problem",
      desc: "Realizamos un acompañamiento durante toda la transición de la solución con el fin de ser lo mas preciso con nuestros clientes y sus oportunidades de mejora",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Accurate Solution",
      desc: "Las soluciones dadas se adaptan a las circunstancias y al entorno, con el fin de garantizar que sea una única solución sin necesidada de iteraciones post entrega",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Build on what is established",
      desc: "Nuestro producto ofrece una integración limpia con los sistemas existentes, con el fin de crear una capa adicional que se encargara de mejorar y automatizar lo que ya esta creado",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
