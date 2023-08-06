import React from "react";

export default function Scoreboard() {
  return (
    <div>
      <link rel="stylesheet" href="../css/Bootstrap.css" />
      <section className="bg-dark text-light p-5 text-center">
        <div className="container">
          <div>
            <h1>Scoreboard</h1>
          </div>
        </div>
      </section>
      <h3 className="top-teams">Top Teams</h3>
      <section clasNames="scoreboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <canvas
                id="myChart"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  maxHeight: "250px",
                  margin: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="team-rankings">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <thead>
                  <tr>
                    <td>
                      <b>Place</b>
                    </td>
                    <td>
                      <b>Team</b>
                    </td>
                    <td>
                      <b>Score</b>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Yellow Sentinels</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Red Wheelbarrow</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Blue Foxes</td>
                    <td>9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js" />

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}
