function validateForm() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let country = document.querySelector('#country').value;
  
    if (name == "" || email == "" || country == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }
}

const slides = document.getElementById('slides');
    const totalImages = slides.children.length;
    let index = 0;

    function showNextImage() {
      index = (index + 1) % totalImages; // Loop back to the first image
      slides.style.transform = `translateX(-${index * 800}px)`; // Move to the next image
    }

    // Automatically switch images every 2 seconds
    setInterval(showNextImage, 2000);