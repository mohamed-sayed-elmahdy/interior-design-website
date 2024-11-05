"use client";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";
import styles from "./PopUp.module.css";

const Popup = ({ isOpen, togglePopup }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [message, setMessage] = useState(""); // For success/error messages

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsDone(false);

    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      phone: e.target.phone.value,
      city: e.target.city.value,
      email: e.target.email.value,
      typeIs: selectedOption,
      message: e.target.message.value,
      radio: e.target.radio.value,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Email sent successfully!");
        e.target.reset(); // Clear all inputs
        setSelectedOption(""); // Clear the selected option
      } else {
        setMessage("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while sending the email.");
    } finally {
      setIsLoading(false);
      setIsDone(true);
    }
  };

  return (
    <div>
      <div
        className={`${styles.request} ${isOpen ? styles.request_opened : ""}`}
      >
        <div className={styles.request__bg}></div>

        <div className={styles.request__container}>
          <form
            action="send"
            id="makeRequest"
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div
              className={`${styles.request__content} ${styles.request__content_first}`}
            >
              <div className={`${styles.h3} ${styles.request__title}`}>
                Make request
              </div>
              <div className={styles.request__inputs}>
                {/* Input Fields */}
                <div className={styles.fieldset}>
                  <div className={styles.ui_input}>
                    <input
                      type="text"
                      name="firstname"
                      autoComplete="off"
                      className={styles.input_field}
                      placeholder=" "
                    />
                    <div className={styles.ui_input__name}>Name</div>
                  </div>
                </div>
                <div className={styles.fieldset}>
                  <div className={styles.ui_input}>
                    <input
                      type="text"
                      name="lastname"
                      autoComplete="off"
                      className={styles.input_field}
                      placeholder=" "
                    />
                    <div className={styles.ui_input__name}>Last Name</div>
                  </div>
                </div>
                <div className={styles.fieldset}>
                  <div className={styles.ui_input}>
                    <input
                      type="text"
                      name="phone"
                      autoComplete="off"
                      className={styles.input_field}
                      placeholder=" "
                    />
                    <div className={styles.ui_input__name}>Phone</div>
                  </div>
                </div>
                <div className={styles.fieldset}>
                  <div className={styles.ui_input}>
                    <input
                      type="text"
                      name="city"
                      autoComplete="off"
                      className={styles.input_field}
                      placeholder=" "
                    />
                    <div className={styles.ui_input__name}>Your city</div>
                  </div>
                </div>
                <div className={styles.fieldset}>
                  <div className={styles.ui_input}>
                    <input
                      type="text"
                      name="email"
                      autoComplete="off"
                      className={styles.input_field}
                      placeholder=" "
                    />
                    <div className={styles.ui_input__name}>Email</div>
                  </div>
                </div>
                {/* Dropdown Field */}
                <div
                  className={`${styles.fieldset} ${styles.fieldset__select}`}
                >
                  <div className={styles.ui_select} onClick={toggleDropdown}>
                    <input
                      type="text"
                      name="typeIs"
                      value={selectedOption}
                      autoComplete="off"
                      readOnly
                      className={`${
                        selectedOption ? "text-black font-medium" : ""
                      }`}
                    />
                    <div
                      className={`${styles.ui_select__name} ${
                        selectedOption ? styles.ui_select__name_active : ""
                      }`}
                    >
                      Property type
                    </div>
                    <div
                      className={`${styles.location__block} ${
                        isDropdownOpen ? styles.location__block_visible : ""
                      }`}
                    >
                      <div
                        className={`${styles.location__container} ${
                          isDropdownOpen
                            ? styles.location__container_visible
                            : ""
                        }`}
                      >
                        {["All", "Apartment", "House", "Commerce"].map(
                          (option) => (
                            <div
                              key={option}
                              className={`${styles.btn2} ${styles.location__item}`}
                              onClick={() => handleOptionClick(option)}
                            >
                              {option}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Text Area Field */}
                <div
                  className={`${styles.fieldset} ${styles.fieldset__textarea}`}
                >
                  <div className={styles.ui_textarea}>
                    <textarea
                      type="textarea"
                      name="message"
                      autoComplete="off"
                      className={styles.input_field}
                      placeholder=" "
                    ></textarea>
                    <div className={styles.ui_textarea__name}>Your comment</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.request__content} ${styles.request__content_second}`}
            >
              <div className={` ${styles.request__title}`}>
                Area (m<sup>2</sup>)
              </div>
              <div className={styles.request__choices}>
                {/* Radio Buttons */}
                <label className={styles.container}>
                  <div className={styles.label}>to 50</div>
                  <input type="radio" name="radio" value="to 50" />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.container}>
                  <div className={styles.label}>50-150</div>
                  <input type="radio" name="radio" value="50-150" />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.container}>
                  <div className={styles.label}>150-250</div>
                  <input type="radio" name="radio" value="150-250" />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.container}>
                  <div className={styles.label}>250-400</div>
                  <input type="radio" name="radio" value="250-400" />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.container}>
                  <div className={styles.label}>400-600</div>
                  <input type="radio" name="radio" value="400-600" />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.container}>
                  <div className={styles.label}>600-800</div>
                  <input type="radio" name="radio" value="600-800" />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.container}>
                  <div className={styles.label}>800-1000</div>
                  <input type="radio" name="radio" value="800-1000" />
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.container}>
                  <div className={styles.label}>1000+</div>
                  <input type="radio" name="radio" value="1000+" />
                  <span className={styles.checkmark}></span>
                </label>
              </div>
              <div className="flex justify-center md:justify-end w-full items-center mt-10">
                <div className={styles.request__btn}>
                  <button className={styles.custom_button}>
                    {isLoading ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      "Send a request"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="absolute top-8 right-8 z-10 cursor-pointer">
            <MdOutlineClose
              size={30}
              onClick={togglePopup}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            />
          </div>
          {isDone && (
            <div
              className={`${
                message.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              } flex items-center mt-4`}
            >
              {message.includes("successfully") ? (
                <FaCheckCircle className="mr-2" />
              ) : (
                <FaTimesCircle className="mr-2" />
              )}
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
