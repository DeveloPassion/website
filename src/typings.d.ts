// Allow to import images
declare module "*.png";
declare module "*.jpg";

declare module "*.svg" {
  import { HTMLAttributes } from "react";
  const value: React.ComponentType<HTMLAttributes<SVGElement>>;
  export default value;
}
