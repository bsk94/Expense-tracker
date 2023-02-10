const customMediaQueryMax = (maxWidth: number) => `@media screen and (max-width: ${maxWidth}px)`;

const customMediaQueryMin = (minWidth: number) => `@media screen and (min-width: ${minWidth}px)`;

export const media = {
  desktop: customMediaQueryMin(600),
  mobile: customMediaQueryMax(600),
  mobileS: customMediaQueryMax(330)
};
