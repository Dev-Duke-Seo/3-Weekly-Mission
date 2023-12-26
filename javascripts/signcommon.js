const emailInputElement = document.querySelector("#email-input");
const passwdInputElement = document.querySelector("#passwd-input");
const formElement = document.querySelector(".email-passwd-wrapper");
const loginElement = document.querySelector(".login");

// accessToken 있으면 페이지 이동
if(localStorage.getItem("accessToken")){
  location.href = "/folder";
}

// 유효성 검사
const EMAILPATTERN = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const PASSWDPATTERN = /(?=.*[0-9])(?=.*[A-Za-z])^.{8,}$/;

// 에러 메시지 요소 추가
const emailErrorMentionElement = document.createElement("div");
const passwdErrorMentionElement = document.createElement("div");

emailErrorMentionElement.classList.add("error-mention");
passwdErrorMentionElement.classList.add("error-mention");
emailInputElement.parentElement.append(emailErrorMentionElement);
passwdInputElement.parentElement.append(passwdErrorMentionElement);

// 에러 요소 설정
function setErrorMentionElement(
  visibility,
  inputType,
  errorType,
  errorMention
) {
  if (visibility) {
    inputType.classList.add("error-border");
    errorType.innerText = errorMention;
    errorType.style.display = "block";
    return false;
  } else {
    inputType.classList.remove("error-border");
    errorType.style.display = "none";
    return true;
  }
}

// email input값 검사
function checkEmailValidity() {
  if (emailInputElement.value.trim() === "") {
    return setErrorMentionElement(
      true,
      emailInputElement,
      emailErrorMentionElement,
      "이메일을 입력해주세요."
    );
  } else if (!EMAILPATTERN.test(emailInputElement.value)) {
    return setErrorMentionElement(
      true,
      emailInputElement,
      emailErrorMentionElement,
      "올바른 이메일 주소가 아닙니다."
    );
  } else {
    return setErrorMentionElement(false, emailInputElement, emailErrorMentionElement);
  }
}

// password input값 검사
function checkPasswdValidity() {
  if (passwdInputElement.value === "") {
    return setErrorMentionElement(
      true,
      passwdInputElement,
      passwdErrorMentionElement,
      "비밀번호를 입력해주세요."
    );
  } else if (!PASSWDPATTERN.test(passwdInputElement.value)) {
    return setErrorMentionElement(
      true,
      passwdInputElement,
      passwdErrorMentionElement,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
  } else {
    return setErrorMentionElement(
      false,
      passwdInputElement,
      passwdErrorMentionElement
    );
  }
}

// email, password input창 유효성 검사 이벤트 추가
emailInputElement.addEventListener("blur", checkEmailValidity);
passwdInputElement.addEventListener("blur", checkPasswdValidity);

// eye-image toggle
const eyeOffElements = document.querySelectorAll(".eye-off");

function changePasswdVisiblity({ target }) {
  const targetInput = target.previousElementSibling;
  if (targetInput.type === "password") {
    targetInput.type = "text";
    target.src = "../images/eye-on.svg";
  } else {
    targetInput.type = "password";
    target.src = "../images/eye-off.svg";
  }
}

eyeOffElements.forEach((el) =>
  el.addEventListener("click", changePasswdVisiblity)
);

export {
  loginElement,
  emailInputElement,
  passwdInputElement,
  emailErrorMentionElement,
  passwdErrorMentionElement,
  formElement,
  checkEmailValidity,
  checkPasswdValidity,
  setErrorMentionElement,
};