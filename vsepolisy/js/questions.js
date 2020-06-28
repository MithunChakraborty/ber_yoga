let questions = document.getElementsByClassName('question');
let answers = document.getElementsByClassName('answer');
let question_btn = document.querySelectorAll('.question-btn div');

function find_index(node) {
    // node = e.target
    let p = node.parentElement;
    return Array.prototype.indexOf.call(p.children, node);
}

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', (event) => {
        let parent = event.target;

        while (parent.className != 'content-item') {
            parent = parent.parentElement;
        }

        let index = find_index(parent);

        if (question_btn[index].style.transform != 'rotate(180deg)') {
            answers[index].style.marginTop = '0';
            answers[index].style.opacity = '1';
            question_btn[index].style.transform = 'rotate(180deg)';
        }
        else {
            answers[index].style.marginTop = '-30rem';
            answers[index].style.opacity = '0';
            question_btn[index].style.transform = 'rotate(0deg)';
        }
    });
}