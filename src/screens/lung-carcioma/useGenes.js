import { useQuery } from "react-query";

export const useGenes = () => {
  return useQuery(
    "genes",
    () =>
      fetch(process.env.REACT_APP_ENDPOINT)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Something happen");
          }
          return res.json();
        })
        .then(({ data, ...rest }) => ({ ...rest, data: data.slice(0, 5) }))
        .then(({ data, ...rest }) => ({
          ...rest,
          data: data.sort(
            (a, b) => b.association_score.overall - a.association_score.overall
          ),
        }))
        .catch((error) => {
          return { graphQLErrors: [{ message: error.message }] };
        }),
    {
      retry: false,
    }
  );
};
