import {ForecastCell} from "./forecastCell";
import {tempToCelsius} from "../../../utilities/formattedTemp";
import {format} from "date-fns";

export function weatherForecastParams(list) {
    return list.map((item, i) => {
        const date = new Date(item.dt * 1000);
        const icon = item.weather[0].icon;
        
        const forecastDate = `${date.getDate()}  ${format(date, "LLL")}`;
        const forecastTime = `${format(date, "HH:mm")}`;
        const temperature = `Temperature: ${tempToCelsius(item.main.temp)}`;
        const feelsLike = `Feels like: ${tempToCelsius(item.main.feels_like)}`;
        const precipitation = item.weather[0].main;
        const precipitationIcon = `https://openweathermap.org/img/wn/${icon}.png`;
        
        return <ForecastCell key={i} forecastDate={forecastDate}
                             forecastTime={forecastTime}
                             temperature={temperature}
                             feelsLike={feelsLike}
                             precipitation={precipitation}
                             precipitationIcon={precipitationIcon}
        />;
    });
}