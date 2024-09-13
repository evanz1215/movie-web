export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  const { TMDB_API_SECRET } = config;
  const movieSearchUrl = "https://api.themoviedb.org/3/search/movie";
  const seriesSearchUrl = "https://api.themoviedb.org/3/search/tv";

  const useQuery = getQuery(event);
  const { searchTerm } = useQuery;

  const movies = await $fetch(movieSearchUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_SECRET}`,
    },
    query: {
      query: searchTerm,
    },
  });

  const series = await $fetch(seriesSearchUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_SECRET}`,
    },
    query: {
      query: searchTerm,
    },
  });

  return {
    movies,
    series,
  };
});
