/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      colors: {
        black: {
          100: "#787878",
          200: "#6B6B6B",
          300: "#5E5E5E",
          400: "#525252",
          500: "#454545",
          600: "#373737",
          700: "#2B2B2B",
          800: "#1F1F1F",
          900: "#121212",
          950: "#050505",
        },
        gray: {
          100: "#DEDEDE",
          200: "#C4C4C4",
          300: "#ABABAB",
          400: "#919191",
        },
        blue: {
          100: "#FFFFFF",
          200: "#ECEFF4",
          300: "#CBD3E1",
          400: "#ABB8CE",
          500: "#8B9DBC",
          600: "#6A82A9",
          700: "#52698E",
          800: "#40516E",
          900: "#2D394E",
          950: "#1A212D",
        },
        red: {
          100: "#FF6577",
          200: "#E3714F", //버튼 색상
        },
        bg: {
          100: "#F8F8F8", //왼
          200: "#F0F0F0", //오
        },
        main: {
          blue: "#6BB8FE",
          gray: "EBEBEB", //채팅창, 채팅 전송 하단부 색상
          border: "BDBDBD",
        },
        line: {
          100: "#F2F2F2",
          200: "#CFDBEA",
          300: "#D7D7D7",
        },
      },
    },
  },
  plugins: [],
};
