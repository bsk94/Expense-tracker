import React from 'react';
import {
  StyledSkeleton,
  StyledSkeletonListItem,
  StyledIcon,
  StyledRectsContainer,
  StyledRect,
  StyledRectLonger,
  StyledListItemContainer
} from './skeleton-styles';

const Skeleton = () => {
  return (
    <StyledSkeleton>
      {Array.from({ length: 4 }, (_, i) => (
        <StyledListItemContainer key={i}>
          <StyledSkeletonListItem>
            <StyledIcon />
            <StyledRectsContainer>
              <StyledRectLonger></StyledRectLonger>
              <StyledRect></StyledRect>
            </StyledRectsContainer>
          </StyledSkeletonListItem>
        </StyledListItemContainer>
      ))}
    </StyledSkeleton>
  );
};

export default Skeleton;
