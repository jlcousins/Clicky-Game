// import React from "react";
// import "./style.css";


// function FriendCard(props) {
//   return (
//     <div className="card"
//       onClick={() => props.handleClick(props.id)}>
//         <span>  
//             <div className="img-container">
//                <img 
//                 alt={props.name} 
//                 src={props.image} />
//             </div>
//         </span>
//     </div>
//   );
// }

// export default FriendCard;


import React from "react";
import "./style.css";

const FriendCard = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;