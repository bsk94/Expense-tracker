import React from 'react';
import { SvgContainer } from './svg-styles';

interface Props {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
  fill?: string;
}

const SvgIcon: React.FC<Props> = (props) => {
  const { Icon } = props;
  return (
    <SvgContainer {...props}>
      <Icon />
    </SvgContainer>
  );
};

export default SvgIcon;
