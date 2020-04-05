import path from "path"
import { GatsbyNode } from "gatsby"

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(".", "src"),
        "@@": path.resolve("."),
        "types": path.resolve(".", "types"),
        ...(stage.startsWith("develop") ? {
          "react-dom": "@hot-loader/react-dom",
        }: {}),
      },
      extensions: [".ts", ".tsx"],
    },
  })
}
