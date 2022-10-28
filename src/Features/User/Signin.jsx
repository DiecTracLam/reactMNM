import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./userRedux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Inputfield from "../Field/InputField";
import PasswordField from "../Field/PasswordField";
import { NotificationManager , NotificationContainer} from 'react-notifications';

const Signin = (props) => {
  const [openLogin, setopenLogin] = useState(false);
  const [openForget, setopenFoget] = useState(false);
  const dispatch = useDispatch();
  const handleOpenForget = () => {
    setopenFoget(true);
  };
  const handleCloseForget = () => {
    setopenFoget(false);
  };
  const handleOpenLog = () => {
    setopenLogin(true);
  };
  const handleCloseLog = () => {
    setopenLogin(false);
  };

  const handleSubmit = async (values) => {
    const action = await login(values);
    dispatch(action);
    NotificationManager.success('Đăng nhập thành công')
  };

  const schema = yup
    .object({
      username: yup.string().required("Hãy nhập tài khoản"),
      password: yup.string().required("Hãy nhập mật khẩu"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <>
      <li className="header__navbar-item header__navbar-item-bold ">
        <button className="login_input" onClick={handleOpenLog}>
          Đăng nhập
        </button>
        {openLogin && (
          <div className="modal">
            <label className="modal__overlay"></label>
            <div className="modal__body">
              <div className="modal__inner">
                <div className="au-form">
                  <div className="au-form__container">
                    <div className="au-form__header">
                      <h3 className="au-form__heading">Đăng nhập</h3>
                    </div>
                    <form
                      onSubmit={form.handleSubmit(handleSubmit)}
                      className="au-form__form"
                    >
                      <div className="au-form__gr">
                        <Inputfield control={form.control} name="username" placeholder="Nhập tài khoản"/>
                      </div>
                      <div className="au-form__gr">
                        <PasswordField control={form.control} name="password" placeholder="Nhập mật khẩu"/>
                      </div>
                      <div className="au-form__help">
                        <label
                          onClick={handleOpenForget}
                          className="au-form__help-link au-form__help-forgot"
                        >
                          Quên mật khẩu
                        </label>
                        <span className="au-form__help-separate"></span>
                        <a href="" className="au-form__help-link">
                          Cần trợ giúp ?
                        </a>
                      </div>
                      <div className="au-form__controls">
                        <button onClick={handleCloseLog} className="btn">
                          TRỞ LẠI
                        </button>
                        <button type="submit" className="btn btn--buy">
                          ĐĂNG NHẬP
                        </button>
                      </div>
                    </form>

                    <div className="au-form__aside">
                      {openForget && (
                        <div className="modal">
                          <label className="modal__overlay"></label>
                          <div className="modal__body">
                            <div className="modal__inner">
                              <div className="au-form">
                                <div className="au-form__container">
                                  <div className="au-form__header">
                                    <h3 className="au-form__heading">
                                      Quên mật khẩu
                                    </h3>
                                  </div>
                                  <div className="au-form__form">
                                    <div className="au-form__gr">
                                      <input
                                        type="text"
                                        className="au-form__input"
                                        placeholder="Nhập số điện thoại"
                                      />
                                    </div>
                                    <div className="au-form__gr">
                                      <input
                                        type="password"
                                        className="au-form__input"
                                        placeholder="Nhập mật khẩu mới"
                                      />
                                    </div>
                                    <div className="au-form__gr">
                                      <input
                                        type="password-again"
                                        className="au-form__input"
                                        placeholder="Nhập lại mật khẩu"
                                      />
                                    </div>
                                  </div>

                                  <div className="au-form__controls">
                                    <button
                                      onClick={handleCloseForget}
                                      className="btn"
                                    >
                                      TRỞ LẠI
                                    </button>
                                    <button className="btn btn--buy">
                                      LƯU LẠI
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>

    </>
  );
};

export default Signin;
