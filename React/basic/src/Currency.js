import React from "react";

export default function Currency(props) {
  let exchaData = props.data.rates;
  console.log(exchaData);
  return (
    <>
      <div>세계 환율 동향</div>
      <div>기준 통화(USD)</div>
      <ul>
        <li>원: {exchaData.KRW.toFixed(2)}</li>
        <li>엔화: {exchaData.JPY.toFixed(2)}</li>
        <li>유로: {exchaData.EUR.toFixed(2)}</li>
        <li>위안: {exchaData.CNY.toFixed(2)}</li>
      </ul>
    </>
  );
}
