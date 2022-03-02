// Codes By Mahdi Tasha
// Variables
const main_section_top_items1 = document.getElementById('main-section-top-items1');
const main_section_top_items2 = document.getElementById('main-section-top-items2');
const main_section_top_items3 = document.getElementById('main-section-top-items3');

// A Function That Takes 3 Arguments And Adds Event Listener On First Argument And Class Of Active And Removes Other Args active Class
function mainSectionTopItems(item, item2, item3) {
    item.addEventListener('click', () => {
        item.classList.add('active');
        item2.classList.remove('active');
        item3.classList.remove('active');
    })
}

// Calling mainSectionTopItems On Main Section Top Items
mainSectionTopItems(main_section_top_items1, main_section_top_items2, main_section_top_items3);
mainSectionTopItems(main_section_top_items2, main_section_top_items1, main_section_top_items3);
mainSectionTopItems(main_section_top_items3, main_section_top_items2, main_section_top_items1);