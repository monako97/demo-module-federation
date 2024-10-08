import dayjs, { Dayjs, extend, isDayjs, locale } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekday from 'dayjs/plugin/weekday';

import 'dayjs/locale/zh-cn';

extend(weekday);
extend(localeData);
extend(relativeTime);
locale('zh-cn');

export { Dayjs, isDayjs, localeData };
export default dayjs;
