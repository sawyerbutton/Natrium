"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const rootPath = path.join(__dirname, "..", "..", "..");
const packageJsonPath = path.join(rootPath, "package.json");
const angularJsonPath = path.join(rootPath, "angular.json");
console.log(angularJsonPath);
fs.exists(angularJsonPath, (exists) => {
    if (!exists) {
        console.error("Natrium : angular.json file is not exist , are your sure this is an angular v6+ project ?");
    }
    else {
        fs.readFile(packageJsonPath, "utf8", (err, file) => {
            if (err) {
                console.log("Natrium : " + err.message);
                console.error("Natrium : package.json file is not exist , are your sure this is an angular project ?");
            }
            else {
                const config = JSON.parse(file.toString());
                delete config.scripts["natrium"];
                fs.writeFileSync(packageJsonPath, JSON.stringify(config, undefined, 2));
                console.log("Natrium uninstall configuration is completed . Good bye !");
            }
        });
    }
});
//# sourceMappingURL=post-uninstall.js.map