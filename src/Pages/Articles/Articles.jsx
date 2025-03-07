import React from 'react'
import './Articles.css'
import { Link } from "react-router-dom";
import ArticlesBox from '../../Components/ArticlesBox/ArticlesBox';

export default function Articles() {
  return (
    <div class="col-8 content px-0">
    <div class="content__wrapper d-flex flex-column align-content-between">
      <ul class="content__tabs">
        <li class="content__tab">
          <Link to="/users" class="content__tab-link">
            <span class="fa fa-user"></span>
            کاربران
          </Link>
        </li>
        <li class="content__tab">
          <Link to='/infos' class="content__tab-link">
            <span class="fa fa-book"></span>
            اطلاعات
          </Link>
        </li>
        <li class="content__tab">
          <Link to="/courses" class="content__tab-link">
            <span class="fa fa-store"></span>
            دوره‌ها
          </Link>
        </li>

        <li class="content__tab">
          <Link to="/articles" class="content__tab-link">
            <span class="fa fa-newspaper"></span>
            وبلاگ
          </Link>
        </li>
      </ul>
      <div class="active"></div>

      <div class="articles">
        <div class="articles__list">
          <ArticlesBox/>
        </div>
      </div>

      <div class="new-article">
        <button
          class="btn-custome btn-custome__blue"
          data-bs-toggle="modal"
          data-bs-target="#new-article"
          id="btn-modal-new-article"
        >
          افزودن مقاله جدید
        </button>
      </div>
    </div>
  </div>
  )
}
