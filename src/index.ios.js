import { NativeModules, processColor } from "react-native";

const RNCalendarEvents = NativeModules.RNCalendarEvents;

export default {
  checkPermissions(readOnly = false) {
    // readOnly is ignored on iOS, the platform does not support it.
    return RNCalendarEvents.checkPermissions();
  },
  requestPermissions(readOnly = false) {
    // readOnly is ignored on iOS, the platform does not support it.
    return RNCalendarEvents.requestPermissions();
  },

  fetchAllEvents(startDate, endDate, calendars = []) {
    return RNCalendarEvents.fetchAllEvents(startDate, endDate, calendars);
  },

  findCalendars() {
    return RNCalendarEvents.findCalendars();
  },

  saveCalendar(options = {}) {
    return RNCalendarEvents.saveCalendar({
      ...options,
      color: options.color ? processColor(options.color) : undefined,
    });
  },

  removeCalendar(id) {
    return RNCalendarEvents.removeCalendar(id);
  },

  findEventById(id) {
    return RNCalendarEvents.findEventById(id);
  },

  saveEvent(title, details, options = {}) {
    return RNCalendarEvents.saveEvent(title, details, options);
  },

  removeEvent(id, options = { futureEvents: false }) {
    return RNCalendarEvents.removeEvent(id, options);
  },

  removeFutureEvents(id, options = { futureEvents: true }) {
    return RNCalendarEvents.removeEvent(id, options);
  },
};
