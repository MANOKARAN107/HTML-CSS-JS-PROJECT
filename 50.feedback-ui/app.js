let selectedRating = null;

const allRatings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('.btn');
const panel = document.querySelector('#panel');

allRatings.forEach((rating)=> {
    rating.addEventListener('click', ()=> {
        if (selectedRating) {
            selectedRating.classList.remove('active');
        }

        if(rating === selectedRating) {
            selectedRating = null;
            return;
        }

        rating.classList.toggle('active');
        selectedRating = rating;

        if(!rating.classList.contains('active')) {
            rating.classList.toggle('active');
            selectedRating = null;
            return;
        }
        
    })
});

sendBtn.addEventListener("click", () => {
    if(!selectedRating) {
        return;
    }

    const selectedMessage = selectedRating.querySelector('small').innerHTML;

    panel.innerHTML = `
          <p class="heart">💖</p>
          <strong>Thank You! </strong>
          <br>
          <strong>Feedback: ${selectedMessage} </strong>
      `;
});