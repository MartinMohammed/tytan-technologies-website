import React from "react";
import styles from "@/app/ui/sections/tytan-interceptor-section-2/tytan-interceptor-section-2.module.css";
import Carousel from "@/app/ui/components/carousel/carousel";
import { TytanInterceptorSection2Content } from "@/app/lib/content";
import WrapperContainer from "@/app/ui/components/wrapper-container/wrapper-container";

function TytanInterceptorSection2() {
  return (
    <section className={styles.tytan_interceptor_section_2}>
      <WrapperContainer>
        <Carousel items={TytanInterceptorSection2Content.carouselItems} />
      </WrapperContainer>
    </section>
  );
}

export default TytanInterceptorSection2;
