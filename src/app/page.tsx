'use client';
import styles from "./page.module.css";
import {EffectCreative, Mousewheel} from 'swiper/modules';
import Header from "@/app/componets/common/Header";
import About from "@/app/componets/About";
import {Swiper, SwiperSlide} from "swiper/react";
import Skill from "@/app/componets/Skill";
import {Swiper as SwiperType} from 'swiper';
import useUiStore from "@/app/store/useUiStore";
import Project from "@/app/componets/Project";
import Publishing from "@/app/componets/Publishing";
import {useEffect, useRef} from "react";

export default function Home() {
    const { setTabIndex,tabIndex } = useUiStore();
    const swiperRef = useRef<SwiperType | null>(null);

    const handleSlideChange = (swiper:SwiperType) => {
        setTabIndex(swiper['activeIndex']);
    };

    const handleSwiperInit = (swiper: SwiperType) => {
        swiperRef.current = swiper;
    }

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(tabIndex, 300);
        }
    }, [tabIndex]);



  return (
    <div className={styles.page}>
    <Header/>
      <Swiper
          onSwiper={handleSwiperInit}
          grabCursor={true}
          modules={[EffectCreative,Mousewheel]}
          effect="creative"
          mousewheel={{
              releaseOnEdges: true,
              sensitivity: 0.2,
              thresholdDelta: 50,
              thresholdTime: 300,
              forceToAxis: false,
              invert: false,
          }}
          onSlideChange={(swiper) => {handleSlideChange(swiper)}}
          creativeEffect={{
            prev: {
              shadow: false,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          className={styles.swiper_wrap}
      >
          <SwiperSlide>
              <About/>
          </SwiperSlide>
          <SwiperSlide>
              <Skill/>
          </SwiperSlide>
          <SwiperSlide>
              <Publishing/>
          </SwiperSlide>
          <SwiperSlide>
              <Project/>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}
