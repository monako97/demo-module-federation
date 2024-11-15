import * as dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekday from 'dayjs/plugin/weekday';

import 'dayjs/locale/zh-cn';

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

export * from 'dayjs';
export default dayjs;
