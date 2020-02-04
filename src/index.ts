import { ComponentType } from "react";

export interface Hoc<In, Out> {
  (component: ComponentType<In>): ComponentType<Out>;
}

export interface Compose<P> {
  (): ComponentType<P>;
  <H1>(h1: Hoc<P, H1>): ComponentType<H1>;
  <H1, H2>(h1: Hoc<P, H1>, h2: Hoc<H1, H2>): ComponentType<H2>;
  <H1, H2, H3>(h1: Hoc<P, H1>, h2: Hoc<H1, H2>, h3: Hoc<H2, H3>): ComponentType<
    H3
  >;
  <H1, H2, H3, H4>(
    h1: Hoc<P, H1>,
    h2: Hoc<H1, H2>,
    h3: Hoc<H2, H3>,
    h4: Hoc<H3, H4>
  ): ComponentType<H4>;
  <H1, H2, H3, H4, H5>(
    h1: Hoc<P, H1>,
    h2: Hoc<H1, H2>,
    h3: Hoc<H2, H3>,
    h4: Hoc<H3, H4>,
    h5: Hoc<H4, H5>
  ): ComponentType<H5>;
  <H1, H2, H3, H4, H5, H6>(
    h1: Hoc<P, H1>,
    h2: Hoc<H1, H2>,
    h3: Hoc<H2, H3>,
    h4: Hoc<H3, H4>,
    h5: Hoc<H4, H5>,
    h6: Hoc<H5, H6>
  ): ComponentType<H6>;
  <H1, H2, H3, H4, H5, H6>(
    h1: Hoc<P, H1>,
    h2: Hoc<H1, H2>,
    h3: Hoc<H2, H3>,
    h4: Hoc<H3, H4>,
    h5: Hoc<H4, H5>,
    h6: Hoc<H5, H6>
  ): ComponentType<H6>;
  <H1, H2, H3, H4, H5, H6, H7>(
    h1: Hoc<P, H1>,
    h2: Hoc<H1, H2>,
    h3: Hoc<H2, H3>,
    h4: Hoc<H3, H4>,
    h5: Hoc<H4, H5>,
    h6: Hoc<H5, H6>,
    h7: Hoc<H6, H7>
  ): ComponentType<H7>;
  <H1, H2, H3, H4, H5, H6, H7, H8>(
    h1: Hoc<P, H1>,
    h2: Hoc<H1, H2>,
    h3: Hoc<H2, H3>,
    h4: Hoc<H3, H4>,
    h5: Hoc<H4, H5>,
    h6: Hoc<H5, H6>,
    h7: Hoc<H6, H7>,
    h8: Hoc<H7, H8>
  ): ComponentType<H8>;
  <H1, H2, H3, H4, H5, H6, H7, H8, H9>(
    h1: Hoc<P, H1>,
    h2: Hoc<H1, H2>,
    h3: Hoc<H2, H3>,
    h4: Hoc<H3, H4>,
    h5: Hoc<H4, H5>,
    h6: Hoc<H5, H6>,
    h7: Hoc<H6, H7>,
    h8: Hoc<H7, H8>,
    h9: Hoc<H7, H9>
  ): ComponentType<H9>;
  <H1, H2, H3, H4, H5, H6, H7, H8, H9, H10>(
    h1: Hoc<P, H1>,
    h2: Hoc<H1, H2>,
    h3: Hoc<H2, H3>,
    h4: Hoc<H3, H4>,
    h5: Hoc<H4, H5>,
    h6: Hoc<H5, H6>,
    h7: Hoc<H6, H7>,
    h8: Hoc<H7, H8>,
    h9: Hoc<H8, H9>,
    h10: Hoc<H9, H10>
  ): ComponentType<H10>;
  <H1, H2, H3, H4, H5, H6, H7, H8, H9, H10, H11>(
    h1: Hoc<P, H1>,
    h2: Hoc<H1, H2>,
    h3: Hoc<H2, H3>,
    h4: Hoc<H3, H4>,
    h5: Hoc<H4, H5>,
    h6: Hoc<H5, H6>,
    h7: Hoc<H6, H7>,
    h8: Hoc<H7, H8>,
    h9: Hoc<H8, H9>,
    h10: Hoc<H9, H10>,
    h11: Hoc<H10, H11>
  ): ComponentType<H11>;
  <H1, H2, H3, H4, H5, H6, H7, H8, H9, H10, H11, H12>(
    h1: Hoc<P, H1>,
    h2: Hoc<H1, H2>,
    h3: Hoc<H2, H3>,
    h4: Hoc<H3, H4>,
    h5: Hoc<H4, H5>,
    h6: Hoc<H5, H6>,
    h7: Hoc<H6, H7>,
    h8: Hoc<H7, H8>,
    h9: Hoc<H8, H9>,
    h10: Hoc<H9, H10>,
    h11: Hoc<H10, H11>,
    h12: Hoc<H11, H12>
  ): ComponentType<H12>;
}

export default function<P>(Component: ComponentType<P>): Compose<P> {
  return (...hocs: Array<Hoc<any, any>>) =>
    hocs.reduce((prev, hoc) => hoc(prev), Component);
}
