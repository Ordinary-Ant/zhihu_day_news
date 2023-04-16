import PropTypes from "prop-types";
import styled from "styled-components";
import { Image } from "antd-mobile";
import { useNavigate } from "react-router";

const NewsCardCls = styled.div`
  margin: 0.25rem;
  padding: 0.25rem;
  background: #fff;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.3rem rgba(255, 255, 255, 0.5);
  .news-info {
    height: 1.5rem;
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 0.35rem;
      margin-bottom: 0.2rem;
    }
  }
`;
export default function NewsCard(props) {
  const navigate = useNavigate()
  const navToDetail = (id) => {
    if (!id) return
    navigate({ pathname: `/detail/${id}` })
  }

  return (
    <NewsCardCls onClick={() => navToDetail(props.news.id)}>
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
