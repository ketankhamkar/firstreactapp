import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const data = [
  {
    id: "123",
    image: "/menu1.jpg",
    title: "classic",
    text: "Get one hearty smoked killer hotdog with sauces of your choice.",
    prize: "40",
  },
  {
    id: "234",
    image: "/menu2.jpg",
    title: "Combo",
    text: "Get one hearty smoked killer and one deadly cheese hotdog with the sauces of your choice.",
    prize: "55",
  },
  {
    id: "345",
    image: "/menu3.jpg",
    title: "Primium",
    text: "Get one hearty smoked killer hotdog with sauces of your choice.",
    prize: "72",
  },
];

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    // Function to check if screen width is less than 500px
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Check screen width on initial render
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <img
          src="/frame-d-1.jpg"
          alt={"fream"}
          height={"auto"}
          width={"100%"}
        />
        <img src="/homeImg.jpg" alt={"home"} height={"auto"} width={"100%"} />
      </div>
      <div>
        <h3
          style={{
            color: "#ff3000",
            textAlign: "center",
            fontSize: 25,
          }}
        >
          Get Ready For
        </h3>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolt",
            // fontSize: 25,
          }}
        >
          Back To School
        </h1>
        <h3
          style={{
            color: "#7a7471",
            textAlign: "center",
            fontSize: 25,
          }}
        >
          Today`s Spetial
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <img
          src="/home2.gif"
          alt={"home"}
          height={"auto"}
          width={"60%"}
          style={{
            borderRadius: 20,
          }}
        />
      </div>
      <div style={{ margin: 20, textAlign: "center" }}>
        <a style={{ color: "#7a7471", textAlign: "center" }}>
          Make Back to school good with our menu special for the day. Sink your
          fangs into our hearty smoked killer, bloody meat special, deadly
          cheese hotdogs. Available in classic, combo and premium deals. This is
          no trick but scary good treats for our loyal customers.
        </a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <button
          style={{
            backgroundColor: "#ff3000",
            padding: 10,
            borderRadius: 30,
            color: "#fff",
            width: 200,
          }}
        >
          Order Now
        </button>
      </div>
      <div>
        <h3
          style={{
            color: "#00a36c",
            textAlign: "center",
            fontSize: 25,
          }}
        >
          Best Of Hot Dogs
        </h3>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolt",
            // fontSize: 25,
          }}
        >
          Hot Dog Menu
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {data.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row p-2">
            <div
              style={{
                display: "flex",
                flex: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={item.image}
                alt="classics"
                height={200}
                width={200}
                style={{
                  borderRadius: 15,
                  borderWidth: 2,
                  borderColor: "#ff3000",
                }}
              />
            </div>
            <div
              className="items-center sm:items-start text-center"
              style={{
                display: "flex",
                flex: 3,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1 style={{ fontWeight: "bolt" }}>{item.title}</h1>
              <a style={{ color: "#7a7471" }}>{item.text}</a>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "#ff3000" }}>${item.prize}</h1>
            </div>
          </div>
        ))}
        <img src="/outline1.jpg" alt={"fream"} height={"auto"} width={"100%"} />
        <div className={"bg-[#f4f2f0] flex flex-col sm:flex-row"}>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <img
              src="/classic.jpg"
              alt="classics"
              height={150}
              width={150}
              style={{ borderRadius: 100 }}
            />
            <h1>classic</h1>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <img
              src="/combo.jpg"
              alt="classics"
              height={150}
              width={150}
              style={{ borderRadius: 100 }}
            />
            <h1>Combo</h1>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <img
              src="/primium.jpg"
              height={150}
              width={150}
              style={{ borderRadius: 100 }}
            />
            <h1>Primium</h1>
          </div>
        </div>
        <img src="/out.jpg" alt={"fream"} height={"auto"} width={"100%"} />
        <div className="flex flex-1 flex-col sm:flex-row">
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/food.jpg"
              alt="abc"
              height={200}
              width={200}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1>Served hot and fresh</h1>
            <a style={{ color: "#7a7471" }}>
              Place your order online through our website <br /> or dine in.
              Free delivery for a month.
            </a>
            <button
              style={{
                backgroundColor: "#fb8c20",
                padding: 10,
                borderRadius: 30,
                color: "#fff",
                width: 200,
                margin: 10,
              }}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
