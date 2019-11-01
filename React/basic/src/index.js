import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    number: 0
  };
  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          플러스
        </button>
      </div>
    );
  }
}

// const data = [
//   { name: "사과", price: 100 },
//   { name: "배", price: 150 },
//   { name: "감", price: 50 }
// ];

// const Table = ({ fruits, children }) => {
//   console.log(children);
//   return (
//     <>
//       {fruits.map(fruit => {
//         return (
//           <>
//             {children}
//             <h2>과일이름: {fruit.name}</h2>
//             <h2>과일가격: {fruit.price}</h2>
//           </>
//         );
//       })}
//     </>
//   );
// };

const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
