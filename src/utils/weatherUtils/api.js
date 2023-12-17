const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
const moviesUrl = 'https://reactnative.dev/movies.json';

export const fetchMovies = async () => {
    try {
        const response = await fetch(moviesUrl);
        console.log('Movie API response:', response)

        if (!response.ok) {
            throw new Error(`Movies API error: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        console.log('Movies:', json)
        return json.movies;
    } catch (error) {
        console.error(error);
    }
}

const processContacts = contact => ({
    name: `${contact.name.first} ${contact.name.last}`,
    phone: contact.phone
})

export const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=50&nat=us');
    const { results } = response.json();
    return results.map(processContacts);
}

export const fetchTodos = async () => {
    try {
        const response = await fetch(todosUrl);
        console.log('Todos API Response:', response);

        if (!response.ok) {
            throw new Error(`Todos API error: ${response.status} ${response.statusText}`);
        }

        const todos  = await response.json();
        console.log('Todos:', todos)
        return todos;
    }catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
}

export const fetchPosts = async () => {
    try {
        const response = await fetch(postsUrl);
        console.log('Posts API Response:', response);

        if (!response.ok) {
            throw new Error(`Posts API error: ${response.status} ${response.statusText}`);
        }

        const posts  = await response.json();
        console.log('Posts:', posts)
        return posts;
    }catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export const fetchLocationId = async city => {
    const key = '2943c0149556f95f4eb873cbeddcc966';
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
        console.log('Location API Response:', response);

        if (!response.ok) {
            throw new Error(`Location API error: ${response.status} ${response.statusText}`);
        }

        const locations = await response.json();
        console.log('Locations:', locations);
        
        const locationId = locations.id;
        return locationId;
    }catch (error) {
        console.error('Error fetching location ID:', error);
        throw error;
    }
};

export const fetchWeather = async locationId => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?id=${locationId}&appid=${key}`,
        );
        console.log('Weather API response:', response);

        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status} ${response.statusText}`);
        }
        
        const weatherData = await response.json();
        console.log('Weather Data:', weatherData);

        const weather = weatherData.weather[0].description;
        const temperature = weatherData.main.temp;
    
        return {
            location: weather.name,
            weather,
            temperature,
        };
    }   catch (error) {
        console.error("Error fetching weather:", error);
        throw error;
    }
};

export const login = async (userName, password) => {
    const response = await fetch('http://localhost:8000', {
        method: 'POST',
        headers: {'contents-type': 'application/json'},
        body: JSON.stringify({userName: this.state.userName, password: this.state.password}),
    })

    if (response.ok) {
        this.props.navigation.navigate('Home')
    }
}