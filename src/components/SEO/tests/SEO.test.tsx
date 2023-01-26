import { render, cleanup, waitFor } from '@testing-library/react';
import SEO from '..';
import {
  SEOMock,
  SEOWithoutTitleMock,
  SEOWithoutDescriptionMock,
} from '../mocks';

jest.mock(`next/head`, () => ({
  __esModule: true,
  default: ({ children }: { children: Array<React.ReactElement> }) => (
    <>{children}</>
  ),
}));

describe(`SEO`, () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it(`should render title received in props`, async () => {
    render(<SEO {...SEOMock} />);

    await waitFor(() => {
      expect(document.title).toBe(SEOMock.title);
    });
  });

  it(`should render default title when prop title isn't passed`, async () => {
    render(<SEO {...SEOWithoutTitleMock} />);

    await waitFor(() => {
      expect(document.title).toBe(`Pokedex - by Erickson`);
    });
  });

  it(`should render description received in props`, async () => {
    render(<SEO {...SEOMock} />);

    const description = document.querySelector(
      `meta[name='description']`,
    ) as HTMLTemplateElement;

    await waitFor(() =>
      expect(description?.content).toBe(`SEO mocked description`),
    );
  });

  it(`should render description received in props`, async () => {
    render(<SEO {...SEOWithoutDescriptionMock} />);

    const description = document.querySelector(
      `meta[name='description']`,
    ) as HTMLTemplateElement;

    await waitFor(() =>
      expect(description?.content).toBe(
        `Pokedex made to search all the pokemons info!`,
      ),
    );
  });

  it(`should render twitter:title metatag with title prop text`, async () => {
    render(<SEO {...SEOMock} />);

    const twitterTitle = document.querySelector(
      `meta[name='twitter:title']`,
    ) as HTMLTemplateElement;

    await waitFor(() => expect(twitterTitle?.content).toBe(`SEO mocked title`));
  });

  it(`should render twitter:title metatag with default text when title is not passed`, async () => {
    render(<SEO {...SEOWithoutTitleMock} />);

    const twitterTitle = document.querySelector(
      `meta[name='twitter:title']`,
    ) as HTMLTemplateElement;

    await waitFor(() =>
      expect(twitterTitle?.content).toBe(`Pokedex - by Erickson`),
    );
  });

  it(`should render og:site_name metatag with title prop text`, async () => {
    render(<SEO {...SEOMock} />);

    const twitterTitle = document.querySelector(
      `meta[property='og:site_name']`,
    ) as HTMLTemplateElement;

    await waitFor(() => expect(twitterTitle?.content).toBe(`SEO mocked title`));
  });

  it(`should render og:site_name metatag with default title text when title is not passed`, async () => {
    render(<SEO {...SEOWithoutTitleMock} />);

    const twitterTitle = document.querySelector(
      `meta[property='og:site_name']`,
    ) as HTMLTemplateElement;

    await waitFor(() =>
      expect(twitterTitle?.content).toBe(`Pokedex - by Erickson`),
    );
  });
});
