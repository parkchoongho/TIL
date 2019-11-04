import React from "react";

export default function Stock(props) {
  console.log(props.data);
  const { data } = props;
  return (
    <>
      <h1>회사이름: {data.name}</h1>
      <ul>
        <li>거래소: {data["stock_exchange_short"]}</li>
        <li>현재 가격: ${data.price}</li>
        <li>연 최고가: ${data["52_week_high"]}</li>
        <li>연 최저가: ${data["52_week_low"]}</li>
        <li>일일 최고가: ${data["day_high"]}</li>
        <li>일일 최저가: ${data["day_low"]}</li>
      </ul>
    </>
  );
}
