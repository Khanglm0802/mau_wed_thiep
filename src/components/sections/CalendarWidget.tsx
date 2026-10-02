import React from 'react';
import { useConfig } from '../../context/ConfigContext';
import { generateMonthlyDays } from '../../utils/calendar';

export const CalendarWidget: React.FC = () => {
  const { config } = useConfig();
  const { calendar } = config.event;

  const days = generateMonthlyDays(calendar.year, calendar.month, calendar.highlightDay);
  const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

  return (
    <div className="relative p-3.5 min-[380px]:p-5 sm:p-7 bg-white/85 border border-rosegold/40 rounded-3xl backdrop-blur-xl shadow-[0_10px_35px_rgba(221,167,165,0.22)]">
      {/* Calendar Header */}
      <div className="flex items-center justify-between pb-3 mb-3.5 sm:mb-4 border-b border-rose-100">
        <div className="font-serif italic text-xs min-[380px]:text-sm sm:text-base font-bold text-rosegold-dark flex items-center gap-1.5 sm:gap-2">
          <span>🌸</span>
          <span className="truncate max-w-[170px] min-[380px]:max-w-[210px] sm:max-w-none">
            {calendar.title || `THÁNG ${calendar.month} // ${calendar.year}`}
          </span>
        </div>
        <div className="font-serif italic text-[11px] sm:text-xs text-poetic-muted flex-shrink-0">
          Ngày Đặc Biệt: <span className="text-rose-500 font-bold">{calendar.highlightDay}</span>
        </div>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-1 text-center font-serif font-bold text-[11px] sm:text-sm text-poetic-muted mb-2">
        {weekDays.map((wd, i) => (
          <div key={i} className={`py-0.5 sm:py-1 ${i >= 5 ? 'text-rose-500' : ''}`}>
            {wd}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-1.5 text-center font-serif text-xs min-[380px]:text-sm">
        {days.map((item, index) => {
          if (!item.day) {
            return <div key={index} className="aspect-square opacity-0" />;
          }

          if (item.isHighlight) {
            return (
              <div
                key={index}
                className="relative aspect-square font-bold text-white bg-gradient-to-tr from-rose-400 via-rose-500 to-rose-400 rounded-full shadow-[0_4px_16px_rgba(244,63,94,0.35)] flex items-center justify-center transform scale-105"
              >
                <span>{item.day}</span>
                <span className="absolute -top-1 -right-1 text-[9px] min-[380px]:text-[10px]">🌸</span>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="aspect-square text-poetic-text hover:bg-rose-50 rounded-full transition-colors flex items-center justify-center cursor-default"
            >
              {item.day}
            </div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <div className="mt-3.5 sm:mt-4 pt-3 border-t border-rose-100 flex items-center justify-between text-[11px] sm:text-xs font-serif italic text-poetic-muted">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-400" />
          <span>Ngày Diễn Ra Sự Kiện</span>
        </div>
        <span className="text-rose-500 font-semibold">{config.event.timeString || '10:45 AM'}</span>
      </div>
    </div>
  );
};
