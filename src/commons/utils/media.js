export const breakpoints = {
  xs: '360px',
  sm: '568px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  xxl: '1920px',
  xxxl: '2300px',
};

// NOTE: 특정 구간에만 적용되는 미디어쿼리
export const media = {
  xs: `@media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm})`,
  sm: `@media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
  md: `@media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  lg: `@media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl})`,
  xl: `@media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl})`,
  xxl: `@media (min-width: ${breakpoints.xxl}) and (max-width: ${breakpoints.xxxl})`,
  xxxl: `@media (min-width: ${breakpoints.xxxl})`,
};

// NOTE: 특정 크기 이상에서 적용
export const mediaUp = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
  xxxl: `@media (min-width: ${breakpoints.xxxl})`,
};

// NOTE: 특정 크기 이하에서 적용
export const mediaDown = {
  xs: `@media (max-width: ${breakpoints.xs})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xl: `@media (max-width: ${breakpoints.xl})`,
  xxl: `@media (max-width: ${breakpoints.xxl})`,
  xxxl: `@media (max-width: ${breakpoints.xxxl})`,
};
