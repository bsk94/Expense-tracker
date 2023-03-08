import styled from 'styled-components';

export const StyledListItemContainer = styled.ul`
  width: 100%;
  max-width: 57rem;
`;

export const StyledSkeleton = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 2.5rem;
`;
export const StyledSkeletonListItem = styled.li`
  display: flex;
  margin: 1rem 0rem;
  height: 5.5rem;
  background-color: ${({ theme }) => theme.colors.lightest};
  border-radius: 10px;
`;

export const StyledIcon = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  margin-left: 1.5rem;
  background-color: ${({ theme }) => theme.colors.midGreen};
  border-radius: 50px;
  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: hsla(100, 31%, 94%, 1);
    }
    100% {
      background-color: hsla(111, 8%, 82%, 1);
    }
  }
`;

export const StyledRectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 1rem;
  width: 75%;
`;

export const StyledRect = styled.span`
  height: 1rem;
  width: 30%;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.midGreen};
  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: hsla(100, 31%, 94%, 1);
    }
    100% {
      background-color: hsla(111, 8%, 82%, 1);
    }
  }
`;
export const StyledRectLonger = styled(StyledRect)`
  width: 100%;
`;

/* width: 100%;
  max-width: 57rem;
  height: 5.5rem;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  ::before {
    content: '';
    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 200px;
    background: linear-gradient(to right, red 0%, blue 50%, red 100%);
    animation: ${loading} 1000ms ease-in-out infinite;
  } */
