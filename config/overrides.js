const path = require("path");
// prettier-ignore
module.exports = function override(config, env) {


 
	config.resolve.alias = {
		...config.resolve.alias,
		"@":                      path.join(__dirname, "..", "src"),
		"@/components":           path.join(__dirname, "..", "src/components"),
		"@/components/electrons": path.join(__dirname, "..", "src/components/electrons"),
		"@/components/atoms":     path.join(__dirname, "..", "src/components/atoms"),
		"@/components/molecules": path.join(__dirname, "..", "src/components/molecules"),
		"@/components/organisms": path.join(__dirname, "..", "src/components/organisms"),
		"@/components/pages":     path.join(__dirname, "..", "src/components/pages"),
		"@/components/templates": path.join(__dirname, "..", "src/components/templates"),
  "@/data":                 path.join(__dirname, "..", "src/data"),
  "@/styles":               path.join(__dirname, "..", "src/styles"),
	};
	return config;
};
