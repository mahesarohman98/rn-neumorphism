import React, {useState, useCallback} from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import {BoxShadow} from 'react-native-shadow';

import LinearGradient from 'react-native-linear-gradient';

import {
  variantColor,
  variantLightShadow,
  variantDarkShadow,
  variantSemanticLight,
  variantSemanticDark,
} from './helper/colorHelper';

function button(props) {
  const {width = 70, height = 70, variant = 'primary', bgColor} = props;
  const background = bgColor;
  const [isDown, setDown] = useState(false);
  const handlePressIn = useCallback(() => {
    setDown(true);
  }, [setDown]);
  const handlePressOut = useCallback(() => {
    setDown(false);
  }, [setDown]);

  const body = variantColor(variant);
  const darkShadow = variantDarkShadow(variant);
  const lightShadow = variantLightShadow(variant);

  const darkShadow2 = variantDarkShadow('primary');
  const lightShadow2 = variantLightShadow('primary');
  const shadowColor = variantColor('primary');

  let font = '';

  if (variant != 'primary') {
    font = variantSemanticLight(variant);
  } else {
    font = variantSemanticDark(variant);
  }

  const gradColors = [darkShadow, body, body, lightShadow];
  const angleCenter = isDown ? {x: 0.3, y: 0.8} : {x: 0.1, y: 0.5};
  const innerColor = isDown ? lightShadow : darkShadow;
  const outterColor = isDown ? bgColor : lightShadow;
  const buttonFace = {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
    borderRadius: 25,
    // marginVertical:5,
    overflow: 'hidden',
  };

  const innerShadow = {
    width: width - 12,
    height: height - 12,
    color: innerColor,
    border: 13,
    radius: 25,
    opacity: 0.5,
    x: 14,
    y: 11,
    style: {marginVertical: 5},
  };
  const outterShadow = {
    width: width - 12,
    height: height - 12,
    color: outterColor,
    border: 17,
    radius: 25,
    opacity: 1,
    x: -1,
    y: 9,
    style: {marginVertical: 5},
  };
  const myVariant = {
    color: font,
  };
  return (
    <BoxShadow setting={outterShadow}>
      <BoxShadow setting={innerShadow}>
        <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
          <LinearGradient
            colors={gradColors}
            useAngle={true}
            angle={145}
            angleCenter={angleCenter}
            style={buttonFace}>
            <Text style={[myVariant, props.style]}> {props.children}</Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </BoxShadow>
    </BoxShadow>
  );
}
export default button;
