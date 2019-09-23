fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=...`)
    .then((response) => response.json())
    .then((json) => {
    this.setState(
    {
    forecast: {
    main: json.weather[0].main,
    description: json.weather[0].description,
    temp: json.main.temp
    }
    });
    })
    .catch((error) => {
    console.warn(error);
    });
    }
   
    componentDidMount = () => this.fetchData()