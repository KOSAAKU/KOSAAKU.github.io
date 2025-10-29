// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Fetch GitHub repos for user KOSAAKU
async function loadRepos(){
  const container = document.getElementById('project-list');
  try{
    const res = await fetch('https://api.github.com/users/KOSAAKU/repos?sort=updated&per_page=12');
    if(!res.ok) throw new Error('GitHub API error: ' + res.status);
    const repos = await res.json();
    if(!Array.isArray(repos) || repos.length === 0){
      container.innerHTML = '<p class="muted">Aucun dépôt public trouvé.</p>';
      return;
    }
    const visible = repos.filter(r => !r.fork);
    container.innerHTML = visible.map(repo => `
      <article class="card repo">
        <h3><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h3>
        <p class="muted">${repo.description ? repo.description : 'Pas de description.'}</p>
        <div class="small muted">
          ★ ${repo.stargazers_count} • ${repo.language ?? 'Unknown'} • MAJ ${new Date(repo.updated_at).toLocaleDateString()}
        </div>
      </article>
    `).join('');
  }catch(e){
    console.warn(e);
    document.getElementById('project-list').innerHTML = `
      <div class="card">
        <strong>Impossible de charger les dépôts GitHub.</strong>
        <p class="muted small">Vous pouvez modifier l'URL dans <code>script.js</code> si votre pseudo n'est pas "KOSAAKU".</p>
      </div>`;
  }
}
loadRepos();

// Fake contact form — prevents real submit
function sendContact(e){
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = "Merci ! Votre message a bien été enregistré (demo locale).";
  return false;
}
