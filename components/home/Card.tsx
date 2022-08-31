import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '~/lib/colors';

import type { Item } from '@prisma/client';

interface Props {
  item: Item;
}

const Card = ({ item }: Props) => {
  return (
    <Block>
      <Thumbnail>{/** youtube banner */}</Thumbnail>
      <Description>{item.description}</Description>
      <Footer>
        <div>
          <Image src="/like.svg" alt="like" width="12" height="11" />
        </div>
        <CountBlock>0</CountBlock>
      </Footer>
    </Block>
  );
};

export default Card;

const Block = styled.article`
  width: 320px;
  height: 260px;
  border-radius: 7px;
  box-sizing: border-box;
  border: 1px solid ${COLORS.gray0};
  margin: 10px;
`;

const Thumbnail = styled.div`
  height: 152px;
  border-bottom: 1px solid ${COLORS.gray0};
`;

const Description = styled.div`
  height: 60px;
  padding: 10px;
  font-size: 12px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
`;

const CountBlock = styled.div`
  margin-left: 5px;
  font-size: 14px;
`;
