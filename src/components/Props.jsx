import React from "react";


 export default function Props() {
  return (
    <div>
      <Greeting name="Nathan" age={27} occupation="Software Developer" />
      <Greeting name="Jane" age={24} occupation="Frontend Developer" />
    </div>
  );
}

function Greeting(props) {
  return (
    <p>
      Hello! I'm {props.name}, a {props.age} years old {props.occupation}.
      Pleased to meet you!
    </p>
  );
}

