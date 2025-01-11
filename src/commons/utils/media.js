export const breakpoints = {
  xs: '320px',
  sm: '360px',
  md: '375px',
  lg: '390px',
  xl: '412px',
  xxl: '428px',
  xxxl: '480px',
};

// NOTE: 특정 구간에만 적용
export const media = {
  xs: `@media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm})`,
  sm: `@media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
  md: `@media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  lg: `@media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl})`,
  xl: `@media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl})`,
  xxl: `@media (min-width: ${breakpoints.xxl}) and (max-width: ${breakpoints.xxxl})`,
  xxxl: `@media (min-width: ${breakpoints.xxxl})`,
};

// NOTE: 특정 크기 이상
export const mediaUp = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
  xxxl: `@media (min-width: ${breakpoints.xxxl})`,
};

// NOTE: 특정 크기 이하
export const mediaDown = {
  xs: `@media (max-width: ${breakpoints.xs})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xl: `@media (max-width: ${breakpoints.xl})`,
  xxl: `@media (max-width: ${breakpoints.xxl})`,
  xxxl: `@media (max-width: ${breakpoints.xxxl})`,
};
