import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import Inputfield from "../Field/InputField";
import NumberField from "../Field/NumberField";
import PasswordField from "../Field/PasswordField";
import { register } from "./userRedux";

const Signup = (props) => {
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();
  const handleOpenLog = () => {
    setopen(true);
  };
  const handleCloseLog = () => {
    setopen(false);
  };

  const handleSubmit = async (values) => {
    console.log(values);
    const action = await register(values);
    const result = dispatch(action);
  };

  const schema = yup
    .object({
      username: yup
        .string()
        .required("Hãy nhập tài khoản")
        .min(5, "Tên tài khoản trên 5 kí tự"),
      password: yup
        .string()
        .required("Hãy nhập mật khẩu")
        .min(5, "Mật khẩu quá ngắn"),
      retypePassword: yup
        .string()
        .required("Hãy nhập mật khẩu")
        .oneOf([yup.ref("password")], "Your password was wrong"),
      email: yup
        .string()
        .required("Hãy nhập email")
        .email("Please enter valid address your email"),
      numberPhone: yup
        .number()
        .required("Hãy nhập số điện thoại")
        .min(10, "Hãy nhập đúng số điện thoại"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      retypePassword: "",
      email: "",
      numberPhone: Number(),
    },
    resolver: yupResolver(schema),
  });
  return (
    <>
      <li className="header__navbar-item header__navbar-item-bold ">
        <button className="create_input" onClick={handleOpenLog}>
          Đăng ký
        </button>
        {open && (
          <div className="modal">
            <label className="modal__overlay"></label>
            <div className="modal__body">
              <div className="modal__inner">
                <div className="au-form">
                  <div className="au-form__container">
                    <div className="au-form__header">
                      <h3 className="au-form__heading">Đăng ký</h3>
                    </div>
                    <form
                      onSubmit={form.handleSubmit(handleSubmit)}
                      className="au-form__form"
                    >
                      <div className="au-form__gr">
                        <Inputfield control={form.control} name="username" placeholder="Nhập tài khoản"/>
                      </div>
                      <div className="au-form__gr">
                        <Inputfield control={form.control} name="email" placeholder="Nhập email"/>
                      </div>
                      <div className="au-form__gr">
                        <PasswordField control={form.control} name="password" placeholder="Nhập mật khẩu" />
                      </div>
                      <div className="au-form__gr">
                        <PasswordField
                          control={form.control}
                          name="retypePassword"
                          placeholder = "Nhập lại mật khẩu"
                        />
                      </div>
                      <div className="au-form__gr">
                        <NumberField control={form.control} name="numberPhone" placeholder="Nhập số điện thoại"/>
                      </div>
                      <div className="au-form__aside">
                        <p className="au-form__policy-text">
                          Bạn đã đồng ý với Triple N về
                          <a href="" className="au-form__text-link">
                            Điều khoản và dịch vụ
                          </a>{" "}
                          &
                          <a href="" className="au-form__text-link">
                            Chính sách bảo mật
                          </a>
                        </p>
                      </div>

                      <div className="au-form__controls">
                        <button onClick={handleCloseLog} className="btn">
                          TRỞ LẠI
                        </button>
                        <button type="submit" className="btn btn--buy">
                          ĐĂNG KÝ
                        </button>
                      </div>
                    </form>
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

export default Signup;
