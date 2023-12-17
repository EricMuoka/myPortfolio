const images = {
    Clear: require('../../assets/clear.jpg'),
    Hail: require('../../assets/hail.jpg'),
    'Heavy cloudy': require('../../assets/eric.jpg'),
    'Light cloudy': require('../../assets/eric.jpg'),
    'Heavy rain': require('../../assets/eric.jpg'),
    'Light rain': require('../../assets/eric.jpg'),
    Showers: require('../../assets/eric.jpg'),
    Snow: require('../../assets/eric.jpg'),
    Thunder: require('../../assets/eric.jpg'),
    Sleet: require('../../assets/eric.jpg'),
};

export default weather => images[weather]