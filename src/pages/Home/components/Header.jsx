import styled from "styled-components";
import { Avatar } from "antd-mobile";
import { getToday, getChineseMonth } from "@/utils/time";
import { useEffect, useState } from "react";
import default_avator from "@/assets/image/timg.jpg";

const HeaderCls = styled.div`
  height: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.5rem;
  background: #fff;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  font-size: 0.4rem;
  .day {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 1.2rem;
    border: 2px solid;
    border-radius: 10%;
    border-image: linear-gradient(
      180deg,
      rgb(184, 236, 255),
      rgb(173, 255, 248)
    ) 1;
  }
  .title {
    font-weight: bold;
    font-size: 0.5rem;
  }
  .avator {
  }
`;

export default function Header() {
  const [current_time, setCurrentTime] = useState([]);
  const [avator, setAvator] = useState(default_avator);

  useEffect(() => {
    const today = getToday();
    today[1] = getChineseMonth(today[1]);
    setCurrentTime(today);
  }, []);

  return (
    <HeaderCls>
      <div className="day">
        <span>{current_time[1]}</span>
        <span>{current_time[2]}</span>
      </div>
      <div className="title">知乎日报</div>
      <div className="avator">
        <Avatar src={avator} />
      </div>
    </HeaderCls>
  );
}
