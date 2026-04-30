import type { ImageSourcePropType, StyleProp, TextStyle } from 'react-native';
import type { SFSymbol } from 'sf-symbols-typescript';
export interface StackToolbarLabelProps {
    /**
     * The text to display as the label for the tab.
     */
    children?: string;
}
export declare const StackToolbarLabel: React.FC<StackToolbarLabelProps>;
export type StackToolbarIconProps = {
    src: ImageSourcePropType;
    /**
     * Controls how the image icon is rendered on iOS.
     *
     * - `'template'`: iOS applies tint color to the icon
     * - `'original'`: Preserves original icon colors
     *
     * Defaults based on parent component's `tintColor`:
     * - With `tintColor`: defaults to `'template'`
     * - Without `tintColor`: defaults to `'original'`
     *
     * On Android, image icons are always template-tinted by Compose. This prop is
     * a no-op — use the parent component's `iconRenderingMode` instead, which is
     * honored on both platforms.
     *
     * @platform ios
     */
    renderingMode?: 'template' | 'original';
} | {
    /**
     * Name of an SF Symbol to display.
     *
     * > **Note (Android):** SF Symbols are not rendered on Android. Use the `src`
     * > variant with an `ImageSourcePropType` to provide a cross-platform icon.
     */
    sf: SFSymbol;
} | {
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
export declare const StackToolbarIcon: React.FC<StackToolbarIconProps>;
export interface StackToolbarBadgeProps {
    /**
     * The text to display as the badge
     */
    children?: string;
    style?: StyleProp<Pick<TextStyle, 'fontFamily' | 'fontSize' | 'color' | 'fontWeight' | 'backgroundColor'>>;
}
export declare const StackToolbarBadge: React.FC<StackToolbarBadgeProps>;
//# sourceMappingURL=toolbar-primitives.d.ts.map