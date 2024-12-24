import React from "react";

const Footer = () => {
  return (
    <>
      <img
        src="/blackoutline.jpg"
        alt={"fream"}
        height={"auto"}
        width={"100%"}
      />
      <div className=" bg-[#1f1b1a] flex flex-1 flex-col sm:flex-row ">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 10,
          }}
        >
          <img src="/logo2.png" alt="abc" height={150} width={150} />
          <a style={{ color: "#fff" }}>Bring A Friend This Back to School</a>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 10,
          }}
        >
          <a style={{ color: "#fff" }}>follow for more</a>
          <a style={{ color: "#fff" }}>visit us</a>
          <a style={{ color: "#fff" }}>(352) 748-1946</a>
          <a style={{ color: "#fff" }}>5585 Hancock Dr</a>
          <a style={{ color: "#fff" }}>Wildwood, Florida(FL), 34785</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
