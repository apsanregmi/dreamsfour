import Link from "next/link";
import React from "react";
import BannerBlogWidget from "../components/blog/BannerBlogWidget";
import BlogComment from "../components/blog/BlogComment";
import CategoryBlogWidget from "../components/blog/CategoryBlogWidget";
import RecentPostBlogWidget from "../components/blog/RecentPostBlogWidget";
import SearchBlogWidget from "../components/blog/SearchBlogWidget";
import TagBlogWidget from "../components/blog/TagBlogWidget";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";

function BlogDetailspage() {
  return (
    <Layout>
      <Breadcrumb pageTitle="Blog Details" pageName="Blog Details" />
      <div className="blog-details-pages pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-5 gy-5">
            <div className="col-lg-8">
              <div className="news-wrap2">
                <div className="post-thum">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog-st-01.png"
                    alt="blog-st-01"
                  />
                  <div className="batch">
                    <Link legacyBehavior href="/blog-grid">
                      <a>01 Aug,2022</a>
                    </Link>
                  </div>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <div className="publisher">
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/User.svg" alt="" /> By
                          Admin
                        </a>
                      </Link>
                    </div>
                    <div className="comment">
                      <Link legacyBehavior href="/blog-grid">
                        <a>
                          <img src="assets/images/icon/Comment.svg" alt="" />{" "}
                          Comment(10)
                        </a>
                      </Link>
                    </div>
                  </div>
                  <h3>Eat Healthy Food &amp; Get Your Happiness.</h3>
                  <p className="mb-10">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque , totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicaboconsequuntur magni dolores
                    eos qui ratione.{" "}
                  </p>
                  <p>
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure.
                  </p>
                </div>
                <blockquote className="wp-block-quote">
                  <h3>
                    “expound the actual teachings of the great explorer of the
                    truth, the master-builder of human happiness”.
                  </h3>
                  <div className="author-area">
                    <h5>
                      <img
                        className="left-vec"
                        src="assets/images/icon/sub-title-vec.svg"
                        alt="sub-title-vec"
                      />
                      Mr. Robert Jack
                    </h5>
                  </div>
                </blockquote>
                <h3 className="title2">
                  Cooking Delicious Food Our Experties Chef.
                </h3>
                <div className="row g-4 mb-20">
                  <div className="col-lg-6 col-md-6">
                    <ul className="blog-dt-features">
                      <li>
                        <i className="bi bi-chevron-double-right" />
                        Denouncing pleasure and praising pain.
                      </li>
                      <li>
                        <i className="bi bi-chevron-double-right" />
                        Complete account of the system.
                      </li>
                      <li>
                        <i className="bi bi-chevron-double-right" />
                        Inventore veritatis et quasi architecto.
                      </li>
                      <li>
                        <i className="bi bi-chevron-double-right" />
                        Master-builder of human happiness.
                      </li>
                      <li>
                        <i className="bi bi-chevron-double-right" />
                        Natus error sit voluptatem accusantium.
                      </li>
                      <li>
                        <i className="bi bi-chevron-double-right" />
                        Expound the actual teachings of the great.{" "}
                      </li>
                      <li>
                        <i className="bi bi-chevron-double-right" />
                        Mistaken idea of denouncing pleasure.{" "}
                      </li>
                      <li>
                        <i className="bi bi-chevron-double-right" />
                        Sed ut perspiciatis unde omnis iste natus.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="blog-dt-1">
                      <img
                        className="img-fluid"
                        src="assets/images/blog/blog-dt-1.png"
                        alt="blog-dt-1"
                      />
                    </div>
                  </div>
                </div>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <div className="row pt-40 g-4">
                  <div className="col-lg-6 col-sm-6">
                    <div className="blog-dt-img-2">
                      <img
                        className="img-fluid"
                        src="assets/images/blog/blog-dt-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="blog-dt-img-2">
                      <img
                        className="img-fluid"
                        src="assets/images/blog/blog-dt-3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="tag-social">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="tags">
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a>Food</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a>Beverage</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a>Menu List</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a>Dinner</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="social-area">
                        <h5>Share:</h5>
                        <ul className="social-link d-flex align-items-center justify-content-end">
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram-alt" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <i className="bx bxl-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-dt-navigation">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="navigation-btn d-flex align-items-center">
                      <a href="#">
                        <i className="bi bi-arrow-left" />
                        Prev Post
                      </a>
                      <h5>
                        <Link legacyBehavior href="/blog-details">
                          <a>To Serve Food Customer With Coffee.</a>
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="navigation-btn two d-flex align-items-center">
                      <h5>
                        <Link legacyBehavior href="/blog-details">
                          <a>To Serve Food Customer With Coffee.</a>
                        </Link>
                      </h5>
                      <a href="#">
                        Next Post
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <BlogComment />
            </div>
            <div className="col-lg-4">
              <div className="widget-area">
                <BannerBlogWidget />
                <SearchBlogWidget />
                <RecentPostBlogWidget />
                <CategoryBlogWidget />
                <TagBlogWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetailspage;
