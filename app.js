const $box = document.getElementById('box');
const $search = document.getElementById('search');

$search.addEventListener('input', (event) => {
  const searchText = event.target.value;
  const regex = new RegExp(searchText, 'gi');

  let text = $box.innerHTML;
  text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');

  const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
  $box.innerHTML = newText;
});