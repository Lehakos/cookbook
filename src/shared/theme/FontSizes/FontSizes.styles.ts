import styled from 'styled-components/macro';
import { fontSize, FontSizeProps } from 'styled-system';

export const Wrapper = styled.div``;

export const FontSize = styled.p<FontSizeProps>`
  ${fontSize}
`;
