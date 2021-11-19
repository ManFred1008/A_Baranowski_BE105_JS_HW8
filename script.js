const html = document.querySelector('html');
html.setAttribute('lang', 'en');

const metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8')

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

let title = document.createElement('title');
title.innerHTML = 'Call to Action #3';

document.head.append(metaUtf8, metaViewport, title);

document.head.querySelector('script').setAttribute('defer', '');

window.onload = () => {
   let wrap = document.createElement('div');
   wrap.classList.add('wrap');

   let header = document.createElement('header'),
       h2 = document.createElement('h2'),
       p = document.createElement('p');

   h2.innerHTML = 'Choose Your Option';
   h2.classList.add('h2');
   p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
   p.classList.add('p');
   header.classList.add('elem__header');
   header.append(h2, p);

   document.body.append(header);

   let cont = document.createElement('div');
   cont.classList.add('elem__content');

   let freelanser = document.createElement('div');
   freelanser.classList.add('elem__content_item');

   let pFree = document.createElement('p');
   pFree.innerHTML = 'FREELANCER';
   pFree.classList.add('cont_p');

   let pStudio = document.createElement('p');
   pStudio.innerHTML = 'STUDIO';
   pStudio.classList.add('cont_p');

   let h2Cont = document.createElement('h2');
   h2Cont.innerHTML = 'Initially designed to';
   h2Cont.classList.add('cont_h2');

   let spanCont = document.createElement('span');
   spanCont.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
   spanCont.classList.add('cont_span');

   let btnCont = document.createElement('button');
   btnCont.innerHTML = 'Start Here';
   btnCont.classList.add('cont_btn');

   freelanser.append(pFree, h2Cont, spanCont, btnCont);

   let studio = freelanser.cloneNode(true);


   studio.querySelector('.cont_p').innerHTML = 'STUDIO';

   cont.append(freelanser, studio);

   wrap.append(header, cont);

   document.body.append(wrap);

   let link = document.createElement('link');
   link.setAttribute('href', `https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap`);
   link.setAttribute('rel', 'stylesheet');
   document.head.append(link);

   let link2 = document.createElement('link');
   link2.setAttribute('href', `https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap"`);
   link2.setAttribute('rel', 'stylesheet');
   document.head.append(link2);

   let styles = document.createElement('style');

   document.head.append(styles);
   
   styles.innerHTML = `
      * {
         margin: 0;
         padding: 0;
      }

      .wrap {
         display: flex;
         flex-direction: column;
         align-items: center;
         text-align: center;
         width: 70%;
         margin: 0 auto;
      }

      .elem__header {
         margin: 55px 0;
      }

      .elem__header .h2 {
         font-family: 'Arvo', serif;
         font-size: 36px;
         font-weight: 400; 
         padding-bottom: 10px;
      }

      .elem__header .p {
         font-family: 'Open Sans', sans-serif;
         font-size: 16px;
         font-weight: 400; 
         color: #9FA3A7;

      }

      .elem__content {
         display: flex;
         border: 2px solid #E8E9ED;
         border-radius: 10px;
         overflow: hidden; 
      }

      .elem__content_item {
         display: flex;
         flex-direction: column;
         align-items: center;  
         height: 480px;
      }

      .elem__content_item .cont_p {
         font-family: 'Montserrat', sans-serif;
         font-size: 12px;
         font-weight: bold;
         text-transform: uppercase;
         letter-spacing: 2.4px;
         color: #9FA3A7;
         padding: 80px 0 25px;
      }

      .elem__content_item .cont_h2 {
         width: 50%;
         line-height: 46px;
         font-family: 'Arvo', serif;
         font-size: 36px;
         font-weight: 400; 
         padding-bottom: 25px;
      }

      .elem__content_item .cont_span {
         width: 60%;
         line-height: 26px;
         font-family: 'Open Sans', sans-serif;
         font-size: 16px;
         font-weight: 400; 
         color: #9FA3A7;
         padding-bottom: 50px;
      }

      .elem__content_item .cont_btn {
         padding: 20px 40px;
         border-radius: 40px;
         border: 3px solid #FFC80A;
         background-color: transparent;
         font-family: 'Montserrat', sans-serif;
         font-size: 12px;
         font-weight: bold;
         text-transform: uppercase;
         letter-spacing: 2.4px;
         cursor: pointer;
         box-shadow: 0 4px 4px rgb(217,217,217);
      }

      .elem__content_item:hover {
         background-color: #8F75BE;
         color: white;
      }

      .elem__content_item:hover .cont_p {
         color: #FFC80A;
      }

      .elem__content_item:hover .cont_span {
         color: white;
      }


      .elem__content_item:hover .cont_btn {
         color: white;
         box-shadow: none;
      }
   `
}



// font-family: 'Montserrat', sans-serif;
