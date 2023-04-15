import { Swiper, Image } from "antd-mobile";
import styled from "styled-components";
import PropTypes from "prop-types";

const NewSwiperCls = styled.div`
  margin: 0.25rem;
  height: 6rem;
  background: #ccc;
  .adm-swiper {
    height: 100%;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  }
  .adm-swiper-track-inner {
    .info {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        padding-left: 0.3rem;
        &:first-child {
          font-size: 0.35rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #fff;
          margin-bottom: 0.1rem;
        }
        color: #ccc;
      }
    }
  }
  .adm-swiper-indicator {
    .adm-page-indicator-dot {
      width: 0.1rem;
      height: 0.1rem;
      border-radius: 50%;
      margin-right: 0.1rem;
      &.adm-page-indicator-dot-active {
        width: 0.25rem;
        border-radius: 40%;
      }
    }
    left: 94%;
  }
`;

export default function NewSwiper(props) {
  const items = props.banner_list.map((news) => (
    <Swiper.Item key={news.id}>
      <Image src={news.image} width="100%" height="100%" fit="cover" lazy/>
      <div className="info" style={{ backgroundColor: `rgba(0,0,0, 0.2)` }}>
        <span>{news.title}</span>
        <span>{news.hint}</span>
      </div>
    </Swiper.Item>
  ));

  return (
    <NewSwiperCls>
      {props.banner_list.length ? (
        <Swiper style={{ "--border-radius": "5px" }} loop autoplay>
          {items}
        </Swiper>
      ) : null}
    </NewSwiperCls>
  );
}

NewSwiper.propTypes = {
  banner_list: PropTypes.array.isRequired,
};
