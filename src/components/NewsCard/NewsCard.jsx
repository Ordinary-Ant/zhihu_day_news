import PropTypes from "prop-types";
import styled from "styled-components";
import { Image } from "antd-mobile";

const NewsCardCls = styled.div`
  margin: 0.25rem;
  padding: 0.25rem;
  background: #fff;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.5);
  .news-info {
    flex: 3;
    h4 {
      font-size: 0.35rem;
      margin-bottom: 0.2rem;
    }
  }
`;
export default function NewsCard(props) {
  return (
    <NewsCardCls>
      <div className="news-info">
        <h4>{props.news.title}</h4>
        <span>{props.news.hint}</span>
      </div>
      <Image
        src={props.news.images[0]}
        width="1.8rem"
        height="1.8rem"
        fit="cover"
        style={{ borderRadius: 4 }}
      />
    </NewsCardCls>
  );
}
NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};
