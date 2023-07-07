export class GraphQLClient {
  constructor() {
    this.basePoint = "https://blog-backend-blush.vercel.app/graphql";
  }

  /**
   * @param {Object} options
   * @param {string} options.query el query (.gql)
   * @param {Record<string, any>} [options.variables] las variables definadas en el query
   * @param {string} [options.operationName] nombre de la operación (si se genera de manera programática)
   * @return {Promise<{ data: any, errors: [any]}>}
   */
  async fetch(options) {
    const req = fetch(this.basePoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options || {}),
    });
    const res = await req;
    if (!res.ok) {
      throw await res.json();
    }
    return res.json();
  }
}
