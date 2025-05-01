// src/components/BeyondTech.js
import React from "react";

function BeyondTech() {
  return (
    <section id="beyond" className="beyond-tech-section">
      <h2 className="section-title">🚀 Beyond Tech</h2>

      <div className="beyond-container">
        {/* Hackathon 1 - Infineon */}
        <div className="beyond-card">
          <h3>Infineon Hackathon – Pattern Play with CapSense (Feb 2025)</h3>
          <p>
            Participated in a university-level hackathon organized by Infineon Technologies.
            Explored sensor-based innovation using CapSense technology. Received a certificate 
            of participation and gained valuable experience in ideation and embedded thinking.
          </p>
        </div>

       

        {/* NGO Work */}
        <div className="beyond-card">
        <h3>NGO Volunteer – Tree Plantation Drive (June - July 2023)</h3>
<p>
  Volunteered with a non-profit organization to support environmental conservation through a tree plantation drive.
  Participated in planting saplings, spreading awareness about climate change, and organizing community-based eco-awareness events.
</p>

        </div>
      </div>

      <style>
        {`
          .beyond-tech-section {
            padding: 60px 20px;
  background: linear-gradient(135deg, #004d4d 0%, #e0e0e0 100%);


-          }

          .section-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 40px;
            color: #333;
          }

          .beyond-container {
            display: flex;
            flex-direction: column;
            gap: 30px;
            max-width: 900px;
            margin: 0 auto;
          }

          .beyond-card {
            background: white;
            padding: 25px 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
            color: #333;
          }

          .beyond-card:hover {
            transform: translateY(-5px);
          }

          .beyond-card h3 {
            font-size: 1.4rem;
            margin-bottom: 10px;
            color: #333;
          }

          .beyond-card p {
            font-size: 1rem;
            line-height: 1.6;
            color: #333;
          }

          @media (max-width: 768px) {
            .beyond-container {
              padding: 0 10px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default BeyondTech;
