import { expect, test } from "vitest";

import { parse } from '../src'

test("init", () => {
  expect(1 + 1).toEqual(2);
});

test("hapy path", () => {
  const rawArrs1 = [
    "--type",
    "foo",
    "bar"
  ]
  expect(parse(rawArrs1)).toEqual({
    args: [
      "bar"
    ],
    options: {
      "type": "foo"
    }
  })

  const rawArrs2 = [
    "--type",
    "foo",
    "name",
    "--bar",
    "bar"
  ]
  expect(parse(rawArrs2)).toEqual({
    args: ["name"],
    options: {
      "type": "foo",
      "bar":"bar"
    }
  })
})
