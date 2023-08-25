import React from "react";

export default function Scoreboard() {

  
    return (
      <>
        <section class="team-rankings">
            <div class="container">
                <table class="table">
                    <thead>
                        <tr>
                            <td><b>Place</b></td>
                            <td><b>User</b></td>
                            <td><b>Score</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Admin</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>PH</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>PH</td>
                            <td>9</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
      </>
    );
  }
  