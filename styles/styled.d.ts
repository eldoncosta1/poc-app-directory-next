import { DesignSystem } from "@lets-code-br/design-system-web/dist/styles/design-system-types";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends DesignSystem {}
}
