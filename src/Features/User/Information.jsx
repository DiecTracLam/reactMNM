import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userApi from "../../Api/userApi";

const Information = (props) => {
  const [user,setUser] = useState();
  const [loading , setLoading] = useState(true); 
  const userID = useSelector((state) => state.user.user.token);
  useEffect(()=>{
    const api = async ()=>{
      const getApi = await userApi.getUser(userID);
      setUser(getApi.data);
      setLoading(false);
    }
    api();
  },[])
  const handleOnchane = (e)=>{
    const newtype = {[e.target.name]: e.target.value}
    setUser(prev=>({...prev , ...newtype}))
  }

  const handleSubmit = async()=>{
  //  const upload = await userApi.updateUser();
   
  }
  if(loading) return
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="grid__row grid__content">
            <div className="grid__column-2">
              <img src="./assets/img/KH.png" alt="" className="info-img" />
              <h3 className="info-name">Tên KH</h3>
            </div>
            <div className="grid__column-10">
              <div className="info-all">
                <h2 className="info-heading1">Hồ sơ của tôi</h2>
                <h4 className="info-heading2">
                  Quản lý thông tin hồ sơ để bảo mật tài khoản
                </h4>
                <hr />

                <form onSubmit={handleSubmit} className="info-form">
                  <div className="info-item">
                    <h4 className="info grid__column-2-4">Tên đăng nhập</h4>
                    <input
                      type="text"
                      className="au-form__input"
                      placeholder="UserName"
                      value = {user.username}
                      disabled
                    />
                  </div>
                  <div className="info-item">
                    <h4 className="info grid__column-2-4">Mật khẩu</h4>
                    <input
                      name="password"
                      type="password"
                      className="au-form__input"
                      placeholder="********"
                      onChange={handleOnchane}
                    />
                  </div>
                  <div className="info-item">
                    <h4 className="info grid__column-2-4">Tên khách hàng </h4>
                    <input
                      name="username"
                      type="text"
                      className="au-form__input"
                      placeholder="Tên KH"
                      onChange={handleOnchane}
                    />
                  </div>
                  <div className="info-item">
                    <h4 className="info grid__column-2-4">Email</h4>
                    <input
                      name="email"
                      type="email"
                      className="au-form__input"
                      placeholder="Lúc đăng ký á"
                      onChange={handleOnchane}
                    />
                  </div>
                  <div className="info-item">
                    <h4 className="info grid__column-2-4">Số diện thoại</h4>
                    <input
                      name="numberPhone"
                      type="number"
                      className="au-form__input"
                      placeholder="Lúc đăng ký á"
                      onChange={handleOnchane}
                    />
                  </div>
                  <div className="info-item">
                    <h4 className="info grid__column-2-4">Địa chỉ</h4>
                    <input name="address" type="text" placeholder="Nhập địa chỉ" className="au-form__input" onChange={handleOnchane} />
                  </div>
                  <div className="form__controls info-but">
                    <div className="grid__column-40"></div>
                    <button className="btn">TRỞ LẠI</button>
                    <button type="submit" className="btn btn--buy">Lưu thông tin</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
