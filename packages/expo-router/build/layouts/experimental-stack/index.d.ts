import type { ComponentProps } from 'react';
import { ExperimentalStackHeader } from './ExperimentalStackHeader';
import type { ExperimentalStackNavigationEventMap, ExperimentalStackNavigationOptions } from './types';
import type { ParamListBase, StackNavigationState } from '../../react-navigation/native';
import { Protected } from '../../views/Protected';
declare const RNExperimentalStack: import("react").ForwardRefExoticComponent<Omit<Omit<import("./types").ExperimentalStackNavigatorProps, "children" | "initialRouteName" | "layout" | "screenListeners" | "screenOptions" | "screenLayout" | "UNSTABLE_router" | "UNSTABLE_routeNamesChangeBehavior" | "id"> & import("../../react-navigation/core").DefaultRouterOptions<string> & ({
    children: React.ReactNode;
    layout?: ((props: {
        state: StackNavigationState<ParamListBase>;
        navigation: import("../..").NavigationHelpers<ParamListBase, {}>;
        descriptors: Record<string, import("../..").Descriptor<ExperimentalStackNavigationOptions, import("../..").NavigationProp<ParamListBase, string, string | undefined, StackNavigationState<ParamListBase>, ExperimentalStackNavigationOptions, ExperimentalStackNavigationEventMap>, import("../..").RouteProp<ParamListBase, string>>>;
        children: React.ReactNode;
    }) => React.ReactElement) | undefined;
    screenListeners?: Partial<{
        transitionStart: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "transitionStart", unknown>;
        transitionEnd: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "transitionEnd", unknown>;
        gestureCancel: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "gestureCancel", unknown>;
        focus: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "focus", unknown>;
        blur: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "blur", unknown>;
        state: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "state", unknown>;
        beforeRemove: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "beforeRemove", true>;
    }> | ((props: {
        route: import("../..").RouteProp<ParamListBase, string>;
        navigation: import("./types").ExperimentalStackNavigationProp<ParamListBase, string, string | undefined>;
    }) => Partial<{
        transitionStart: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "transitionStart", unknown>;
        transitionEnd: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "transitionEnd", unknown>;
        gestureCancel: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "gestureCancel", unknown>;
        focus: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "focus", unknown>;
        blur: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "blur", unknown>;
        state: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "state", unknown>;
        beforeRemove: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "beforeRemove", true>;
    }>) | undefined;
    screenOptions?: ExperimentalStackNavigationOptions | ((props: {
        route: import("../..").RouteProp<ParamListBase, string>;
        navigation: import("./types").ExperimentalStackNavigationProp<ParamListBase, string, string | undefined>;
        theme: ReactNavigation.Theme;
    }) => ExperimentalStackNavigationOptions) | undefined;
    screenLayout?: ((props: import("../..").ScreenLayoutArgs<ParamListBase, string, ExperimentalStackNavigationOptions, import("./types").ExperimentalStackNavigationProp<ParamListBase, string, string | undefined>>) => React.ReactElement) | undefined;
    UNSTABLE_router?: (<Action extends Readonly<{
        type: string;
        payload?: object;
        source?: string;
        target?: string;
    }>>(original: import("../../react-navigation/core").Router<StackNavigationState<ParamListBase>, Action>) => Partial<import("../../react-navigation/core").Router<StackNavigationState<ParamListBase>, Action>>) | undefined;
    UNSTABLE_routeNamesChangeBehavior?: "firstMatch" | "lastUnhandled";
} & ({
    id?: undefined;
} | {
    id: string;
})), "children"> & Partial<Pick<Omit<import("./types").ExperimentalStackNavigatorProps, "children" | "initialRouteName" | "layout" | "screenListeners" | "screenOptions" | "screenLayout" | "UNSTABLE_router" | "UNSTABLE_routeNamesChangeBehavior" | "id"> & import("../../react-navigation/core").DefaultRouterOptions<string> & ({
    children: React.ReactNode;
    layout?: ((props: {
        state: StackNavigationState<ParamListBase>;
        navigation: import("../..").NavigationHelpers<ParamListBase, {}>;
        descriptors: Record<string, import("../..").Descriptor<ExperimentalStackNavigationOptions, import("../..").NavigationProp<ParamListBase, string, string | undefined, StackNavigationState<ParamListBase>, ExperimentalStackNavigationOptions, ExperimentalStackNavigationEventMap>, import("../..").RouteProp<ParamListBase, string>>>;
        children: React.ReactNode;
    }) => React.ReactElement) | undefined;
    screenListeners?: Partial<{
        transitionStart: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "transitionStart", unknown>;
        transitionEnd: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "transitionEnd", unknown>;
        gestureCancel: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "gestureCancel", unknown>;
        focus: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "focus", unknown>;
        blur: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "blur", unknown>;
        state: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "state", unknown>;
        beforeRemove: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "beforeRemove", true>;
    }> | ((props: {
        route: import("../..").RouteProp<ParamListBase, string>;
        navigation: import("./types").ExperimentalStackNavigationProp<ParamListBase, string, string | undefined>;
    }) => Partial<{
        transitionStart: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "transitionStart", unknown>;
        transitionEnd: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "transitionEnd", unknown>;
        gestureCancel: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "gestureCancel", unknown>;
        focus: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "focus", unknown>;
        blur: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "blur", unknown>;
        state: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "state", unknown>;
        beforeRemove: import("../..").EventListenerCallback<ExperimentalStackNavigationEventMap & import("../..").EventMapCore<StackNavigationState<ParamListBase>>, "beforeRemove", true>;
    }>) | undefined;
    screenOptions?: ExperimentalStackNavigationOptions | ((props: {
        route: import("../..").RouteProp<ParamListBase, string>;
        navigation: import("./types").ExperimentalStackNavigationProp<ParamListBase, string, string | undefined>;
        theme: ReactNavigation.Theme;
    }) => ExperimentalStackNavigationOptions) | undefined;
    screenLayout?: ((props: import("../..").ScreenLayoutArgs<ParamListBase, string, ExperimentalStackNavigationOptions, import("./types").ExperimentalStackNavigationProp<ParamListBase, string, string | undefined>>) => React.ReactElement) | undefined;
    UNSTABLE_router?: (<Action extends Readonly<{
        type: string;
        payload?: object;
        source?: string;
        target?: string;
    }>>(original: import("../../react-navigation/core").Router<StackNavigationState<ParamListBase>, Action>) => Partial<import("../../react-navigation/core").Router<StackNavigationState<ParamListBase>, Action>>) | undefined;
    UNSTABLE_routeNamesChangeBehavior?: "firstMatch" | "lastUnhandled";
} & ({
    id?: undefined;
} | {
    id: string;
})), "children">> & import("react").RefAttributes<unknown>> & {
    Screen: (props: import("../..").ScreenProps<ExperimentalStackNavigationOptions, StackNavigationState<ParamListBase>, ExperimentalStackNavigationEventMap>) => null;
    Protected: typeof Protected;
};
/**
 * Renders the new `react-native-screens/experimental` ("gamma") native stack.
 *
 * Sibling to `Stack`. Native-only — on web it falls back to the standard `Stack`.
 * Opt-in per navigator: replace `<Stack />` with `<ExperimentalStack />` in the
 * specific layout you want to migrate.
 *
 * Supports a narrow gamma-shaped option surface: `title`, `headerShown`,
 * `headerTransparent`, `headerBackButtonHidden`. Anything else (animation,
 * presentation, sheet, status bar, custom headers, search bar, toolbar) is
 * dropped with a `__DEV__` warning. Keep using `<Stack />` for those screens.
 *
 * @experimental
 */
declare const ExperimentalStack: ((props: ComponentProps<typeof RNExperimentalStack>) => import("react/jsx-runtime").JSX.Element) & {
    Screen: (({ children, options, ...rest }: import("../stack-utils").StackScreenProps) => import("react/jsx-runtime").JSX.Element) & {
        Title: typeof import("../stack-utils").StackScreenTitle;
        BackButton: typeof import("../stack-utils").StackScreenBackButton;
    };
    Protected: import("react").FunctionComponent<import("../../views/Protected").ProtectedProps>;
    Header: typeof ExperimentalStackHeader;
};
export { ExperimentalStack };
export default ExperimentalStack;
export type { ExperimentalStackNavigationOptions, ExperimentalStackNavigationEventMap, ExperimentalStackNavigationProp, ExperimentalStackScreenProps, ExperimentalStackNavigationHelpers, } from './types';
//# sourceMappingURL=index.d.ts.map