import "./Explore.css";
import Box from "../Box";

export default function Explore() {
  return (
    <div id="Features" className="explore-wrapper">
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginTop: "15px",
          color: "#6361EB",
        }}
      >
        Features
      </h1>
      <div className="flex-container feature-container">
        <Box
          title="Invitation Templates"
          content="Where you begin your career has a big impact on your future.  At Informatica, This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items "
          path="/invitationTemplates"
          className="left"
        />
        <Box
          title="Add Guests"
          content="Where you begin your career has a big impact on your future.  At Informatica, This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items "
          path="/addGuests"
          className="right"
        />
        <Box
          title="Sending invites to relatives"
          content="Where you begin your career has a big impact on your future.  At Informatica, This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items "
          path="/sendInvites"
          className="left"
        />
        <Box
          title="Book Wedding Resorts"
          content="Where you begin your career has a big impact on your future.  At Informatica, This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items "
          path="/weddingResorts"
          className="right"
        />
        <Box
          title="Book Photographer/Videographer"
          content="Where you begin your career has a big impact on your future.  At Informatica, This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items "
          path="/photoVideoHome"
          className="left"
        />
        <Box
          title="Book Decorators"
          content="Where you begin your career has a big impact on your future.  At Informatica, This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items "
          path="/decorators"
          className="right"
        />
        <Box
          title="Book Cosmetologist"
          content="Where you begin your career has a big impact on your future.  At Informatica, This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items "
          path="/cosmetologist"
          className="left"
        />
        <Box
          title="Book TravelAgency"
          content="Where you begin your career has a big impact on your future.  At Informatica, This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items "
          path="/travelAgency"
          className="right"
        />
      </div>
    </div>
  );
}
