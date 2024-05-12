// const body = document.querySelector('body');
// body.style.padding = '0'
// body.style.margin = '0'
// body.style.boxSizing = 'border-box'
// body.style.display = 'flex'
// body.style.alignItems = 'center'
// body.style.height = '100vh'
// body.style.justifyContent = 'space-around'
// body.style.background = 'burlywood'
// body.style.transition = 'all .4s ease-in-out';
// bodyFunc = ()=>{
//     const button = document.createElement('button');
//     button.setAttribute('class', 'myBtn')
//     button.innerText = 'Button1';
//     button.style.padding = '10px 20px';
//     button.style.border = 'none';
//     button.style.backgroundColor = 'blue';
//     button.style.color = 'white';
//     button.style.cursor = 'pointer';
//     button.style.transition = 'all .4s ease-in-out';
//     button.style.borderRadius = '15px'
//     button.innerText =
//     `
//     Button1
//     `
//     const button2 = document.createElement('button');
//     button2.setAttribute('class', 'myBtn')
//     button2.style.background = "red";
//     button2.style.padding = '10px 20px'
//     button2.style.border = 'none'
//     button2.style.color = '#fff'
//     button2.style.cursor = 'pointer'
//     button2.style.transition = 'all .4s ease-in-out';
//     button2.innerText =
//     `
//     Button2
//     `
//     body.appendChild(button);
//     body.appendChild(button2);
// }
// bodyFunc()

// const button = document.querySelector('button');
// let myColors = ['green', 'orange', 'purple', 'black'];
// button.addEventListener('click', ()=>{
//     const myRandomI = Math.floor( Math.random() * myColors.length);
//     const myRandom = myColors[myRandomI]
//     body.style.background = myRandom;
// });

// const button2 = document.querySelector('button');
// button2.addEventListener('click', ()=>{
//     const myRandomI = Math.floor( Math.random() * myColors.length);
//     const myRandom = myColors[myRandomI]
//     button2.style.background = myRandom;
// });


const body = document.querySelector('body');
body.style.padding = '0';
body.style.margin = '0';
body.style.boxSizing = 'border-box';
body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.height = '100vh';
body.style.gap = '20px';
body.style.justifyContent = 'center';
body.style.background = 'whitesmoke';
body.style.transition = 'all .4s ease-in-out';

createButton = (text, bgColor) => {
    const button = document.createElement('button');
    button.setAttribute('class', 'myBtn');
    button.innerText = text;
    button.style.padding = '15px 20px';
    button.style.border = '1px solid #000';
    button.style.backgroundColor = bgColor;
    button.style.color = 'black';
    button.style.cursor = 'pointer';
    button.style.transition = 'all .4s ease-in-out';
    button.style.borderRadius = '15px';
    return button;
}

bodyFunc = () => {
    const button1 = createButton('Button', 'green',);
    const button2 = createButton('Button', 'orange');
    
    body.appendChild(button1);
    body.appendChild(button2);
}

bodyFunc();

let myColors = [
    'green', 'orange', 'purple',
    'red', 'blue', 'yellow', 'pink', 'cyan', 'brown', 'magenta', 'teal', 'navy', 'maroon', 'olive', 'lime', 'aqua', 'silver', 'gold', 'gray', 'white',
    'indigo', 'violet', 'turquoise', 'coral', 'khaki', 'plum', 'salmon', 'skyblue', 'tan', 'thistle', 'tomato', 'wheat', 'orchid', 'peru', 'papayawhip',
    'midnightblue', 'lavender', 'hotpink', 'honeydew', 'indianred', 'lavenderblush', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow',
    'lightgray', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightsteelblue', 'lightyellow', 'limegreen', 'linen',
    'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred',
    'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'orangered', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred',
    'papayawhip', 'peachpuff', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'slateblue', 'slategray',
    'snow', 'springgreen', 'steelblue', 'tan', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen'
];


document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('myBtn')) {
        const myRandomI = Math.floor(Math.random() * myColors.length);
        const myRandom = myColors[myRandomI];
        target.style.background = myRandom;
        body.style.background = myRandom;
    }
});

