const http = require("http"),
  url = require("url"),
  qs = require("querystring"),
  fs = require("fs");

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method == "POST") {
    var result = "";
    var urlName = url.parse(req.url).pathname;
    req.addListener("data", (chunk) => {
      result += chunk;
    });

    req.on("end", () => {
      var user = qs.parse(result);
      if (user.username) {
        fs.readFile("db.txt", "utf-8", (err, data) => {
          if (!err) {
            console.log("reading db");
            if (!data) {
              if (urlName == "/login") {
                res.end("no user");
                console.log("no user");
                return;
              }

              if (urlName == "/register") {

                var arr = [];
                var obj = {};

                obj.username = user.username;
                obj.password = user.password;
                arr.push(obj);

                fs.writeFileSync("db.txt", JSON.stringify(arr),
                  "utf-8");
                res.end("regist sucessfuly");
                return;
              }
            } else {
              console.log("user exist");
              var arr = JSON.parse(data);
              for (var i = 0; i < arr.length; i++) {
                var obj = arr[i];
                if (obj.username == user.username) {
                  if (urlName == "/login") {
                    if (obj.password == user.password) {
                      res.end("login success!");
                      return;
                    } else {
                      res.end("password wrong");
                      return;
                    }

                  }
                  if (urlName == "/register") {
                    res.end("user exist!!!");
                    return;
                  }

                }
              }

              if (urlName == "/login") {
                res.end("no user");
                return;
              }
              if (urlName == "/register") {
                var obj = {};
                obj.username = user.username;
                obj.password = user.password;
                arr.push(obj);
                fs.writeFileSync("db.txt", JSON.stringify(arr), "utf-8");
                res.end("regist sucessfuly");
                return;

              }
            }

          } else {
            console.log("fail read file");
          }
        });

      }

    });

  } else {
    res.end("wrong");
  }
});
