import React from 'react'

export default function Carousel() {
  return (
    <section className="movieCarousel">
  <div className="container">
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade "
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
        <li data-target="#carouselExampleCaptions" data-slide-to={3} />
        <li data-target="#carouselExampleCaptions" data-slide-to={4} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/bg-1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Chú Gấu Ted 2</h5>
            <p>Ted 2</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./img/bg-2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Chúa Tể Của Những Chiếc Nhẫn: Hai Tòa Tháp</h5>
            <p>The Lord of the Rings: The Two Towers</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./img/bg-3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Nữ Vương Huyền Thoại</h5>
            <p>The Woman King</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./img/bg-4.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Thiên Cơ Chi Cửu U Nghiệp Hỏa</h5>
            <p>天机之九幽业火 - Ultimate Secrets</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./img/bg-5.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Vùng Đất Quỷ Dữ</h5>
            <p>Resident Evil</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  </div>
</section>

  )
}
