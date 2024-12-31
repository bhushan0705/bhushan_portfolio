function togglePopup() {
  const popup = document.getElementById('popup');
  const body = document.body;

  if (popup.style.display === 'block') {
      popup.style.display = 'none';
      body.style.overflow = 'auto'; // Re-enable body scroll
  } 
  else {
      popup.style.display = 'block';
      body.style.overflow = 'hidden'; // Disable body scroll
  }
}


function togglePopup2() {
  const popup = document.getElementById("popup2");
  const body = document.body;

  if (popup.style.display === "block") {
      popup.style.display = "none";
      body.style.overflow = 'auto';
  } 
  else {
      popup.style.display = "block";
      body.style.overflow = 'hidden';
  }
}

