import ApolloClient, { gql } from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://demo.vendure.io/shop-api",
});

export const fetchData = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          products {
            items {
              name
              featuredAsset {
                preview
              }
            }
          }
        }
      `,
    });
    const response = data.products.items;
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
