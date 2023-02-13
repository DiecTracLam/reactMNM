import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./userRedux";

const Information = (props) => {

  const [loading , setLoading] = useState(true); 
  // const userID = useSelector((state) => state.user.user.token);
  const user2 = useSelector((state)=> state.user.user)
  const [user,setUser] = useState(user2);
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   const api = async ()=>{
  //     const getApi = await userApi.getUser(userID);
  //     console.log(getApi)
  //     setUser(getApi.data);
  //     setLoading(false);
  //   }
  //   api();
  // },[])
  console.log(user)
  const handleOnchane = (e)=>{
    console.log(e.target.name)
    const newtype = {[e.target.name]: e.target.value}
    setUser(prev=>({...prev , ...newtype}))
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const action = await register(user);

    dispatch(action)
   
  }
  // if(loading) return
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
                      name="username"
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
                      name="fullname"
                      type="text"
                      className="au-form__input"
                      placeholder="Tên KH"
                      value={user.fullname}
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
                      value={user.email}
                    />
                  </div>
                  <div className="info-item">
                    <h4 className="info grid__column-2-4">Số diện thoại</h4>
                    <input
                      name="numberPhone"
                      type="number"
                      className="au-form__input"
                      placeholder="Lúc đăng ký á"
                      value={user.numberPhone}
                      onChange={handleOnchane}
                    />
                  </div>
                  <div className="info-item">
                    <h4 className="info grid__column-2-4">Địa chỉ</h4>
                    <input name="address" type="text" placeholder="Nhập địa chỉ" className="au-form__input" value={user.address} onChange={handleOnchane} />
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
