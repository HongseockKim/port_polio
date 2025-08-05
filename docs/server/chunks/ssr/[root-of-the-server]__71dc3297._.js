module.exports = {

"[project]/src/app/style/ProjectDetailStyle.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ProjectDetailClientStyle": ()=>ProjectDetailClientStyle,
    "ProjectDetailStyle": ()=>ProjectDetailStyle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
'use client';
;
const ProjectDetailStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProjectDetailStyle",
    componentId: "sc-f131bae5-0"
})`
    width: 100%;height: 100%;position: fixed;top:0;left:50%;background: #fff;overflow: auto;transform: translateX(-50%);
  max-width: 1500px;margin: 0 auto;display: flex;flex-direction: column;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const ProjectDetailClientStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProjectDetailStyle__ProjectDetailClientStyle",
    componentId: "sc-f131bae5-1"
})`
  padding: 20px;overflow:hidden;overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
  .project_detail_header{
    width: 100%;display: flex;justify-content: space-between;align-items: center;padding: 20px 0;position: sticky;top:20px;z-index: 100;background: #fff;
    .project_detail_back_button{
      flex: 0 0 150px;padding: 10px 20px;border: none;border-radius: 5px;cursor: pointer;display: flex;align-items: center;justify-content: center;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);background: transparent;
    }
    .project_name{
      flex: 0 0 calc(100% - 150px);font-size: 60px;font-weight: bold;color: #333;text-align: center;align-items: center;height: 100%;
    }
  }
  .project_content{
    max-width: 1200px;margin: 0 auto;
    .sub_title{
      font-size: 34px;margin-bottom: 20px;
    }
    .data{
      margin-top: 100px;
      p{
        font-size: 20px;
      }
      .project_detaion_image_swiper{
        width: 100%;text-align: center;
        .project_detaion_image_swiper_slide{
          border-radius: 20px;overflow: hidden;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);background: #fff;
        }
      }
      &.summary{
        .summary_list{
          margin-top: 30px;padding-left: 20px;
          .summary_list_item{
            list-style: disc;font-size: 20px;
            &:not(:last-child){
              margin-bottom: 10px;
            }
          }
        }
      }
      &.description{
        p{
          line-height: 25px;text-wrap: pretty;
        }
      }
      &.technology{
        .technology_list{
          display: flex;flex-wrap: wrap;gap: 10px;margin-top: 20px;
          .technology_item{
            background: #f0f0f0;padding: 10px 15px;border-radius: 5px;font-size: 18px;
          }
        }
      }
    }
    .text_content_wrap{
      padding: 0 50px;
    }
  }
`;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/detail/data/PROJET_DATA.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PROJET_DATA": ()=>PROJET_DATA
});
const PROJET_DATA = {
    sild: {
        summary: `다양한 브랜드 를 한눈에 볼수 있는 의류 쇼핑몰`,
        summaryList: [
            'sild 에서 다양한 브랜드를 한눈에 볼 수 있는 의류 쇼핑몰 클라이언트 개발 요청',
            'Lookbook 한곳에서 볼수 있는 특징',
            '브랜드 랭킹 시스템'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/sild/sild_1.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/sild/sild_2.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/sild/sild_3.jpg`
        ],
        description: `vue2 기반으로 개발한 웹뷰 의류 쇼핑몰 클라이언트입니다. 검색 엔진 Elasticsearch 과 lookbook 시스템이 포인트 인 프로젝트 입니다.,<br />프론트 개발 을 담당 하였습니다.`,
        technologyStack: [
            'Vue2',
            'Pinia',
            'i18n',
            'Vite',
            'kotlin',
            'swift'
        ]
    },
    BankX: {
        summary: `오프라인 상권을 중심으로 숨겨진혜택 을 찾아주는 금융 서비스`,
        summaryList: [
            '카드 혜택 정보 통합',
            '매장 혜택 알림 특징'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/bankx/bankx_3.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/bankx/bankx_1.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/bankx/bankx_2.jpg`
        ],
        description: `vue3 기반 으로 개발한 웹뷰 금융 서비스 클라이언트입니다. 사용자 화면과 어드민 페이지를 모두 개발하였으며, <br /> 오프라인 상권을 중심으로 숨겨진 혜택을 찾아주는 금융 서비스를 제공하기 위해 W-pay 결제 시스템과 NaverMapApi를 통합하였습니다.`,
        technologyStack: [
            'Vue3 Composition API',
            'Pinia',
            'i18n',
            'Vite',
            'W-pay',
            'NaverMapApi'
        ]
    },
    seemple: {
        summary: `실시간 커뮤니케이션 미팅 플랫폼`,
        summaryList: [
            '관심 있는 카테고리를 선택하여 실시간 커뮤니케이션 미팅을 진행할 수 있는 플랫폼',
            '투표기능 과 실시간 채팅',
            '실시간 라이브샷'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/seemple/seemple_1.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/seemple/seemple_2.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/seemple/seemple_3.jpg`
        ],
        description: `샌드버드 채팅 API 를 활용하여 실시간 채팅 1대1 과 다대다 채팅 방 미팅,실시간 라이브 샷 vue3 기반 으로 개발한 웹뷰 실시간 커뮤니케이션 플랫폼 클라이언트입니다.`,
        technologyStack: [
            'React',
            'Redux',
            'Vite',
            'Sendbird API'
        ]
    },
    haru: {
        summary: `구독 형 무인 세탁 서비스`,
        summaryList: [
            '맞춤형 세탁',
            '구독 시스템',
            '배송 시스템'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/haru/haru_1.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/haru/haru_2.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/haru/haru_3.jpg`
        ],
        description: `정기결제 시스템 구현과 배송 시스템 React 기반으로 개발한 웹뷰 기반 구독 형 무인 세탁 서비스 클라이언트입니다.`,
        technologyStack: [
            'React',
            'redux toolkit',
            'Vite',
            'kotlin',
            'swift',
            'KG이니시스'
        ]
    },
    ThankyouMarket: {
        summary: `중고 및 리퍼 상품 거래 플랫폼`,
        summaryList: [
            '중고 상품 및 리퍼 상품 거래 플랫폼',
            '인기에 따른 최저가 가격 변동'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/tankyou/tankyou_1.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/tankyou/tankyou_2.jpg`
        ],
        description: `확장 가능성 과 버전 관리가 용이 하도록 재개발 요청 으로 구조 설계 에 중점 을 두고 실시간 가격변동 차트, 비즈니즈 로직을 구현<br /> 라이브러리 가 상대적으로 많은 React 기반 과 Compound component 디자인 패턴을 적용한 중고 및 리퍼 상품 거래 플랫폼 클라이언트입니다.`,
        technologyStack: [
            'React',
            'redux toolkit',
            'Vite',
            'kotlin',
            'swift',
            'TossPayments',
            'WebSocket'
        ]
    },
    liveTo: {
        summary: `뇌신경재활학회 live 스트리밍 플랫폼`,
        summaryList: [
            '출석체크 기능',
            '라이브 스트리밍'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/liveto/live_1.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/liveto/live_2.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/liveto/live_3.jpg`
        ],
        description: `기존 레거시 HTML 기반 과 ASP 로 개발된 학술대회 live 스트리밍 플랫폼을 React 기반으로 마이그레이션, <br/> 코로나 19 이후 비대면 학술대회가 증가함에 따라, 따분한 사이트 를 3D 기술을 사용하여 버츄얼 스테이지 구현과 의류기기 부스장 을 구현`,
        technologyStack: [
            'React',
            'redux toolkit',
            'i18n',
            'sketch',
            'Unreal twinMotion virtual stage'
        ]
    },
    lxhausys: {
        summary: `LX하우시스 ACAP 후정산`,
        summaryList: [
            '후정산 기능',
            'DevOn NCD'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/lg/lg_1.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/lg/lg_2.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/lg/lg_3.jpg`
        ],
        description: `대기업 프로젝트 SI  LG CNS 에서 만든 DevON NCD 프로그램을 사용하여 개발`,
        technologyStack: [
            'Rui.js',
            'JAVA MyBatis BizActor'
        ]
    },
    samsung: {
        summary: `Samsung S1 device 기기관리`,
        summaryList: [
            '기기 관리 시스템'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/samsung/samsung.jpg`
        ],
        description: `자사 ClassReact 템플릿 과 JAVA JPA 와 QuryDsL 를 사용한 ORM 방식 백엔드 기반 기기 관리 시스템 개발`,
        technologyStack: [
            'Class React',
            'JAVA JPA,QueryDSL',
            'Flux'
        ]
    },
    pickkoadmin: {
        summary: `pickko 어드민 페이지`,
        summaryList: [
            '배치도 설정',
            '이용권 설정',
            '스터디룸 예약'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/pickko/pickko_1.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/pickko/pickko_2.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/pickko/pickko_3.jpg`
        ],
        description: `php 기반 어드민 페이지 와 매니저 기능 이 있는 페이지 키오스크 화면도 같이 포함 되어 있는 시스템`,
        technologyStack: [
            'php',
            '_template',
            'mysql',
            'javascript'
        ]
    },
    pickkokiosk: {
        summary: `pickko 키오스크 페이지`,
        summaryList: [
            '이용권 구매',
            '자리 이동',
            '문열림',
            '지문 인식'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/zaksim/kiosk_1.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/zaksim/kiosk_2.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/zaksim/kiosk_3.jpg`
        ],
        description: `php 기반 대신 API 분리 아키텍쳐로 분리 하여 개발한 키오스크 페이지 일렉트론 기반 위에 동작하게끔 설계 하였습니다.`,
        technologyStack: [
            'React',
            'Mobx',
            'Electron',
            'KCP',
            'NICE',
            'Suprema API',
            'VAN',
            'SerialPort/HID Relay IoT'
        ]
    },
    pickkoapp: {
        summary: `pickko 작심 앱`,
        summaryList: [
            '이용권 구매',
            '자리 이동',
            '문열림',
            '스터디룸 예약'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/pickkoApp/pickko_app_1.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/pickkoApp/pickko_app_2.jpg`,
            `${("TURBOPACK compile-time value", "/")}img/project/pickkoApp/pickko_app_3.jpg`
        ],
        description: `기존 Php 로 만들어진 앱 에서 이용권 구매 부재 와 결제 부재 로 인하여 신규 앱 개발`,
        technologyStack: [
            'React',
            'ㅆanstackQuery',
            'flutter',
            'port one pg',
            'redux',
            'Vite'
        ]
    },
    caring: {
        summary: `케어링 얼굴 인식 관리 시스템`,
        summaryList: [
            '얼굴 인식',
            '출결 관리'
        ],
        images: [
            `${("TURBOPACK compile-time value", "/")}img/project/caring/care_1.jpg`
        ],
        description: `복지센터 에서 수기로 관리 하던 기사님 얼굴 인식 관리 시스템 을 개발 React 기반 으로 개발 하였습니다.`,
        technologyStack: [
            '#React',
            '#Vite',
            '#Face API',
            '#TypeScript',
            '#TanStack Query'
        ]
    }
};
}),
"[project]/src/app/lib/Utill.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SuspenseImage": ()=>SuspenseImage,
    "imageLoader": ()=>imageLoader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const imageLoader = (src)=>{
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(src);
        img.onerror = ()=>reject(new Error(`Failed to load ${src}`));
        img.src = src;
    });
};
const SuspenseImage = ({ src, alt, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: alt,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/app/lib/Utill.tsx",
        lineNumber: 18,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/detail/[link]/ProjectDetailClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ProjectDetailClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$ProjectDetailStyle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/style/ProjectDetailStyle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$detail$2f$data$2f$PROJET_DATA$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/detail/data/PROJET_DATA.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$Utill$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/Utill.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$cards$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCards$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/effect-cards.mjs [app-ssr] (ecmascript) <export default as EffectCards>");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function ProjectDetailClient({ link }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const projectData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$detail$2f$data$2f$PROJET_DATA$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJET_DATA"][link];
    const [sanitizedDescription, setSanitizedDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
        if (projectData?.description) {
            __turbopack_context__.r("[project]/node_modules/dompurify/dist/purify.es.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i).then((DOMPurify)=>{
                setSanitizedDescription(DOMPurify.default.sanitize(projectData.description));
            });
        }
    }, [
        projectData
    ]);
    const handleBack = ()=>{
        router.back();
    };
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$ProjectDetailStyle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectDetailClientStyle"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "project_detail_header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "project_detail_back_button",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
                                fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "project_name",
                            children: link
                        }, void 0, false, {
                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "project_content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "로딩 중..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
            lineNumber: 39,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$ProjectDetailStyle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectDetailClientStyle"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project_detail_header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBack,
                        className: "project_detail_back_button",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "project_name",
                        children: link
                    }, void 0, false, {
                        fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project_content",
                children: projectData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "data",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                                className: "project_detaion_image_swiper",
                                effect: 'cards',
                                grabCursor: true,
                                cardsEffect: {
                                    rotate: true,
                                    perSlideRotate: 6,
                                    slideShadows: false,
                                    perSlideOffset: 20
                                },
                                modules: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$cards$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCards$3e$__["EffectCards"]
                                ],
                                children: projectData.images.map((item, index)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                        className: "project_detaion_image_swiper_slide",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                                            fallback: '이미지 로딩 중...',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$Utill$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuspenseImage"], {
                                                src: item,
                                                className: "project_image",
                                                alt: `Project image ${index + 1}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                                lineNumber: 85,
                                                columnNumber: 53
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                            lineNumber: 84,
                                            columnNumber: 49
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                        lineNumber: 83,
                                        columnNumber: 45
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                lineNumber: 68,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                            lineNumber: 67,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text_content_wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "summary data",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "sub_title",
                                            children: "SUMMARY"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                            lineNumber: 99,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: projectData.summary
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                            lineNumber: 100,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "summary_list",
                                            children: projectData.summaryList.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "summary_list_item",
                                                    children: item
                                                }, index, false, {
                                                    fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                            lineNumber: 101,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                    lineNumber: 98,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "description data",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "sub_title",
                                            children: "DESCRIPTION"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                            lineNumber: 108,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            dangerouslySetInnerHTML: {
                                                __html: sanitizedDescription
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                            lineNumber: 109,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                    lineNumber: 107,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "technology data",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "sub_title",
                                            children: "TECHNOLOGY"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                            lineNumber: 114,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "technology_list",
                                            children: projectData.technologyStack.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "technology_item",
                                                    children: [
                                                        "#",
                                                        tech
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                            lineNumber: 115,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                                    lineNumber: 113,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                            lineNumber: 97,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "해당 프로젝트에 대한 정보가 없습니다."
                }, void 0, false, {
                    fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                    lineNumber: 126,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/detail/[link]/ProjectDetailClient.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__71dc3297._.js.map