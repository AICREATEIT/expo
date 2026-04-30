export interface StackToolbarSpacerProps {
    /**
     * Whether the spacer should be hidden.
     *
     * @default false
     */
    hidden?: boolean;
    /**
     * The width of the spacing element.
     *
     * In Left/Right placements, width is required.
     * In Bottom placement, if width is not provided, the spacer will be flexible
     * and expand to fill available space.
     *
     * > **Note (Android):** `width` is required in every placement. Flexible spacers are
     * > iOS-only — on Android, the spacer renders nothing without an explicit `width`.
     */
    width?: number;
    /**
     * Whether this spacer shares background with adjacent items.
     *
     * Only available in bottom placement.
     *
     * @platform iOS 26+
     */
    sharesBackground?: boolean;
}
export interface NativeToolbarSpacerProps {
    hidden?: boolean;
    hidesSharedBackground?: boolean;
    sharesBackground?: boolean;
    width?: number;
}
//# sourceMappingURL=types.d.ts.map