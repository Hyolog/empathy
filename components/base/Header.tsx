import styled from 'styled-components';

import { COLORS } from '~/lib/colors';

import Button from '../system/Button';

const Header = () => {
  return (
    <Block>
      <Title>공감</Title>
      <Button>로그인</Button>
    </Block>
  );
};

export default Header;

const Block = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid ${COLORS.gray0};
  box-sizing: border-box;
`;

const Title = styled.div`
  color: ${COLORS.primary};
  font-size: 20px;
  font-weight: 700;
`;
