const { chromium } = require('/tmp/claude-0/-home-claude/cac87427-2334-5830-b804-088523c21e1c/scratchpad/vnu/node_modules/playwright-core');
const fs=require('fs'); const E='/tmp/claude-0/-home-claude/cac87427-2334-5830-b804-088523c21e1c/scratchpad/evid8/';
const B='http://localhost:8771/'; const out={};
(async()=>{
  const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--no-sandbox']});
  const mk=async(o={})=>{const c=await b.newContext(Object.assign({viewport:{width:1280,height:800}},o));const p=await c.newPage();return [c,p];};

  // ---------- LAB 10: navbar ----------
  let [c,p]=await mk({viewport:{width:390,height:844}});
  await p.goto(B+'version-bootstrap/index.html',{waitUntil:'networkidle'});
  const tog=p.locator('.navbar-toggler');
  out.navbar={visibleToggler:await tog.isVisible(), menuVisibleAntes:await p.locator('#menu-principal').isVisible(), expandedAntes:await tog.getAttribute('aria-expanded')};
  await tog.click(); await p.waitForTimeout(500);
  out.navbar.expandedDespues=await tog.getAttribute('aria-expanded'); out.navbar.menuVisibleDespues=await p.locator('#menu-principal').isVisible();
  await p.screenshot({path:E+'bs-390-menu-abierto.png'});
  await tog.click(); await p.waitForTimeout(500); out.navbar.expandedCerrar=await tog.getAttribute('aria-expanded');
  // ---------- grilla ----------
  out.grilla={};
  for (const w of [390,576,992,1280]){
    await p.setViewportSize({width:w,height:844}); await p.waitForTimeout(150);
    const r=await p.evaluate(()=>{const cards=[...document.querySelectorAll('.col:has(> .card)')].filter(c=>c.offsetParent!==null);const tops=[...new Set(cards.map(c=>Math.round(c.getBoundingClientRect().top)))];const first=cards.filter(c=>Math.round(c.getBoundingClientRect().top)===tops[0]).length;const hs=cards.map(c=>Math.round(c.querySelector('.card').getBoundingClientRect().height));
      const col=document.querySelector('#bienvenida').closest('.row').children; const a=col[0].getBoundingClientRect(),bb=col[1].getBoundingClientRect();
      return {columnasPorFila:first,altoCards:hs,bienvenidaLadoALado:Math.abs(a.top-bb.top)<200 && bb.left>a.left+50,overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth}});
    out.grilla[w]=r;
  }
  await c.close();

  // ---------- LAB 11: modal por teclado ----------
  [c,p]=await mk({viewport:{width:1280,height:800}});
  await p.goto(B+'version-bootstrap/index.html',{waitUntil:'networkidle'});
  const btn=p.locator('button[data-bs-target="#reserva-rapida"]');
  await btn.focus(); await p.keyboard.press('Enter'); await p.waitForTimeout(600);
  const act=()=>p.evaluate(()=>document.activeElement.id||document.activeElement.className||document.activeElement.tagName);
  out.modal={abierto:await p.locator('#reserva-rapida').isVisible(), focoInicial:await act(), ariaModal:await p.locator('#reserva-rapida').getAttribute('aria-modal'), role:await p.locator('#reserva-rapida').getAttribute('role'), ariaHidden:await p.locator('#reserva-rapida').getAttribute('aria-hidden')};
  await p.screenshot({path:E+'bs-1280-modal-abierto.png'});
  const tabs=[]; for(let i=0;i<9;i++){await p.keyboard.press('Tab'); tabs.push(await act());}
  out.modal.recorridoTab=tabs; out.modal.focoSigueDentro=await p.evaluate(()=>document.querySelector('#reserva-rapida').contains(document.activeElement));
  await p.keyboard.press('Escape'); await p.waitForTimeout(600);
  out.modal.cerradoConEscape=!(await p.locator('#reserva-rapida').isVisible());
  out.modal.focoVuelveAlBoton=await p.evaluate(()=>document.activeElement.getAttribute('data-bs-target'));
  // envio con datos invalidos / validos
  await btn.click(); await p.waitForTimeout(500);
  await p.fill('#rr-nombre','Cliente de prueba'); await p.fill('#rr-celular','12345678'); await p.selectOption('#rr-tour','misiones');
  out.modal.celularInvalido=await p.evaluate(()=>document.querySelector('#reserva-rapida form').checkValidity());
  await p.fill('#rr-celular','70000000');
  out.modal.celularValido=await p.evaluate(()=>document.querySelector('#reserva-rapida form').checkValidity());
  await Promise.all([p.waitForURL(/gracias\.html/),p.click('#reserva-rapida button[type=submit]')]);
  out.modal.urlEnvio=p.url().replace(B,'');
  await c.close();

  // ---------- carrusel ----------
  [c,p]=await mk({viewport:{width:1280,height:800}});
  await p.goto(B+'version-bootstrap/index.html',{waitUntil:'networkidle'});
  const act2=()=>p.evaluate(()=>[...document.querySelectorAll('.carousel-item')].findIndex(e=>e.classList.contains('active')));
  out.carrusel={ride:await p.getAttribute('#galeria-destacada','data-bs-ride'), inicial:await act2()};
  await p.waitForTimeout(7000); out.carrusel.tras7sSinTocar=await act2();
  await p.locator('.carousel-control-next').scrollIntoViewIfNeeded(); await p.click('.carousel-control-next'); await p.waitForTimeout(900); out.carrusel.trasSiguiente=await act2();
  await p.click('[data-bs-slide-to="3"]'); await p.waitForTimeout(900); out.carrusel.trasIndicador4=await act2();
  out.carrusel.indicadorActual=await p.evaluate(()=>[...document.querySelectorAll('.carousel-indicators button')].map(b=>b.getAttribute('aria-current')));
  out.carrusel.lazy=await p.$$eval('.carousel-item img',is=>is.map(i=>i.getAttribute('loading')));
  await p.locator('#galeria-destacada').scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
  await p.screenshot({path:E+'bs-1280-carrusel.png'});
  await c.close();

  // ---------- colores BS claro/oscuro ----------
  for (const scheme of ['light','dark']){
    [c,p]=await mk({viewport:{width:1280,height:900},colorScheme:scheme});
    await p.goto(B+'version-bootstrap/index.html',{waitUntil:'networkidle'});
    out['bs_'+scheme]=await p.evaluate(()=>{const g=(s,pr)=>getComputedStyle(document.querySelector(s))[pr];return {tema:document.documentElement.getAttribute('data-bs-theme'),fondoBody:g('body','backgroundColor'),colorBody:g('body','color'),navbarBg:g('.navbar','backgroundColor'),btnWarning:g('.btn-warning','backgroundColor'),btnWarningTxt:g('.btn-warning','color'),btnOutline:g('.btn-outline-success','color'),badge:g('.badge','backgroundColor'),h1:g('h1','color'),fuenteH1:g('h1','fontFamily').split(',')[0],cardBg:g('.card','backgroundColor'),footerBg:g('footer','backgroundColor'),link:g('.card-footer a','color')}});
    await p.screenshot({path:E+`bs-1280-${scheme}.png`,fullPage:true});
    await c.close();
  }
  // ---------- sitio propio: cabecera, tokens, reduced motion ----------
  out.header={};
  for (const w of [390,768,1280]){
    [c,p]=await mk({viewport:{width:w,height:800}});
    await p.goto(B+'tours.html',{waitUntil:'networkidle'}); await p.evaluate(()=>window.scrollTo({top:1500,behavior:'instant'})); await p.waitForTimeout(150);
    out.header[w]=await p.evaluate(()=>({position:getComputedStyle(document.querySelector('header')).position,topTrasScroll:Math.round(document.querySelector('header').getBoundingClientRect().top)}));
    await c.close();
  }
  for (const rm of ['no-preference','reduce']){
    [c,p]=await mk({reducedMotion:rm});
    await p.goto(B+'index.html',{waitUntil:'domcontentloaded'});
    out['motion_'+rm]=await p.evaluate(()=>{const e=document.querySelector('.hero-texto');const s=getComputedStyle(e);return {animacion:s.animationName,duracion:s.animationDuration,scrollBehavior:getComputedStyle(document.documentElement).scrollBehavior}});
    await c.close();
  }
  // hover solo con puntero: transicion de tarjeta
  [c,p]=await mk(); await p.goto(B+'index.html',{waitUntil:'networkidle'});
  out.tarjeta={transition:await p.evaluate(()=>getComputedStyle(document.querySelector('.tarjeta')).transition)};
  await p.hover('.tarjeta'); await p.waitForTimeout(500);
  out.tarjeta.transformHover=await p.evaluate(()=>getComputedStyle(document.querySelector('.tarjeta')).transform);
  await c.close();
  // ---------- galeria: columnas por ancho ----------
  out.galeria={};
  for (const w of [390,768,1024,1280]){
    [c,p]=await mk({viewport:{width:w,height:800}}); await p.goto(B+'galeria.html',{waitUntil:'networkidle'});
    out.galeria[w]=await p.evaluate(()=>getComputedStyle(document.querySelector('.galeria')).gridTemplateColumns.split(' ').length);
    await c.close();
  }
  // ---------- tours dl alineado + areas del body ----------
  [c,p]=await mk(); await p.goto(B+'tours.html',{waitUntil:'networkidle'});
  out.dl=await p.evaluate(()=>{const dts=[...document.querySelectorAll('#misiones dt')].map(e=>Math.round(e.getBoundingClientRect().left));const dds=[...document.querySelectorAll('#misiones dd')].map(e=>Math.round(e.getBoundingClientRect().left));return {dtLeft:dts,ddLeft:dds,cols:getComputedStyle(document.querySelector('#misiones dl')).gridTemplateColumns}});
  out.body=await p.evaluate(()=>({areas:getComputedStyle(document.body).gridTemplateAreas,rows:getComputedStyle(document.body).gridTemplateRows}));
  await c.close();
  // gracias: pie abajo
  for (const w of [390,1280]){ [c,p]=await mk({viewport:{width:w,height:800}}); await p.goto(B+'gracias.html',{waitUntil:'networkidle'});
    out['gracias_'+w]=await p.evaluate(()=>({pieBottom:Math.round(document.querySelector('footer').getBoundingClientRect().bottom),alturaVentana:innerHeight}));await c.close();}
  // contacto 2 columnas
  for (const w of [768,1280]){ [c,p]=await mk({viewport:{width:w,height:900}}); await p.goto(B+'contacto.html',{waitUntil:'networkidle'});
    out['form_'+w]=await p.evaluate(()=>{const f=[...document.querySelectorAll('.form-columnas > fieldset')].map(e=>Math.round(e.getBoundingClientRect().left));const cb=document.querySelector('#politicas').getBoundingClientRect(), lb=document.querySelector('label[for=politicas]').getBoundingClientRect();return {fieldsetLeft:f,casillaJuntoAlTexto:Math.abs(cb.top-lb.top)<12}});await c.close();}
  fs.writeFileSync(E+'resultados.json',JSON.stringify(out,null,2));
  console.log(JSON.stringify(out,null,1));
  await b.close();
})();
