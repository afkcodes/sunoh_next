import { Fragment } from 'react';
import { cn } from '~/lib/utils';
import { TextLinkProps } from '~/types/component.types';
import {
  fontSizeStyle,
  fontWeightStyle,
  lineClampStyles,
  textColorStyles,
} from './textLink.styles';

const TextLink: React.FC<TextLinkProps> = ({
  text,
  type = 'text',
  fontSize = 'base',
  fontWeight = 'normal',
  numOfLines = 1,
  color = 'primary',
}) => {
  const textFontSize = fontSizeStyle[fontSize];
  const textFontWeight = fontWeightStyle[fontWeight];
  const textNumOfLines = lineClampStyles[numOfLines];
  const textColor = textColorStyles[color];

  return (
    <Fragment>
      {type === 'text' ? (
        <p className={cn([textFontSize, textFontWeight, textNumOfLines, textColor])}>
          {/* {decodeHtmlEntities(text)} */}
          {text}
        </p>
      ) : null}
    </Fragment>
  );
};

export default TextLink;
