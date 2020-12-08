import fs from "fs";
import path from "path";

const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);

global.document.body.innerHTML = html.toString();
