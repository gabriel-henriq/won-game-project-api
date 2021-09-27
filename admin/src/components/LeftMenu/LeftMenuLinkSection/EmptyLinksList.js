import styled, { css } from 'styled-components';

  const EmptyLinksList = styled.span`
    ${({ theme }) => css`
      min-height: 3.6rem;
      padding: 0.6rem 1.6rem 2.6rem 0;
      font-size: 1.4rem;
      font-weight: 400;
      color: ${theme.main.colors.leftMenu['link-color']};
    `}
  `;

EmptyLinksList.defaultProps = {
  theme: {
    main: {
      colors: {
        white: '#ffffff',
      },
    },
  },
};

export default EmptyLinksList;
