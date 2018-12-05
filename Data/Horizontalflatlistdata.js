var horizontalStatus = {
    rainy:{
        ios : "ios-rainy",
        android : "md-rainy"
    },
    cloud:{
        ios : "ios-cloud",
        android : "md-cloud"
    },
    sunny:{
        ios : "ios-sunny",
        android : "md-sunny"
    },
    thunderstorm:{
        ios : "ios-thunderstorm",
        android : "md-thunderstorm"
    },
    cloudynight:{
        ios : "ios-cloudy-night",
        android : "md-cloudy-night"
    },
}
var horizontalflatlistdata = [
    {
        hour: "1 Am",
        status: horizontalStatus.rainy,
        degress: 57
    },
    {
        hour: "2 Am",
        status: horizontalStatus.cloud,
        degress: 12
    },
    {
        hour: "3 Am",
        status: horizontalStatus.sunny,
        degress: 35
    },
    {
        hour: "5 Am",
        status: horizontalStatus.thunderstorm,
        degress: 13
    },
    {
        hour: "11 Am",
        status: horizontalStatus.cloudynight,
        degress: 23
    },
];
export {horizontalflatlistdata};
export {horizontalStatus};