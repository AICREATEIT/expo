'use client';
import type { ComponentProps } from 'react';
import { Children, useEffect, useMemo, useRef } from 'react';

import { ExperimentalStackHeader } from './ExperimentalStackHeader';
import { createExperimentalStackNavigator } from './createExperimentalStackNavigator';
import { stackRouterOverride } from '../StackClient';
import { mapProtectedScreen, StackScreen } from '../stack-utils';
import { withLayoutContext } from '../withLayoutContext';
import type {
  ExperimentalStackNavigationEventMap,
  ExperimentalStackNavigationOptions,
} from './types';
import type { ParamListBase, StackNavigationState } from '../../react-navigation/native';
import { isChildOfType } from '../../utils/children';
import { Protected } from '../../views/Protected';

const ExperimentalStackNavigator = createExperimentalStackNavigator().Navigator;

const RNExperimentalStack = withLayoutContext<
  ExperimentalStackNavigationOptions,
  typeof ExperimentalStackNavigator,
  StackNavigationState<ParamListBase>,
  ExperimentalStackNavigationEventMap
>(ExperimentalStackNavigator);

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
const ExperimentalStack = Object.assign(
  (props: ComponentProps<typeof RNExperimentalStack>) => {
    useHeaderChildWarning(props.children);

    const rnChildren = useMemo(() => {
      // Drop our own <ExperimentalStack.Header> stub before mapProtectedScreen
      // sees it — otherwise it falls into the "Unknown child element" branch
      // and warns alongside our own dev warning.
      const filtered = Children.toArray(props.children).filter(
        (child) => !isChildOfType(child, ExperimentalStackHeader)
      );
      return mapProtectedScreen({ guard: true, children: filtered }).children;
    }, [props.children]);

    return (
      <RNExperimentalStack {...props} children={rnChildren} UNSTABLE_router={stackRouterOverride} />
    );
  },
  {
    Screen: StackScreen,
    Protected,
    Header: ExperimentalStackHeader,
  }
);

function useHeaderChildWarning(children: React.ReactNode) {
  const warnedRef = useRef(false);
  const hasHeader = useMemo(
    () => Children.toArray(children).some((child) => isChildOfType(child, ExperimentalStackHeader)),
    [children]
  );
  useEffect(() => {
    if (!__DEV__ || !hasHeader || warnedRef.current) return;
    warnedRef.current = true;
    console.warn(
      `<ExperimentalStack.Header /> is ignored: the new react-native-screens experimental Stack has no headerSubview support yet. ` +
        `Use the 'title', 'headerShown', 'headerTransparent', and 'headerBackButtonHidden' screen options instead, or keep using <Stack /> for screens that need a custom header.`
    );
  }, [hasHeader]);
}

export { ExperimentalStack };

export default ExperimentalStack;

export type {
  ExperimentalStackNavigationOptions,
  ExperimentalStackNavigationEventMap,
  ExperimentalStackNavigationProp,
  ExperimentalStackScreenProps,
  ExperimentalStackNavigationHelpers,
} from './types';
