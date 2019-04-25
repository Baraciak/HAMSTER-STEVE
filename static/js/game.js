function main(){
    dragula([document.querySelector('#column1'),
            document.querySelector('#column2'),
            document.querySelector('#column3'),
            document.querySelector('#column4'),
            document.querySelector('#column5'),
            document.querySelector('#column6'),
            document.querySelector('#column7'),
            document.querySelector('#column8'),
            document.querySelector('#column-left1'),
            document.querySelector('#column-left2'),
            document.querySelector('#column-left3'),
            document.querySelector('#column-right1'),
            document.querySelector('#column-right2'),
            document.querySelector('#column-right3')
            ]);
    printPipes();
}
function printPipes() {
    let pipeIndex = 1;
    let sideBar = 'left';

    for (let i = 1; i <= 36; i++) {
        if (i >= 12) sideBar = 'right';

        if (i === 1) {
            for (let l = 0; l <= 1; l++) {
                let pipeDiv = createPipe(pipeIndex);
                document.querySelector(`#column-${sideBar}1`).appendChild(pipeDiv);
            }
        } else if (i === 2) {
            for (let l = 0; l <= 1; l++) {
                let pipeDiv = createPipe(pipeIndex);
                document.querySelector(`#column-${sideBar}1`).appendChild(pipeDiv);
            }
        } else if (i === 3) {
            for (let l = 0; l <= 1; l++) {
                let pipeDiv = createPipe(pipeIndex);
                document.querySelector(`#column-${sideBar}1`).appendChild(pipeDiv);
            }
        } else if (i === 4) {
            for (let l = 0; l <= 1; l++) {
                let pipeDiv = createPipe(pipeIndex);
                document.querySelector(`#column-${sideBar}2`).appendChild(pipeDiv);
            }
        } else if (i === 5) {
            for (let l = 0; l <= 1; l++) {
                let pipeDiv = createPipe(pipeIndex);
                document.querySelector(`#column-${sideBar}2`).appendChild(pipeDiv);
            }
        } else if (i === 6) {
            for (let l = 0; l <= 1; l++) {
                let pipeDiv = createPipe(pipeIndex);
                document.querySelector(`#column-${sideBar}2`).appendChild(pipeDiv);
            }
        } else if (i === 7) {
            let pipeDiv = createPipe(pipeIndex);
            document.querySelector(`#column-${sideBar}3`).appendChild(pipeDiv);
        } else if (i === 8) {
            let pipeDiv = createPipe(pipeIndex);
            document.querySelector(`#column-${sideBar}3`).appendChild(pipeDiv);
        } else if (i === 9) {
            let pipeDiv = createPipe(pipeIndex);
            document.querySelector(`#column-${sideBar}3`).appendChild(pipeDiv);
        } else if (i === 10) {
            let pipeDiv = createPipe(pipeIndex);
            document.querySelector(`#column-${sideBar}3`).appendChild(pipeDiv);
        }
        pipeIndex++;
    }
}

function createPipe(pipeIndex){

    let pipeDiv = document.createElement('div');
    pipeDiv.classList.add('pipe');
    pipeDiv.setAttribute('id', `pipe${pipeIndex}`);
    pipeDiv.innerHTML = `<img src="static/images/pipeGreen_${pipeIndex}.png" height="110" width="110">`;

    return pipeDiv
}

main();