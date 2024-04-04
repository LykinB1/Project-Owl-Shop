document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
    this.style.display = 'none';
  });
  
  document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('menuButton').style.display = 'block';
  });
  