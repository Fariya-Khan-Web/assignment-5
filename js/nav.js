const donation = document.getElementById('donation');
const history = document.getElementById('history');

const donationPage = document.getElementById('donation-page');
const transectionsPage = document.getElementById('transections');

function togglingInUI(id) {

    if (id === 'donation') {
        donationPage.classList.remove('hidden');
        transectionsPage.classList.add('hidden');
        
        donation.classList.add("bg-lime-400");
        donation.classList.remove("bg-gray-200");
        
        history.classList.add("bg-gray-200"); // inactive 

        document.getElementById('blog-bottom').classList.remove("hidden");

    } else {
        donationPage.classList.add('hidden');
        transectionsPage.classList.remove('hidden')
        
        history.classList.add("bg-lime-400");
        history.classList.remove("bg-gray-200");

        donation.classList.remove("bg-lime-400"); // inactive 
        
        document.getElementById('blog-bottom').classList.add("hidden");

    }
}

history.addEventListener('click', () => togglingInUI('history'));
donation.addEventListener('click', () => togglingInUI('donation'));
