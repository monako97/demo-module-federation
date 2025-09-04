import * as dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekday from 'dayjs/plugin/weekday';

import 'dayjs/locale/zh-cn';

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

export {
  type ConfigType,
  extend,
  type FormatObject,
  isDayjs,
  locale,
  type ManipulateType,
  type OptionType,
  type OpUnitType,
  type PluginFunc,
  type QUnitType,
  type UnitType,
  type UnitTypeLong,
  type UnitTypeLongPlural,
  type UnitTypeShort,
  unix,
} from 'dayjs';
export default dayjs;
