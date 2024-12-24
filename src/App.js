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

const data1 = [
  {
    id: "123",
    image: "/bargers/food1.png",
    title: "Southern Stack",
    text: "A hearty vegetable patty bursting with farm-fresh flavors.",
    prize: "40",
  },
  {
    id: "234",
    image: "/bargers/food2.png",
    title: "Hervest Burger",
    text: "Get one hearty smoked killer and one deadly cheese hotdog with the sauces of your choice.",
    prize: "55",
  },
  {
    id: "345",
    image: "/bargers/food3.png",
    title: "Twin Peak",
    text: "Get one hearty smoked killer hotdog with sauces of your choice.",
    prize: "72",
  },
];

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const myData = useSelector((state) => state.myData);
  console.log("myData==", myData);
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          backgroundColor: "#000",
        }}
      >
        <img src="/bargers/logo.png" height={100} width={100} />
      </div>
      <img src="/bargers/burger.gif" width={"100%"} height={"auto"} />
      <div
        style={{ backgroundColor: "#ba2f32", padding: 10, textAlign: "center" }}
      >
        <h3 style={{ color: "#fda51b", fontSize: 28, margin: 10 }}>
          Get fired up for summer with our sizzling burger creations!
        </h3>
        <h3 style={{ color: "#fff", margin: 10 }}>
          At Burger Builders, we are excited to offer our sizzling summer
          specials that will tantalize your taste buds.
        </h3>
        <button
          style={{
            backgroundColor: "#fda51b",
            padding: 10,
            borderRadius: 30,
            color: "#000",
            width: 200,
            margin: 10,
          }}
        >
          Order Now
        </button>
      </div>
      <div
        style={{ backgroundColor: "#ffebca", padding: 20, textAlign: "center" }}
      >
        <h3 style={{ color: "#ba2f32", fontSize: 24 }}>BURGER SPECIALS</h3>
        <p style={{ color: "#000" }}>
          Summertime is burger time - don't miss out on our daily specials
          featuring fresh, flavorful creations that are sure to satisfy your
          cravings.
        </p>
        <div
          className="flex-col sm:flex-row md:flex-row"
          style={{
            display: "flex",
            flex: 1,
            padding: 10,
            overflow: "hidden",
          }}
        >
          {data1.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: 10,
              }}
            >
              <img
                src={item.image}
                height={120}
                width={120}
                style={{ padding: 10 }}
              />
              <h3 style={{ fontSize: 22 }}>{item.title}</h3>
              <h3>{item.text}</h3>
              <h2
                style={{ color: "#ba2f32", fontSize: 22 }}
              >{`$ ${item.prize}`}</h2>
              <button
                style={{
                  backgroundColor: "#fda51b",
                  padding: 10,
                  borderRadius: 10,
                  color: "#000",
                  width: 200,
                  margin: 10,
                }}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
        <img src={"/bargers/outline123.jpg"} height={20} width={"100%"} />
        <h3 style={{ color: "#ba2f32", fontSize: 24 }}>SANDWICH SPECIALS</h3>
        <p style={{ color: "#000" }}>
          Summer just got better with our daily special sandwiches - bite into
          deliciousness with fresh, handcrafted creations that'll take your
          taste buds on a journey they won't forget.
        </p>
        <div
          className="flex-col sm:flex-row md:flex-row"
          style={{
            display: "flex",
            flex: 1,
            padding: 10,
            overflow: "hidden",
          }}
        >
          {data1.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: 10,
              }}
            >
              <img
                src={item.image}
                height={120}
                width={120}
                style={{ padding: 10 }}
              />
              <h3 style={{ fontSize: 22 }}>{item.title}</h3>
              <h3>{item.text}</h3>
              <h2
                style={{ color: "#ba2f32", fontSize: 22 }}
              >{`$ ${item.prize}`}</h2>
              <button
                style={{
                  backgroundColor: "#fda51b",
                  padding: 10,
                  borderRadius: 10,
                  color: "#000",
                  width: 200,
                  margin: 10,
                }}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
