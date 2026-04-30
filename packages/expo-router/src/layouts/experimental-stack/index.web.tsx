'use client';
import type { ComponentProps } from 'react';

// On web, fall back to the standard Stack. The `.web` extension keeps the web
// bundle from importing `react-native-screens/experimental`, which is native-only.
import LegacyStack from '../Stack';
import { ExperimentalStackHeader } from './ExperimentalStackHeader';

// Expose `<ExperimentalStack.Header>` as a no-op stub on web so the static
// member has the same warn-and-ignore semantics as the native implementation
// (rather than silently resolving to the legacy composition-API `Stack.Header`,
// which renders content). Other static members defer to LegacyStack.
const ExperimentalStack = Object.assign(
  (props: ComponentProps<typeof LegacyStack>) => <LegacyStack {...props} />,
  {
    Screen: LegacyStack.Screen,
    Protected: LegacyStack.Protected,
    Header: ExperimentalStackHeader,
  }
);

export { ExperimentalStack };

export default ExperimentalStack;

export type {
  ExperimentalStackNavigationOptions,
  ExperimentalStackNavigationEventMap,
  ExperimentalStackNavigationProp,
  ExperimentalStackScreenProps,
  ExperimentalStackNavigationHelpers,
} from './types';
