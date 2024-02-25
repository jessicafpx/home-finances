import React from "react";

type TCategories = {
  color?: string;
  size?: number;
};

export const Categories = React.memo(
  ({ color = "#fff", size = 36 }: TCategories) => (
    <svg
      width={size}
      height="24"
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.7934 14.2558L31.2669 22.0155C30.9146 22.6194 30.4103 23.1204 29.804 23.4686C29.1978 23.8168 28.5109 24 27.8118 24H2.81406C1.65638 24 0.935063 22.7442 1.51838 21.7442L6.04488 13.9845C6.39714 13.3806 6.90152 12.8796 7.50775 12.5314C8.11399 12.1832 8.80089 12 9.5 12H34.4977C35.6554 12 36.3767 13.2558 35.7934 14.2558ZM9.5 10H30V7C30 5.34312 28.6569 4 27 4H17L13 0H3C1.34312 0 0 1.34312 0 3V20.3779L4.31731 12.9767C5.38838 11.1406 7.37431 10 9.5 10Z"
        fill={color}
      />
    </svg>
  )
);

Categories.displayName = "Categories";
