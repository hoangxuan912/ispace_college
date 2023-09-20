import React from 'react';
import Header from '../component/Header';
import Background from '../component/Background';
import And from '../component/And';

const Dangkykhoahoc = () => {
  return (
    <div>
      <Header/>
      <div id="background-img">
        <img
          id="bg-image"
          src="./img/lienhe.jpg"
          alt="ispace"
          className="responsive-image"
        />
      </div>
      {/* Đăng ký */}
      <section className="h-150 bg-white">
          <div className="container py-5 h-150">
            <div className="row d-flex justify-content-center align-items-center h-150">
              <div className="col">
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                      <img
                        src="./img/logo_ispace_01.png"
                        alt="Sample photo"
                        className="img-fluid"
                        style={{
                          borderTopLeftRadius: ".25rem",
                          borderBottomLeftRadius: ".25rem"
                        }}
                      />
                      <div className="col-lg-7">
                          <div className="text-left mb-4 row">
                            <p>
                              <i className="fa fa-map-marker-alt mr-2" />
                              Địa Chỉ
                            </p>
                            <p>
                              <i className="fa  mr-2" />
                              Số 9A Tô Vĩnh Diện, P. Linh Chiểu, Tp. Thủ Đức, Tp. Hồ Chí Minh
                            </p>
                          </div>
                          
                          <div className="text-left mb-4 row">
                            <p>
                              <i className="fa fa-phone-alt mr-2" />
                              Điện thoại
                            </p>
                            <p>
                              <i className="fa  mr-2" />
                              (028) 62 678 999
                            </p>
                          </div>
                      
                      
                          <div className="text-left mb-4 row">
                            <p>
                              <i className="fa fa-envelope mr-2" />
                              Email
                            </p>
                            <p>
                              <i className="fa  mr-2" />
                              lienhe@ispace.edu.vn
                            </p>
                          </div>
                      
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body  text-black">
                        <h1 className="mb-5 text-orange">Đăng Ký Học</h1>
                        <div className="card-body rounded-bottom bg-primar  p-5">
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
                                      <div className="form-group">
                                          <select
                                              className="custom-select border-0 px-4"
                                              style={{ height: 47 }}
                                              placeholder="Email của bạn"
                                          >
                                              
                                              <option selected="">Đối Tượng Đăng Ký</option>
                                              <option value={1}>Học sinh đang học 12(đăng ký giữ chỗ)</option>
                                              <option value={2}>Học sinh tốt nghiệp THPT</option>
                                              <option value={3}>Sinh viên</option>
                                              <option value={3}>Người đi làm</option>
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
            </div>
          </div>
        </section>
        <div className="overlay-container" style={{background: "#f55 url('./img/registration.jpg')" }}>
            <div className="overlay-text" style={{backgroundColor: "rgb(255, 255, 255, 0)" }}>
                <h3 className="overlay-title">Bạn muốn là chuyên gia An Ninh Mạng?</h3>
                <p className="overlay-content">
                Hãy đến với chúng tôi - Trường Cao đẳng An ninh mạng iSPACE!
                </p>
                <a className="overlay-title">
                  <a class="btn btn-outline-light btn-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-outline-light btn-square mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-outline-light btn-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                </a>
            </div>
        </div>
    </div>
    
  );
};
  
export default Dangkykhoahoc;