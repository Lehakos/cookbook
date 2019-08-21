import styled from 'styled-components';
import { prop } from 'styled-tools';
import { readableColor } from 'polished';

type WrapperProps = { bgColor: string };

export const Wrapper = styled.div.attrs<WrapperProps>(({ bgColor }) => ({
  style: {
    backgroundColor: bgColor,
  },
}))<WrapperProps>`
  display: inline-block;
  padding: ${prop('theme.space.2')}px ${prop('theme.space.3')}px;
  border: none;

  text-align: center;
  font-size: ${prop('theme.fontSizes.0')};
  color: ${({ bgColor, theme }) =>
    readableColor(bgColor, theme.colors.text, '#fff')};

  border-radius: ${prop('theme.radii.0')}px;
`;
