import dayjs, { Dayjs, extend, isDayjs, locale } from 'dayjs';
import 'dayjs/locale/zh-cn';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekday from 'dayjs/plugin/weekday';

extend(weekday);
extend(localeData);
extend(relativeTime);
locale('zh-cn');

export { Dayjs, isDayjs, localeData };
export default dayjs;
