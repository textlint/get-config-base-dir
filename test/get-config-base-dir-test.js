// MIT © 2017 azu
"use strict";
const assert = require("assert");
const path = require("path");
const { TextLintCore } = require("textlint");
const { getConfigBaseDir } = require("../src/get-config-base-dir");
describe("get-config-base-dir", () => {
    it("should return undefined", () => {
        const textlint = new TextLintCore();
        let directoryPath;
        textlint.setupRules({
            report: context => {
                directoryPath = getConfigBaseDir(context);
                return {};
            }
        });
        return textlint.lintText("text").then(() => {
            assert.strictEqual(directoryPath, undefined);
        });
    });
    it("should return directory path", () => {
        const textlint = new TextLintCore({
            configFile: path.join(__dirname, "fixtures/.textlintrc")
        });
        let directoryPath;
        textlint.setupRules({
            report: context => {
                directoryPath = getConfigBaseDir(context);
                return {};
            }
        });
        return textlint.lintText("text").then(() => {
            assert.strictEqual(directoryPath, path.join(__dirname, "fixtures"));
        });
    });
});
