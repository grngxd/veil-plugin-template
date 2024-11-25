// build.ts
import { build } from "esbuild";
import * as fs from "node:fs";
import * as path from "node:path";

const packagesDir = path.resolve(__dirname, "../packages");
const outDir = path.resolve(__dirname, "../out");
const entryExtensions = [".ts", ".tsx", ".js", ".jsx"];

fs.readdirSync(packagesDir).forEach((dir) => {
  const pkgPath = path.join(packagesDir, dir);
  const outPath = path.join(outDir, dir);

  if (fs.lstatSync(pkgPath).isDirectory()) {
    let entryFile: string | null = null;

    for (const ext of entryExtensions) {
      const filePath = path.join(pkgPath, `index${ext}`);
      if (fs.existsSync(filePath)) {
        entryFile = filePath;
        break;
      }
    }

    if (!entryFile) {
      console.warn(`No entry file found for package: ${dir}`);
      return;
    }

    build({
      entryPoints: [entryFile],
      outfile: path.join(outPath, "index.js"),
      bundle: true,
      platform: "node",
      target: "es2020",
      jsxFactory: "h",
      jsxFragment: "Fragment",
      format: "esm",
    })
      .then(() => {
        console.log(`Built ${entryFile} to ${path.join(outPath, "index.js")}`);
        // Copy meta.json if exists
        const metaSrc = path.join(pkgPath, "meta.json");
        const metaDest = path.join(outPath, "meta.json");
        if (fs.existsSync(metaSrc)) {
          fs.copyFileSync(metaSrc, metaDest);
          console.log(`Copied meta.json for ${dir}`);
        }
      })
      .catch((error) => {
        console.error(`Error building package ${dir}:`, error);
        process.exit(1);
      });
  }
});