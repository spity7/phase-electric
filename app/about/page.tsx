import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import Solutions from "@/components/containers/home/Solutions";
import WorkProcess from "@/components/containers/home/WorkProcess";
import CtaArea from "@/components/containers/home-two/CtaArea";
import WorkArea from "@/components/containers/home-two/WorkArea";
import Pricing from "@/components/containers/home-two/Pricing";
import Faq from "@/components/containers/home-two/Faq";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";
import InitAnimations from "@/components/layout/InitAnimations";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="About Us" />
      <Solutions addClass={true} />
      <WorkProcess addClass={true} />
      <CtaArea />
      <WorkArea />
      <Pricing />
      <Faq />
      <SubscribeArea />
      <Footer />
      <InitAnimations />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
