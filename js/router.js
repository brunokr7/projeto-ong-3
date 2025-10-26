
import {homeTemplate, sobreTemplate, projetosTemplate, doarTemplate} from './templates.js';
import {Storage} from './storage.js';
const routes={
  '/':()=>({html:homeTemplate()}),
  '/sobre':()=>({html:sobreTemplate()}),
  '/projetos':()=>{
    const p=Storage.load('projects')||[{title:'Campanha',description:'Ajudar comunidades'}];
    return {html:projetosTemplate(p),projects:p};
  },
  '/doar':()=>({html:doarTemplate()})
};
export async function navigateTo(hash){
  const path=(hash||location.hash||'#/').replace(/^#/,'');const route=routes[path]||routes['/'];return route();
}
