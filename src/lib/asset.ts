/** Prefixa caminhos de /public com o basePath (vazio quando o site fica na raiz). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
