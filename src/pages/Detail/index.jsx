import styled from "styled-components";
import { SafeArea, Badge, Divider } from "antd-mobile";
import {
  HeartOutline,
  LeftOutline,
  LikeOutline,
  MessageOutline,
} from "antd-mobile-icons";
import { useEffect, useState } from "react";
import { toast } from "@/utils/common.js";
import api from "@/api";
import { useCallback } from "react";

const DetailCls = styled.div`
  .new-content {
    padding-bottom: 1.1rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .news-support {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.1rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background: #fff;
    overflow: hidden;
    .return-and-collect {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 1.2rem;
      svg {
        color: skyblue;
      }
    }
    .adm-divider-vertical {
      height: 0.6rem;
      margin: 0 1rem;
    }
    .adm-badge-wrapper {
      margin-right: 1.2rem;
      .adm-badge-content {
        padding: 0.08rem;
      }
    }
    svg {
      cursor: not-allowed;
      color: #ccc;
    }
  }
`;
export default function Detail(props) {
  const { params: { id }, navigate } = props
  const [comment_count, setCommentCount] = useState(null)
  const [like_count, setLikeCount] = useState(null)
  const [new_info, setNewInfo] = useState({})

  let link = null
  const handleCss = useCallback(() => {
    if (!new_info.css || !new_info.css.length) return
    const css = Array.isArray(new_info.css) ? new_info.css[0] : new_info.css
    link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = css
    document.head.appendChild(link)
  }, [new_info])

  const handleImage = useCallback(() => {
    if (!new_info.images || !new_info.images.length) return
    const img_place_holder = document.querySelector('.img-place-holder')
    if (!img_place_holder) return

    const image = Array.isArray(new_info.images) ? new_info.images[0] : new_info.images
    const img = new Image()
    img.src = image
    img.style.width = '100%'
    img.style.height = '100%'
    img.style.objectFit = 'cover'
    img.onload = () => {
      img_place_holder.appendChild(img)
    }
    img.onerror = () => {
      const parent = img_place_holder.parentNode
      parent.parentNode.removeChild(parent)
    }
  }, [new_info])

  const navReturn = useCallback(() => {
    navigate(-1)
  }, [])

  useEffect(() => {
    const getDetail = async () => {
      try {
        const new_info = await api.queryNewsInfo(id)
        const { popularity, comments } = await api.queryStoryExtra(id)
        setNewInfo(new_info)
        setLikeCount(popularity)
        setCommentCount(comments)
      } catch (error) {
        console.log(error);
        toast('error', error)
      }
    }
    getDetail()
  }, [])

  useEffect(() => {
    if (!new_info) return
    handleCss()
    handleImage()

    return () => {
      if (link) document.head.removeChild(link)
    }
  }, [new_info])

  return (
    <DetailCls>
      <div className="new-content" dangerouslySetInnerHTML={{ __html: new_info.body }}></div>
      <div className="news-support">
        <div className="return-and-collect">
          <LeftOutline fontSize=".5rem" onClick={navReturn} />
          <Divider direction="vertical" />
          <HeartOutline fontSize=".5rem" />
        </div>
        <Badge content={like_count}>
          <LikeOutline fontSize=".5rem" />
        </Badge>
        <Badge content={comment_count}>
          <MessageOutline fontSize=".5rem" />
        </Badge>
      </div>
      <SafeArea position="bottom" />
    </DetailCls>
  );
}
