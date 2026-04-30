"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperimentalStack = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ExperimentalStackHeader_1 = require("./ExperimentalStackHeader");
const createExperimentalStackNavigator_1 = require("./createExperimentalStackNavigator");
const StackClient_1 = require("../StackClient");
const stack_utils_1 = require("../stack-utils");
const withLayoutContext_1 = require("../withLayoutContext");
const children_1 = require("../../utils/children");
const Protected_1 = require("../../views/Protected");
const ExperimentalStackNavigator = (0, createExperimentalStackNavigator_1.createExperimentalStackNavigator)().Navigator;
const RNExperimentalStack = (0, withLayoutContext_1.withLayoutContext)(ExperimentalStackNavigator);
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
const ExperimentalStack = Object.assign((props) => {
    useHeaderChildWarning(props.children);
    const rnChildren = (0, react_1.useMemo)(() => {
        // Drop our own <ExperimentalStack.Header> stub before mapProtectedScreen
        // sees it — otherwise it falls into the "Unknown child element" branch
        // and warns alongside our own dev warning.
        const filtered = react_1.Children.toArray(props.children).filter((child) => !(0, children_1.isChildOfType)(child, ExperimentalStackHeader_1.ExperimentalStackHeader));
        return (0, stack_utils_1.mapProtectedScreen)({ guard: true, children: filtered }).children;
    }, [props.children]);
    return ((0, jsx_runtime_1.jsx)(RNExperimentalStack, { ...props, children: rnChildren, UNSTABLE_router: StackClient_1.stackRouterOverride }));
}, {
    Screen: stack_utils_1.StackScreen,
    Protected: Protected_1.Protected,
    Header: ExperimentalStackHeader_1.ExperimentalStackHeader,
});
exports.ExperimentalStack = ExperimentalStack;
function useHeaderChildWarning(children) {
    const warnedRef = (0, react_1.useRef)(false);
    const hasHeader = (0, react_1.useMemo)(() => react_1.Children.toArray(children).some((child) => (0, children_1.isChildOfType)(child, ExperimentalStackHeader_1.ExperimentalStackHeader)), [children]);
    (0, react_1.useEffect)(() => {
        if (!__DEV__ || !hasHeader || warnedRef.current)
            return;
        warnedRef.current = true;
        console.warn(`<ExperimentalStack.Header /> is ignored: the new react-native-screens experimental Stack has no headerSubview support yet. ` +
            `Use the 'title', 'headerShown', 'headerTransparent', and 'headerBackButtonHidden' screen options instead, or keep using <Stack /> for screens that need a custom header.`);
    }, [hasHeader]);
}
exports.default = ExperimentalStack;
//# sourceMappingURL=index.js.map