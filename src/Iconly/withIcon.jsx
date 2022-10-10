/* eslint-disable react/require-default-props */
import { getSize, getStroke, getOpacity } from './utils/utils';

function withIcon(Component) {
  // eslint-disable-next-line react/prefer-stateless-function
  return (props) => {
    // eslint-disable-next-line react/static-property-placement

    const {
      size,
      label,
      primaryColor,
      secondaryColor,
      filled,
      set,
      style,
      stroke,
      ...restProps
    } = props;

    const iconSize = getSize(size) || '24px';

    const iconPrimaryColor = primaryColor || 'currentColor';

    const iconSecondaryColor =
      secondaryColor || iconPrimaryColor || 'currentColor';

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        role={label ? 'img' : 'presentation'}
        aria-label={label || undefined}
        style={style}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...restProps}
      >
        <Component
          color={iconPrimaryColor}
          opacity={getOpacity(primaryColor, secondaryColor)}
          secondaryColor={iconSecondaryColor}
          set={filled ? 'bold' : set || 'light'}
          strokeWidth={stroke ? getStroke(stroke) : '1.5px'}
        />
      </svg>
    );
  };
}

export default withIcon;
