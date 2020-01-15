import React from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}.</h2>
      <img src={picture}></img>
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://egnmall.net/data/rental/goods/big//201910837484701.png"
  },
  {
    name: "Samgyoepsal",
    image:
      "https://cdn.imweb.me/upload/S201701015868e87bb6cc8/a3a1132b79bfb.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1280px-Dolsot-bibimbap.jpg"
  },
  {
    name: "Dongasu",
    image:
      "http://cfile205.uf.daum.net/image/99D36F485CDCEB7015C411"
  },
  {
    name: "Kimbap",
    image:
      "http://recipe1.ezmember.co.kr/cache/recipe/2018/01/18/91237b8fa18b78700d6586e1c6c9f73b1.jpg"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}  
    </div>
  )
}

export default App;
