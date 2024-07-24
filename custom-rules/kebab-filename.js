module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "enforce kebab-case filenames",
      category: "Stylistic Issues",
      recommended: false,
    },
  },
  create: function (context) {
    return {
      Program: function (node) {
        const filename = context.getFilename();
        if (filename === "<input>" || filename === "<text>") return; // ファイル名が取得できない場合はスキップ
        const baseName = filename.split("/").pop();
        if (!baseName.match(/^[a-z0-9\.\-]+\.tsx?$/)) {
          context.report({
            node,
            message: "Filename is not in kebab-case.",
          });
        }
      },
    };
  },
};
