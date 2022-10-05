const insert_btn = null || document.getElementById('Insert-Btns');

const API = 'https://api.github.com/users/Dev-SamGomez/repos';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const repos = await fetchData(API);
    let view = `
    ${repos.map((repo, index) => `
            <div class="window-pj-modal Pj${index}">
               <h4>${repo.name}</h4><button id="btn${index}" onclick="ModalViewProject(${index});"></button>
            </div>
    `).join('')}
    `;
    insert_btn.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();