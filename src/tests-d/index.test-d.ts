import { expectType } from "tsd";
import {
  ComponentType,
  FunctionComponent,
  Component,
  ComponentClass
} from "react";
import withHocs from "..";

interface IProps {
  text: string;
  value: number;
}

declare const FC: FunctionComponent<IProps>;
declare class CC extends Component<IProps> {}

expectType<ComponentType<IProps>>(withHocs(FC)());
expectType<ComponentType<IProps>>(withHocs(CC)());

declare const hoc1: <P, F extends keyof P>(
  f: F
) => (c: ComponentType<P>) => FunctionComponent<Omit<P, F>>;

declare const hoc2: <P>(c: ComponentType<P>) => ComponentClass<P>;

expectType<ComponentType<{ text: string }>>(withHocs(FC)(hoc1("value")));
expectType<ComponentType<{ text: string }>>(withHocs(FC)(hoc1("value"), hoc2));
expectType<ComponentType<{ text: string }>>(
  withHocs(FC)(hoc1("value"), hoc2, hoc2, hoc2)
);
