import {ProjectStyle} from "@/app/style/ProjectStyle";
import {Suspense, useEffect, useRef} from "react";
import {SuspenseImage} from "@/app/lib/Utill";
import { motion } from "motion/react";
import useUiStore from "@/app/store/useUiStore";
import {useRouter} from "next/navigation";

const Project = () => {
    const { tabIndex } = useUiStore();
    const router = useRouter();
    const projects = [
        {
            title:'sild',
            link:'sild',
            img:'img/project/sild/sild_0.jpg',
            work:'front-dev',
            description:'웹뷰 기반 의류 쇼핑몰 클라이언트 개발',
            detail:'#vue 2, #pinia,#i18n, #vite',
            isOpen:true,
        },
        {
            title:'BankX',
            link:'BankX',
            img:'img/project/bankx/bankx_0.png',
            work:'front-dev',
            backgroundColor: '#F0F0F2',
            description:'웹뷰 어드민 페이지 및 사용자 화면 클라이언트 개발',
        },
        {
            title:'seemple',
            link:'seemple',
            img:'img/project/seemple/img.png',
            work:'front-dev',
            backgroundColor: '#6A44F2',
            description:'웹뷰 기반 실시간 커뮤니케이션 플랫폼 클라이언트 개발',
        },
        {
            title:'하루세탁',
            link:'haru',
            img:'img/project/haru/haru_0.png',
            work:'front-dev',
            backgroundColor: '#447EF2',
            description:'웹뷰 기반 구독 형 맞춤 세탁 서비스 클라이언트 개발',
        },
        {
            title:'땡큐마켓',
            link:'ThankyouMarket',
            img:'img/project/tankyou/tankyou_0.jpg',
            work:'front-dev',
            description:'웹뷰 기반 중고상품 및 리퍼 상품 거래 플랫폼 최저가 가격 변동 자동화 시스템 클라이언트 개발',
        },
        {
            title:'학술대회 live',
            link:'liveTo',
            img:'img/project/liveto/liveto_logo.jpg',
            work:'front-dev',
            description:'웹앱 뇌신경재활학회 live 스트리밍 플랫폼 클라이언트 개발',
        },
        {
            title:'LX하우시스 후정산 시스템',
            link:'lxhausys',
            img:'img/project/lg/lx.png',
            work:'#front-dev',
            description:'LX하우시스 후정산 시스템 front-end & DevOn NCD 개발',
        },
        {
            title:'Samsung S1 device',
            link:'samsung',
            img:'img/project/samsung/samsung.jpg',
            work:'#front-dev',
            description:'삼성 s1 자사 디바이스 등록 및 검사 시스템 풀스텍 개발',
        },
        {
            title:'Pickko admin',
            link:'pickkoadmin',
            img:'img/project/pickko/pickko.png',
            work:'#front-dev',
            backgroundColor: '#052440',
            description:'작심 스터디카페 어드민 시스템 개발',
        },
        {
            title:'Pickko kiosk',
            link:'pickkokiosk',
            img:'img/project/zaksim/zaksim.png',
            work:'#front-dev',
            backgroundColor: '#101E26',
            description:'작심 스터디카페 키오스크 및 자동문 입 출입 제어 시스템 개발',
        },
        {
            title:'Pickko App',
            link:'pickkoapp',
            backgroundColor:'#1B51F2',
            img:'img/project/pickkoApp/pickko_app.png',
            work:'#front-dev',
            description:'작심 스터디 카페 이용권 구매 및 입출입 앱 개발',
        },
        {
            title:'케어링',
            link:'caring',
            img:'img/project/caring/Caring.png',
            work:'#front-dev',
            description:'웹앱 노인 복지 서비스 기사 억굴인식 관리 어드민 및 클라이언트 개발',
        },
    ];

    const handleDetailView = (project: any) => {
        const supportsViewTransition = 'startViewTransition' in document;
        if (supportsViewTransition) {
            (document as any).startViewTransition(() => {
                router.push(`/detail/${project.link}`);
            });
        } else {
            router.push(`/detail/${project.link}`);
        }
    }

    return(
        <ProjectStyle>
                  <motion.div className='inner'
                              initial={{ scale: 0 }}
                              animate={tabIndex === 3 ? { scale: 1 } : { scale: 0 }}
                              transition={{
                                  duration: 0.6,
                                  ease: "backOut",
                                  scale: {
                                      type: "spring",
                                      stiffness: 260,
                                      damping: 20
                                  }
                              }}

                  >
                <h2 className='sect_title'>Project</h2>
                <ul className='project_list'>
                    {
                        projects.map((item, index) => {
                            return(
                                <motion.li className='project_item' key={index} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} onClick={() => handleDetailView(item)} >
                                    <div className='image_con' style={item.backgroundColor ? {backgroundColor: item.backgroundColor} : undefined}>
                                        <Suspense fallback={'이미지 로딩중...'}>
                                            <SuspenseImage src={item.img} alt={item.title}/>
                                        </Suspense>
                                    </div>
                                    <span className='project_title'>{item.title}</span>
                                </motion.li>
                            )
                        })
                    }
                </ul>
                  </motion.div>
        </ProjectStyle>
    )
}
export default Project