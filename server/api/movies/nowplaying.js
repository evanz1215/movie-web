export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { TMDB_API_SECRET } = config;

  const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";

  const nowPlayingMovies = await $fetch(nowPlayingUrl, {
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
    nowPlayingMovies,
  };
});
