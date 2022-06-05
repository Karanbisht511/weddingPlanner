import Box, { SmallBox } from "./Box";

import "./Features.css";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <div id="Features" className="feature-wrapper">
      <span className="circle"></span>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
        }}
      >
        <span style={{ color: "white", fontWeight: "normal" }}>Explo</span>
        <span style={{ color: "#6361EB" }}>re Features</span>
      </h1>
      <div className="flex-container feature-container">
        <Box
          className="left"
          title="InvitationTemplates"
          content="Where you begin your career has a big impact on your future.  At Informatica, This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items "
          path="/invitationTemplates"
        ></Box>
        <Box
          className="right"
          title="Sending invites to relatives"
          content="Where you begin your career has a big impact on your future.  At Informatica, This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items "
          path="/sendInvites"
        ></Box>
        <Box
          className="left"
          title="Book Wedding Resorts"
          content="Where you begin your career has a big impact on your future.  At Informatica, This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items "
          path="/weddingResorts"
        ></Box>
        <Link
          to="/explore"
          className="right"
          onClick={() => {
            const nav = document.querySelector(".nav");
            const links = nav.childNodes;
            links.forEach((link) => {
              link.classList.remove("active-link");
            });

            document
              .querySelector("#Explore-link")
              .classList.add("active-link");
          }}
        >
          <SmallBox title="Explore More"></SmallBox>
        </Link>
      </div>
    </div>
  );
}
