
export interface ProjectData {
    summary: string;
    summaryList: string[];
    images: string[];
    description: string;
    technologyStack: string[];
}

export type ProjectKey = 'sild' | 'BankX' | 'seemple' | 'haru' | 'ThankyouMarket' | 'liveTo' | 'lxhausys' | 'samsung' | 'pickkoadmin' | 'pickkokiosk' | 'pickkoapp' | 'caring';


export const PROJET_DATA: Record<ProjectKey, ProjectData> =     {
    sild:{
        summary:`다양한 브랜드 를 한눈에 볼수 있는 의류 쇼핑몰`,
        summaryList:[
            'sild 에서 다양한 브랜드를 한눈에 볼 수 있는 의류 쇼핑몰 클라이언트 개발 요청',
            'Lookbook 한곳에서 볼수 있는 특징',
            '브랜드 랭킹 시스템',
        ],
        images:['img/project/sild/sild_1.jpg','img/project/sild/sild_2.jpg','img/project/sild/sild_3.jpg'],
        description:`vue2 기반으로 개발한 웹뷰 의류 쇼핑몰 클라이언트입니다. 검색 엔진 Elasticsearch 과 lookbook 시스템이 포인트 인 프로젝트 입니다.,<br />프론트 개발 을 담당 하였습니다.`,
        technologyStack: ['Vue2', 'Pinia', 'i18n', 'Vite','kotlin','swift'],
    },
    BankX:{
        summary:`오프라인 상권을 중심으로 숨겨진혜택 을 찾아주는 금융 서비스`,
        summaryList:[
            '카드 혜택 정보 통합',
            '매장 혜택 알림 특징',
        ],
        images:['img/project/bankx/bankx_3.jpg','img/project/bankx/bankx_1.jpg','img/project/bankx/bankx_2.jpg'],
        description:`vue3 기반 으로 개발한 웹뷰 금융 서비스 클라이언트입니다. 사용자 화면과 어드민 페이지를 모두 개발하였으며, <br /> 오프라인 상권을 중심으로 숨겨진 혜택을 찾아주는 금융 서비스를 제공하기 위해 W-pay 결제 시스템과 NaverMapApi를 통합하였습니다.`,
        technologyStack: ['Vue3 Composition API','Pinia', 'i18n', 'Vite','W-pay','NaverMapApi'],
    },
    seemple:{
        summary:`실시간 커뮤니케이션 미팅 플랫폼`,
        summaryList:[
            '관심 있는 카테고리를 선택하여 실시간 커뮤니케이션 미팅을 진행할 수 있는 플랫폼',
            '투표기능 과 실시간 채팅',
            '실시간 라이브샷'
        ],
        images:['img/project/seemple/seemple_1.jpg','img/project/seemple/seemple_2.jpg','img/project/seemple/seemple_3.jpg'],
        description:`샌드버드 채팅 API 를 활용하여 실시간 채팅 1대1 과 다대다 채팅 방 미팅,실시간 라이브 샷 vue3 기반 으로 개발한 웹뷰 실시간 커뮤니케이션 플랫폼 클라이언트입니다.`,
        technologyStack: ['Vue3 Composition API','Pinia', 'Vite','kotlin','swift','Sendbird API'],
    },
    haru:{
        summary:`구독 형 무인 세탁 서비스`,
        summaryList:[
            '맞춤형 세탁',
            '구독 시스템',
            '배송 시스템'
        ],
        images:['img/project/haru/haru_1.jpg','img/project/haru/haru_2.jpg','img/project/haru/haru_3.jpg'],
        description:`정기결제 시스템 구현과 배송 시스템 React 기반으로 개발한 웹뷰 기반 구독 형 무인 세탁 서비스 클라이언트입니다.`,
        technologyStack: ['React','redux toolkit', 'Vite','kotlin','swift','KG이니시스',],
    },
    ThankyouMarket:{
        summary:`중고 및 리퍼 상품 거래 플랫폼`,
        summaryList:[
            '중고 상품 및 리퍼 상품 거래 플랫폼',
            '인기에 따른 최저가 가격 변동',
        ],
        images:['img/project/tankyou/tankyou_1.jpg','img/project/tankyou/tankyou_2.jpg'],
        description:`확장 가능성 과 버전 관리가 용이 하도록 재개발 요청 으로 구조 설계 에 중점 을 두고 실시간 가격변동 차트, 비즈니즈 로직을 구현<br /> 라이브러리 가 상대적으로 많은 React 기반 과 Compound component 디자인 패턴을 적용한 중고 및 리퍼 상품 거래 플랫폼 클라이언트입니다.`,
        technologyStack: ['React','redux toolkit', 'Vite','kotlin','swift','TossPayments','WebSocket'],
    },
    liveTo:{
        summary:`뇌신경재활학회 live 스트리밍 플랫폼`,
        summaryList:[
            '출석체크 기능',
            '라이브 스트리밍',
        ],
        images:['img/project/liveto/live_1.jpg','img/project/liveto/live_2.jpg','img/project/liveto/live_3.jpg'],
        description:`기존 레거시 HTML 기반 과 ASP 로 개발된 학술대회 live 스트리밍 플랫폼을 React 기반으로 마이그레이션, <br/> 코로나 19 이후 비대면 학술대회가 증가함에 따라, 따분한 사이트 를 3D 기술을 사용하여 버츄얼 스테이지 구현과 의류기기 부스장 을 구현`,
        technologyStack: ['React','redux toolkit','i18n', 'sketch','Unreal twinMotion virtual stage'],
    },
    lxhausys:{
        summary:`LX하우시스 ACAP 후정산`,
        summaryList:[
            '후정산 기능',
            'DevOn NCD',
        ],
        images:['img/project/lg/lg_1.jpg','img/project/lg/lg_2.jpg','img/project/lg/lg_3.jpg'],
        description:`대기업 프로젝트 SI  LG CNS 에서 만든 DevON NCD 프로그램을 사용하여 개발`,
        technologyStack: ['Rui.js','JAVA MyBatis BizActor'],
    },
    samsung:{
        summary:`Samsung S1 device 기기관리`,
        summaryList:[
            '기기 관리 시스템',
        ],
        images:['img/project/samsung/samsung.jpg',],
        description:`자사 ClassReact 템플릿 과 JAVA JPA 와 QuryDsL 를 사용한 ORM 방식 백엔드 기반 기기 관리 시스템 개발`,
        technologyStack: ['Class React','JAVA JPA,QueryDSL','Flux'],
    },
    pickkoadmin:{
        summary:`pickko 어드민 페이지`,
        summaryList:[
            '배치도 설정',
            '이용권 설정',
            '스터디룸 예약',
        ],
        images:['img/project/pickko/pickko_1.jpg','img/project/pickko/pickko_2.jpg','img/project/pickko/pickko_3.jpg'],
        description:`php 기반 어드민 페이지 와 매니저 기능 이 있는 페이지 키오스크 화면도 같이 포함 되어 있는 시스템`,
        technologyStack: ['php','_template','mysql','javascript'],
    },
    pickkokiosk:{
        summary:`pickko 키오스크 페이지`,
        summaryList:[
            '이용권 구매',
            '자리 이동',
            '문열림',
            '지문 인식',
        ],
        images:['img/project/zaksim/kiosk_1.jpg','img/project/zaksim/kiosk_2.jpg','img/project/zaksim/kiosk_3.jpg'],
        description:`php 기반 대신 API 분리 아키텍쳐로 분리 하여 개발한 키오스크 페이지 일렉트론 기반 위에 동작하게끔 설계 하였습니다.`,
        technologyStack: ['React','Mobx','Electron','KCP','NICE','Suprema API','VAN','SerialPort/HID Relay IoT'],
    },
    pickkoapp:{
        summary:`pickko 키오스크 페이지`,
        summaryList:[
            '이용권 구매',
            '자리 이동',
            '스터디룸 예약',
        ],
        images:['img/project/pickkoApp/pickko_app_1.jpg','img/project/pickkoApp/pickko_app_2.jpg','img/project/pickkoApp/pickko_app_3.jpg'],
        description:`기존 Php 로 만들어진 앱 에서 이용권 구매 부재 와 결제 부재 로 인하여 신규 앱 개발`,
        technologyStack: ['React','tanstackQuery','flutter','port one pg','redux','Vite'],
    },
    caring:{
        summary:`케어링 얼굴 인식 관리 시스템`,
        summaryList:[
            '얼굴 인식',
            '출결 관리',
        ],
        images:['img/project/caring/care_1.jpg',],
        description:`복지센터 에서 수기로 관리 하던 기사님 얼굴 인식 관리 시스템 을 개발 React 기반 으로 개발 하였습니다.`,
        technologyStack: ['#React','#Vite','#Face API','#TypeScript','#TanStack Query'],
    },
}