const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..");

const expectedDirectories = [
  "iac",
  "docker",
  "ci_cd_pipelines",
  "cloud",
  "openstack",
  "kubernetes",
  "microservices",
  "observability",
  "sre",
  "automation_scripts",
  "knowledge_base",
  "security",
  "about_me",
];

test("README.md exists and is not empty", () => {
  const readmePath = path.join(REPO_ROOT, "README.md");
  assert.ok(fs.existsSync(readmePath), "README.md is missing from repository root");

  const readmeContent = fs.readFileSync(readmePath, "utf8").trim();
  assert.notEqual(readmeContent.length, 0, "README.md should not be empty");
});

test("all expected top-level portfolio directories exist", () => {
  for (const directory of expectedDirectories) {
    const dirPath = path.join(REPO_ROOT, directory);
    assert.ok(fs.existsSync(dirPath), `Missing directory: ${directory}`);
    assert.ok(fs.statSync(dirPath).isDirectory(), `${directory} must be a directory`);
  }
});

test("every expected top-level directory has a README.md", () => {
  for (const directory of expectedDirectories) {
    const readmePath = path.join(REPO_ROOT, directory, "README.md");
    assert.ok(fs.existsSync(readmePath), `Missing README.md in ${directory}`);
  }
});
