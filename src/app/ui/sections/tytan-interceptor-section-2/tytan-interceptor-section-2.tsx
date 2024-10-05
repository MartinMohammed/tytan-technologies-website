import React from "react";
import styles from "@/app/ui/sections/tytan-interceptor-section-2/tytan-interceptor-section-2.module.css";
import Carousel from "@/app/ui/components/carousel/carousel";
import { TytanInterceptorSection2Content } from "@/app/lib/content";
import ContentWrapper from "@/app/ui/components/content-wrapper/content-wrapper";

function TytanInterceptorSection2() {
  return (
    <section
      className={styles.tytan_interceptor_section_2}
      id="tytan-interceptor-section-2"
    >
      <ContentWrapper {...TytanInterceptorSection2Content.ContentWrapper}>
        <Carousel items={TytanInterceptorSection2Content.carouselItems} />
      </ContentWrapper>
    </section>
  );
}

export default TytanInterceptorSection2;
