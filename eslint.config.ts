import {
  astro,
  combine,
  ignores,
  imports,
  javascript,
  typescript,
} from "@antfu/eslint-config";

export default combine(
  ignores(),
  javascript(),
  imports(),
  typescript(),
  astro(),
);
