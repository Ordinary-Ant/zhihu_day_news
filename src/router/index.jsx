import React, { Suspense, useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Transition from "../components/Transition/Transition";
import routes from "./routes";

const Element = function Element(props) {
  let { component: Component, meta } = props;

  // 修改页面的TITLE
  let { title = "首页" } = meta || {};
  document.title = title;

  // 获取路由信息,基于属性传递给组件
  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();

  return (
    <Component
      navigate={navigate}
      location={location}
      params={params}
      usp={usp}
    />
  );
};
export default function RouterView() {
  return (
    <Suspense fallback={<Transition />}>
      <Routes>
        {routes.map((item) => {
          let { name, path } = item;
          return (
            <Route key={name} path={path} element={<Element {...item} />} />
          );
        })}
      </Routes>
    </Suspense>
  );
}
