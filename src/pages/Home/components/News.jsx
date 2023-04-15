import styled from "styled-components";
import { Divider } from "antd-mobile";
import NewsCard from "@/components/NewsCard/NewsCard";
import { formatDate } from "@/utils/time";
import PropTypes from "prop-types";

const NewsCls = styled.div``;
export default function News(props) {
  return (
    <NewsCls>
      {props.news_List.map((news_obj) => (
        <div className="news_item" key={news_obj.date}>
          <Divider>{formatDate(news_obj.date)}</Divider>
          {news_obj.stories.map((news) => (
            <div className="new_item" key={news.id}>
              <NewsCard news={news}/>
            </div>
          ))}
        </div>
      ))}
    </NewsCls>
  );
}

News.propTypes = {
  news_List: PropTypes.array.isRequired,
};
