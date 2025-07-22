import {ProjectStyle} from "@/app/style/ProjectStyle";
import {Suspense} from "react";
import {SuspenseImage} from "@/app/lib/Utill";

const Project = () => {
    const projects = [
        {
            title:'sild',
            img:'img/project/sild/sild_0.jpg',
            work:'front-dev',
            description:'웹뷰 기반 의류 쇼핑몰 클라이언트 개발',
            detail:'#vue 2, #pinia,#i18n, #vite',
            isOpen:true,
            readmeContent:{
                title: 'sild',
                summary:`다양한 브랜드 를 한눈에 볼수 있는 의류 쇼핑몰`,
                summaryList:[
                    'sild 에서 다양한 브랜드를 한눈에 볼 수 있는 의류 쇼핑몰 클라이언트 개발 요청',
                    'Lookbook 한곳에서 볼수 있는 특징',
                    '브랜드 랭킹 시스템',
                ],
                background: '모바일 웹뷰 기반 의류 쇼핑몰 이다 보니 이미지 최적화에 신경을 많이 썼습니다. 장바구니와 타임 세일 부분을 API 요청 부분을 어느 시점에서 요청할지 고민이 많았어요. 특히 사용자가 상품을 보는 동안 백그라운드에서 미리 데이터를 로딩할지, 아니면 실제 필요한 시점에 요청할지에 대한 성능 최적화가 주요 과제였습니다. 또한 다양한 브랜드의 룩북을 한 화면에 효율적으로 렌더링하면서도 스크롤 성능을 유지하는 것, 그리고 브랜드 랭킹 시스템의 실시간 업데이트를 구현하는 과정에서 상태 관리의 복잡성을 경험했습니다. Vue2에서 Pinia를 활용한 상태 관리와 i18n을 통한 다국어 지원까지 고려하다 보니 전체적인 아키텍처 설계가 중요한 학습 포인트가 되었습니다.',
                description:`vue2 기반으로 개발한 웹뷰 의류 쇼핑몰 클라이언트입니다. 검색 엔진은 Elasticsearch 를 사용 하였으며,<br />프론트 개발 을 담당 하였으며 사용자 편의를 위해 다국어 지원을 위한 i18n 기능을 포함하고 있습니다.`,
                review:'이미지 최적화 와 장바구니 시스템 과 검색 필터 시스템이 기억에 많이 남는 프로젝트, 그래도 성공적으로 마무리 할 수 있었던 프로젝트 입니다.',
                detailImage:['img/project/sild/sild_0.jpg','img/project/sild/sild_1.jpg','img/project/sild/sild_2.png','img/project/sild/sild_3.jpg'],
                technologyStack: ['Vue2', 'Pinia', 'i18n', 'Vite','kotlin','swift'],
            },
        },
        {
            title:'BankX',
            img:'img/project/bankx/bankx_0.png',
            work:'front-dev',
            backgroundColor: '#F0F0F2',
            description:'웹뷰 어드민 페이지 및 사용자 화면 클라이언트 개발',
            detail:'#vue3 Composition API, #pinia, #i18n, #vite,#w-pay,#naverMapApi',
            isOpen:true,
            readmeContent:{
                title: 'BankX',
                summary:`오프라인 상권을 중심으로 숨겨진혜택 을 찾아주는 금융 서비스`,
                summaryList:[
                    '카드 혜택 정보 통합',
                    '매장 혜택 알림 특징',
                ],
                background:'지도 기반 가장가까운 매장 리스트 보여주는데 있어 시점 요청에 고민이 많았어요. 특히 사용자가 매장을 찾는 동안 백그라운드에서 미리 데이터를 로딩할지, 아니면 실제 필요한 시점에 요청할지에 대한 성능 최적화가 주요 과제였습니다. 또한 사용자 화면과 어드민 페이지의 상태 관리와 데이터 흐름을 효율적으로 설계하는 과정 이 중요한 학습 포인트 가 되었어요.',
                description:`vue3 기반 으로 개발한 웹뷰 금융 서비스 클라이언트입니다. 사용자 화면과 어드민 페이지를 모두 개발하였으며, <br /> 오프라인 상권을 중심으로 숨겨진 혜택을 찾아주는 금융 서비스를 제공하기 위해 W-pay 결제 시스템과 NaverMapApi를 통합하였습니다.`,
                review:'위치 기반 가장 가까운 매장 리스트 노출 과 W-pay 카드 목록 조회 기능이 기억에 많이 남는 프로젝트, 그래도 성공적으로 마무리 할 수 있었던 프로젝트 입니다.',
                detailImage:['img/project/bankx/bankx_0.jpg','img/project/bankx/bankx_1.jpg','img/project/bankx/bankx_2.jpg','img/project/bankx/bankx_3.jpg'],
                technologyStack: ['Vue3 Composition API','Pinia', 'i18n', 'Vite','kotlin','swift','W-pay','NaverMapApi','axios'],
            },
        },
        {
            title:'seemple',
            img:'img/project/seemple/img.png',
            work:'front-dev',
            backgroundColor: '#6A44F2',
            description:'웹뷰 기반 실시간 커뮤니케이션 플랫폼 클라이언트 개발',
            detail:'#vue3 Composition API, #pinia,#vite,#Sendbird',
            isOpen:true,
            readmeContent:{
                title: 'seemple',
                summary:`실시간 커뮤니케이션 미팅 플랫폼`,
                summaryList:[
                    '관심 있는 카테고리를 선택하여 실시간 커뮤니케이션 미팅을 진행할 수 있는 플랫폼',
                    '투표기능 과 실시간 채팅',
                    '실시간 라이브샷'
                ],
                background:'샌드버드 채팅 API 를 활용하여 실시간 채팅 1대1 과 다대다 채팅 방 을 구현 하는데 학습 포인트가 있었습니다, 실시간 라이브 샷 이 주요 과제 였습니다. 사용자가 스크롤 중 새 글이 올라왔을 경우 그리고 새글이 등록 되었을 경우 가 숙제였습니다. 알림 기능 과 커뮤니티 컴포넌트 를 도메인 별로 분리하여 연동 되게 하여 새글 또는 답글이 달렸을 경우 알림을 받을 수 있도록 구현하였습니다. 또한 Pinia 상태 관리 라이브러리를 사용하여 상태 관리를 효율적으로 처리하는 과정이 중요한 학습 포인트가 되었어요. 짧은 기간에 너무 많은 기능 이 있어 바로 개발을 시작 하기 보다 구조 설계 가 핵심 일것 같아서 구조 설계 부터 하였습니다. 공통 부분 과 도메인 별로 컴포넌트를 분리 하여 개발 하였습니다.',
                description:`vue3 기반 으로 개발한 웹뷰 실시간 커뮤니케이션 플랫폼 클라이언트입니다. <br />Sendbird API를 사용하여 실시간 채팅 및 투표 기능을 구현하였으며, Pinia 상태 관리 라이브러리를 사용하였습니다.`,
                review:'짧은기간 매우 많은 기능으로 힘들었지만 샌드버드 API 라는 매우 비싼 API 사용 경험 과 차후 AI 개발자와 딥러닝 기능 을 추가한게 기억에 많이 남는 프로젝트, 그래도 성공적으로 마무리 할 수 있었던 프로젝트',
                detailImage:['img/project/seemple/seemple_0.jpg','img/project/seemple/seemple_1.jpg','img/project/seemple/seemple_2.jpg','img/project/seemple/seemple_3.jpg'],
                technologyStack: ['Vue3 Composition API','Pinia', 'Vite','kotlin','swift','Sendbird API',],
            },
        },
        {
            title:'하루세탁',
            img:'img/project/haru/haru_0.png',
            work:'front-dev',
            backgroundColor: '#447EF2',
            description:'웹뷰 기반 구독 형 맞춤 세탁 서비스 클라이언트 개발',
            detail:'#React, #redux, #i18n,#wepPack,#KG이니시스',
            isOpen:true,
            readmeContent:{
                title: '하루세탁',
                summary:'구독 형 무인 세탁 서비스',
                summaryList:[
                    '맞춤형 세탁',
                    '구독 시스템',
                    '배송 시스템'
                ],
                description:`React 기반으로 개발한 웹뷰 기반 구독 형 무인 세탁 서비스 클라이언트입니다. <br />`,
                background:'정기결제 시스템 구현과 배송 시스템 구현이 주요 과제였습니다. 특히 사용자가 세탁물을 선택하고 배송을 요청하는 과정에서 사용자 경험을 최적화하는 것이 중요했습니다. Redux를 사용하여 상태 관리를 효율적으로 처리하는 과정이 중요한 학습 포인트가 되었어요.',
                review:'정기결제 시스템 과 배송 시스템 구현이 기억에 많이 남는 프로젝트',
                detailImage:['img/project/haru/haru_0.jpg','img/project/haru/haru_1.jpg','img/project/haru/haru_2.jpg','img/project/haru/haru_3.jpg'],
                technologyStack: ['React','redux toolkit', 'Vite','kotlin','swift','KG이니시스',],
            },
        },
        {
            title:'땡큐마켓',
            img:'img/project/tankyou/tankyou_0.jpg',
            work:'front-dev',
            description:'웹뷰 기반 중고상품 및 리퍼 상품 거래 플랫폼 최저가 가격 변동 자동화 시스템 클라이언트 개발',
            detail:'#React, #redux, #i18n,#vite,#TossPayments',
            isOpen:true,
            readmeContent:{
                title: '땡큐마켓',
                summary:'중고 및 리퍼 상품 거래 플랫폼',
                summaryList:[
                    '중고 상품 및 리퍼 상품 거래 플랫폼',
                    '인기에 따른 최저가 가격 변동',
                ],
                description:`vue2 기반 에서 React 로 이전 하여 개발한 웹뷰 중고상품 및 리퍼 상품 거래 플랫폼 클라이언트입니다. <br />TossPayments 결제 시스템을 통합하였으며, 실시간 가격변동 시스템`,
                background:'기존 땡큐마켓 에서 React 로 재개발 요청 해당 프로젝트 도 쇼핑몰이다 보니 이미지 최적화 에 중점을 두었고 장바구니 와 찜목록 등 재사용 되는 부분이 많아 구조설계 에 중점 을 두었고 가격변동에 따른 상태 표현이 주요 과제였습니다. 특히 사용자가 상품을 찜하거나 장바구니에 추가하는 동안 백그라운드에서 실시간으로 가격 변동을 반영하는 과정이 중요했습니다.',
                review:'클라이언트 가 확장 가능성 과 버전 관리가 용이 하도록 재개발 요청 으로 구조 설계 에 중점 을 두고 실시간 가격변동 차트 비즈니즈 로직을 구현 하는게 생각에 많이 남는 프로젝트',
                detailImage:['img/project/tankyou/tankyou_0.jpg','img/project/tankyou/tankyou_1.jpg','img/project/tankyou/tankyou_2.jpg','img/project/tankyou/tankyou_3.jpg'],
                technologyStack: ['React','redux toolkit', 'Vite','kotlin','swift','TossPayments','WebSocket'],
            },
        },
        {
            title:'학술대회 live',
            img:'img/project/liveto/liveto_logo.jpg',
            work:'front-dev',
            description:'웹앱 뇌신경재활학회 live 스트리밍 플랫폼 클라이언트 개발',
            detail:'#React, #redux, #i18n,#vite,#sketch,#Unreal twinMotion virtual stage',
            isOpen:true,
            readmeContent:{
                title: '학술대회 live',
                summary:'뇌신경재활학회 live 스트리밍 플랫폼',
                summaryList:[
                    '출석체크 기능',
                    '라이브 스트리밍',
                ],
                background:'기존 레거시 HTML 기반 과 ASP 인터프리터 로 개발된 학술대회 live 스트리밍 플랫폼을 React 기반으로 이전 하여 개발하였습니다. 코로나 19 이후 비대면 학술대회가 증가함에 따라, 따분한 사이트 를 3D 기술을 사용하여 버츄얼 스테이지 구현과 의류기기 부스장 을 구현 하여 홍보 하였습니다.',
                review:'전에 배웠둰 그래픽 기술 을 이용 하여 가상 부스 와 라이브 스트리밍 플랫폼을 구현 하여 학술대회에 참여한 회원들에게 새로운 경험을 제공 할 수 있었던 프로젝트',
                detailImage:['img/project/live/live_1.jpg','img/project/live/live_2.jpg','img/project/live/live_3.jpg'],
                technologyStack: ['React','redux toolkit','i18n', 'sketch','Unreal twinMotion virtual stage'],
            },
        },
        {
            title:'LX하우시스 후정산 시스템',
            img:'img/project/lg/lx.png',
            work:'#front-dev',
            description:'LX하우시스 후정산 시스템 front-end & DevOn NCD 개발',
            isOpen:true,
            readmeContent:{
                title: 'LX하우시스 ACAP 후정산',
                summary:'뇌신경재활학회 live 스트리밍 플랫폼',
                summaryList:[
                    '후정산 기능',
                    'DevOn NCD',
                ],
                background:'대기업 프로젝트 SI  LG CNS 에서 만든 DevON NCD 프로그램을 사용하여 개발 하는게 숙제 였습니다. 코딩 없는 개발 을 뜻하는 걸로 다이어그램 으로 논리 개발 을 하는것인데 DB 또한 Qury 로 가져와야 하는데 엄청난 데이터 테이블 을 파악 하는게 숙제 였습니다. 또한 후정산 시스템 이다 보니 데이터 정확성 이 중요 하여 테스트 케이스 작성 및 검증이 중요 했습니다.',
                review:'엄청난 DB 테이블 수 와  CNS DevON NCD 프로그램을 이용한게 기억에 많이 남는 프로젝트',
                detailImage:['img/project/lg/lg_1.jpg','img/project/lg/lg_2.jpg','img/project/lg/lg_3.jpg'],
                technologyStack: ['Rui.js','JAVA MyBatis BizActor']
            },
            detail:'#Rui.js,#DevOn NCD',
        },
        {
            title:'Samsung S1 device',
            img:'img/project/samsung/samsung.jpg',
            work:'#front-dev',
            description:'삼성 s1 자사 디바이스 등록 및 검사 시스템 풀스텍 개발',
            isOpen:false,
            readmeContent:{
                title: 'Samsung S1 device',
                summary:'Samsung S1 device 기기관리',
                background:'자사 ClassReact 템플릿 과 JAVA JPA 와 QuryDsL 를 사용한 ORM 방식 백엔드 에 대한 지식이 부족 하여 학습이 필요 했습니다.',
                review:'삼성 자사 에서 만든 React 템플릿 이 매우 완성도가 높았고 JAVA JPA 프레임 워크 의 경험 이 부족 하여 매일 공부 하면서 기존 Redux 방식이 아닌 여러개의 스토어가 있는 Flux 방식 으로 개발 했던 기억이 많이 남는 프로젝트',
                detailImage:['img/project/live/live_1.jpg','img/project/live/live_2.jpg','img/project/live/live_3.jpg'],
                technologyStack: ['Rui.js','JAVA MyBatis BizActor']
            },
            detail:'#Class React,#Flux,#Java(JPA),#postgreSQL,#QueryDSL,#Flux',
        },
        {
            title:'Pickko admin',
            img:'img/project/pickko/pickko.png',
            work:'#front-dev',
            backgroundColor: '#052440',
            description:'작심 스터디카페 어드민 시스템 개발',
            isOpen:true,
            readmeContent:{
                title: 'Pickko admin',
                summary:'Pickko admin 점주 화면',
                background:'Php CodeIgniter 와  _template 을 사용하여 개발 하였으며, 기존 코드 의 히스토리 부제 가 숙제 였습니다.',
                review:'기존 코드 의 히스토리 를 알고 있는 분이 없어 처음에는 막막 하였으나, 기존 코드 를 분석 하여 버그 수정 기능 개발 이 기억에 많이 남는 프로젝트',
                detailImage:['img/project/pickko/pickko_1.jpg','img/project/pickko/pickko_2.jpg'],
                technologyStack: ['Php CodeIgniter','MySql','_template','Redis'],
            },
            detail:'#PHP(codeigniter),#_template,#MySQL,#Redis',
        },
        {
            title:'Pickko kiosk',
            img:'img/project/zaksim/zaksim.png',
            work:'#front-dev',
            backgroundColor: '#101E26',
            description:'작심 스터디카페 키오스크 및 자동문 입 출입 제어 시스템 개발',
            isOpen:true,
            readmeContent:{
                title: 'Pickko kiosk',
                summary:'Pickko kiosk',
                background:'기존 Php 로 만들어진 키오스크 를 React 로 이전 개발 과 Suprema API 지문 인식 자동문 연동 과 예전 메카트로닉스 경험 을 살려 usb 릴레이 도입 하여 출입문 연동 을 구현 하여 더 폭넓은 서비스 를 제공 할 수 있었습니다. 기존 NICE VAN 결제 시스템 뿐만 아니라 KCP 결제 시스템도 통합하여 결제 기능을 확장하였습니다. 일렉트론 을 사용하여 데스크탑 애플리케이션으로 개발하였으며, Mobx 상태 관리 라이브러리를 사용하여 상태 관리를 효율적으로 처리하는 과정이 중요한 학습 포인트가 되었어요.',
                review:'기존 서버사이드렌더링 방식 을 모던 프론트엔드 개발 방식으로 이전 하여 개발 하였으며, 메카트로닉스 경험 을 살려 usb 릴레이 도입 하여 출입문 연동 과 영수증 을 구현 하여 더 폭넓은 서비스 를 제공 할 수 있었던 프로젝트 그리고 일렉트론 자동 업데이트 기능 구현 이 기억에 많이 남는 프로젝트',
                detailImage:['img/project/pickko_kiosk/pickko_kiosk_1.jpg','img/project/pickko_kiosk/pickko_kiosk_2.jpg'],
                technologyStack: ['React','Mobx','Electron','KCP','NICE','Suprema API','VAN','SerialPort/HID Relay IoT'],
            },
            detail:'#React,#Mobx,#Electron,#KCP,#NICE,#Suprema API,#VAN,#SerialPort/HID Relay IoT',
        },
        {
            title:'Pickko App',
            backgroundColor:'#1B51F2',
            img:'img/project/pickkoApp/pickko_app.png',
            work:'#front-dev',
            description:'작심 스터디 카페 이용권 구매 및 입출입 앱 개발',
            isOpen:true,
            readmeContent:{
                title: 'Pickko App',
                summary:'Pickko App',
                background:'기존 Php 로 만들어진 앱 에서 이용권 구매 부재 와 결제 부재 로 인하여 신규 앱 개발,매장 설정에 따른 이용권 노출 과 사용자 화면에 맞게 각 매장의 배치도 표현이 숙제 였습니다. React Query 를 사용하여 데이터 요청 및 캐싱을 효율적으로 처리하는 과정이 중요한 학습 포인트가 되었어요. 또한, 사용자 경험을 최적화하기 위해 Vite를 사용하여 빠른 빌드와 핫 모듈 리플레이스먼트를 구현하였습니다.',
                review:'위치 기반 으로 매장 문 제어 와 매장별 이용 권 구매 기능 그리고 React Query 를 사용하여 데이터 요청 및 캐싱을 효율적으로 처리하는 과정이 구현 위치 기반 같은 경우 매장환경이 안좋은곳 이 있어 직접 매장에 찾아가 테스트 했던게 기억에 많이 남는 프로젝트',
                detailImage:['img/project/pickko_app/pickko_app_0.png','img/project/pickko_app/pickko_app_1.jpg','img/project/pickko_app/pickko_app_2.jpg','img/project/pickko_app/pickko_app_3.jpg'],
                technologyStack: ['React','Mobx','TanStack Query','TypeScript','Electron','KCP','NICE','Suprema API','VAN','SerialPort/HID Relay IoT','Flutter'],
            },
            detail:'#React,#Vite,#WepSocket,#PortOne,#Flutter,#Flutter Web,#TanStack Query,#TypeScript',
        },
        {
            title:'케어링',
            img:'img/project/caring/Caring.png',
            work:'#front-dev',
            description:'웹앱 노인 복지 서비스 기사 억굴인식 관리 어드민 및 클라이언트 개발',
            isOpen:true,
            readmeContent:{
                title: '케어링',
                summary:'케어링',
                background:'자사 케어링 서비스  기사님 얼굴 인식 관리 시스템 개발, 기사님 출결 관리 시스템 개발',
                review:'복지센터 에서 수기로 관리 하던 기사님 얼굴 인식 관리 시스템 을 개발 하여 기사님 출결 관리 시스템 을 자동화 할 수 있었던 프로젝트 테스트 후 상용 화 되기전 서버 비용 문제로 서비스 중단',
                detailImage:['img/project/care/care_0.jpg','img/project/care/care_1.jpg'],
                technologyStack: ['React','redux','TypeScript','TanStack Query','Face API'],
            },
            detail:'#React,#Vite,#Face API,#TypeScript,#TanStack Query',
        },
    ];
    return(
        <ProjectStyle>
            <div className='inner'>
                <h2 className='sect_title'>Project</h2>
                <ul className='project_list'>
                    {
                        projects.map((item, index) => {
                            return(
                                <li className='project_item' key={index}>
                                    <div className='image_con' style={item.backgroundColor ? {backgroundColor: item.backgroundColor} : undefined}>
                                        <Suspense fallback={'이미지 로딩중...'}>
                                            <SuspenseImage src={item.img} alt={item.title}/>
                                        </Suspense>
                                    </div>
                                    <span className='project_title'>{item.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </ProjectStyle>
    )
}
export default Project