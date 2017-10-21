function hello() {
  alert('hello ' + document.location.href);
}

document.getElementById('clickme').addEventListener('click', hello);