import React from 'react';
import styled from 'styled-components';

const Title1 = styled.h1<{ bold?: boolean }>`
  margin: 8px 8px 20px 8px;
  padding: 0px;
  font-size: 40px;
  font-weight: ${(props) => (props.bold ? 'bold' : 400)};
  color: #373e47;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const Title2 = styled.h2<{ bold?: boolean }>`
  margin: 8px 8px 20px 8px;
  padding: 0px;
  font-size: 26px;
  font-weight: ${(props) => (props.bold ? 'bold' : 400)};
  color: #373e47;
  line-height: 34px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Title3 = styled.h3<{ bold?: boolean }>`
  margin: 8px 8px 20px 8px;
  padding: 0px;
  font-size: 24px;
  font-weight: ${(props) => (props.bold ? 'bold' : 400)};
  color: #373e47;
  line-height: 32px;
`;

const Title4 = styled.h4<{ bold?: boolean }>`
  margin: 8px 8px 10px 8px;
  padding: 0px;
  font-size: 20px;
  font-weight: ${(props) => (props.bold ? 'bold' : 400)};
  color: #373e47;
  line-height: 28px;
`;

const Title5 = styled.h5<{ bold?: boolean }>`
  margin: 4px 8px;
  padding: 0px;
  font-size: 16px;
  font-weight: ${(props) => (props.bold ? 'bold' : 400)};
  color: #373e47;
`;

interface Props {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  bold?: boolean;
  children?: React.ReactNode;
}

export const Title: React.FC<Props> = (props) => {
  if (props.size === 'h5')
    return <Title5 bold={props.bold}>{props.children}</Title5>;
  if (props.size === 'h4')
    return <Title4 bold={props.bold}>{props.children}</Title4>;
  if (props.size === 'h3')
    return <Title3 bold={props.bold}>{props.children}</Title3>;
  if (props.size === 'h2')
    return <Title2 bold={props.bold}>{props.children}</Title2>;

  return <Title1 bold={props.bold}>{props.children}</Title1>;
};

export const Text = styled.div<{ large?: boolean }>`
  margin: 8px 8px;
  padding: 0px;
  line-height: ${(props) => (props.large ? '30px' : '26px')};
  font-size: ${(props) => (props.large ? '15px' : '13px')};
  color: #373e47;
  a {
    text-decoration: 'underline';
    color: #373e47;
  }
`;
