// Codes By Mahdi Tasha
// variables
const left_side_section_item1 = document.getElementById('left-side-section-item1');
const left_side_section_item2 = document.getElementById('left-side-section-item2');
const left_side_section_item3 = document.getElementById('left-side-section-item3');
const left_side_section_item4 = document.getElementById('left-side-section-item4');
const left_side_section_item5 = document.getElementById('left-side-section-item5');
const left_side_section_item6 = document.getElementById('left-side-section-item6');

// A Function That De Activates The Given Element
function deActiveListItem(element1, element2, element3, element4, element5) {
    element1.classList.remove('active');
    element2.classList.remove('active');
    element3.classList.remove('active');
    element4.classList.remove('active');
    element5.classList.remove('active');
}

// A Function That Activates Given Item And DeActivates Others
function activateItemAndDeActiveOthers(item, element1, element2, element3, element4, element5) {
    item.addEventListener('click', () => {
        item.classList.add('active');
        deActiveListItem(element1, element2, element3, element4, element5);
    })
}

// Calling activateItemAndDeActiveOthers Function On Each Item
activateItemAndDeActiveOthers(left_side_section_item1, left_side_section_item2, left_side_section_item3, left_side_section_item4, left_side_section_item5, left_side_section_item6);
activateItemAndDeActiveOthers(left_side_section_item2, left_side_section_item1, left_side_section_item3, left_side_section_item4, left_side_section_item5, left_side_section_item6);
activateItemAndDeActiveOthers(left_side_section_item3, left_side_section_item2, left_side_section_item1, left_side_section_item4, left_side_section_item5, left_side_section_item6);
activateItemAndDeActiveOthers(left_side_section_item4, left_side_section_item2, left_side_section_item3, left_side_section_item1, left_side_section_item5, left_side_section_item6);
activateItemAndDeActiveOthers(left_side_section_item5, left_side_section_item2, left_side_section_item3, left_side_section_item4, left_side_section_item1, left_side_section_item6);
activateItemAndDeActiveOthers(left_side_section_item6, left_side_section_item2, left_side_section_item3, left_side_section_item4, left_side_section_item5, left_side_section_item1);