import React from "react";


const Navigation = () => {
  return (
    <nav className="nav">
        <div className="navigation">
            <a href="#">
                <img src= "/img/logo.png" alt="" />
            </a>
            <ul className="nav-item">
                <li>
                    <a href="#">
                        <i className="fa-solid fa-house txt_deco"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>TỔNG QUAN</span>
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="submenu">
                        <li><a href="#">Giới Thiệu</a></li>
                        <li><a href="#">Thư Hiệu Trưởng</a></li>
                        <li><a href="#">Đến Với ISPACE</a></li>
                        <li><a href="#">Hợp Tác Quốc Tế</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <span>TUYỂN SINH</span>
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href="#">Tuyển Sinh 2023</a>
                        </li>
                        <li>
                            <a href="#">Học phí Cao đẳng chính quy</a>
                        </li>
                        <li><a href="#">Câu Hỏi Thường Gặp</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <span>CHƯƠNG TRÌNH ĐÀO TẠO</span>
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href="#">Cao Đẳng Chính Quy</a>
                            <ul className="submenu2">
                                <li><a href="#">An Ninh Mạng</a></li>
                                <li><a href="#">Phát Triển Phần Mềm</a></li>
                                <li><a href="#">Thiết Kế Đồ Họa</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Khóa Học Ngắn Hạn</a>
                            <ul className="submenu2">
                                <li><a href="#">Khóa học CEH</a></li>
                                <li><a href="">Khóa học AWS Cloud Foudation</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <span>TIN TỨC</span>
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="submenu">
                        <li><a href="#">Tin Tức</a></li>
                        <li><a href="#">Sự Kiện</a></li>
                        <li><a href="#">Mẹo Công Nghệ</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><span>LIÊN HỆ</span></a>
                </li>

                {/* <i className="fa-sharp fa-solid fa-magnifying-glass search-icon" id="searchIcon"></i>
                <div className="search-box">
                    <i className="fa-sharp fa-solid fa-magnifying-glass search-icon" ></i>
                    <input type="text" placeholder="Search here..." />
                </div> */}
            </ul>
        </div>
    </nav>
  );
};

export default Navigation;
