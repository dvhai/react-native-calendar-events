import { NativeModules, processColor } from "react-native";

const CalendarEvents = NativeModules.CalendarEvents;

export default {
  async checkPermissions(readOnly = false) {
    return CalendarEvents.checkPermissions(readOnly);
  },
  async requestPermissions(readOnly = false) {
    return CalendarEvents.requestPermissions(readOnly);
  },

  async fetchAllEvents(startDate, endDate, calendars = []) {
    return CalendarEvents.findAllEvents(startDate, endDate, calendars);
  },

  async findCalendars() {
    return CalendarEvents.findCalendars();
  },

  async saveCalendar(options = {}) {
    return CalendarEvents.saveCalendar({
      ...options,
      color: options.color ? processColor(options.color) : undefined,
    });
  },

  async removeCalendar(id) {
    return CalendarEvents.removeCalendar(id);
  },

  async findEventById(id) {
    return CalendarEvents.findById(id);
  },

  async saveEvent(title, details, options = { sync: false }) {
    return CalendarEvents.saveEvent(title, details, options);
  },

  async removeEvent(id, options = { sync: false }) {
    return CalendarEvents.removeEvent(id, options);
  },

  async uriForCalendar() {
    return CalendarEvents.uriForCalendar();
  },

  openEventInCalendar(eventID) {
    CalendarEvents.openEventInCalendar(eventID);
  },
};
