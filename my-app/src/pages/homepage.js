import React from "react";

function Homepage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/background1.jpg')",
          width: "100%",
          height: "90%",
          position: "fixed",
        }}
      >
        <div style={{ backgroundColor: "transparent", padding: "30px" }}>
          <div className="text-container">
            <div className="container">
              <h3>You are the leader to your own path</h3>

              <p>
                My name is Pia Rahman. I am a small girl with big dreams, born
                in Bangladesh, migrated to the U.S.A at the age of 5; left most
                of my family behind to start a new journey. That's when I
                realized I have the right to be free, and make my own choices
                (this was a huge for my cultural background). As I grew older, I
                realized I wanted to break cultural/ sexism boundries therefore,
                I chose the technology path. My educational background is a
                bachelor's degree in Business and Technology, and a master's
                degree in Technology Management. I am currently on my way to
                becomeing a Full Stack developer. I hope to help people define
                their ideas and help them create their vision.
              </p>
              <section id="contact-info row">
                <ul>
                  <li>
                    <strong>Email:</strong>
                    <a href="mailto:mpiarahman@gmail.com">
                      mpiarahman@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Github Username:</strong>
                    <a href="https://github.com/mpiarahman">mpiarahman16</a>
                  </li>
                  <li>
                    <strong> My LinkedIn Profile:</strong>
                    <a href="https://www.linkedin.com/in/pia-rahman-csm-628195151/">
                      Pia Rahman's LinkedIn
                    </a>
                  </li>
                  <li>
                    <strong>
                      <p>
                        Resume:
                        <a
                          target="_blank"
                          href="PIARAHMAN Recent resume (1).pdf"
                        >
                          My Resume
                        </a>
                      </p>
                    </strong>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
