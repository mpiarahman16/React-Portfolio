import React from "react";
function Portfolio() {
  return (
    <div
      style={{
        backgroundImage: "url('/background1.jpg')",
      }}
    >
      <div>
        <div className="text-container">
          <div className="container">
            <div className="row flex">
              <div className="col-sm">
                <div style={{ backgroundColor: "transparent", padding: "30px" }}>
                  <h3> Welcome to my Portfolio page</h3>
                  <img
                    src="GitHub Profile (1).jpg"
                    className="rounded text-center"
                    alt="Image"
                    height="400"
                    width="250"
                  />
                  <ul>
                    <li>
                      <strong>Github Username:</strong>{" "}
                      <a href="https://github.com/mpiarahman">mpiarahman16</a>
                    </li>
                    <li>
                      <strong>My Github Page:</strong>
                      <a href="https://github.com/mpiarahman16">
                        {" "}
                        Projects and work
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ backgroundColor: "transparent", padding: "30px" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <h3>Futured Project:</h3>
                      <section id="main-bio">
                        <h6>Travel Buddy</h6>
                        <a href="https://github.com/stadds/TravelBuddy">
                          <img
                            src="Travel Buddy.jpg"
                            className="text-center"
                            alt="Image"
                            height="200"
                            width="200"
                          />
                        </a>
                        <h6>Job Hunter</h6>
                        <a href="https://github.com/stadds/project-2-job-hunter">
                          <img
                            src="JobHunter.jpg"
                            className="text-center"
                            alt="Image"
                            height="200"
                            width="200"
                          />
                        </a>
                        <h6>Work Day Scheduler</h6>
                        <a href="https://github.com/mpiarahman16/05-Third-Party-APIs-Work-Day-Scheduler.github.io">
                          <img
                            src="Work Day Scheduler.jpg"
                            className="text-center"
                            alt="Image"
                            height="200"
                            width="200"
                          />
                        </a>
                      </section>
                    </div>
                    <div className="col-sm" style={{ marginTop: "40px" }}>
                      <h6>Note Taker</h6>
                      <a href="https://github.com/mpiarahman16/Unit-11-Express-Note-Taker">
                        <img
                          src="Notetaker.jpg"
                          className="text-center"
                          alt="Image"
                          height="200"
                          width="200"
                        />
                      </a>
                      <h6>Employee Management Systems</h6>
                      <a href="https://github.com/mpiarahman16/Employee-Management-System">
                        <img
                          src="EmployeeDatabase.jpg"
                          className="text-center"
                          alt="Image"
                          height="200"
                          width="200"
                        />
                      </a>
                      <h6>Burger</h6>
                      <a href="https://github.com/mpiarahman16/Burger">
                        <img
                          src="Burger.jpg"
                          className="text-center"
                          alt="Image"
                          height="200"
                          width="200"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
