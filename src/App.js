import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addItem } from "./redux/slices/counterSlice";

const data = [
  { id: 1, name: "ketan khamkar", city: "jsp" },
  { id: 2, name: "amit khamkar", city: "lks" },
  { id: 3, name: "ratan khamkar", city: "kol" },
  { id: 4, name: "karan khamkar", city: "nom" },
  { id: 5, name: "sumit khamkar", city: "ato" },
  { id: 6, name: "shubham khamkar", city: "vom" },
];

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const myData = useSelector((state) => state.myData);
  console.log("myData==", myData);
  return (
    <div className="mb-5 flex flex-col flex-1 flex-wrap">
      <Navbar />
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <img
          src="architect.jpg"
          alt="author"
          style={{ width: "100%", height: "auto" }}
        />
        {/* Text Container */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          <p>Buildings.com</p>
        </div>
      </div>
      <div>
        <h2>List of items</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto", // Enable horizontal scrolling when necessary
            whiteSpace: "nowrap",
          }}
        >
          {myData.map((item) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: 10,
                borderWidth: 1,
                borderColor: "#999",
                padding: 5,
                borderRadius: 10,
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)", // Adding shadow
              }}
              onClick={() => alert(`hi name=${item.name}`)}
              key={() => item.id}
            >
              {/* <a href="https://example.com"> */}
              <img
                src="/architect.jpg"
                alt="the authors"
                width="100"
                height="100"
                style={{
                  width: "100",
                  height: "auto",
                  maxWidth: "100",
                  borderRadius: 10,
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                }}
              />
              <p>{item.name}</p>
              <p>{item.city}</p>
              {/* </a> */}
            </div>
          ))}
        </div>
      </div>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={() => dispatch(increment())}
        className="button"
      >
        increament
      </button>
      <p style={{ alignItems: "center", justifyContent: "center" }}>
        {counter}
      </p>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={() => dispatch(decrement())}
        className="button"
      >
        decrement
      </button>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={() => dispatch(addItem(data))}
        className="button"
      >
        push Data
      </button>
      <h1>ketan</h1>
    </div>
  );
}

export default App;
