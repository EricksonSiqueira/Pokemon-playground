import { SEOProps } from '..';

export const SEOMock = {
  title: `SEO mocked title`,
  description: `SEO mocked description`,
} as SEOProps;

export const SEOWithoutTitleMock = {
  ...SEOMock,
  title: undefined,
};

export const SEOWithoutDescriptionMock = {
  ...SEOMock,
  description: undefined,
};
