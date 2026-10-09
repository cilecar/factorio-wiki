const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const viewsDir = path.join(process.cwd(), 'src/views');
const files = fs.readdirSync(viewsDir).filter(f => f.endsWith('.vue') && f !== 'HomeView.vue');
const data = {};
for (const file of files) {
  const filePath = path.join(viewsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const start = content.indexOf('<template>');
  const end = content.lastIndexOf('</template>');
  if (start === -1 || end === -1) continue;
  const html = content.substring(start + 10, end);
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const baseName = file.replace('View.vue', '');
  const parts = baseName.split('_');
  const category = parts[0]; 
  const originalFileName = baseName.substring(category.length + 1); 
  const routePath = '/' + category + '/' + originalFileName;
  const itemData = { category, id: originalFileName, routePath, sidebar: [], title: '', icon: '', description: '', extraInfo: '', entityImg: '', costs: [], totalRaw: [], stats: [], technologies: [], producedIn: [] };
  const sidebarLinks = doc.querySelectorAll('#mySidebar router-link');
  sidebarLinks.forEach(link => { itemData.sidebar.push({ to: link.getAttribute('to'), html: link.innerHTML.trim() }); });
  const h1 = doc.querySelector('h1.head__text');
  if (h1) {
    const img = h1.querySelector('img');
    if (img) { itemData.icon = img.getAttribute('src'); img.remove(); }
    itemData.title = h1.textContent.trim();
  }
  const h1Center = doc.querySelector('center');
  if (h1Center && h1Center.nextElementSibling && h1Center.nextElementSibling.tagName === 'P') itemData.description = h1Center.nextElementSibling.innerHTML.trim();
  const extraH3 = doc.querySelector('h3.head__info');
  if (extraH3 && extraH3.nextElementSibling && extraH3.nextElementSibling.tagName === 'P') itemData.extraInfo = extraH3.nextElementSibling.innerHTML.trim();
  const rightBlock = doc.querySelector('.col.p-0.grinder .container');
  if (rightBlock) {
    const header2 = rightBlock.querySelector('h3.text_info-2');
    if (header2 && header2.nextElementSibling && header2.nextElementSibling.tagName === 'IMG') itemData.entityImg = header2.nextElementSibling.getAttribute('src');
    else { const entityImg = rightBlock.querySelector('img.img-fluid[src*="_entity"]'); if (entityImg) itemData.entityImg = entityImg.getAttribute('src'); }
    rightBlock.querySelectorAll('.block .factorio-icon').forEach(icon => {
        const link = icon.querySelector('router-link'); const img = icon.querySelector('img'); const text = icon.querySelector('.factorio-icon-text');
        itemData.costs.push({ to: link ? link.getAttribute('to') : '', img: img ? img.getAttribute('src') : '', text: text ? text.textContent.trim() : '' });
    });
    rightBlock.querySelectorAll('.block_2 .factorio-icon').forEach(icon => {
        const link = icon.querySelector('router-link'); const img = icon.querySelector('img'); const text = icon.querySelector('.factorio-icon-text');
        itemData.totalRaw.push({ to: link ? link.getAttribute('to') : '', img: img ? img.getAttribute('src') : '', text: text ? text.textContent.trim() : '' });
    });
    rightBlock.querySelectorAll('table').forEach(table => {
        const tr = table.querySelector('tr');
        if (tr && tr.children.length === 2) itemData.stats.push({ key: tr.children[0].textContent.trim(), valueHtml: tr.children[1].innerHTML.trim() });
        else if (tr && tr.children.length === 1) {
            const key = tr.children[0].textContent.trim();
            const wrapper = table.parentElement.querySelector('.pos-researches');
            if (wrapper) {
                const iconList = [];
                wrapper.querySelectorAll('.factorio-icon').forEach(icon => {
                    const link = icon.querySelector('router-link'); const img = icon.querySelector('img');
                    iconList.push({ to: link ? link.getAttribute('to') : '', img: img ? img.getAttribute('src') : '' });
                });
                if (key.includes('Производится Т')) itemData.producedIn = iconList;
                else itemData.technologies = iconList; // default to technologies if not produced in
            }
        }
    });
  }
  data[routePath] = itemData;
}
fs.writeFileSync(path.join(process.cwd(), 'src/data.json'), JSON.stringify(data, null, 2));
console.log('Extracted data for ' + Object.keys(data).length + ' items.');
