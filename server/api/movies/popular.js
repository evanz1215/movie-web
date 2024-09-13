export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { TMDB_API_SECRET } = config;

  const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular";
  const popularSeriesUrl = "https://api.themoviedb.org/3/tv/popular";

  const popularMovies = await $fetch(popularMoviesUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_SECRET}`,
    },
  });

  const popularSeries = await $fetch(popularSeriesUrl, {
    method: "GET",
    headers: {
      accept: "application",
      Authorization: `Bearer ${TMDB_API_SECRET}`,
    },
  });

  return {
    popularMovies,
    popularSeries,
  };
});
