document.head.innerHTML = '';
document.body.innerHTML = '';

let title = document.createElement('title');
title.innerHTML = 'my JS';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');


document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let body = document.createElement('body');

    let div1 = document.createElement('div');
    div1.classList.add('block');

    let style = document.createElement('style');
    style.innerHTML = `
        .block {
            position: absolute;
            top: 80px;
            left: 600px;
            background-color: red;
            text-align: center;
        }
        .name {
            margin: 0 0 20px 0;
            font-size: 36px;
        }
        .name1 {
            font-size: 14px;
        }
        .block2 {
            background-color: yellow;
            text-align: center;
            position: absolute;
            top: 200px;
            left: 500px;
            border-top: 2px solid grey;
            border-left: 2px solid grey;
            border-bottom: 2px solid grey;

        }
        .name2  {
            font-size: 42px;
        }
    `;

    document.body.appendChild(style);

    document.body.appendChild(div1);

    let h1 = document.createElement('h1');
    h1.classList.add('name');
    h1.innerHTML = 'Choose Your Option';

    let p1 = document.createElement('p');
    p1.classList.add('name1');
    p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

    div1.appendChild(h1);
    div1.appendChild(p1);       

        let div2 = document.createElement('div');
        div2.classList.add('block2');

        document.body.appendChild(div2);

        let txt_1 = document.createElement('p');
        div1.classList.add('name2');
        txt_1.innerHTML = 'freelancer';

        let txt_2 = document.createElement('h2');
        div1.classList.add('name3');
        txt_2.innerHTML = 'Initially designed to ';

        let txt_3 = document.createElement('p');
        div1.classList.add('name4');
        txt_3.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';

        let txt_4 = document.createElement('button');
        div1.classList.add('name5');
        txt_4.innerHTML = 'start here';

        div2.appendChild(txt_1);
        div2.appendChild(txt_2); 
        div2.appendChild(txt_3); 
        div2.appendChild(txt_4);

            let div3 = document.createElement('div');
            div3.classList.add('block3');
            div3.style.position = 'absolute';
            div3.style.top = '450px';
            div3.style.fontSize = '56px';

            document.body.appendChild(div3);

            let txt1 = document.createElement('p');
            txt1.innerHTML = 'studio';

            let txt2 = document.createElement('h2');
            txt2.innerHTML = 'Initially designed to ';

            let txt3 = document.createElement('p');
            txt3.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';

            let txt4 = document.createElement('button');
            txt4.innerHTML = 'start here';

            div3.appendChild(txt1);
            div3.appendChild(txt2); 
            div3.appendChild(txt3); 
            div3.appendChild(txt4); 
            
//STYLE






            
            

    