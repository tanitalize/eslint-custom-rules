module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "enforce PascalCase Construct id",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: "code",
  },
  create: function (context) {
    return {
      NewExpression: function (node) {
        if (node.callee.type === "MemberExpression" && node.callee.object.name.startsWith("aws_")) {
          const idNode = node.arguments[1];
          if (!idNode) return;
          const id = idNode.value;
          // idがPascalCaseでない場合にチェック
          if (idNode.type == "Literal" && !id.match(/^[A-Z][a-zA-Z0-9]*$/)) {
            context.report({
              node: idNode,
              message: "Construct id is not in PascalCase.",
              fix: function (fixer) {
                // idをPascalCaseに変換
                const pascalId = id.replace(/(?:^|-)([a-z0-9])/g, (_, c) => c.toUpperCase());
                return fixer.replaceText(idNode, `'${pascalId}'`);
              },
            });
          }
        }
      },
    };
  },
};
