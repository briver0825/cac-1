import { test, expect } from "vitest";
import { cac } from "../src";

test.todo("basic-usage", () => {
  const cli = cac();

  cli.option("--type <type>", "Choose a project type", {
    default: "node",
  });

  // process.argv
  // 前2个值不需要关心
  const parsed = cli.parse(["", "", "--type", "foo"]);
  expect(parsed).toEqual({
    args: [],
    options: {
      type: "foo",
      "--": [],
    },
  });
});
