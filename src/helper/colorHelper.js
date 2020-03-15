import theme from '../../../../styles/custom-theme.json'; 

export function variantColor(variant, Theme) {
  if (variant == 'danger') {
    return theme.color_danger_500;
  } else if (variant == 'info') {
    return theme.color_info_500;
  } else if (variant == 'success') {
    return theme.color_success_500;
  } else if (variant == 'warning') {
    return theme.color_warning_500;
  } else {
    return theme.color_primary_500;
  }
}

export function variantLightShadow(variant) {
  if (variant == 'danger') {
    return theme.color_danger_shadow_light;
  } else if (variant == 'info') {
    return theme.color_info_shadow_light;
  } else if (variant == 'success') {
    return theme.color_success_shadow_light;
  } else if (variant == 'warning') {
    return theme.color_warning_shadow_light;
  } else {
    return theme.color_primary_shadow_light;
  }
}

export function variantDarkShadow(variant) {
  if (variant == 'danger') {
    return theme.color_danger_shadow_dark;
  } else if (variant == 'info') {
    return theme.color_info_shadow_dark;
  } else if (variant == 'success') {
    return theme.color_success_shadow_dark;
  } else if (variant == 'warning') {
    return theme.color_warning_shadow_dark;
  } else {
    return theme.color_primary_shadow_dark;
  }
}

export function variantSemanticLight(variant) {
  if (variant == 'danger') {
    return theme.color_danger_100;
  } else if (variant == 'info') {
    return theme.color_info_100;
  } else if (variant == 'success') {
    return theme.color_success_100;
  } else if (variant == 'warning') {
    return theme.color_warning_100;
  } else {
    return theme.color_primary_100;
  }
}

export function variantSemanticDark(variant) {
  if (variant == 'danger') {
    return theme.color_danger_900;
  } else if (variant == 'info') {
    return theme.color_info_900;
  } else if (variant == 'success') {
    return theme.color_success_900;
  } else if (variant == 'warning') {
    return theme.color_warning_900;
  } else {
    return theme.color_primary_900;
  }
}
