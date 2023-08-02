import React from 'react'

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="../css/styles.css"/>
      <link rel="stylesheet" href="../css/Bootstrap.css"/>
      <section className="content p-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 p-5">
              <h1>SolveIt</h1>
              <p>An open-source CTF platform designed to host and manage security challenges for participants.</p>
              <button>Try It Out</button>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-12 p-3">
              <h2>What does the platform provide?</h2>
              <p>SolveIt provides a user-friendly interface for participants to solve various security challenges in categories like cryptography, web exploitation, reverse engineering, and more.</p>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-12 p-3">
              <h2>Features</h2>
                <ul>
                  <li>User registration, authentication, and profile management.</li>
                  <li>Challenge creation, categorization, and management.</li>
                  <li>Flag submissions and scoring system.</li>
                  <li>Leaderboard to track participants' progress and rankings.</li>
                  <li>User roles and permissions for administrative features.</li>
                  <li>User-Category relationship tracking for category-specific achievements.</li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
