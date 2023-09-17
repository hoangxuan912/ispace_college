import React from 'react';
import And from './And';

const Content = () => {
  return (
    <div>
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <img
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src="./img/img_1.jpg"
                        alt=""/>
                    </div>
                    <div className="col-lg-7">
                        <div className="text-left mb-4">
                            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>
                                TỔNG QUAN 
                            </h5>
                            <h1>TRƯỜNG CAO ĐẲNG AN NINH MẠNG ISPACE </h1>
                        </div>
                        <p>
                        Trường Cao Đẳng An ninh mạng iSPACE là đơn vị tiên phong trong đào tạo thực hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng. Từ năm 2015, Trường iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt “CNTT- Học để làm việc ngay”. Chương trình mang đến cho các bạn trẻ đam mê CNTT ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ. Năm học 2021- 2022, trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ sở vật chất với quy mô hiện đại và sáng tạo theo xu hướng trường học quốc tế.
                        </p>
                        <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                        Xem Thêm {'>>'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="hmv-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                            <div className="inner-hmv">
                                <div className="icon-box-hmv">
                                    <img
                                    className="img-fluid rounded mb-4 mb-lg-0"
                                    src="./img/img_2.jpg"
                                    alt=""/>
                                </div>
                                <h3>AN NINH MẠNG</h3>
                                
                                <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                Xem Thêm {'>>'}
                                </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                            <div className="inner-hmv">
                                <div className="icon-box-hmv">
                                    <img
                                    className="img-fluid rounded mb-4 mb-lg-0"
                                    src="./img/img_3.jpg"
                                    alt=""/>
                                </div>
                                <h3>PHÁT TRIỄN PHẦN MỀM</h3>
                                
                                <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                Xem Thêm {'>>'}
                                </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                            <div className="inner-hmv">
                                <div className="icon-box-hmv">
                                    <img
                                    className="img-fluid rounded mb-4 mb-lg-0"
                                    src="./img/img_4.jpg"
                                    alt=""/>
                                </div>
                                <h3>THIẾT KẾ ĐỒ HỌA</h3>
                                
                                <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                Xem Thêm {'>>'}
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section cl">
            <div className="container">
                <div className="row text-left stat-wrap">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <span
                            data-scroll=""
                            className="global-radius icon_wrap effect-1 alignleft">
                            <i class="fa-solid fa-graduation-cap"></i>
                        </span>
                        <p className="stat_count">12000</p>
                        <h3>Sinh viên được đào tạo</h3>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <span
                            data-scroll=""
                            className="global-radius icon_wrap effect-1 alignleft">
                            <i class="fa-solid fa-laptop-file"></i>
                        </span>
                        <p className="stat_count">70%</p>
                        <h3>Thực hành</h3>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <span
                            data-scroll=""
                            className="global-radius icon_wrap effect-1 alignleft">
                            <i class="fa-solid fa-calendar-days"></i>
                        </span>
                        <p className="stat_count">15 năm</p>
                        <h3>Kinh ngiệm đào tạo</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* Registration Start */}
        <div className="container-fluid bg-registration py-5" style={{ margin: "90px 0", background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../img/registration.jpg), no-repeat center center"}}>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h1 className="text-orange">
                                Đăng Ký Ngay</h1>
                            <h5
                            className="text-primary text-uppercase text-white mb-3"
                            style={{ letterSpacing: 7 }}
                            >
                            CƠ HỘI NHẬN HỌC BỔNG TOÀN PHẦN 100%
                            </h5>
                            
                        </div>
                        <ul className="list-inline text-white m-0">
                            <li className="py-2">
                            <i className="fa fa-check text-primary mr-3" />
                            Môi trường đẳng cấp
                            </li>
                            <li className="py-2">
                            <i className="fa fa-check text-primary mr-3" />
                            Việc làm sẵn có
                            </li>
                            <li className="py-2">
                            <i className="fa fa-check text-primary mr-3" />
                            Vừa học vừa làm
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="card border-0">
                            <div className="card-header bg-light text-center p-4">
                                <h1 className="m-0">Điền thông tin dưới đây</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-primary  p-5">
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control border-0 p-4"
                                            placeholder="Họ và Tên"
                                            required="required"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control border-0 p-4"
                                            placeholder="Số điện thoại"
                                            required="required"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control border-0 p-4"
                                            placeholder="Email của bạn"
                                            required="required"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select
                                            className="custom-select border-0 px-4"
                                            style={{ height: 47 }}
                                            placeholder="Email của bạn"
                                        >
                                            
                                            <option selected="">Ngành Học</option>
                                            <option value={1}>An Ninh Mạng</option>
                                            <option value={2}>Phát Triển Phần Mềm</option>
                                            <option value={3}>Thiết kế đồ Họa</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <button
                                            className="btn btn-dark btn-block border-0 py-3"
                                            type="submit"
                                        >
                                            Đăng ký ngay
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Registration End */}

        <div className="parallax section dbcolor">
            <div className="container">
                <div className="row logos">
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#">
                            <img src="/img/logo-1.jpg" alt=""  />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#">
                            <img src="img/logo-2.jpg" alt="" className="img-repsonsive" />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#">
                            <img src="img/logo-3.jpg" alt="" className="img-repsonsive" />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#">
                            <img src="img/logo-4.jpg" alt="" className="img-repsonsive" />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#">
                            <img src="img/logo-5.jpg" alt="" className="img-repsonsive" />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="#">
                            <img src="img/logo-6.jpg" alt="" className="img-repsonsive" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <And/>
    </div>
  );
};

export default Content;