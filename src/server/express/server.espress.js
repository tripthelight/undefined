import dotenv from "dotenv";
dotenv.config();
import path from "path";
import * as url from "url";
// express
import express from "express";
import PAGES from "../../client/json/files.json" assert { type: "json" };

/** ==============================
 * VARIABLE
 */
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const APP = express();
const PORT = process.env.SERVER_PORT || 5000;
const DIST_PATH = "../../../dist";
const ROUTE_PATH = "../../../dist/views";

/** ==============================
 * MIDDLEWARE
 */
APP.use(express.static(path.join(__dirname, "dist")));
APP.use("/static", express.static("dist/assets"));
APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));

/** ==============================
 * APIs
 */
PAGES.html.map((name) => {
  return APP.get(name === "index" ? "/" : `/${name}`, (req, res) => {
    const fileUrl = name === "index" ? "../../../dist" : `../../../dist/view/${name}/`;
    const pathName = path.join(__dirname, fileUrl);
    fs.readdir(pathName, (err, files) => {
      if (err) {
        console.error(err);
        return res.status(500);
      }
      const filename = files.find((file) => path.extname(file) === ".html");
      res.sendFile(path.join(__dirname, fileUrl, filename));
    });
  });
});
// 404 exception handling
// APP.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, ROUTE_PATH, "error/404.html"));
// });
APP.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});
APP.use((err, req, res, next) => {
  res.status(err.status || 500);
  if (err.status === 404) {
    res.sendFile(path.join(__dirname, ROUTE_PATH, "error/404.html"));
  } else {
    res.sendFile(path.join(__dirname, ROUTE_PATH, "error/500.html"));
  }
});

/** ==============================
 * LISTEN
 */
APP.listen(PORT, () => {
  console.log(`Web Server is running\nhttp://localhost:${PORT}`);
});
