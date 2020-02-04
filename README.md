# react-with-hocs

[![npm version](https://badge.fury.io/js/react-with-hocs.svg)](https://badge.fury.io/js/react-with-hocs)

A helper to compose React HOCs. Unlike the `compose` function, which is usually used in such cases, the `withHocs` receives the component first. This allows typescript to automatically infer types of HOCs, so you need not specify them manually.

```js
import withHocs from "react-with-hocs";

...

export default withHocs(Component)(
  HOC1,
  HOC2,
  HOC3,
  ...
);
```
