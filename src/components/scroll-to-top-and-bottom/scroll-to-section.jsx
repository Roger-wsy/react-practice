import { useRef, useState } from "react";

export default function ScrollToSection() {
  const [cardNumber, setCardNumber] = useState(0);
  const data = [
    {
      label: "First Card",
      styles: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      styles: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Third Card",
      styles: {
        width: "100%",
        height: "600px",
        background: "purple",
      },
    },
    {
      label: "Forth Card",
      styles: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "Fifth Card",
      styles: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
  ];
  const ref = useRef();

  function handleScrollToSection() {
    // if (ref.current) {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
    // }
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <input
        value={cardNumber}
        onChange={(event) => setCardNumber(parseInt(event.target.value))}
        type="number"
      ></input>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div
          key={index}
          ref={index === cardNumber ? ref : null}
          style={dataItem.styles}
        >
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
