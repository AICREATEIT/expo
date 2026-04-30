import type { ImageSourcePropType, StyleProp, TextStyle } from 'react-native';
import type { SFSymbol } from 'sf-symbols-typescript';

import { Badge, Icon, Label } from '../../../primitives';

export interface StackToolbarLabelProps {
  /**
   * The text to display as the label for the tab.
   */
  children?: string;
}

export const StackToolbarLabel: React.FC<StackToolbarLabelProps> = Label;

export type StackToolbarIconProps =
  | {
      // TODO: add support for vector icons
      src: ImageSourcePropType;
      /**
       * Controls how the image icon is rendered.
       *
       * - `'template'`: applies tint color to the icon
       * - `'original'`: preserves original icon colors
       *
       * **Default behavior on iOS:**
       * - With parent `tintColor`: defaults to `'template'`
       * - Without parent `tintColor`: defaults to `'original'`
       *
       * **On Android:** defaults to `'template'`. Setting `'original'` skips the tint so
       * the icon's source colors are preserved.
       *
       * @platform android
       * @platform ios
       */
      renderingMode?: 'template' | 'original';
    }
  | {
      /**
       * Name of an SF Symbol to display.
       *
       * > **Note (Android):** SF Symbols are not rendered on Android. Use the `src`
       * > variant with an `ImageSourcePropType` to provide a cross-platform icon.
       */
      sf: SFSymbol;
    }
  | {
      /**
       * Name of an image in your Xcode asset catalog (`.xcassets`).
       *
       * Not supported on Android — Xcode asset catalogs are an iOS-only concept. Use
       * the `src` variant with an `ImageSourcePropType` for a cross-platform icon.
       *
       * @platform ios
       */
      xcasset: string;
      /**
       * Controls how the xcasset icon is rendered on iOS.
       *
       * - `'template'`: iOS applies tint color to the icon
       * - `'original'`: Preserves original icon colors
       *
       * Defaults based on parent component's `tintColor`:
       * - With `tintColor`: defaults to `'template'`
       * - Without `tintColor`: defaults to `'original'`
       *
       * Not supported on Android (the `xcasset` variant itself is iOS-only).
       *
       * @platform ios
       */
      renderingMode?: 'template' | 'original';
    };

export const StackToolbarIcon: React.FC<StackToolbarIconProps> = Icon;

export interface StackToolbarBadgeProps {
  /**
   * The text to display as the badge
   */
  children?: string;

  style?: StyleProp<
    Pick<TextStyle, 'fontFamily' | 'fontSize' | 'color' | 'fontWeight' | 'backgroundColor'>
  >;
}

export const StackToolbarBadge: React.FC<StackToolbarBadgeProps> = Badge;
