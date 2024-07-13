import React from 'react'
import './Header.css'
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";


export default function Header() {
  return (
    <div class="container px-0">
      <header class="header col-10 col-md-12 mx-auto">
        <div class="header__info">
          <img
            src="../../img/admin/profile/banana.png"
            alt="admin photo"
            class="header__img"
          />
          <div class="header__details">
            <h4 class="header__name mb-2">  نازنین موسی زاده</h4>
            <h3 class="header__email my-0" lang="en">
              توسعه دهنده جاوا اسکریپت
            </h3>
          </div>
        </div>
        <div class="header__btns">
          <button class="btn-custome btn-header__dark-mode">
            <span class="fa fa-sun header__icon"><IoSettings/></span>
          </button>

          <button class="btn-custome btn-header__alert">
            <span class="fa fa-bell header__icon"><IoMdNotifications/></span>
            <span class="header__alert-count">5</span>
          </button>

          <button class="btn-custome btn-custome__blue btn-header__log-out">
            <span class="fa fa-sign-out header__icon"></span>
            خروج از پنل
          </button>
        </div>
      </header>
    </div>
  );
}
