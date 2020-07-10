let select = document.getElementsByClassName('select');
let options = document.getElementsByClassName('options');
let question_btn = document.querySelectorAll('.question-btn div');
let osago_inputs = document.getElementsByClassName('osago-inputs');

let selected_index;

function find_index(node) {
    // node = e.target
    let p = node.parentElement;
    return Array.prototype.indexOf.call(p.children, node);
}

for (let i = 0; i < select.length; i++) {
    select[i].addEventListener('click', (event) => {
        let parent = event.target;

        while (parent.className != 'content-item') {
            parent = parent.parentElement;
        }

        let index = find_index(parent);

        if (question_btn[index].style.transform != 'rotate(180deg)') {
            options[index].style.marginTop = '0';
            options[index].style.opacity = '1';
            question_btn[index].style.transform = 'rotate(180deg)';
        }
        else {
            options[index].style.marginTop = '-30rem';
            options[index].style.opacity = '0';
            question_btn[index].style.transform = 'rotate(0deg)';
        }

        selected_index = index;
    });
}

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', (event) => {
        if (options[selected_index].style.opacity == '1') {

            select[selected_index].querySelector('p').innerText = event.target.innerText;
            osago_inputs[selected_index].value = select[selected_index].querySelector('p').innerText;

            options[selected_index].style.marginTop = '-30rem';
            options[selected_index].style.opacity = '0';
            question_btn[selected_index].style.transform = 'rotate(0deg)';
            
            console.log(osago_inputs[selected_index].value);
        }
    });
}