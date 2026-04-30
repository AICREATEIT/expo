import type { StackToolbarMenuProps, StackToolbarMenuActionProps } from './types';
import type { NativeStackHeaderItemMenu, NativeStackHeaderItemMenuAction } from '../../../../react-navigation/native-stack';
export type { StackToolbarMenuProps, NativeToolbarMenuProps, StackToolbarMenuActionProps, NativeToolbarMenuActionProps, } from './types';
/**
 * Use as `Stack.Toolbar.Menu` to provide menus in the toolbar.
 * It accepts `Stack.Toolbar.MenuAction` and nested `Stack.Toolbar.Menu`
 * elements. Menu can be configured using both component props and child
 * elements.
 *
 * @example
 * ```tsx
 * import { Stack } from 'expo-router';
 * import { Alert } from 'react-native';
 *
 * export default function Page() {
 *   return (
 *     <>
 *       <Stack.Toolbar placement="right">
 *         <Stack.Toolbar.Menu icon="ellipsis.circle">
 *           <Stack.Toolbar.MenuAction onPress={() => Alert.alert('Action pressed!')}>
 *             Action 1
 *           </Stack.Toolbar.MenuAction>
 *         </Stack.Toolbar.Menu>
 *       </Stack.Toolbar>
 *       <ScreenContent />
 *     </>
 *   );
 * }
 * ```
 *
 * > **Note (Android):** the root `icon` must be an `ImageSourcePropType` (use a
 * > `require()` or `{ uri }` source, or `<Stack.Toolbar.Icon src={...} />`); SF Symbols
 * > and `xcasset` icons are silently dropped. The menu renders as a Compose
 * > `DropdownMenu`, so `palette`, `elementSize`, `hidesSharedBackground`, top-level
 * > `inline`, `separateBackground`, `image`, and `destructive` are iOS-only — `inline`
 * > on a nested submenu is honored as a divider separator.
 *
 * @see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/menus) for more information about menus on iOS.
 *
 * @platform android
 * @platform ios
 */
export declare const StackToolbarMenu: React.FC<StackToolbarMenuProps>;
export declare function convertStackToolbarMenuPropsToRNHeaderItem(props: StackToolbarMenuProps, isBottomPlacement?: boolean): NativeStackHeaderItemMenu | undefined;
/**
 * An action item for a `Stack.Toolbar.Menu`.
 *
 * @example
 * ```tsx
 * import { Stack } from 'expo-router';
 *
 * export default function Page() {
 *   return (
 *     <>
 *       <Stack.Toolbar placement="right">
 *         <Stack.Toolbar.Menu icon="ellipsis.circle">
 *           <Stack.Toolbar.MenuAction onPress={() => alert('Action pressed!')}>
 *             Action 1
 *           </Stack.Toolbar.MenuAction>
 *         </Stack.Toolbar.Menu>
 *       </Stack.Toolbar>
 *       <ScreenContent />
 *     </>
 *   );
 * }
 * ```
 *
 * > **Note (Android):** Renders as a Compose `DropdownMenuItem`. Only
 * > `ImageSourcePropType` icons are rendered (SF Symbols are dropped). `image`,
 * > `iconRenderingMode`, `discoverabilityLabel`, `subtitle`, and
 * > `unstable_keepPresented` are iOS-only. `isOn` renders as a trailing checkmark.
 *
 * @platform android
 * @platform ios
 */
export declare const StackToolbarMenuAction: React.FC<StackToolbarMenuActionProps>;
export declare function convertStackToolbarMenuActionPropsToRNHeaderItem(props: StackToolbarMenuActionProps): NativeStackHeaderItemMenuAction;
//# sourceMappingURL=index.d.ts.map