// Codes By Mahdi Tasha
// Variables
const search_input = document.getElementById('search-input');
const search_input_holder = document.getElementById('search-input-holder');

// Adding Event Listener To Search Input Of Top Side Of Middle Section For
// Focus And Blur And It Borders Changes
search_input.addEventListener('focus', () => {search_input_holder.style.border = '1px solid #5f84f6';})
search_input.addEventListener('blur', () => {search_input_holder.style.border = '1px solid #f5f6fb';})

// Fixed A Bug
search_input_holder.addEventListener('click', () => search_input.focus());