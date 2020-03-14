# rn-neumorphism
react native neumorphism component with android support

package needed :
"react-native-linear-gradient": "^2.5.6",
"react-native-shadow": "^1.2.2",
"react-native-svg": "^12.0.3"



## How To Install 
We are using colors.eva.design for theming and shadow color from "neumorphism.io".

1. npm i rn-neumorphism
2. add style folder in your project app
3. From colors.eva.design site, choose your primary color. Example: #f1f3f6
4. Generate yours primary color in "colors.eva.design"
5. Import your color in json file. In that file replace - character to _

After you complete this steps above. We need another color for your buttons shadow. So you need to add string property in your custom-theme.json file.

 "color_danger_shadow_dark": yourShadowColor,
  "color_danger_shadow_light": yourShadowColor,
  "color_warning_shadow_dark": yourShadowColor,
  "color_warning_shadow_light": yourShadowColor,
  "color_info_shadow_dark": yourShadowColor,
  "color_info_shadow_light": yourShadowColor,
  "color_primary_shadow_dark": yourShadowColor,
  "color_primary_shadow_light": yourShadowColor,
  "color_success_shadow_light": yourShadowColor,
  "color_success_shadow_dark": yourShadowColor
  
  Shadow color generate from "neumorphism.io". Generate your semantic color 500
from custom-theme.json. Example "color_warning_500" : "#FCC735". Generate that
color to neumorphism.io.

You get css code like this :
------------------------------------
border-radius: 50px;
background: #FCC735;
box-shadow:  20px 20px 60px #d6a92d, 
             -20px -20px 60px #ffe53d;
---------------------------------------

use box shadow color #d6a92d to your "color_warning_shadow_dark"
and  #ffe53d to "color_warning_shadow_light": 

do this step again to semantic danger, info, primary, success
  
  
