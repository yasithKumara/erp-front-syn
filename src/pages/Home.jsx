import React from "react";
import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
  return (
    <>
      {/* <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 "> */}
      <div className="drawer-content-custom">
        <div>
          <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
          <p className="text-gray-500 text-lg">
            React and Tailwind CSS in action
          </p>
          <button class="btn btn-primary">Button</button>

          <section className="heading">
            <h1>What do you need help with?</h1>
            <p>Please choose from an option below</p>
          </section>
          <Link className="btn btn-reverse btn-block" to="/new-ticket">
            <FaQuestionCircle /> Create new ticket
          </Link>
          <Link className="btn btn-block" to="/tickets">
            <FaTicketAlt /> View my tickets
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
