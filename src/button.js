import React, {useState, useCallback} from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import {BoxShadow} from 'react-native-shadow';

import LinearGradient from 'react-native-linear-gradient';

import {
  variantColor,
  variantDarkShadow,
  variantLightShadow,
  variantSemanticDark,
} from './helper/colorHelper';

function button(props) {
  const {width = 70, height = 70, variant = 'primary', bgColor} = props;
  const [isDown, setDown] = useState(false);
  const handlePressIn = useCallback(() => {
    setDown(true);
  }, [setDown]);
  const handlePressOut = useCallback(() => {
    setDown(false);
  }, [setDown]);

  let font = '';

  if (variant != 'primary') {
    font = variantColor(variant);
  } else {
    font = variantSemanticDark(variant);
  }

  const colorBody = variantColor('primary');
  const darkShadow2 = variantDarkShadow('primary');
  const lightShadow2 = variantLightShadow('primary');

  const gradColors = [darkShadow2, colorBody, colorBody, lightShadow2];
  const angleCenter = isDown ? {x: 0.3, y: 0.8} : {x: 0.1, y: 0.5};
  const innerColor = isDown ? lightShadow2 : darkShadow2;
  const outterColor = isDown ? bgColor : lightShadow2;
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
    x: -3,
    y: 5,
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
