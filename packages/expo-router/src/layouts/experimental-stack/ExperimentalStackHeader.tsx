import type { ReactNode } from 'react';

/**
 * Stub used as the `<ExperimentalStack.Header>` slot. The new
 * `react-native-screens/experimental` Stack has no `headerSubview` concept yet
 * — the component renders nothing and triggers a one-shot dev warning when used.
 *
 * @experimental
 */
export type ExperimentalStackHeaderProps = {
  children?: ReactNode;
};

export function ExperimentalStackHeader(_props: ExperimentalStackHeaderProps): null {
  return null;
}
