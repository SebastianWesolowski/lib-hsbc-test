---
inject: true
to: src/index.ts
append: true
skip_if: react-native-fs
---
export * from "./components/<%= component_name %>";
