import styled from "styled-components";
import Header from "./components/Header";
import NewSwiper from "./components/NewSwiper";
import News from "./components/News";
import CardSkeleton from "@/components/CardSkeleton/CardSkeleton";
import { InfiniteScroll } from "antd-mobile";
import { useEffect, useMemo, useState } from "react";
import { toast } from "@/utils/common.js";
import api from "@/api/index.js";

const HomeCls = styled.div`
  min-height: 100%;
  background-image: -moz-linear-gradient(
    90deg,
    rgb(194, 245, 255),
    rgb(255, 189, 204)
  );

  background-image: -webkit-linear-gradient(
    90deg,
    rgb(194, 245, 255),
    rgb(255, 189, 204)
  );

  background-image: linear-gradient(
    90deg,
    rgb(194, 245, 255),
    rgb(255, 189, 204)
  );
`;

export default function Home() {
  const [banner_list, setBannerList] = useState([]);
  const [news_List, setNewsList] = useState([]);
  const [has_more, setHasMore] = useState(true);

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

  useMemo(() => {
    console.log(has_more, "has_more");
    if (news_List.length > 30) {
      setHasMore(false);
    }
  });

  const loadMore = async () => {
    try {
      const time = news_List[news_List.length - 1].date - 1;
      const res = await api.queryNewsBefore(time);
      news_List.push(res);
      setNewsList([...news_List]);
    } catch (error) {
      toast(error);
    }
  };

  return (
    <HomeCls>
      <Header />
      <NewSwiper banner_list={banner_list} />
      {news_List.length ? (
        <>
          <News news_List={news_List} />
          <InfiniteScroll loadMore={loadMore} hasMore={has_more} />
        </>
      ) : (
        <CardSkeleton />
      )}
    </HomeCls>
  );
}
