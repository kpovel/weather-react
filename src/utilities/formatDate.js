import {format} from "date-fns";

export function formatTime(date) {
    return `${format(date * 1000, "HH:mm")}`;
}