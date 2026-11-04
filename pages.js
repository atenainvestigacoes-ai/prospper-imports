'use strict';
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
menu?.addEventListener('click',()=>{const open=!nav.classList.contains('open');nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
const normal=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const directory=document.querySelector('#directory-search');directory?.addEventListener('input',()=>{const q=normal(directory.value);document.querySelectorAll('[data-city-name]').forEach(li=>li.hidden=!normal(li.dataset.cityName).includes(q));});
const citySearch=document.querySelector('#city-search'),citySelect=document.querySelector('#city-select'),link=document.querySelector('#product-whatsapp');
if(citySelect){let cities=[];
 const populate=()=>{const q=normal(citySearch.value),matches=cities.filter(c=>!q||normal(c.name+' '+c.uf).includes(q)).slice(0,100);citySelect.replaceChildren(new Option('Selecione a cidade nos resultados',''));for(const c of matches)citySelect.add(new Option(c.name+' — '+c.uf,c.id));};
 const update=()=>{const c=cities.find(c=>c.id===citySelect.value);if(!c)return;document.querySelector('#city-policy').textContent=c.uf==='MG'&&normal(c.name)==='uberlandia'?'Uberlândia: Pix, crédito ou débito na máquina. Entrega grátis acima de R$ 1.000,00; demais condições sob consulta.':'Para '+c.name+'/'+c.uf+': frete e prazo sob consulta. Pagamento por Pix, boleto, link, Shopee ou Mercado Livre, conforme atendimento.';link.href='https://wa.me/553496315100?text='+encodeURIComponent('Olá! Quero consultar '+link.dataset.product+' (código '+link.dataset.sku+') para '+c.name+'/'+c.uf+'.');};
 citySearch.addEventListener('input',populate);citySelect.addEventListener('change',update);
 fetch('/cities.json').then(r=>{if(!r.ok)throw Error('Não foi possível carregar as cidades');return r.json();}).then(data=>{cities=data;populate();const requested=new URLSearchParams(location.search).get('cidade'),city=cities.find(c=>c.id===requested);if(city){citySearch.value=city.name;populate();citySelect.value=city.id;update();}}).catch(()=>{document.querySelector('#city-policy').textContent='Não foi possível carregar as cidades. Informe sua cidade pelo WhatsApp para consultar a entrega.';});
}
