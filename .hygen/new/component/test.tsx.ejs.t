---
to: <%= absPath %>/<%= component_name %>.spec.tsx
---
describe("Components", () => {
  describe("<%= component_name %>", () => {
    it("should render without errors", () => {
      expect(true).toStrictEqual(true);
    });
  });
});
