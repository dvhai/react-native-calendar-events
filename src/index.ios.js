import { NativeModules, processColor } from "react-native";

const CalendarEvents = NativeModules.CalendarEvents;

export default {
  checkPermissions(readOnly = false) {
    // readOnly is ignored on iOS, the platform does not support it.
    return CalendarEvents.checkPermissions();
  },
  requestPermissions(readOnly = false) {
    // readOnly is ignored on iOS, the platform does not support it.
    return CalendarEvents.requestPermissions();
  },

  fetchAllEvents(startDate, endDate, calendars = []) {
    return CalendarEvents.fetchAllEvents(startDate, endDate, calendars);
  },

  findCalendars() {
    return CalendarEvents.findCalendars();
  },

  saveCalendar(options = {}) {
    return CalendarEvents.saveCalendar({
      ...options,
      color: options.color ? processColor(options.color) : undefined,
    });
  },

  removeCalendar(id) {
    return CalendarEvents.removeCalendar(id);
  },

  findEventById(id) {
    return CalendarEvents.findEventById(id);
  },

  saveEvent(title, details, options = {}) {
    return CalendarEvents.saveEvent(title, details, options);
  },

  removeEvent(id, options = { futureEvents: false }) {
    return CalendarEvents.removeEvent(id, options);
  },

  removeFutureEvents(id, options = { futureEvents: true }) {
    return CalendarEvents.removeEvent(id, options);
  },
};
