import "./login.scss";
import logo from "../../assets/images/logo.svg";
import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { ChangeEvent, FormEvent, useState } from "react";
import { PublicProviderEmails, Regex, UserCredentials } from "../../Constant";
import Tickets from "../tickets";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    language: i18n.language,
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });
  const checkEmailDomain = (value:string) => {
    const domain = value.split("@")[1];
    return PublicProviderEmails.includes(domain);
  };

  const validateEmail = (email:string) => {
    if (!email.length) {
      return t("Email is required.");
    }
    if (!Regex.test(email)) {
      return t("Please enter a valid email address.");
    }
    if (checkEmailDomain(email)) {
      return t("This email provider is not allowed.");
    }
    return "";
  };

  const handleChange = (key:string, value:string|boolean) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.email === UserCredentials.email &&
      formData.password === UserCredentials.password
    ) {
      setLoggedIn(true);
    } else {
      alert(t("Incorrect email or password. Please try again."));
    }
  };

  return (
    <>
      {!loggedIn ? (
        <div className="login-layout">
          <div className="login-wrap">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="login-logo">
                <img src={logo} alt="Noventiq Logo" />
              </div>
              <div className="login-card">
                <div className="md:flex md:items-center mb-4">
                  <div className="md:w-1/3">
                    <label
                      className="block font-bold mb-1 md:mb-0 pr-4 text-base"
                      htmlFor="email"
                    >
                      {t("Email")}:
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300">
                      <div className="shrink-0 text-base select-none sm:text-sm/6">
                        <MdOutlineEmail />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        onChange={(e) => {
                          handleChange("email", e.target.value);
                        }}
                        onBlur={(e) =>
                          setError({
                            ...error,
                            email: validateEmail(e.target.value),
                          })
                        }
                      />
                    </div>
                    {error.email ? (
                      <span className="form-error">{error.email}</span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="md:flex md:items-center mb-4">
                  <div className="md:w-1/3">
                    <label
                      className="block font-bold mb-1 md:mb-0 pr-4 text-base"
                      htmlFor="password"
                    >
                      {t("Password")}:
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300">
                      <div className="shrink-0 text-base select-none sm:text-sm/6">
                        <GoLock />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className="block grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        onChange={(e) => {
                          handleChange("password", e.target.value);
                        }}
                        onBlur={(e) =>
                          setError({
                            ...error,
                            password: e.target.value
                              ? ""
                              : t("Password is required."),
                          })
                        }
                      />
                      <div className="grid shrink-0 grid-cols-1 pr-3 text-gray-500">
                        <button
                          type="button"
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((val) => !val)}
                        >
                          {!showPassword ? <LuEye /> : <LuEyeOff />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href="#"
                        className="block text-xs underline font-medium mt-2"
                        >
                        {t("Forgot Password?")}
                      </a>
                      {error.password ? (
                        <span className="form-error">{error.password}</span>
                        ) : (
                          ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-4">
                  <div className="md:w-1/3">
                    <label
                      className="block font-bold mb-1 md:mb-0 pr-4 text-base"
                      htmlFor="language"
                    >
                      {t("Language")}:
                    </label>
                  </div>
                  <div className="sm:w-full md:w-48">
                    <div className="grid grid-cols-1">
                      <select
                        id="language"
                        name="language"
                        defaultValue={formData.language}
                        autoComplete="language-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6"
                        onChange={(e) => {
                          handleChange("language", e.target.value);
                          i18n.changeLanguage(e.target.value);
                        }}
                      >
                        <option value={"en"}>English</option>
                        <option value={"hi"}>Hindi</option>
                        <option value={"ta"}>Tamil</option>
                      </select>
                      <div className="flex justify-center items-center pointer-events-none col-start-1 row-start-1 w-8 h-9 self-center justify-self-end sm:w-6 text-lg border-l border-gray-300">
                        <MdOutlineArrowDropDown />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:items-center justify-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onChange={(e:ChangeEvent<HTMLInputElement>) =>
                        handleChange("rememberMe", e.target.checked)
                      }
                    />
                    <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-100 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-gray-900"></div>
                    <span className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-600">
                      {t("Remember me")}{" "}
                    </span>
                  </label>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="btn-submit bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded w-56"
                  disabled={error.email.length > 0 || error.password.length > 0 || !formData.email || !formData.password}
                >
                  {t("Log in")}
                </button>
              </div>
            </form>
          </div>
          <div className="mt-6 text-xs font-semibold">
            {t("Copyright 2025 Noventiq | Powered by Noventiq")}
          </div>
        </div>
      ) : (
        <Tickets />
      )}
    </>
  );
};

export default Login;
