import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';
import pic1 from './img/picture.svg'
import pic2 from './img/picture2.svg'
import pic3 from './img/picture3.svg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='Cards'>
        <Card img={pic1} title='Hello World!'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nostrum odio omnis, rem tempora veniam voluptatum? Ad aliquid, consequatur delectus itaque porro quis. Eaque harum magnam molestiae ullam ut voluptatibus.!'
              nameBtn='Press'/>
        <Card img={pic2} title='Hello Geeks'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nostrum odio omnis, rem tempora veniam voluptatum? Ad aliquid, consequatur delectus itaque porro quis. Eaque harum magnam molestiae ullam ut voluptatibus.!'
              nameBtn='Click'/>
        <Card img={pic3} title='Hello 25 Group!'
              subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nostrum odio omnis, rem tempora veniam voluptatum? Ad aliquid, consequatur delectus itaque porro quis. Eaque harum magnam molestiae ullam ut voluptatibus.!'
              nameBtn='Button'/>
    </div>
);

