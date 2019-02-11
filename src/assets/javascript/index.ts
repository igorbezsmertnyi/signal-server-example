const index = () => {
  const btn = document.getElementById('btn');

  if (!btn) {
    return;
  }

  btn.addEventListener('click', () => {
    fetch('/create', {
      method: 'POST'
    })
    .then((res) => res.json())
    .then((res) => setTimeout(() => window.location = res.url, 1000))
    .catch(console.error);
  });
};

window.addEventListener('DOMContentLoaded', index);
