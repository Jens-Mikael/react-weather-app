const searchMovies = async (title) => {
    //call the api
    const response = await fetch(`${API_URL}&s=${title}`);

    //once we get the data
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);