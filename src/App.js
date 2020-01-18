import React from 'react';
import Proptypes from 'prop-types';

class App extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 6000);
  }

  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? 'Loading...' : "I'm ready"}</div>
  }
}


// const foodILike = [
//   { id: 1,
//     name: "Kimchi",
//     image:
//       "http://egnmall.net/data/rental/goods/big//201910837484701.png",
//     rating: 5.0
//   },
//   { id: 2,
//     name: "Samgyoepsal",
//     image:
//       "https://cdn.imweb.me/upload/S201701015868e87bb6cc8/a3a1132b79bfb.jpg",
//     rating: 4.0
//   },
//   { id: 3,
//     name: "Bibimbap",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1280px-Dolsot-bibimbap.jpg",
//     rating: 3.9
//   },
//   { id: 4,
//     name: "Dongasu",
//     image:
//       "http://cfile205.uf.daum.net/image/99D36F485CDCEB7015C411",
//     rating: 4.3
//   },
//   { id: 5,
//     name: "Kimbap",
//     image:
//       "http://recipe1.ezmember.co.kr/cache/recipe/2018/01/18/91237b8fa18b78700d6586e1c6c9f73b1.jpg",
//     rating: 3.1
//   }
// ]


// Food.propTypes = {
//   name: Proptypes.string.isRequired,
//   picture: Proptypes.string.isRequired,
//   rating: Proptypes.number.isRequired
// };

// function Food({name, picture, rating}) {
//   return (
//     <div>
//       <h2>I like {name}.</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name}></img>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}  
//     </div>
//   )
// }


export default App;
