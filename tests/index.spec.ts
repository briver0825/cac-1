import { test } from "vitest";

test.todo("basic-usage", () => {
  const cli = require("cac")();

  cli.option("--type <type>", "Choose a project type", {
    default: "node",
  });

  const parsed = cli.parse();

  console.log(JSON.stringify(parsed, null, 2));
});
