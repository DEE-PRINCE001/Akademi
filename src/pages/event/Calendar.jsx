import React from 'react';
import Button from '../../components/labels/Button'
import { Plus } from 'lucide-react';
import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    format
} from 'date-fns';


const MOCK_EVENTS = {
    '2021-06-02': { dots: ['accent', 'primary', 'secondary'] },
    '2021-06-06': { variant: 'secondary-fill', avatars: ['grey-200', 'grey-200'], extraAvatars: '7+' },
    '2021-06-10': { variant: 'primary-fill', textLabel: 'Karen, 2+', barColor: 'bg-amber-400' },
    '2021-06-15': { borderVariant: 'primary-thick', avatars: ['grey-200', 'grey-200'], extraAvatars: '2+' },
    '2021-06-18': { borderVariant: 'primary-thick', textLabel: 'Tony, 2+', barColor: 'bg-secondary' },
    '2021-06-20': { borderVariant: 'accent', dots: ['primary', 'secondary', 'secondary'] },
    '2021-06-24': { borderVariant: 'primary-thick', dots: ['primary', 'secondary', 'accent'] },
    '2021-06-29': { borderVariant: 'primary-thick', textLabel: 'Johnny', barColor: 'bg-accent' },
};

export default function CustomCalendar() {
    // Targeting January 2021 to match your visual reference perfectly
    const currentMonth = new Date(2021, 5, 1);

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);

    // Grid calculates from Monday (1) through Sunday (7)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const days = eachDayOfInterval({ start: startDate, end: endDate });
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="flex-1 min-h-0 flex flex-col min-w-150 w-full overflow-x-auto max-w-6xl p-3 md:p-6 mx-auto bg-white rounded-lg">
            {/* Header Controls */}
            <div className="flex items-center justify-between mb-7 min-w-0 overflow-x-auto">
                <div className='text-primary-text font-bold text-xl md:text-2xl'>Calendar</div>
                <div className='flex space-x-2'>

                    <Button rightIcon={<div className='w-0 h-0 border-l-6 border-r-6 border-t-8 
                            border-l-transparent border-r-transparent border-t-primary'></div>}
                        onClick={() => alert("Cannot change month yet, Calm down")}
                        size={"p-2 md:p-2.5 w-30 md:w-35 text-xs"}>January</Button>
                    <Button rightIcon={<div className='w-0 h-0 border-l-6 border-r-6 border-t-8 
                            border-l-transparent border-r-transparent border-t-primary'></div>}
                        onClick={() => alert("Cannot change year yet, Calm down")}
                        
                        size={"p-2 md:p-2.5 w-30 md:w-35 text-xs"}>2021</Button>

                    <Button colors={"bg-primary border-primary text-white hover:bg-primary-text hover:border-primary-text"}
                        leftIcon={<Plus className='text-white' strokeWidth={5} size={15} />}
                        className={"hidden md:flex"}
                        onClick={() => alert("Cannot add new teacher yet, do with what you have")}
                    >New Teacher</Button>
                </div>
            </div>

            {/* Weekday Labels Grid Column Row */}
            <div className="grid grid-cols-7 gap-4 mb-4 text-center">
                {weekDays.map((day) => (
                    <div>

                    <div key={day} className="hidden md:flex md:justify-center text-xs font-normal text-grey-300 text-center gap-4 w-full">
                        {day}
                    </div>
                    <div key={day} className="md:hidden text-xs font-normal text-grey-300 text-center gap-4 w-full">
                        {day.substring(0,3)}
                    </div>
                    </div>
                ))}
            </div>


            <div className="flex-1 relative min-h-0 grid grid-cols-7 gap-4 overflow-auto scrollbar-none">

                {days.map((day) => {
                    const dateKey = format(day, 'yyyy-MM-dd');
                    const isCurrentMonth = isSameMonth(day, currentMonth);
                    const dayEvents = MOCK_EVENTS[dateKey];

                    
                    let cardClassName = "min-h-20 px-3 pt-2 pb-4 rounded-xl border transition-all flex flex-col justify-between ";

                    if (!isCurrentMonth) {
                        // Muted style 
                        cardClassName += " bg-grey-300/10 border-grey-300 text-grey-300";
                    } else if (dayEvents?.variant === 'secondary-fill') {
                        cardClassName += " bg-secondary border-secondary text-white";
                    } else if (dayEvents?.variant === 'primary-fill') {
                        cardClassName += " bg-primary border-white border-2 ring-2 ring-primary text-white";
                    } else {
                        cardClassName += "bg-white text-primary-text";
                        // Apply border modifier accents
                        if (dayEvents?.borderVariant === 'primary-thick') cardClassName += " border-primary-text border-2";
                        else if (dayEvents?.borderVariant === 'accent') cardClassName += " border-accent border-2";
                        else cardClassName += " border-2 border-grey-300";
                    }

                    return (
                        <div key={dateKey} className={cardClassName}>
                            {/* Day Numeric Identifier */}
                            <span className={`text-lg font-bold ${!isCurrentMonth ? 'text-grey-300' : ''}`}>
                                {format(day, 'd')}
                            </span>


                            <div className="mt-auto pt-2">
                                {/* Variant 1: Multi-dot Notification Badges */}
                                {dayEvents?.dots && (
                                    <div className="flex justify-between items-center">
                                        {dayEvents.dots.map((color, i) => (
                                            <span key={i} className={`w-3 h-3 rounded-full bg-${color}`} />
                                        ))}
                                    </div>
                                )}

                                {/* Variant 2: Overlapping Profiles Circle Collection */}
                                {dayEvents?.avatars && (
                                    <div className="flex items-center -space-x-2">
                                        {dayEvents.avatars.map((color, i) => (
                                            <span key={i} className={`w-5 h-5 rounded-full border border-white/20 bg-${color}`} />
                                        ))}
                                        {dayEvents.extraAvatars && (
                                            <span className="text-[10px] w-5 h-5 px-0.5 py-0.5 rounded-full min-w-[24px] text-center bg-primary-text border border-white text-white">
                                                {dayEvents.extraAvatars}
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* Variant 3: Text Event Blocks with Color Indicators */}
                                {dayEvents?.textLabel && (
                                    <div className="flex items-center justify-start gap-1 w-full text-left">
                                        <span className={`w-0.5 h-5 rounded-full shrink-0 ${dayEvents.barColor}`} />
                                        <span className={`text-[10px] pb-1 font-cairo truncate ${dayEvents.variant ? 'text-white' : 'text-grey-300'}`}>
                                            {dayEvents.textLabel}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}