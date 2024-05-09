import React from 'react'
import {Link} from 'react-router-dom'
import {assets} from 'react'
import './AdminDashboard.css'


let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

// toggle.onclick = function () {
//   navigation.classList.toggle("active");
//   main.classList.toggle("active");
// };


const AdminDashboard = () => {
  return (
<>
<div className="container">
  <div className="navigation">
    <ul>
      <li>
        <a href="#">
          <span className="icon">
            <ion-icon name="logo-apple" />
          </span>
          <span className="title text-secondary"></span>
        </a>
      </li>
      <li>
        <a href="">
          <span className="icon">
            <ion-icon name="home-outline" />
          </span>
          <span className="text-secondary p-1 ">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon">
            <ion-icon name="people-outline" />
          </span>
          <span className=" text-secondary p-1">Users</span>
        </a>
      </li>
      <li>
        <a href="/Messages">
          <span className="icon">
            <ion-icon name="chatbubble-outline" />
          </span>
          <span className="text-secondary">Messages</span>
        </a>
      </li>

      <li>
        <a href="#">
          <span className="icon">
            <ion-icon name="lock-closed-outline" />
          </span>
          <span className="text-secondary">Password</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon">
            <ion-icon name="log-out-outline" />
          </span>
          <span className="text-secondary">Sign Out</span>
        </a>
      </li>
    </ul>
  </div>
  {/* ========================= Main ==================== */}
  <div className="main text-secondary">
    <div className="topbar">
      <div className="toggle">
        <ion-icon name="menu-outline" />
      </div>
      <div className="search ">
        <label>
          <input type="text" placeholder="Search here" />
          <ion-icon name="search-outline" />
        </label>
      </div>
      <div className="user">
        <img src="Open Galaxy.png" alt="" />
      </div>
    </div>
    {/* ======================= Cards ================== */}
    <div className="cardBox">
      <div className="card">
        <div>
          <div className="numbers">100</div>
          <div className="cardName">Daily Submissions</div>
        </div>
        <div className="iconBx">
          <ion-icon name="eye-outline" />
        </div>
      </div>
      <div className="card">
        <div>
          <div className="numbers">1000</div>
          <div className="cardName">Total Users</div>
        </div>
        <div className="iconBx">
          <ion-icon name="cart-outline" />
        </div>
      </div>
      <div className="card">
        <div>
          <div className="numbers">284</div>
          <div className="cardName">Total Live Projects</div>
        </div>
        <div className="iconBx">
          <ion-icon name="chatbubbles-outline" />
        </div>
      </div>
      <div className="card">
        <div>
          <div className="numbers"></div>
          <div className="cardName"></div>
        </div>
        <div className="iconBx">
          <ion-icon name="cash-outline" />
        </div>
      </div>
    </div>
    {/* ================ Order Details List ================= */}
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Recent Contributors</h2>
          <a href="#" className="btn">
            View All
          </a>
        </div>
        
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Project code</td>
              <td>Project Status</td>
              <td>Certificate</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User 1</td>
              <td></td>
              <td></td>
              <td>
                <span className="status delivered">Delivered</span>
              </td>
            </tr>
            <tr>
              <td>User 2</td>
              <td></td>
              <td></td>
              <td>
                <span className="status pending">Pending</span>
              </td>
            </tr>
            <tr>
              <td>User 3</td>
              <td></td>
              <td></td>
              <td>
                <span className="status pending">Pending</span>
              </td>
            </tr>
            <tr>
              <td>User 4</td>
              <td></td>
              <td></td>
              <td>
                <span className="status pending">Pending</span>
              </td>
            </tr>
            <tr>
              <td>User 5</td>
              <td></td>
              <td></td>
              <td>
                <span className="status delivered">Delivered</span>
              </td>
            </tr>
            <tr>
              <td>User 6</td>
              <td></td>
              <td></td>
              <td>
                <span className="status pending">Pending</span>
              </td>
            </tr>
            <tr>
              <td>User 7</td>
              <td></td>
              <td></td>
              <td>
                <span className="status pending">Pending</span>
              </td>
            </tr>
            <tr>
              <td>User 8</td>
              <td></td>
              <td></td>
              <td>
                <span className="status delivered">Delivered</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* ================= New Customers ================ */}
      <div className="recentCustomers">
        <div className="cardHeader">
          <h2>Recent Users</h2>
        </div>
        <table>
          <tbody>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img src="" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img src="" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Amit <br /> <span>India</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img src="" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img src="" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Amit <br /> <span>India</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img src="" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img src="" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Amit <br /> <span>India</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img src="" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img src="" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Amit <br /> <span>India</span>
                </h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</>

  )
}

export default AdminDashboard