import styled from "styled-components";
import { Skeleton } from "antd-mobile";
import PropTypes from "prop-types";

const CardSkeletonCls = styled.div`
  padding: 0.25rem;
  .adm-skeleton {
    
  }
`;
export default function CardSkeleton(props) {
  const {lineCount, title_height, sub_height} = props
  return (
    <CardSkeletonCls>
      <Skeleton.Title style={{"--height": `${title_height}rem`}} animated />
      <Skeleton.Paragraph lineCount={lineCount} animated style={{"--height": `${sub_height}rem`}} />
    </CardSkeletonCls>
  );
}

CardSkeleton.defaultProps = {
  lineCount: 2,
  title_height: 0.5,
  sub_height: 0.5
};
CardSkeleton.propTypes = {
  lineCount: PropTypes.number,
  title_height: PropTypes.number,
  sub_height: PropTypes.number,
};


