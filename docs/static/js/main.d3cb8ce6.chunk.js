(this["webpackJsonpportafolio-react"] = this["webpackJsonpportafolio-react"] || []).push([[0], { 80: function (e, t, a) { }, 87: function (e, t, a) { }, 88: function (e, t, a) { }, 91: function (e, t, a) { }, 92: function (e, t, a) { "use strict"; a.r(t); var i = a(0), n = a(32), r = a.n(n), c = a(48), o = a(59), s = a.n(o), l = a(120), d = a(114), j = a(121), b = a(122), p = a(95), m = a(134), f = a(131), h = a(64), u = a.n(h), x = (a(80), a(2)), g = function () { var e = Object(i.useState)(!1), t = Object(c.a)(e, 2), a = t[0], n = t[1], r = Object(d.a)((function (e) { return { navbar: { display: "flex", justifyContent: "flex-end", width: "100%", top: "0", position: "fixed", zIndex: "500", borderRadius: 10 }, list: { display: "flex", listStyle: "none", padding: "0 10px 0 0", borderRadius: "10px", position: "fixed", backgroundColor: "#222", transition: "all 0.4s ease 0s", margin: "20px 70px 20px 20px" }, openMenu: { transform: "translate(500px)", margin: "20px", display: "flex" }, btn: { padding: 20, margin: 19 } } }))(); return Object(x.jsx)("header", { children: Object(x.jsxs)("nav", { className: r.navbar, children: [Object(x.jsx)("ul", { className: a ? r.list : r.openMenu, children: [{ title: "Inicio", url: "/", id: 1 }, { title: "Portafolio", url: "/projects", id: 2 }, { title: "Contacto", url: "/contact", id: 3 }].map((function (e) { return Object(x.jsx)("li", { children: Object(x.jsx)("a", { className: "header-a", href: e.url, children: e.title }) }, e.id) })) }), Object(x.jsx)("div", { children: Object(x.jsx)(f.a, { color: "primary", variant: "contained", className: r.btn, onClick: function () { n(!a) }, children: Object(x.jsx)(u.a, {}) }) })] }) }) }, A = a(119), O = a(130), V = a(118), R = a(128), C = a(116), v = a(117), w = (a(86), a.p + "static/media/img1.29c0ceae.jpeg"), B = a.p + "static/media/img2.64ace891.jpg", I = a.p + "static/media/img3.1f3fe7c7.jpg", y = a.p + "static/media/img4.0395e98a.jpg"; R.a.use([C.a, v.a]); var E = Object(m.a)()((function (e) { var t = [w, B, I, y], a = Object(d.a)((function (t) { return { img: { height: "xs" === e.width ? "50vh" : "100vh" }, swiperContainer: { width: "100%" }, swiperWrapper: { paddingInlineStart: "0", listStyle: "none" } } }))(); return Object(x.jsx)(O.a, { tag: "section", wrapperTag: "ul", id: "main", pagination: !0, autoplay: { delay: 3e3, disableOnInteraction: !1 }, spaceBetween: 0, className: a.swiperContainer, children: t.map((function (e) { return Object(x.jsx)(V.a, { tag: "li", className: a.swiperWrapper, children: Object(x.jsx)(A.a, { image: e, className: a.img }) }, "slide-".concat(e)) })) }) })), X = Object(m.a)()((function (e) { var t = Object(d.a)((function (t) { return { girdItem: { borderRight: "5px solid #CCCCCC", overflow: "hidden", height: "xs" === e.width ? "50vh" : "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "#E0E0E0" }, welcome: { color: "#fff", padding: "50px", borderRadius: "15px", background: "rgba(0, 0, 0, 0.4)" }, title: { fontWeight: 400, fontSize: "xs" === e.width ? "3rem" : "4.5rem" }, technologies: { color: "#17d0d5", fontWeight: 600 } } }))(); return Object(x.jsxs)("div", { className: "blur", children: [Object(x.jsx)(g, {}), Object(x.jsx)(l.a, {}), Object(x.jsxs)(j.a, { container: !0, children: [Object(x.jsx)(j.a, { item: !0, xs: 12, sm: 5, className: t.girdItem, children: Object(x.jsx)(E, {}) }), Object(x.jsx)(j.a, { item: !0, xs: 12, sm: 7, className: t.girdItem, children: Object(x.jsx)(b.a, { maxWidth: "md", children: Object(x.jsxs)(p.a, { variant: "h1", align: "center", className: t.title, children: ["Juan Carlos Diaz, ", Object(x.jsx)("br", {}), " Front-end Developer ", Object(x.jsx)("br", {}), " con", " ", Object(x.jsx)(s.a, { className: t.technologies, strings: ["React.JS", "Material-UI", "JavaScript", "CSS3", "HTML5", "Linux", "Git", "Scrum"], typeSpeed: 75, backSpeed: 75, startDelay: 930, backDelay: 700, loop: !0 })] }) }) })] })] }) })), N = a(123), k = a(42), q = a.n(k), Q = a(53), J = a.n(Q), D = function (e) { var t = e.data, a = Object(d.a)((function (e) { return { btn: { backgroundColor: "#17d0d5", marginBottom: "10px", color: "#fff" } } }))(); return t.isPublic ? Object(x.jsxs)(N.a, { children: [Object(x.jsx)(f.a, { size: "small", variant: "contained", color: "primary", className: a.btn, href: t.linkPage, target: "_blank", startIcon: Object(x.jsx)(J.a, {}), children: "visitar" }), Object(x.jsx)(f.a, { size: "small", variant: "contained", color: "primary", className: a.btn, href: t.linkCode, target: "_blank", startIcon: Object(x.jsx)(q.a, {}), children: "ver c\xf3digo" })] }) : t.NoInterface ? Object(x.jsx)(N.a, { children: Object(x.jsx)(f.a, { size: "small", variant: "contained", color: "primary", className: a.btn, href: t.linkCode, target: "_blank", startIcon: Object(x.jsx)(q.a, {}), children: "Ver c\xf3digo" }) }) : !1 === t.isPublic ? Object(x.jsx)(N.a, { children: Object(x.jsx)(f.a, { size: "small", variant: "contained", color: "primary", className: a.btn, href: t.linkCode, target: "_blank", startIcon: Object(x.jsx)(J.a, {}), children: "Visitar" }) }) : void 0 }, F = a(135), W = a(124), K = function (e) { var t = Object(d.a)((function (e) { return { cardGrid: { paddingTop: e.spacing(8), paddingBottom: e.spacing(8) }, card: { height: "100%", display: "flex", flexDirection: "column", backgroundColor: "#EBEBEB" }, cardMedia: { paddingTop: "70%" }, cardContent: { flexGrow: 1 } } })), a = e.data.projectList, i = t(); return Object(x.jsx)(b.a, { className: i.cardGrid, maxWidth: "md", children: Object(x.jsx)(j.a, { container: !0, spacing: 4, children: a.map((function (e) { return Object(x.jsx)(j.a, { item: !0, xs: 12, md: 4, children: Object(x.jsxs)(F.a, { className: i.card, children: [Object(x.jsx)(A.a, { className: i.cardMedia, image: e.img, title: e.title }), Object(x.jsxs)(W.a, { className: i.cardContent, children: [Object(x.jsx)(p.a, { gutterBottom: !0, variant: "h5", component: "h2", children: e.title }), Object(x.jsx)(p.a, { children: e.text })] }), Object(x.jsx)(D, { data: e })] }) }, e.id) })) }) }) }, L = a(125), U = Object(m.a)()((function (e) { console.log(e); var t = Object(d.a)((function (e) { return { footer: { padding: e.spacing(2), backgroundColor: "#fff" } } }))(); return Object(x.jsxs)("footer", { className: t.footer, children: [Object(x.jsxs)(p.a, { variant: "subtitle2", align: "center", color: "textSecondary", children: ["Para contrataciones en relacion de dependencia", "xs" === e.width ? Object(x.jsx)("br", {}) : " ", Object(x.jsx)(L.a, { href: "https://drive.google.com/file/d/1A-J1pD-ndO0SfYLjH3nNgThVDYAWr5Bv/view?usp=sharing", target: "_blank", color: "primary", variant: "contained", children: "Obt\xe9n aqu\xed mi CV" })] }), Object(x.jsxs)(p.a, { variant: "subtitle2", align: "center", color: "textSecondary", children: ["Copyright \xa9 ", " Juan Carlos Diaz 2021."] })] }) })), Y = a.p + "static/media/welcome-video.414c2399.mp4", P = function () { var e = Object(d.a)((function (e) { return { video: { objectFit: "cover", width: "100%", height: "100%", position: "absolute", top: "0", left: "0" } } }))(); return Object(x.jsx)("video", { autoPlay: !0, loop: !0, className: e.video, children: Object(x.jsx)("source", { src: Y, type: "video/mp4" }) }) }, z = Object(m.a)()((function (e) { var t = Object(d.a)((function (t) { return { container: { backgroundPosition: "center center", position: "relative", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", zIndex: "2", overflowX: "hidden" }, presentation: { color: "#fff", zIndex: "3", padding: "30px", borderRadius: "15px", background: "rgba(0, 0, 0, 0.7)", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }, btn: { padding: "15px", width: "xl" === e.width ? "40%" : "70%", fontSize: "xl" === e.width ? "20px" : "15px", marginTop: "15px" }, contentGrid: { backgroundColor: "#E0E0E0", borderTop: "5px solid #CCCCCC" } } }))(); return Object(x.jsxs)("div", { className: "blur", children: [Object(x.jsx)(g, {}), Object(x.jsx)(l.a, {}), Object(x.jsxs)("div", { className: t.container, children: [Object(x.jsx)(P, {}), Object(x.jsxs)(b.a, { maxWidth: "xl" === e.width ? "md" : "sm", className: t.presentation, children: [Object(x.jsx)(p.a, { variant: "xl" === e.width ? "h2" : "h3", align: "center", gutterBottom: !0, children: "Mis proyectos" }), Object(x.jsx)(p.a, { variant: "xl" === e.width ? "h4" : "h5", align: "center", paragraph: !0, children: "\xa1Bienvenido! En esta secci\xf3n podr\xe1s observar los trabajos m\xe1s reelevantes que he desarrollado. Puedes acceder al repositorio donde se encuentra el c\xf3digo fuente en los proyectos p\xfablicos." }), Object(x.jsx)(f.a, { size: "large", variant: "contained", color: "primary", href: "#project-grid", className: t.btn, children: "Ver proyectos" })] })] }), Object(x.jsx)("div", { id: "project-grid", className: t.contentGrid, children: Object(x.jsx)(K, { data: e, id: "project-grid" }) }), Object(x.jsx)(U, {})] }) })), H = a(129), S = a(136), M = a(66), T = a.n(M), Z = a(65), G = a.n(Z), _ = Object(m.a)()((function (e) { var t = Object(d.a)((function (t) { return { content: { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#f5f5f5", maxWidth: "xs" === e.width || "md" === e.width ? "90%" : "70%" }, form: { width: "100%" }, avatar: { marginBottom: t.spacing(1), backgroundColor: t.palette.secondary.light }, contentSocialNetwork: { marginTop: 20, display: "flex", justifyContent: "center" }, icons: { height: 50, width: 50, backgroundColor: t.palette.primary.main, marginLeft: 10, marginRight: 10 } } }))(); return Object(x.jsx)(H.a, { className: t.content, boxShadow: 3, p: 5, borderRadius: 16, color: "default", children: Object(x.jsxs)("div", { className: t.form, children: [Object(x.jsx)(p.a, { variant: "h4", align: "center", gutterBottom: !0, children: "\xa1Trabajemos juntos!" }), Object(x.jsx)(p.a, { variant: "h5", align: "center", children: "S\xedgueme en mis redes sociales para obtener m\xe1s informaci\xf3n sobre mi carrera profesional y estar al tanto de todas las novedades acerca de mis proyectos. \xa1Te espero!" }), Object(x.jsxs)("div", { className: t.contentSocialNetwork, children: [Object(x.jsx)(L.a, { href: "https://www.linkedin.com/in/juan-carlos-diaz-996824186/", target: "_blank", className: t.link, children: Object(x.jsx)(S.a, { className: t.icons, children: Object(x.jsx)(G.a, {}) }) }), Object(x.jsx)(L.a, { href: "https://www.instagram.com/jcarlos_diazp/?hl=es-la", target: "_blank", className: t.link, children: Object(x.jsx)(S.a, { className: t.icons, children: Object(x.jsx)(T.a, {}) }) }), Object(x.jsx)(L.a, { href: "https://github.com/Judiazp", target: "_blank", className: t.link, children: Object(x.jsx)(S.a, { className: t.icons, children: Object(x.jsx)(q.a, {}) }) })] })] }) }) })), $ = a(133), ee = Object(m.a)()((function (e) { var t = Object(d.a)((function (t) { return { image: { backgroundImage: "url(".concat(w, ")"), backgroundSize: "cover", backgroundPosition: "center", height: "100vh", width: "100%", borderRight: "5px solid #CCCCCC" }, content: { maxHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#EBEBEB" }, contentItem: { display: "flex", height: "100vh" }, contentContact: { width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: t.spacing(7) }, footer: { position: "fixed", bottom: "0", width: "sm" === e.width || "xs" === e.width ? "100%" : "50%" } } }))(); return Object(x.jsxs)("div", { className: "blur", children: [Object(x.jsx)(g, {}), Object(x.jsxs)(j.a, { container: !0, component: "main", className: t.content, children: [Object(x.jsx)(l.a, {}), Object(x.jsx)($.a, { smDown: !0, children: Object(x.jsx)(j.a, { item: !0, xs: 12, md: 6, className: t.image }) }), Object(x.jsxs)(j.a, { container: !0, md: 6, className: t.contentItem, children: [Object(x.jsx)(j.a, { container: !0, children: Object(x.jsx)(j.a, { item: !0, xs: 12, className: t.contentContact, children: Object(x.jsx)(_, {}) }) }), Object(x.jsx)(j.a, { item: !0, xs: 12, className: t.footer, children: Object(x.jsx)(U, {}) })] })] })] }) })), te = (a(87), a(126)), ae = function () { return Object(x.jsx)("div", { id: "loader", className: "loading", children: Object(x.jsx)(te.a, { size: 80 }) }) }, ie = function () { var e = Object(d.a)((function (e) { return { content: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#EBEBEB" }, img: { borderRadius: 20 }, error: { height: "256px" }, footer: { position: "fixed", bottom: "0", width: "100%" } } }))(); return Object(x.jsxs)("div", { className: "blur", children: [Object(x.jsx)(l.a, {}), Object(x.jsx)(g, {}), Object(x.jsxs)(j.a, { xs: 12, className: e.content, direction: "column", children: [Object(x.jsx)(p.a, { variant: "h2", color: "textSecondary", align: "center", gutterBottom: !0, children: "\xa1Oops! Algo no anda bien" }), Object(x.jsx)("img", { src: "data:image/png;base64,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", alt: "error 404" }), Object(x.jsx)(p.a, { variant: "h3", color: "textSecondary", align: "center", children: "Pagina no encontrada" })] })] }) }, ne = a(67), re = a(12), ce = a(127), oe = a(68), se = Object(oe.a)({ palette: { secondary: { light: "rgba(48, 49, 53, 1)", main: "rgba(7, 9, 15, 1)", dark: "rgba(0, 0, 0, 1)", contrastText: "#fff" }, primary: { main: "#17d0d5", contrastText: "#fff" } } }), le = a.p + "static/media/adminFinance.a7455237.jpg", de = a.p + "static/media/listaDeTareas.878f013b.jpg", je = a.p + "static/media/miPortafolio.302ad123.jpg", be = a.p + "static/media/documentation.8761e990.jpg", pe = a.p + "static/media/enDesarrollo.c580bd37.jpg", me = [{ linkPage: "https://judiazp.github.io/gif-expert-app/", linkCode: "https://github.com/Judiazp/gif-expert-app", img: "".concat(pe), title: "GifExpertApp", text: "Peque\xf1a app para la b\xfasqueda de gif, construida con react.Js, consumiendo la api de Giphy", isPublic: !0, id: "1" }, { linkCode: "https://github.com/Judiazp/portafolio", img: "".concat(je), title: "Portafolio", text: "Construido con ReactJS utilizando componentes de Material-UI", isPublic: !1, NoInterface: !0, id: "4" }, { linkPage: "https://judiazp.github.io/app-lista-mercado/", linkCode: "https://github.com/Judiazp/app-lista-mercado", img: "".concat(de), title: "Todo List", text: "Crea listas de tareas. Filtra por completadas, no completadas, y mas.", isPublic: !0, id: "3" }, { linkPage: "https://codepen.io/judiazp/full/xxOeEZY", linkCode: "https://github.com/Judiazp/maquetado-web-responsive/tree/master/technical-documentation-page", img: "".concat(be), title: "Documentaci\xf3n JS", text: "P\xe1gina de documentaci\xf3n t\xe9cnica de JavaScript construida con HTML5 y CSS3.", isPublic: !0, id: "5" }, { linkPage: "", linkCode: "https://github.com/Judiazp/administration-app", img: "".concat(le), title: "Finance (En desarrollo)", text: "Administra tus finanzas, lleva un registro de tus ingresos y egresos, toma el control de tu dinero.", NoInterface: !0, id: "2" }]; a(88); var fe = function () { var e = Object(i.useState)(!0), t = Object(c.a)(e, 2), a = t[0], n = t[1]; return Object(i.useEffect)((function () { setTimeout((function () { n(!1) }), 900) }), []), Object(x.jsx)(ce.a, { theme: se, children: Object(x.jsx)(ne.a, { basename: "", children: Object(x.jsxs)(re.c, { children: [a ? Object(x.jsx)(ae, {}) : Object(x.jsx)(re.a, { exact: !0, path: "/", component: X }), a ? Object(x.jsx)(ae, {}) : Object(x.jsx)(re.a, { exact: !0, path: "/projects", children: Object(x.jsx)(z, { projectList: me }) }), a ? Object(x.jsx)(ae, {}) : Object(x.jsx)(re.a, { exact: !0, path: "/contact", component: ee }), a ? Object(x.jsx)(ae, {}) : Object(x.jsx)(re.a, { component: ie })] }) }) }) }; a(91); r.a.render(Object(x.jsx)(x.Fragment, { children: Object(x.jsx)(fe, {}) }), document.getElementById("root")) } }, [[92, 1, 2]]]);
//# sourceMappingURL=main.d3cb8ce6.chunk.js.map