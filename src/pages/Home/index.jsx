import styled from "styled-components";
import Header from "./components/Header";
import NewSwiper from "./components/NewSwiper";
import News from "./components/News";
import CardSkeleton from "@/components/CardSkeleton/CardSkeleton";
import { InfiniteScroll } from "antd-mobile";
import { useEffect, useState } from "react";
import { toast } from "@/utils/common.js";
import api from "@/api/index.js";

const HomeCls = styled.div`
  min-height: 100%;
  background-image: -moz-linear-gradient(
    180deg,
    rgb(184, 236, 255),
    rgb(173, 255, 248)
  );

  background-image: -webkit-linear-gradient(
    180deg,
    rgb(184, 236, 255),
    rgb(173, 255, 248)
  );

  background-image: linear-gradient(
    180deg,
    rgb(184, 236, 255),
    rgb(173, 255, 248)
  );
`;

export default function Home() {
  const [banner_list, setBannerList] = useState([]);
  const [news_List, setNewsList] = useState([]);

  useEffect(() => {
    let limit_count = 0;
    const getNewsList = async () => {
      try {
        const { date, stories, top_stories } = await api.queryNewsLatest();
        setBannerList(top_stories);
        news_List.push({ date, stories });
        setNewsList([...news_List]);
      } catch (e) {
        if (limit_count < 5) {
          limit_count++;
          getNewsList();
        } else {
          toast("error", e);
        }
      }
    };
    getNewsList();
  }, []);

  const loadMore = () => {

  }

  const hasMore = () => {

  }

  return (
    <HomeCls>
      <Header />
      <NewSwiper banner_list={banner_list} />
      {news_List.length ? (
        <>
          <News news_List={news_List} />
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </>
      ) : (
        <CardSkeleton />
      )}
    </HomeCls>
  );
}
