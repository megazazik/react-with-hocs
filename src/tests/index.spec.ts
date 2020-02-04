import test from "tape";
import { spy } from "sinon";
import withHocs from "..";

test("Compose hocs. Without hocs", t => {
  const comp = () => null;

  t.strictEqual(typeof withHocs(comp), "function");
  t.strictEqual(withHocs(comp)(), comp);

  t.end();
});

test("Compose hocs. One hoc", t => {
  const resComp = () => null;
  const comp = () => null;
  const hoc1 = spy(c => resComp);

  t.strictEqual(withHocs(comp)(hoc1), resComp);
  t.strictEqual(hoc1.args[0][0], comp);

  t.end();
});

test("Compose hocs. Two hoc", t => {
  const comp = () => null;

  const res1 = () => null;
  const hoc1 = spy(c => res1);

  const res2 = () => null;
  const hoc2 = spy(c => res2);

  t.strictEqual(withHocs(comp)(hoc1, hoc2), res2);
  t.strictEqual(hoc1.args[0][0], comp);
  t.strictEqual(hoc2.args[0][0], res1);

  t.end();
});
