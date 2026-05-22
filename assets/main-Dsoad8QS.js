import"./style-jfaEfkr_.js";function f(e,t,n=2e3){const o=performance.now();function i(l){const r=l-o,a=Math.min(r/n,1),c=1-Math.pow(1-a,3),d=Math.floor(0+(t-0)*c);e.textContent=d.toLocaleString(),a<1?requestAnimationFrame(i):e.textContent=t.toLocaleString()}requestAnimationFrame(i)}function v(){const e=document.querySelectorAll("[data-counter]"),t=new Set,n=new IntersectionObserver(s=>{s.forEach(o=>{if(o.isIntersecting&&o.target.hasAttribute("data-counter")&&!t.has(o.target)){t.add(o.target);const i=parseInt(o.target.getAttribute("data-counter"),10);f(o.target,i)}})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});e.forEach(s=>n.observe(s))}function b(){const e=document.getElementById("mobile-menu-btn"),t=document.getElementById("mobile-menu"),n=document.getElementById("navbar");e&&t&&(e.addEventListener("click",()=>{const s=t.classList.contains("hidden");t.classList.toggle("hidden",!s),e.setAttribute("aria-expanded",s),n&&(s?(n.classList.add("bg-white","shadow-lg"),n.classList.remove("bg-transparent")):window.pageYOffset<50&&(n.classList.remove("bg-white","shadow-lg"),n.classList.add("bg-transparent")))}),t.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>{t.classList.add("hidden"),e.setAttribute("aria-expanded","false"),n&&window.pageYOffset<50&&(n.classList.remove("bg-white","shadow-lg"),n.classList.add("bg-transparent"))})}))}function w(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const n=document.querySelector(this.getAttribute("href"));n&&n.scrollIntoView({behavior:"smooth",block:"start"})})})}function L(){const e=document.getElementById("navbar");e&&(window.addEventListener("scroll",()=>{const t=window.pageYOffset;window.innerWidth>=768?t>50?(e.classList.add("bg-white","shadow-lg"),e.classList.remove("bg-transparent","md:bg-transparent")):(e.classList.remove("bg-white","shadow-lg"),e.classList.add("bg-transparent","md:bg-transparent")):(e.classList.add("bg-white"),e.classList.remove("bg-transparent","bg-white/95"))}),window.innerWidth<768?(e.classList.add("bg-white"),e.classList.remove("bg-transparent","bg-white/95","md:bg-transparent")):e.classList.add("md:bg-transparent"))}function x(){const e=document.getElementById("contact-modal"),t=document.getElementById("contact-btn-nav"),n=document.getElementById("contact-btn-mobile"),s=document.getElementById("close-modal"),o=document.getElementById("cancel-form"),i=document.getElementById("contact-form");if(!e)return;const l=()=>{e.classList.remove("hidden"),e.classList.add("flex","items-center","justify-center"),document.body.style.overflow="hidden"},r=()=>{e.classList.add("hidden"),e.classList.remove("flex","items-center","justify-center"),document.body.style.overflow="",i.reset()};t&&t.addEventListener("click",a=>{a.preventDefault(),l()}),n&&n.addEventListener("click",a=>{a.preventDefault(),l();const c=document.getElementById("mobile-menu"),d=document.getElementById("mobile-menu-btn");c&&!c.classList.contains("hidden")&&(c.classList.add("hidden"),d.setAttribute("aria-expanded","false"))}),s&&s.addEventListener("click",r),o&&o.addEventListener("click",r),e.addEventListener("click",a=>{a.target===e&&r()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!e.classList.contains("hidden")&&r()}),i&&i.addEventListener("submit",a=>{a.preventDefault();const c=document.getElementById("contact-name").value,d=document.getElementById("contact-email").value,u=document.getElementById("contact-subject").value||"Contact from SixPilot Website",g=document.getElementById("contact-message").value,p=`Name: ${encodeURIComponent(c)}
Email: ${encodeURIComponent(d)}

Message:
${encodeURIComponent(g)}`,h=`mailto:sixpilot.technology@gmail.com?subject=${encodeURIComponent(u)}&body=${p}`;window.location.href=h,setTimeout(()=>{r()},500)})}async function k(){const e=document.getElementById("apps-container");if(e)try{const n=await(await fetch("/apps.json")).json();if(n.length===0){e.innerHTML=`
                <div class="col-span-full text-center py-12">
                    <p class="text-text-muted">No apps available yet. Use the generate script to add apps.</p>
                </div>
            `;return}const s=["from-blue-500 to-blue-600","from-pink-500 to-purple-600","from-orange-500 to-red-600","from-green-500 to-teal-600","from-indigo-500 to-purple-600","from-yellow-500 to-orange-600"];e.innerHTML=n.map((o,i)=>{const l=s[i%s.length],r=y(i);return`
                <div class="feature-card group cursor-pointer" onclick="window.location.href='/${o.slug}'">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${l} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        ${r}
                    </div>
                    <h3 class="font-heading text-2xl font-bold text-text-primary mb-3">${m(o.name)}</h3>
                    <p class="text-text-muted leading-relaxed mb-4">
                        ${m(o.description)}
                    </p>
                    <div class="flex flex-wrap items-center gap-2 text-primary-700 font-medium">
                        <a href="/${o.slug}/policy" class="text-sm hover:underline" onclick="event.stopPropagation()">Privacy Policy</a>
                        <span class="text-sm">•</span>
                        <a href="/${o.slug}/term" class="text-sm hover:underline" onclick="event.stopPropagation()">Terms</a>
                    </div>
                </div>
            `}).join("")}catch(t){console.error("Error loading apps:",t),e.innerHTML=`
            <div class="col-span-full text-center py-12">
                <p class="text-text-muted">Error loading apps. Please try again later.</p>
            </div>
        `}}function y(e){const t=[`<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>`,`<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>`,`<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`,`<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>`,`<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>`,`<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>`];return t[e%t.length]}function m(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}document.addEventListener("DOMContentLoaded",()=>{v(),b(),w(),L(),x(),k()});
