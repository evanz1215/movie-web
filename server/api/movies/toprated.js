export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { TMDB_API_SECRET } = config;

  const topRatedMoviesUrl = "https://api.themoviedb.org/3/movie/top_rated";
  const topRatedSeriesUrl = "https://api.themoviedb.org/3/tv/top_rated";

  const topRatedMovies = await $fetch(topRatedMoviesUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_SECRET}`,
    },
  });

  const topRatedSeries = await $fetch(topRatedSeriesUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_SECRET}`,
    },
  });

  return {
    topRatedMovies,
    topRatedSeries,
  };
});
