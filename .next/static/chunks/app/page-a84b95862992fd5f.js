(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{846:function(e,t,n){Promise.resolve().then(n.bind(n,8451))},8451:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return page}});var r=n(7437);n(3054);var a=n(2265),s=n(6087);let o=null,l=!1;function resetHoverTimer(){o&&clearTimeout(o),o=setTimeout(()=>{l||s.Z.config({BRIGHTNESS:.5})},1e3)}function fluidHover(e){function handleMouseEnter(){l=!0,s.Z.config({BRIGHTNESS:.1}),resetHoverTimer()}function handleMouseLeave(){l=!1,resetHoverTimer()}return e.addEventListener("mouseenter",handleMouseEnter),e.addEventListener("mouseleave",handleMouseLeave),function(){e.removeEventListener("mouseenter",handleMouseEnter),e.removeEventListener("mouseleave",handleMouseLeave),o&&(clearTimeout(o),o=null)}}function bounce(e){if(!e.classList.contains("letterBounce")){if(e.classList.contains("gradient-letter")){let t=getComputedStyle(document.documentElement);e.style.color=t.getPropertyValue("--color-accent")}e.classList.add("letterBounce"),fluidHover(e),setTimeout(function(){e.classList.remove("letterBounce"),e.classList.contains("gradient-letter")&&(e.style.color="transparent")},1e3)}}var i=n(898),c=n(7216),d=n(2061),m={src:"/_next/static/media/hero.f85ade73.png",height:408,width:612,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAjElEQVR42mOIdTdmYgCC9ABL00hX/QIGIJhRFQMUg4L/1xaDOd3ZAUc2dWf/Z2Bg0GYAAl9rTRYGJCAd42L0aWlDwn9eCf5NbAyyPAxAICIqAjWJnWOFpqTo/74on++qYuL/Gfh5dzMAgaS0JDMDGLAy7HPjk/xfz6D6x09A5hcDG9MfOQYWCwYGBgYALxQfv3ule5IAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},x={src:"/_next/static/media/draw.c28370ec.png"},h=n(6691),p=n.n(h),heroImage=()=>{let heroCurveDone=()=>{let e=document.querySelector(".hero-image");e.classList.add("hero-opacity")};return(0,a.useEffect)(()=>{let updateGradientColors=()=>{let e=document.getElementById("gradient");if(e){var t,n;null===(t=e.querySelector('stop[offset="0%"]'))||void 0===t||t.setAttribute("stop-color",d.ZP.accentColor),null===(n=e.querySelector('stop[offset="100%"]'))||void 0===n||n.setAttribute("stop-color",d.ZP.primaryColor)}},handleColorsUpdated=()=>{updateGradientColors()};return window.addEventListener("colorsUpdated",handleColorsUpdated),()=>{window.removeEventListener("colorsUpdated",handleColorsUpdated)}},[]),(0,r.jsxs)("div",{className:"relative left-0 h-full w-full overflow-hidden md:left-[100px] md:w-[calc(100%-100px)] xl:left-[200px] xl:w-[calc(100%-200px)] landscape-md:left-[400px] landscape-md:w-[calc(100%-400px)]",children:[(0,r.jsx)(i.E.svg,{width:"100%",height:"100%",viewBox:"0 0 1813 2468",className:"hero-curve hero-opacity absolute bottom-0 h-[60%] w-full fill-none stroke-[14px] object-contain text-text xs:h-[75%]",initial:"hidden",animate:"visible",onAnimationComplete:()=>heroCurveDone(),children:(0,r.jsxs)("linearGradient",{id:"gradient",x1:"21%",y1:"100%",x2:"79%",y2:"0%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"rgba(0, 0, 0, 0)"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"rgba(0, 0, 0, 0)"})]})}),(0,r.jsx)(p(),{src:m,alt:"Darshee",className:"hero-image absolute bottom-0 h-[60%] w-full object-contain xs:h-[75%]"}),(0,r.jsx)("div",{className:"hero-draw absolute bottom-0 h-[60%] w-full bg-text object-contain xs:h-[75%]",style:{maskImage:"url(".concat(x.src,")"),WebkitMaskImage:"url(".concat(x.src,")"),maskSize:"contain",WebkitMaskSize:"contain",maskRepeat:"no-repeat",WebkitMaskRepeat:"no-repeat",maskPosition:"center",WebkitMaskPosition:"center"}})]})},heroSocial=()=>(0,r.jsxs)("div",{className:"mt-5 flex flex-row gap-3",children:[(0,r.jsx)(i.E.a,{href:"https://www.linkedin.com/in/darshee-machhar/",target:"_blank",rel:"noreferrer",className:"h-9 w-9 cursor-pointer text-text hover:text-primary focus:text-primary",variants:(0,c.Ji)("left","",2,.5),initial:"hidden",animate:"show",whileHover:{translateY:"-2px"},transition:{duration:.2},children:(0,r.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 256 256",className:"text-current",children:[(0,r.jsx)("path",{d:"M58.4,80.571C46.229,80.571 36.4,70.686 36.4,58.571C36.4,46.457 46.229,36.571 58.4,36.571C70.514,36.571 80.4,46.457 80.4,58.571C80.4,70.743 70.571,80.571 58.4,80.571Z",className:"fill-background"}),(0,r.jsx)("rect",{x:"39.429",y:"97.257",width:"38",height:"122.171",className:"fill-background"}),(0,r.jsx)("path",{d:"M219.6,219.429L181.657,219.429L181.657,160C181.657,145.829 181.371,127.6 161.943,127.6C142.171,127.6 139.143,143.029 139.143,158.971L139.143,219.429L101.2,219.429L101.2,97.257L137.6,97.257L137.6,113.943L138.114,113.943C143.2,104.343 155.6,94.229 174.057,94.229C212.457,94.229 219.6,119.543 219.6,152.457L219.6,219.429Z",className:"fill-background"}),(0,r.jsx)("g",{transform:"matrix(0.571429,0,0,0.571429,0,-18.2857)",children:(0,r.jsx)("path",{d:"M416,32L31.9,32C14.3,32 0,46.5 0,64.3L0,447.7C0,465.5 14.3,480 31.9,480L416,480C433.6,480 448,465.5 448,447.7L448,64.3C448,46.5 433.6,32 416,32ZM135.5,416L69,416L69,202.2L135.5,202.2L135.5,416ZM102.2,173C80.9,173 63.7,155.7 63.7,134.5C63.7,113.3 80.9,96 102.2,96C123.4,96 140.7,113.3 140.7,134.5C140.7,155.8 123.5,173 102.2,173ZM384.3,416L317.9,416L317.9,312C317.9,287.2 317.4,255.3 283.4,255.3C248.8,255.3 243.5,282.3 243.5,310.2L243.5,416L177.1,416L177.1,202.2L240.8,202.2L240.8,231.4L241.7,231.4C250.6,214.6 272.3,196.9 304.6,196.9C371.8,196.9 384.3,241.2 384.3,298.8L384.3,416Z",fill:"currentColor"})})]})}),(0,r.jsx)(i.E.a,{href:"https://github.com/Darshee-m",target:"_blank",rel:"noreferrer",className:"h-9 w-9 cursor-pointer text-text hover:text-primary focus:text-primary",variants:(0,c.Ji)("left","",2.5,.5),initial:"hidden",animate:"show",whileHover:{translateY:"-2px"},transition:{duration:.2},children:(0,r.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 256 256",className:"text-current",children:[(0,r.jsx)("g",{transform:"matrix(0.571429,0,0,0.571429,1.4988e-14,-18.2857)",children:(0,r.jsx)("path",{d:"M277.3,415.7C268.9,417.2 265.8,412 265.8,407.7C265.8,402.3 266,374.7 266,352.4C266,336.8 260.8,326.9 254.7,321.7C291.7,317.6 330.7,312.5 330.7,248.6C330.7,230.4 324.2,221.3 313.6,209.6C315.3,205.3 321,187.6 311.9,164.6C298,160.3 266.2,182.5 266.2,182.5C253,178.8 238.7,176.9 224.6,176.9C210.5,176.9 196.2,178.8 183,182.5C183,182.5 151.2,160.3 137.3,164.6C128.2,187.5 133.8,205.2 135.6,209.6C125,221.3 120,230.4 120,248.6C120,312.2 157.3,317.6 194.3,321.7C189.5,326 185.2,333.4 183.7,344C174.2,348.3 149.9,355.7 135.4,330.1C126.3,314.3 109.9,313 109.9,313C93.7,312.8 108.8,323.2 108.8,323.2C119.6,328.2 127.2,347.4 127.2,347.4C136.9,377.1 183.3,367.1 183.3,367.1C183.3,381 183.5,403.6 183.5,407.7C183.5,412 180.5,417.2 172,415.7C106,393.6 59.8,330.8 59.8,257.4C59.8,165.6 130,95.9 221.8,95.9C313.6,95.9 388,165.6 388,257.4C388.1,330.8 343.3,393.7 277.3,415.7Z",className:"fill-background"})}),(0,r.jsxs)("g",{transform:"matrix(0.571429,0,0,0.571429,1.4988e-14,-18.2857)",children:[(0,r.jsx)("g",{transform:"matrix(1.75,0,0,1.75,-2.6229e-14,32)",children:(0,r.jsx)("path",{d:"M69.371,165.143C69.143,165.657 68.4,165.772 67.771,165.372C67.029,165.029 66.686,164.4 66.914,163.886C67.143,163.543 67.771,163.372 68.514,163.657C69.257,164.057 69.6,164.686 69.371,165.143Z",className:"fill-background"})}),(0,r.jsx)("g",{transform:"matrix(1.75,0,0,1.75,-2.6229e-14,32)",children:(0,r.jsx)("path",{d:"M73.2,169.372C72.686,169.886 71.829,169.6 71.2,169.029C70.571,168.286 70.457,167.429 70.971,167.029C71.486,166.514 72.343,166.8 72.971,167.372C73.6,168.114 73.714,168.972 73.2,169.372Z",className:"fill-background"})}),(0,r.jsx)("g",{transform:"matrix(1.75,0,0,1.75,-2.6229e-14,32)",children:(0,r.jsx)("path",{d:"M76.914,174.914C76.4,175.257 75.429,174.914 74.8,174.057C74.171,173.2 74.171,172.229 74.8,171.829C75.429,171.314 76.4,171.714 76.914,172.572C77.543,173.429 77.543,174.457 76.914,174.914Z",className:"fill-background"})}),(0,r.jsx)("g",{transform:"matrix(1.75,0,0,1.75,-2.6229e-14,32)",children:(0,r.jsx)("path",{d:"M82.114,180.114C81.6,180.743 80.514,180.629 79.657,179.772C78.8,179.029 78.571,177.943 79.143,177.429C79.657,176.8 80.743,176.914 81.6,177.772C82.343,178.514 82.629,179.657 82.114,180.114Z",className:"fill-background"})}),(0,r.jsx)("g",{transform:"matrix(1.75,0,0,1.75,-2.6229e-14,32)",children:(0,r.jsx)("path",{d:"M89.143,183.2C88.914,183.943 87.771,184.286 86.8,183.943C85.714,183.714 84.971,182.857 85.2,182.114C85.429,181.372 86.571,181.029 87.543,181.257C88.686,181.6 89.429,182.457 89.143,183.2Z",className:"fill-background"})}),(0,r.jsx)("g",{transform:"matrix(1.75,0,0,1.75,-2.6229e-14,32)",children:(0,r.jsx)("path",{d:"M102.4,184.343C101.314,184.572 100.286,184.114 100.172,183.372C100.057,182.514 100.8,181.772 101.886,181.543C102.972,181.429 104,181.886 104.114,182.629C104.286,183.372 103.543,184.114 102.4,184.343Z",className:"fill-background"})}),(0,r.jsx)("g",{transform:"matrix(1.75,0,0,1.75,-2.6229e-14,32)",children:(0,r.jsx)("path",{d:"M96.972,183.829C96.972,184.572 96.114,185.2 94.971,185.2C93.714,185.314 92.857,184.686 92.857,183.829C92.857,183.086 93.714,182.457 94.857,182.457C95.943,182.343 96.972,182.972 96.972,183.829Z",className:"fill-background"})}),(0,r.jsx)("path",{d:"M400,32L48,32C21.5,32 0,53.5 0,80L0,432C0,458.5 21.5,480 48,480L400,480C426.5,480 448,458.5 448,432L448,80C448,53.5 426.5,32 400,32ZM277.3,415.7C268.9,417.2 265.8,412 265.8,407.7C265.8,402.3 266,374.7 266,352.4C266,336.8 260.8,326.9 254.7,321.7C291.7,317.6 330.7,312.5 330.7,248.6C330.7,230.4 324.2,221.3 313.6,209.6C315.3,205.3 321,187.6 311.9,164.6C298,160.3 266.2,182.5 266.2,182.5C253,178.8 238.7,176.9 224.6,176.9C210.5,176.9 196.2,178.8 183,182.5C183,182.5 151.2,160.3 137.3,164.6C128.2,187.5 133.8,205.2 135.6,209.6C125,221.3 120,230.4 120,248.6C120,312.2 157.3,317.6 194.3,321.7C189.5,326 185.2,333.4 183.7,344C174.2,348.3 149.9,355.7 135.4,330.1C126.3,314.3 109.9,313 109.9,313C93.7,312.8 108.8,323.2 108.8,323.2C119.6,328.2 127.2,347.4 127.2,347.4C136.9,377.1 183.3,367.1 183.3,367.1C183.3,381 183.5,403.6 183.5,407.7C183.5,412 180.5,417.2 172,415.7C106,393.6 59.8,330.8 59.8,257.4C59.8,165.6 130,95.9 221.8,95.9C313.6,95.9 388,165.6 388,257.4C388.1,330.8 343.3,393.7 277.3,415.7ZM179.2,354.6C177.3,355 175.5,354.2 175.3,352.9C175.1,351.4 176.4,350.1 178.3,349.7C180.2,349.5 182,350.3 182.2,351.6C182.5,352.9 181.2,354.2 179.2,354.6ZM169.7,353.7C169.7,355 168.2,356.1 166.2,356.1C164,356.3 162.5,355.2 162.5,353.7C162.5,352.4 164,351.3 166,351.3C167.9,351.1 169.7,352.2 169.7,353.7ZM156,352.6C155.6,353.9 153.6,354.5 151.9,353.9C150,353.5 148.7,352 149.1,350.7C149.5,349.4 151.5,348.8 153.2,349.2C155.2,349.8 156.5,351.3 156,352.6ZM143.7,347.2C142.8,348.3 140.9,348.1 139.4,346.6C137.9,345.3 137.5,343.4 138.5,342.5C139.4,341.4 141.3,341.6 142.8,343.1C144.1,344.4 144.6,346.4 143.7,347.2ZM134.6,338.1C133.7,338.7 132,338.1 130.9,336.6C129.8,335.1 129.8,333.4 130.9,332.7C132,331.8 133.7,332.5 134.6,334C135.7,335.5 135.7,337.3 134.6,338.1ZM128.1,328.4C127.2,329.3 125.7,328.8 124.6,327.8C123.5,326.5 123.3,325 124.2,324.3C125.1,323.4 126.6,323.9 127.7,324.9C128.8,326.2 129,327.7 128.1,328.4ZM121.4,321C121,321.9 119.7,322.1 118.6,321.4C117.3,320.8 116.7,319.7 117.1,318.8C117.5,318.2 118.6,317.9 119.9,318.4C121.2,319.1 121.8,320.2 121.4,321Z",fill:"currentColor"})]})]})}),(0,r.jsx)(i.E.a,{href:"#contact",className:"ml-auto h-9 w-fit cursor-pointer rounded-[3px] bg-primary px-4 py-[6px] font-semibold text-background transition-[color,box-shadow] duration-200 hover:from-primary hover:to-accent hover:text-text hover:shadow-xl hover:shadow-primary hover:bg-gradient-30 focus:from-primary focus:to-accent focus:text-text focus:shadow-xl focus:shadow-primary focus:bg-gradient-30 xs:ml-0",variants:(0,c.Ji)("left","",3,.5),initial:"hidden",animate:"show",whileHover:{translateY:"-2px"},transition:{duration:.2},children:"Let's Talk"})]}),components_hero=()=>{let e=(0,a.useRef)([]);(0,a.useEffect)(()=>{let e=document.querySelector(".scroll-button");e&&fluidHover(e),e.addEventListener("click",()=>{s.Z.splats()});let t=document.querySelector(".about-text");return t&&fluidHover(t),function(e){let handleMouseOver=e=>bounce(e.target),t=document.querySelectorAll(e);return t.forEach(e=>{e.addEventListener("mouseover",handleMouseOver)}),function(){t.forEach(e=>{e.removeEventListener("mouseover",handleMouseOver)})}}("span.bouncer")},[]);let handleSpanRef=t=>{t&&!e.current.includes(t)&&e.current.push(t)},handleAppearComplete=e=>{bounce(e)};return(0,r.jsxs)("section",{className:"relative z-10 mx-auto h-screen-large w-full select-none",children:[(0,r.jsx)(heroImage,{}),(0,r.jsxs)("div",{className:"paddingX absolute inset-0 top-[80px] mx-auto flex max-w-7xl flex-row items-start gap-5 xs:top-[120px] ",children:[(0,r.jsxs)("div",{className:"pointer-events-auto mt-5 flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"h-5 w-5 rounded-full bg-primary"}),(0,r.jsx)("div",{className:"h-40 w-1 bg-gradient-to-b from-primary via-secondary to-transparent sm:h-80"})]}),(0,r.jsxs)("div",{className:"pointer-events-auto",children:[(0,r.jsxs)("h1",{className:"mt-2 flex flex-wrap text-[40px] font-black text-text sm:text-[60px] lg:text-[80px] lg:leading-[98px] xs:text-[50px]",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer inline-block transition-colors hover:text-accent",variants:(0,c.M3)(.1,.5,()=>handleAppearComplete(e.current[0])),initial:"hidden",animate:"show",children:"H"}),(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer inline-block transition-colors hover:text-accent",variants:(0,c.M3)(.2,.5,()=>handleAppearComplete(e.current[1])),initial:"hidden",animate:"show",children:"i"}),(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer inline-block transition-colors hover:text-accent",variants:(0,c.M3)(.3,.5,()=>handleAppearComplete(e.current[2])),initial:"hidden",animate:"show",children:",\xa0"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer inline-block transition-colors hover:text-accent",variants:(0,c.M3)(.4,.5,()=>handleAppearComplete(e.current[3])),initial:"hidden",animate:"show",children:"I"}),(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer inline-block transition-colors hover:text-accent",variants:(0,c.M3)(.5,.5,()=>handleAppearComplete(e.current[4])),initial:"hidden",animate:"show",children:"'"}),(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer inline-block transition-colors hover:text-accent",variants:(0,c.M3)(.6,.5,()=>handleAppearComplete(e.current[5])),initial:"hidden",animate:"show",children:"m\xa0"})]}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsxs)("span",{className:"gradient-animation from-primary to-accent bg-big bg-clip-text text-transparent bg-gradient-120",children:[(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer gradient-letter inline-block transition-colors hover:text-accent",variants:(0,c.M3)(.5,.5,()=>handleAppearComplete(e.current[6])),initial:"hidden",animate:"show",children:"D"}),(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer gradient-letter inline-block transition-colors hover:text-accent",variants:(0,c.M3)(.6,.5,()=>handleAppearComplete(e.current[7])),initial:"hidden",animate:"show",children:"a"}),(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer gradient-letter inline-block transition-colors hover:text-accent",variants:(0,c.M3)(.7,.5,()=>handleAppearComplete(e.current[8])),initial:"hidden",animate:"show",children:"r"}),(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer gradient-letter inline-block transition-colors hover:text-accent",variants:(0,c.M3)(.8,.5,()=>handleAppearComplete(e.current[9])),initial:"hidden",animate:"show",children:"s"}),(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer gradient-letter inline-block transition-colors hover:text-accent",variants:(0,c.M3)(.9,.5,()=>handleAppearComplete(e.current[10])),initial:"hidden",animate:"show",children:"h"}),(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer gradient-letter inline-block transition-colors hover:text-accent",variants:(0,c.M3)(1,.5,()=>handleAppearComplete(e.current[11])),initial:"hidden",animate:"show",children:"e"}),(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer gradient-letter inline-block transition-colors hover:text-accent",variants:(0,c.M3)(1.1,.5,()=>handleAppearComplete(e.current[12])),initial:"hidden",animate:"show",children:"e"})]}),(0,r.jsx)(i.E.span,{ref:handleSpanRef,className:"bouncer inline-block transition-colors hover:text-accent",variants:(0,c.M3)(1.9,0,()=>handleAppearComplete(e.current[13])),initial:"hidden",animate:"show",children:"."})]})]}),(0,r.jsxs)(i.E.p,{className:"about-text leading[20px] mt-0 text-[16px] font-medium text-text sm:text-[26px] lg:text-[30px] lg:leading-[40px] xs:mt-[2] xs:text-[20px] xs:leading-normal",variants:(0,c.Ji)("","",1.5,1),initial:"hidden",animate:"show",children:["I'm a ",(0,r.jsx)("span",{className:"from-primary to-accent bg-clip-text text-transparent bg-gradient-120",children:"Full-Stack Developer"})," residing in\xa0",(0,r.jsx)("br",{className:"hidden sm:block"}),"New Brunswick, NJ",(0,r.jsx)("span",{className:"xs:hidden landscape-sm:inline",children:"."}),(0,r.jsxs)("span",{className:"hidden xs:inline landscape-sm:hidden",children:[", seeking new opportunities\xa0",(0,r.jsx)("br",{className:"hidden sm:block"}),"to contribute my skills and knowledge."]})]}),(0,r.jsx)(heroSocial,{})]})]}),(0,r.jsx)("div",{className:"absolute bottom-24 flex w-full items-center justify-center landscape-md:bottom-6",children:(0,r.jsx)("a",{href:"#about",className:"scroll-button group pointer-events-auto transition-transform duration-200 hover:translate-y-2 focus:translate-y-2",children:(0,r.jsx)("div",{className:"flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-text p-2 transition-colors group-hover:border-primary group-focus:border-primary",children:(0,r.jsx)(i.E.div,{animate:{y:[0,24,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"},className:"mb-1 h-3 w-3 rounded-full bg-text transition-colors group-hover:bg-primary group-focus:bg-primary"})})})})]})},u=n(8868),f=n(1783),sectionWrapper=(e,t)=>{let WrappedComponent=n=>((0,a.useEffect)(()=>{let e=document.querySelectorAll(".section-title"),t=document.querySelectorAll(".section-text");e.forEach(e=>{fluidHover(e)}),t.forEach(e=>{fluidHover(e)})},[]),(0,r.jsxs)(i.E.section,{variants:(0,c.Jm)(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.15},className:"padding relative z-10 mx-auto max-w-7xl",children:[(0,r.jsx)("span",{className:"mt-[-100px] block select-none pt-[100px]",id:t,children:"\xa0"}),(0,r.jsx)(e,{...n})]}));return WrappedComponent.displayName="SectionWrapper(".concat(e.displayName||e.name||"Component",")"),WrappedComponent};let ServiceCard=e=>{let{index:t,title:n,icons:a}=e;return(0,r.jsx)(u.Z,{className:"pointer-events-auto w-full xs:w-[250px]",scale:1.1,transitionSpeed:450,tiltMaxAngleX:15,tiltMaxAngleY:15,children:(0,r.jsxs)(i.E.div,{variants:(0,c.Ji)("right","spring",.5*t,.75),className:"w-full rounded-[20px] from-primary to-accent p-[2px] bg-gradient-90",children:[(0,r.jsx)("h3",{className:"text-center font-mono text-[20px] font-bold text-text",children:n}),(0,r.jsx)("div",{className:"flex min-h-[280px] flex-col justify-evenly rounded-[20px] bg-secondary px-8 py-5",children:a.map(e=>(0,r.jsxs)("div",{onClick:()=>window.open(e.link,"_blank"),onKeyDown:t=>{"Enter"===t.key&&window.open(e.link,"_blank")},className:"flex cursor-pointer items-center transition-transform hover:scale-110 focus:scale-110",tabIndex:0,children:[(0,r.jsx)(p(),{className:"h-6 w-6",src:e.icon,alt:e.name}),(0,r.jsx)("span",{className:"ml-2 py-1 font-mono text-sm font-medium text-text",children:e.name})]},e.name))})]})})};var v=sectionWrapper(()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.E.div,{variants:(0,c.wt)(),children:[(0,r.jsx)("p",{className:"section-subtitle",children:"Introduction"}),(0,r.jsx)("h2",{className:"section-title",children:"Overview."})]}),(0,r.jsx)(i.E.p,{variants:(0,c.Ji)("","",.1,1),className:"section-text pointer-events-auto mt-4 max-w-3xl text-[17px] leading-[30px] text-text",children:"As an experienced computer science professional with a Master's Degree in Computer Science from Rutgers University, I bring a strong foundation in Software Development, Data Engineering, Cloud Computing and Machine Learning. I am proficient in Python, TypeScript, JavaScript, Java, C# and Golang. Throughout my journey, I've worked with various frameworks like Flask, Django, Node.js, Spring Boot and Express.js. I'm a quick learner, I thrive on collaboration and enjoy creating efficient, scalable, and user-friendly solutions to tackle real-world problems. I'm eager to work together and contribute my skills to bring your ideas to life. Feel free to reach out and let's explore how we can create something great together!"}),(0,r.jsx)("div",{className:"mt-20 flex select-none flex-wrap gap-10",children:f.uZ.map((e,t)=>(0,r.jsx)(ServiceCard,{index:t,...e},e.title))})]}),"about"),g=n(6194);let ExperienceCard=e=>{let{experience:t,currentColors:n}=e;return(0,r.jsxs)(g.VerticalTimelineElement,{contentStyle:{background:n.secondaryColor,color:n.textColor},contentArrowStyle:{borderRight:"7px solid var(--color-secondary)"},date:t.date,iconStyle:{background:n.accentColor},icon:(0,r.jsx)(p(),{src:t.icon,alt:t.companyName,className:"rounded-full object-contain shadow-timeline-border"}),children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"pointer-events-auto text-[24px] font-bold text-text",children:t.title}),(0,r.jsx)("p",{className:"pointer-events-auto text-[16px] font-semibold text-text opacity-75",style:{margin:0},children:t.companyName})]}),(0,r.jsx)("ul",{className:"pointer-events-auto ml-5 mt-5 list-disc space-y-2",children:t.points.map((e,t)=>(0,r.jsx)("li",{className:" pl-1 text-[14px] tracking-wider text-text",children:e},"experience-point-".concat(t)))})]})};var C=sectionWrapper(()=>{let[e,t]=(0,a.useState)({secondaryColor:"rgba(0, 0, 0, 0)",textColor:"rgba(0, 0, 0, 0)",accentColor:"rgba(0, 0, 0, 0)"}),changeColors=()=>{let e=getComputedStyle(document.documentElement);t({secondaryColor:e.getPropertyValue("--color-secondary"),textColor:e.getPropertyValue("--color-text"),accentColor:e.getPropertyValue("--color-accent")})};return(0,a.useEffect)(()=>(window.addEventListener("colorsUpdated",changeColors),()=>{window.removeEventListener("colorsUpdated",changeColors)})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.E.div,{variants:(0,c.wt)(),children:[(0,r.jsx)("p",{className:"section-subtitle",children:"What I have done so far"}),(0,r.jsx)("h2",{className:"section-title",children:"Work Experience."})]}),(0,r.jsx)("div",{className:"mt-20 flex flex-col",children:(0,r.jsx)(g.VerticalTimeline,{lineColor:e.accentColor,children:f.kw.map((t,n)=>(0,r.jsx)(ExperienceCard,{experience:t,currentColors:e},n))})})]})},"work");let ProjectCard=e=>{let{index:t,name:n,description:a,techstack:s,image:o,prodLink:l,srcLink:d}=e;return(0,r.jsx)(i.E.div,{variants:(0,c.Ji)("up","spring",.5*t,1),children:(0,r.jsxs)(u.Z,{className:"pointer-events-auto flex w-full max-w-[640px] flex-col rounded-2xl border-2 border-accent p-5 lg:max-w-none ".concat((t+1)%2==0?"from-secondary to-background bg-gradient-45 lg:flex-row-reverse":"from-background to-secondary bg-gradient-135 lg:flex-row"),scale:1.05,transitionSpeed:450,tiltMaxAngleX:7,tiltMaxAngleY:7,children:[(0,r.jsx)("div",{className:"relative h-60 w-full max-w-[576px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-card xs:h-80",tabIndex:0,onClick:()=>l&&window.open(l,"_blank"),onKeyDown:e=>{"Enter"===e.key&&l&&window.open(l,"_blank")},children:(0,r.jsx)(p(),{src:o,alt:n,className:"h-auto w-full object-cover transition-transform duration-[2000ms] hover:-translate-y-[calc(100%-320px)] hover:duration-[8000ms]"})}),(0,r.jsxs)("div",{className:"px-2 py-5 text-center lg:px-5 lg:py-2 xl:px-10 xl:py-8",children:[(0,r.jsx)("h3",{className:"text-[24px] font-bold text-text",children:n}),(0,r.jsx)("p",{className:"mt-2 text-[17px] text-text opacity-75",children:a}),(0,r.jsx)("div",{className:"mt-3 flex flex-wrap justify-center gap-2",children:s.map(e=>(0,r.jsx)("div",{className:"h-6 w-6 cursor-pointer transition-transform hover:scale-110 focus:scale-110",tabIndex:0,onClick:()=>window.open(e.link,"_blank"),onKeyDown:t=>{"Enter"===t.key&&window.open(e.link,"_blank")},children:(0,r.jsx)(p(),{src:e.icon,alt:e.name,className:"object-contain"})},e.name))}),(0,r.jsxs)("div",{className:"mt-4 flex flex-row justify-center gap-9 text-[18px] font-medium",children:[d&&(0,r.jsxs)("a",{href:d,target:"_blank",rel:"noreferrer",className:"flex cursor-pointer items-center gap-1 text-text transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary focus:-translate-y-[2px] focus:text-primary",children:["Code",(0,r.jsx)("svg",{height:"1em",viewBox:"0 0 496 512",className:"text-current",children:(0,r.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",fill:"currentColor"})})]}),l&&(0,r.jsxs)("a",{href:l,target:"_blank",rel:"noreferrer",className:"flex cursor-pointer items-center gap-1 text-text transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary focus:-translate-y-[2px] focus:text-primary",children:["Demo",(0,r.jsx)("svg",{height:"1em",viewBox:"0 0 512 512",className:"text-current",children:(0,r.jsx)("path",{d:"M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z",fill:"currentColor"})})]})]})]})]})})};var j=sectionWrapper(()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.E.div,{variants:(0,c.wt)(),children:[(0,r.jsx)("p",{className:"section-subtitle",children:"My work"}),(0,r.jsx)("h2",{className:"section-title",children:"Projects."})]}),(0,r.jsx)("div",{className:"flex w-full",children:(0,r.jsx)(i.E.p,{variants:(0,c.Ji)("","",.1,1),className:"section-text pointer-events-auto mt-3 max-w-3xl text-[17px] leading-[30px] text-text",children:"I have almost three years of experience; I worked as a software engineer, then as a data engineer, and I am currently working as a data scientist. I have a holistic understanding of applications and the data that influences them. I am really interested in working on real-world projects that have a meaningful impact on people's lives. Due to this background, I have a collection of projects that effectively demonstrate my skills and experience, showcasing real-world examples of my work. Some projects have demonstration links as well as repositories containing the source code. These projects serve as a testament to my proficiency in tackling different challenges, adeptness with diverse technologies, and ability to efficiently manage projects."})}),(0,r.jsx)("div",{className:"mt-20 flex flex-col items-center gap-7",children:f.q.map((e,t)=>(0,r.jsx)(ProjectCard,{index:t,...e},t))})]}),"project"),b=n(3982),w=n(5745),y=n(1619),stars=()=>(0,r.jsx)("div",{className:"absolute inset-0 -z-10 h-auto w-full",children:(0,r.jsxs)(w.Xz,{camera:{position:[0,0,5]},children:[(0,r.jsx)(a.Suspense,{fallback:null,children:(0,r.jsx)(()=>{let e=(0,a.useRef)(null),t=getComputedStyle(document.documentElement),n=(0,a.useMemo)(()=>{let e=[];for(let n=0;n<500;n++){let n=.3>Math.random(),r=n?t.getPropertyValue("--color-accent"):t.getPropertyValue("--color-text"),a={position:[100*Math.random()-50,100*Math.random()-50,100*Math.random()-50],color:r,mesh:null};e.push(a)}return e},[t]);return(0,b.A)((t,n)=>{e.current&&(e.current.rotation.x+=n/10,e.current.rotation.y+=n/15)}),(0,a.useEffect)(()=>{let handleColorChange=()=>{n.forEach(e=>{let n=.3>Math.random()?t.getPropertyValue("--color-accent"):t.getPropertyValue("--color-text");if(e.color=n,e.mesh){let t=e.mesh.material;t.color.set(n)}})};return window.addEventListener("colorsUpdated",handleColorChange),()=>{window.removeEventListener("colorsUpdated",handleColorChange)}},[n,t]),(0,r.jsx)("group",{ref:e,children:n.map((e,t)=>{let{position:n,color:a}=e;return(0,r.jsxs)("mesh",{position:n,ref:t=>e.mesh=t,children:[(0,r.jsx)("sphereGeometry",{args:[.1,8,8],attach:"geometry"}),(0,r.jsx)("meshBasicMaterial",{color:a})]},t)})})},{})}),(0,r.jsx)(y.q,{all:!0})]})}),foot=()=>(0,r.jsxs)("footer",{className:"pointer-events-auto relative z-20 flex flex-col items-center justify-center bg-secondary px-4 py-6 text-center text-text",children:[(0,r.jsx)("div",{className:"flex flex-col items-center xs:flex-row",children:"Made with lots of ❤️ !"}),(0,r.jsxs)("p",{className:"mt-5 text-[14px] opacity-75 ",children:["\xa9 ",new Date().getFullYear()," Darshee Machhar ",(0,r.jsx)("br",{})]}),(0,r.jsxs)("a",{href:"https://github.com/Darshee-m/DarsheeMachhar.github.io/",target:"_blank",rel:"noreferrer",className:"mt-4 flex cursor-pointer items-center gap-1 text-[18px] font-medium text-text transition-transform duration-200 hover:-translate-y-[2px] focus:-translate-y-[2px] hover:text-primary focus:text-primary",children:["Code",(0,r.jsx)("svg",{height:"1em",viewBox:"0 0 496 512",className:"text-current",children:(0,r.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",fill:"currentColor"})})]})]}),page=()=>{let e=(0,a.useRef)(null),t=(0,a.useRef)(null),handleMouseEvent=t=>{!function(e,t){let n=t.current;n&&n.dispatchEvent(new MouseEvent(e.type,e))}(t,e)};return(0,a.useEffect)(()=>{(0,d.GF)();let n=e.current,r=t.current,a=getComputedStyle(document.documentElement);return r&&(r.addEventListener("click",handleMouseEvent),r.addEventListener("mousemove",handleMouseEvent),r.addEventListener("mousedown",handleMouseEvent),r.addEventListener("mouseup",handleMouseEvent),r.addEventListener("mouseover",handleMouseEvent),r.addEventListener("mouseout",handleMouseEvent)),n&&s.Z.simulation(n,{COLOR_PALETTE:[a.getPropertyValue("--color-primary"),a.getPropertyValue("--color-secondary"),a.getPropertyValue("--color-accent")],BACK_COLOR:a.getPropertyValue("--color-background")}),()=>{r&&(r.removeEventListener("click",handleMouseEvent),r.removeEventListener("mousemove",handleMouseEvent),r.removeEventListener("mousedown",handleMouseEvent),r.removeEventListener("mouseup",handleMouseEvent),r.removeEventListener("mouseover",handleMouseEvent),r.removeEventListener("mouseout",handleMouseEvent))}},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("canvas",{ref:e,className:"fixed left-0 top-0 z-0 h-screen-large w-full"}),(0,r.jsxs)("div",{ref:t,className:"pointer-events-none h-screen-small w-full",children:[(0,r.jsx)(components_hero,{}),(0,r.jsx)(v,{}),(0,r.jsx)(C,{}),(0,r.jsx)(j,{}),(0,r.jsx)("div",{className:"relative z-0",children:(0,r.jsx)(stars,{})}),(0,r.jsx)(foot,{})]})]})}},3054:function(){}},function(e){e.O(0,[689,647,310,741,971,864,744],function(){return e(e.s=846)}),_N_E=e.O()}]);