
export function homeTemplate(){
  return `<section class="card"><h1>Bem-vindo(a) à ONG</h1><p>SPA, templates e validação em JavaScript.</p></section>`;
}
export function sobreTemplate(){
  return `<section class="card"><h2>Sobre</h2><p>Organização fictícia para fins educacionais.</p></section>`;
}
export function projetosTemplate(projects=[]){
  const items = projects.map(p=>`<div class="card"><h3>${p.title}</h3><p>${p.description}</p></div>`).join('');
  return `<section><h2>Projetos</h2><div>${items}</div></section>`;
}
export function doarTemplate(){
  return `<section class="card"><h2>Doações</h2><form id="donation-form"><input class="input" name="name" placeholder="Nome"><div class="field-error" data-error-for="name"></div><input class="input" name="email" placeholder="Email"><div class="field-error" data-error-for="email"></div><input class="input" name="amount" type="number" placeholder="Valor"><div class="field-error" data-error-for="amount"></div><button type="submit" class="btn">Doar</button></form><div id="donation-list"></div></section>`;
}
