const fse = require("fs-extra");
const path = require("path");

async function main() {
  const baseDir = __dirname;
  const buildDir = path.resolve(
    baseDir,
    process.argv[2] == "dev" ? "../src" : "../dist"
  );

  const pkg = await fse.readJSON(path.resolve(baseDir, "../package.json"));

  // write out simplified package.json
  pkg.main = "index.js";
  pkg.types = "index.d.ts";
  delete pkg.scripts;
  delete pkg.devDependencies;
  delete pkg.style;
  delete pkg.eslintConfig;
  delete pkg.private;
  delete pkg.exports;
  await fse.writeJSON(path.join(buildDir, "package.json"), pkg, { spaces: 2 });

  await fse.copy(path.join(buildDir, "../.npmrc"), path.join(buildDir, ".npmrc"))
}

main().catch((err) => {
  process.stderr.write(`${err.message}\n`, () => process.exit(1));
});
