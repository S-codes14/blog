import styled from 'styled-components';

export const SectionTitle: any = styled.div<{ uppercase: boolean }>`
  font-size: ${(props) => props.theme.fontSize.big};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'normal')};
  text-align: center;
  color: ${(props) => props.theme.colors.bg};
  position: relative;
  padding: 2rem 0 0;
  margin-bottom: 2rem;
  &:after {
    content: '';
    height: 1px;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    background: ${(props) => props.theme.colors.white};
  }
`;
