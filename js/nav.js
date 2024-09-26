const donation = document.getElementById('donation');
const history = document.getElementById('history');

function hide(id){
    document.getElementById('donation-page').classList.add('hidden');
     document.getElementById('transection').classList.add('hidden')
    console.log(123)
    document.getElementById(id).classList.remove('hidden');

}
 
// donation.addEventListener('click', hide('donation'));
// history.addEventListener('click', hide('history'));