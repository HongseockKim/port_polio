(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/page.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "page": "page-module___8aEwW__page",
  "swiper_wrap": "page-module___8aEwW__swiper_wrap",
});
}),
"[project]/src/app/style/HeaderStyle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeaderStyle": ()=>HeaderStyle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: fixed;top: 0;left: 50%;transform: translateX(-50%); width: 100%;height: 150px;box-sizing: border-box;display: flex;justify-content: flex-start;align-items: center;\n  padding: 20px 50px;max-width: 1920px;margin: 0 auto;\n  .header_title {\n    color: #1a1a1a; font-size: clamp(24px, 8vw, 150px);margin-right: 100px;\n  }\n\n  .header__menu {\n    display: flex;justify-content: flex-start;align-items: center;gap: 20px;\n\n    .header_item {\n      font-size: 1.5vw;cursor: pointer;color: #1a1a1a;\n      &.selected {\n        color: #508ff3;\n      }\n    }\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const HeaderStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].header.withConfig({
    displayName: "HeaderStyle",
    componentId: "sc-f9c70d9a-0"
})(_templateObject());
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/store/useUiStore.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useUiStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        tabIndex: 0,
        setTabIndex: (index)=>set({
                tabIndex: index
            })
    }));
const __TURBOPACK__default__export__ = useUiStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/componets/common/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$HeaderStyle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/style/HeaderStyle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/useUiStore.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Header() {
    _s();
    const headerItemList = [
        {
            title: 'About',
            link: '#about'
        },
        {
            title: 'Skill',
            link: '#skill'
        },
        {
            title: 'Publishing',
            link: '#Publishing'
        },
        {
            title: 'Project',
            link: '#project'
        }
    ];
    const { tabIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const handleMenuClick = (index)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setState({
            tabIndex: index
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$HeaderStyle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderStyle"], {
        className: 'header',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "header_title",
                children: "FRONT DEV"
            }, void 0, false, {
                fileName: "[project]/src/app/componets/common/Header.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "header__menu",
                children: headerItemList.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "header_item ".concat(tabIndex === index ? 'selected' : ''),
                        onClick: ()=>handleMenuClick(index),
                        children: item.title
                    }, index, false, {
                        fileName: "[project]/src/app/componets/common/Header.tsx",
                        lineNumber: 36,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/componets/common/Header.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/componets/common/Header.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Header, "FXPR8T7Gwu/VPWy7PBOz0+bcJsM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/style/AboutStyle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AboutStyle": ()=>AboutStyle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;height: 100%;\n    .inner{\n     .about_list{\n       margin-top: 50px;\n       .about_item{\n         &:not(:last-child){\n           margin-bottom: 50px;\n         }\n         span{\n           font-size: 1.5vw;\n           &.about_icon{\n           margin-right: 20px;\n           }\n           &.about_text{\n             margin-right: 10px;\n           }\n         }\n       }\n     } \n    }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const AboutStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AboutStyle",
    componentId: "sc-55ee0479-0"
})(_templateObject());
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/componets/About.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$at$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AtSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/at-sign.js [app-client] (ecmascript) <export default as AtSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.js [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$AboutStyle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/style/AboutStyle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/useUiStore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const About = ()=>{
    _s();
    const { tabIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const aboutMe = [
        {
            text: 'NickName',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {}, void 0, false, {
                fileName: "[project]/src/app/componets/About.tsx",
                lineNumber: 12,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            value: 'RedStone'
        },
        {
            text: 'BirthDay',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {}, void 0, false, {
                fileName: "[project]/src/app/componets/About.tsx",
                lineNumber: 17,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            value: '92.06.10'
        },
        {
            text: 'Address',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {}, void 0, false, {
                fileName: "[project]/src/app/componets/About.tsx",
                lineNumber: 22,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            value: '서울특별시 광진구'
        },
        {
            text: 'E-mail',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$at$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AtSign$3e$__["AtSign"], {}, void 0, false, {
                fileName: "[project]/src/app/componets/About.tsx",
                lineNumber: 27,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            value: 'gusduswk610@gmail.com'
        },
        {
            text: 'Education',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {}, void 0, false, {
                fileName: "[project]/src/app/componets/About.tsx",
                lineNumber: 32,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            value: '제주관광대학교 ( 메카트로닉스 )'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{}
    }["About.useEffect"], [
        tabIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$AboutStyle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutStyle"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "inner",
            initial: {
                scale: 0
            },
            animate: tabIndex === 0 ? {
                scale: 1
            } : {
                scale: 0
            },
            transition: {
                duration: 0.6,
                ease: "backOut",
                scale: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "sect_title",
                    children: "ABOUT"
                }, void 0, false, {
                    fileName: "[project]/src/app/componets/About.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "about_list",
                    children: aboutMe.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "about_item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "about_icon",
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/componets/About.tsx",
                                    lineNumber: 62,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "about_text",
                                    children: item.text
                                }, void 0, false, {
                                    fileName: "[project]/src/app/componets/About.tsx",
                                    lineNumber: 63,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                ":",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "about_value",
                                    children: item.value
                                }, void 0, false, {
                                    fileName: "[project]/src/app/componets/About.tsx",
                                    lineNumber: 64,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/componets/About.tsx",
                            lineNumber: 61,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/componets/About.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/componets/About.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/componets/About.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(About, "n3kaINaNhCtxbs9ZDszGZ/ma6CI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/style/SkillStyle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SkillStyle": ()=>SkillStyle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;height: 100%;\n  .skill_list{\n    width: 100%;display: flex;justify-content: flex-start;align-items: flex-start;gap: 20px;margin-top: 50px;flex-wrap: wrap;\n    .skill_list_items{\n      font-size: 1.5vw;flex: 0 0 calc(100% / 3 - 20px);box-sizing: border-box;\n      &:nth-child( n + 4){\n        margin-top: 20px;\n      }\n      .skill_icon{\n        margin-right: 20px;\n      }\n      .skill_sub_list{\n        margin-top: 20px;\n        .skill_sub_item{\n          font-size: 1.2vw;margin-top: 10px;\n        }\n      }\n    }\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const SkillStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SkillStyle",
    componentId: "sc-b31c8ba8-0"
})(_templateObject());
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/componets/Skill.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$SkillStyle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/style/SkillStyle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$braces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Braces$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/braces.js [app-client] (ecmascript) <export default as Braces>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.js [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hammer.js [app-client] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/useUiStore.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Skill = ()=>{
    _s();
    const { tabIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const skill = {
        language: {
            name: 'Language',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$braces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Braces$3e$__["Braces"], {}, void 0, false, {
                fileName: "[project]/src/app/componets/Skill.tsx",
                lineNumber: 12,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            list: [
                {
                    name: 'JavaScript',
                    level: 'Advanced',
                    color: '#F2CF1D'
                },
                {
                    name: 'JAVA',
                    level: 'Beginners',
                    color: '#4A738C',
                    textColor: '#ffffff'
                },
                {
                    name: 'PHP',
                    level: 'Beginners',
                    color: '#6F77A6',
                    textColor: '#ffffff'
                }
            ]
        },
        frontend: {
            name: 'FrontEnd',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {}, void 0, false, {
                fileName: "[project]/src/app/componets/Skill.tsx",
                lineNumber: 35,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)),
            list: [
                {
                    name: 'React.js',
                    color: '#79DCF2'
                },
                {
                    name: 'Next.js',
                    color: '#000000',
                    textColor: '#ffffff'
                },
                {
                    name: 'TypeScript',
                    color: '#116EBF'
                },
                {
                    name: 'Vue.js',
                    color: '#3B8C6E',
                    textColor: '#ffffff'
                },
                {
                    name: 'Electron',
                    color: '#A0EAF2'
                }
            ]
        },
        backend: {
            name: 'Backend',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {}, void 0, false, {
                fileName: "[project]/src/app/componets/Skill.tsx",
                lineNumber: 63,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)),
            list: [
                {
                    name: 'Node.js',
                    color: '#84BF04',
                    textColor: '#ffffff'
                },
                {
                    name: 'Spring Boot',
                    color: '#6AA63F',
                    textColor: '#ffffff'
                },
                {
                    name: 'CodeIgniter',
                    color: '#F23005'
                }
            ],
            descript: "백엔드 기술 스택의 경우, 전문 백엔드 개발자 수준의 깊이 있는 지식은 아니지만<br/>프론트엔드 개발자로서 전체 개발 프로세스를 이해하고 효율적으로 협업하기 위해 학습했습니다.<br/>개발환경 구축, API 연동 및 수정, 데이터베이스 쿼리 작성과 최적화, ORM과 Query Builder 활용 등을 <br/>직접 경험하면서 클라이언트-서버 간의 데이터 흐름을 깊이 이해할 수 있게 되었고,<br/>이는 백엔드 개발자와의 원활한 소통과 더 나은 프론트엔드 아키텍처 설계에 큰 도움이 되고 있습니다."
        },
        devops: {
            name: 'Devops',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {}, void 0, false, {
                fileName: "[project]/src/app/componets/Skill.tsx",
                lineNumber: 84,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)),
            list: [
                {
                    name: 'AWS (EC2, S3)',
                    color: '#273240',
                    textColor: '#ffffff'
                },
                {
                    name: 'Jenkins',
                    color: '#D92B4B',
                    textColor: '#ffffff'
                },
                {
                    name: 'Jira',
                    color: '#D92B4B',
                    textColor: '#ffffff'
                },
                {
                    name: 'Bitbucket',
                    color: '#D92B4B',
                    textColor: '#ffffff'
                }
            ]
        },
        apmAndMonitoring: {
            name: 'Monitoring',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {}, void 0, false, {
                fileName: "[project]/src/app/componets/Skill.tsx",
                lineNumber: 110,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)),
            list: [
                {
                    name: 'Sentry',
                    color: '#533473',
                    textColor: '#ffffff'
                },
                {
                    name: 'Datadog',
                    color: '#602EA6',
                    textColor: '#ffffff'
                },
                {
                    name: 'WhaTap',
                    color: '#F24C27',
                    textColor: '#ffffff'
                }
            ]
        },
        otherSkill: {
            name: 'Other Skill',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"], {}, void 0, false, {
                fileName: "[project]/src/app/componets/Skill.tsx",
                lineNumber: 131,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)),
            list: [
                {
                    name: '3D max',
                    color: '#533473',
                    textColor: '#ffffff'
                },
                {
                    name: 'blender',
                    color: '#ff7227',
                    textColor: '#ffffff'
                },
                {
                    name: 'Substance Painter',
                    color: '#F24C27',
                    textColor: '#ffffff'
                },
                {
                    name: 'twin motion',
                    color: '#000000',
                    textColor: '#ffffff'
                }
            ],
            imageList: [
                'img/other2.jpg',
                'img/other_1.jpg',
                'img/other_3.jpg',
                'img/other_4.jpg',
                'img/other_5.png',
                'img/other_6.png'
            ]
        }
    };
    const skillList = Object.values(skill);
    console.log('skillList', skillList);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$SkillStyle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillStyle"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "inner",
            initial: {
                scale: 0
            },
            animate: tabIndex === 1 ? {
                scale: 1
            } : {
                scale: 0
            },
            transition: {
                duration: 0.6,
                ease: "backOut",
                scale: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "sect_title",
                    children: "SKILL"
                }, void 0, false, {
                    fileName: "[project]/src/app/componets/Skill.tsx",
                    lineNumber: 175,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "skill_list",
                    children: skillList.map((item, index)=>{
                        if (item.name === 'Backend') return;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "skill_list_items",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "skill_icon",
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/componets/Skill.tsx",
                                    lineNumber: 182,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "skill_name",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/componets/Skill.tsx",
                                    lineNumber: 183,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "skill_sub_list",
                                    children: item.list.map((subItem, subIndex)=>{
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "skill_sub_item",
                                            children: subItem.name
                                        }, subIndex, false, {
                                            fileName: "[project]/src/app/componets/Skill.tsx",
                                            lineNumber: 188,
                                            columnNumber: 53
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/componets/Skill.tsx",
                                    lineNumber: 184,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/componets/Skill.tsx",
                            lineNumber: 181,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/componets/Skill.tsx",
                    lineNumber: 176,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/componets/Skill.tsx",
            lineNumber: 161,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/componets/Skill.tsx",
        lineNumber: 160,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Skill, "O2BHEqhQJDy65/YdO/im5I0SvvE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Skill;
const __TURBOPACK__default__export__ = Skill;
var _c;
__turbopack_context__.k.register(_c, "Skill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/style/ProjectStyle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProjectStyle": ()=>ProjectStyle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    width: 100%;height: 100%;\n  .project_list{\n    display: flex;justify-content: flex-start;align-items: flex-start;gap: 10px;flex-wrap: wrap;margin-top: 50px;padding-bottom: 100px;overflow: auto;\n    .project_item{\n      flex: 0 0 calc(100% / 5 - 10px);box-sizing: border-box;box-shadow: 0 0 10px rgba(0,0,0,0.1);border-radius: 20px;overflow: hidden;\n      .image_con{\n        width: 100%;\n        img{\n            width: 100%;object-fit: scale-down;aspect-ratio: 16 / 9;\n        }\n      }\n      .project_title{\n        display: block; font-size: 1.2vw;padding: 20px;\n      }\n    }\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const ProjectStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProjectStyle",
    componentId: "sc-d50ae0cc-0"
})(_templateObject());
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/lib/Utill.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SuspenseImage": ()=>SuspenseImage,
    "imageLoader": ()=>imageLoader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const imageLoader = (src)=>{
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(src);
        img.onerror = ()=>reject(new Error("Failed to load ".concat(src)));
        img.src = src;
    });
};
const SuspenseImage = (param)=>{
    let { src, alt, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: alt,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/app/lib/Utill.tsx",
        lineNumber: 18,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SuspenseImage;
var _c;
__turbopack_context__.k.register(_c, "SuspenseImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/componets/Project.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$ProjectStyle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/style/ProjectStyle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$Utill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/Utill.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/useUiStore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const Project = ()=>{
    _s();
    const { tabIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const projects = [
        {
            title: 'sild',
            link: 'sild',
            img: 'img/project/sild/sild_0.jpg',
            work: 'front-dev',
            description: '웹뷰 기반 의류 쇼핑몰 클라이언트 개발',
            detail: '#vue 2, #pinia,#i18n, #vite',
            isOpen: true
        },
        {
            title: 'BankX',
            link: 'BankX',
            img: 'img/project/bankx/bankx_0.png',
            work: 'front-dev',
            backgroundColor: '#F0F0F2',
            description: '웹뷰 어드민 페이지 및 사용자 화면 클라이언트 개발'
        },
        {
            title: 'seemple',
            link: 'seemple',
            img: 'img/project/seemple/img.png',
            work: 'front-dev',
            backgroundColor: '#6A44F2',
            description: '웹뷰 기반 실시간 커뮤니케이션 플랫폼 클라이언트 개발'
        },
        {
            title: '하루세탁',
            link: 'haru',
            img: 'img/project/haru/haru_0.png',
            work: 'front-dev',
            backgroundColor: '#447EF2',
            description: '웹뷰 기반 구독 형 맞춤 세탁 서비스 클라이언트 개발'
        },
        {
            title: '땡큐마켓',
            link: 'ThankyouMarket',
            img: 'img/project/tankyou/tankyou_0.jpg',
            work: 'front-dev',
            description: '웹뷰 기반 중고상품 및 리퍼 상품 거래 플랫폼 최저가 가격 변동 자동화 시스템 클라이언트 개발'
        },
        {
            title: '학술대회 live',
            link: 'liveTo',
            img: 'img/project/liveto/liveto_logo.jpg',
            work: 'front-dev',
            description: '웹앱 뇌신경재활학회 live 스트리밍 플랫폼 클라이언트 개발'
        },
        {
            title: 'LX하우시스 후정산 시스템',
            link: 'lxhausys',
            img: 'img/project/lg/lx.png',
            work: '#front-dev',
            description: 'LX하우시스 후정산 시스템 front-end & DevOn NCD 개발'
        },
        {
            title: 'Samsung S1 device',
            link: 'samsung',
            img: 'img/project/samsung/samsung.jpg',
            work: '#front-dev',
            description: '삼성 s1 자사 디바이스 등록 및 검사 시스템 풀스텍 개발'
        },
        {
            title: 'Pickko admin',
            link: 'pickkoadmin',
            img: 'img/project/pickko/pickko.png',
            work: '#front-dev',
            backgroundColor: '#052440',
            description: '작심 스터디카페 어드민 시스템 개발'
        },
        {
            title: 'Pickko kiosk',
            link: 'pickkokiosk',
            img: 'img/project/zaksim/zaksim.png',
            work: '#front-dev',
            backgroundColor: '#101E26',
            description: '작심 스터디카페 키오스크 및 자동문 입 출입 제어 시스템 개발'
        },
        {
            title: 'Pickko App',
            link: 'pickkoapp',
            backgroundColor: '#1B51F2',
            img: 'img/project/pickkoApp/pickko_app.png',
            work: '#front-dev',
            description: '작심 스터디 카페 이용권 구매 및 입출입 앱 개발'
        },
        {
            title: '케어링',
            link: 'caring',
            img: 'img/project/caring/Caring.png',
            work: '#front-dev',
            description: '웹앱 노인 복지 서비스 기사 억굴인식 관리 어드민 및 클라이언트 개발'
        }
    ];
    const handleDetailView = (project)=>{
        const supportsViewTransition = 'startViewTransition' in document;
        if (supportsViewTransition) {
            document.startViewTransition(()=>{
                router.push("/detail/".concat(project.link));
            });
        } else {
            router.push("/detail/".concat(project.link));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$ProjectStyle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectStyle"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "inner",
            initial: {
                scale: 0
            },
            animate: tabIndex === 3 ? {
                scale: 1
            } : {
                scale: 0
            },
            transition: {
                duration: 0.6,
                ease: "backOut",
                scale: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "sect_title",
                    children: "Project"
                }, void 0, false, {
                    fileName: "[project]/src/app/componets/Project.tsx",
                    lineNumber: 133,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "project_list",
                    children: projects.map((item, index)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                            className: "project_item",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            onClick: ()=>handleDetailView(item),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "image_con",
                                    style: item.backgroundColor ? {
                                        backgroundColor: item.backgroundColor
                                    } : undefined,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: '이미지 로딩중...',
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$Utill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SuspenseImage"], {
                                            src: item.img,
                                            alt: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/componets/Project.tsx",
                                            lineNumber: 141,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/componets/Project.tsx",
                                        lineNumber: 140,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/componets/Project.tsx",
                                    lineNumber: 139,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "project_title",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/componets/Project.tsx",
                                    lineNumber: 144,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/componets/Project.tsx",
                            lineNumber: 138,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/componets/Project.tsx",
                    lineNumber: 134,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/componets/Project.tsx",
            lineNumber: 119,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/componets/Project.tsx",
        lineNumber: 118,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Project, "WqNhTxF1z1tccX3GR0W7sOOHe4g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Project;
const __TURBOPACK__default__export__ = Project;
var _c;
__turbopack_context__.k.register(_c, "Project");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/style/PublishingStyle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PublishingStyle": ()=>PublishingStyle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n\n  .publishing_list{\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: clamp(10px, 2vh, 20px);\n    margin-top: clamp(20px, 4vh, 50px);\n    width: 100%;\n    flex: 1;\n\n    .publishing_item{\n      flex: 0 0 calc(100% / 3 - clamp(10px, 2vh, 20px));\n      box-sizing: border-box;\n      box-shadow: 0 0 10px rgba(0,0,0,0.1);\n      border-radius: clamp(10px, 2vh, 20px);\n      overflow: hidden;\n      height: clamp(200px, 30vh, 350px);\n      &:nth-child(n + 4){\n        margin-top: clamp(10px, 2vh, 20px);\n      }\n\n      .image_con{\n        width: 100%;\n        height: 70%;\n\n        img{\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n      }\n\n      .publishing_title{\n        display: block;\n        font-size: clamp(0.8rem, 1.2vw, 1.2rem);\n        padding: clamp(10px, 2vh, 20px);\n        height: 30%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n      }\n    }\n  }\n  \n  @media (max-height: 600px) {\n    .publishing_list {\n      .publishing_item {\n        flex: 0 0 calc(50% - clamp(10px, 2vh, 20px));\n        height: clamp(150px, 25vh, 250px);\n\n        &:nth-child(n + 3){\n          margin-top: clamp(10px, 2vh, 20px);\n        }\n        &:nth-child(n + 4){\n          margin-top: 0;\n        }\n      }\n    }\n  }\n  \n  @media (max-height: 400px) {\n    .publishing_list {\n      flex-direction: row;\n      overflow-x: auto;\n      overflow-y: hidden;\n\n      .publishing_item {\n        flex: 0 0 calc(100% / 3 - clamp(5px, 1vh, 10px));\n        height: clamp(120px, 20vh, 180px);\n        margin-top: 0 !important;\n      }\n    }\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const PublishingStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PublishingStyle",
    componentId: "sc-bf08d8f1-0"
})(_templateObject());
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/componets/Publishing.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$PublishingStyle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/style/PublishingStyle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$Utill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/Utill.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/useUiStore.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const Publishing = ()=>{
    _s();
    const { tabIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const publishingItem = [
        {
            title: '육아정책연구소',
            img: 'img/children.png',
            work: 'front-dev',
            url: 'https://hongseockkim.github.io/portpolio/page/03/'
        },
        {
            title: '대림 코퍼레이션',
            img: 'img/daelim.png',
            work: 'front-dev',
            url: 'https://hongseockkim.github.io/portpolio/page/02/'
        },
        {
            title: 'SMEG',
            img: 'img/smeg.png',
            work: 'front-dev',
            url: 'https://hongseockkim.github.io/portpolio/page/01/'
        },
        {
            title: 'CANVAS',
            img: 'img/canvas.png',
            work: 'front-dev',
            url: 'https://hongseockkim.github.io/portpolio/page/06/'
        }
    ];
    const handleClick = (url)=>{
        window.open(url, '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$style$2f$PublishingStyle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublishingStyle"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "inner",
            initial: {
                scale: 0
            },
            animate: tabIndex === 2 ? {
                scale: 1
            } : {
                scale: 0
            },
            transition: {
                duration: 0.6,
                ease: "backOut",
                scale: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "sect_title",
                    children: "Publishing"
                }, void 0, false, {
                    fileName: "[project]/src/app/componets/Publishing.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "publishing_list",
                    children: publishingItem.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "publishing_item",
                            onClick: ()=>handleClick(item.url),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "image_con",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: '이미지 로딩중...',
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$Utill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SuspenseImage"], {
                                            src: item.img,
                                            alt: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/componets/Publishing.tsx",
                                            lineNumber: 63,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/componets/Publishing.tsx",
                                        lineNumber: 62,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/componets/Publishing.tsx",
                                    lineNumber: 61,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "publishing_title",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/componets/Publishing.tsx",
                                    lineNumber: 66,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/componets/Publishing.tsx",
                            lineNumber: 60,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/componets/Publishing.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/componets/Publishing.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/componets/Publishing.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Publishing, "O2BHEqhQJDy65/YdO/im5I0SvvE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Publishing;
const __TURBOPACK__default__export__ = Publishing;
var _c;
__turbopack_context__.k.register(_c, "Publishing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$creative$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCreative$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/effect-creative.mjs [app-client] (ecmascript) <export default as EffectCreative>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$mousewheel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mousewheel$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/mousewheel.mjs [app-client] (ecmascript) <export default as Mousewheel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$componets$2f$common$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/componets/common/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$componets$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/componets/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$componets$2f$Skill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/componets/Skill.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/useUiStore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$componets$2f$Project$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/componets/Project.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$componets$2f$Publishing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/componets/Publishing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function Home() {
    _s();
    const { setTabIndex, tabIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSlideChange = (swiper)=>{
        setTabIndex(swiper['activeIndex']);
    };
    const handleSwiperInit = (swiper)=>{
        swiperRef.current = swiper;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (swiperRef.current) {
                swiperRef.current.slideTo(tabIndex, 300);
            }
        }
    }["Home.useEffect"], [
        tabIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$componets$2f$common$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                onSwiper: handleSwiperInit,
                grabCursor: true,
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$creative$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCreative$3e$__["EffectCreative"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$mousewheel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mousewheel$3e$__["Mousewheel"]
                ],
                effect: "creative",
                mousewheel: {
                    releaseOnEdges: true,
                    sensitivity: 0.2,
                    thresholdDelta: 30,
                    thresholdTime: 200,
                    forceToAxis: false,
                    invert: false
                },
                onSlideChange: (swiper)=>{
                    handleSlideChange(swiper);
                },
                creativeEffect: {
                    prev: {
                        shadow: false,
                        translate: [
                            0,
                            0,
                            -400
                        ]
                    },
                    next: {
                        translate: [
                            '100%',
                            0,
                            0
                        ]
                    }
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swiper_wrap,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$componets$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$componets$2f$Skill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$componets$2f$Publishing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 69,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$componets$2f$Project$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Home, "xBqgkkn+nJa2yrTTsjhcMRUTQ7E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$useUiStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_08531259._.js.map