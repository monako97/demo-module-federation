import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

export { Dayjs, isDayjs, localeData } from 'dayjs';

export default dayjs;
