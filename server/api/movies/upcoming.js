export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { TMDB_API_SECRET } = config;

  const upcomingMoviesUrl = "https://api.themoviedb.org/3/movie/upcoming";

  const upcomingMovies = await $fetch(upcomingMoviesUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_SECRET}`,
    },
    // query: {
    //   language: "en-US",
    //   page: 1,
    // },
  });

  return {
    upcomingMovies,
  };
});
