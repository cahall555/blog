const { exec } = require("child_process");
const Metalsmith = require("metalsmith");
const layouts = require("@metalsmith/layouts");
const markdown = require("@metalsmith/markdown");
const collections = require("@metalsmith/collections");
const handelbars = require("metalsmith-handlebars-layouts");
const dateFormatter = require("metalsmith-date-formatter");
const permalinks = require("@metalsmith/permalinks");

Metalsmith(__dirname)
  .use(
    collections({
      projects: {
        title: "latest project",
        sortBy: "publishDate",
        reverse: true,
        pattern: "**/*.md",
        metadata: {
          slug: "projects",
        },
      },
    })
  )
  .use(layouts())
  .use(
    handelbars({
      preventIndent: true,
    })
  )

  .use(permalinks({
	  pattern: ':title'
	 })
    )
  .use(markdown())

  .use(dateFormatter())

  .build(function (err) {
    if (err) throw err;
    exec(
      "npx tailwindcss -i ./src/css/main.css -o ./build/output.css",
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
  });
