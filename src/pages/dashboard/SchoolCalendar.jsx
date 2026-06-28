import React, { useEffect, useRef, useState } from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSunday,
    addMonths,
    subMonths,
    isSameDay, 
    getYear,
    setMonth,
    setYear
} from 'date-fns';
import { ChevronDown } from 'lucide-react';

export const SchoolCalendar = ({ highlightedDays = {} }) => {
    // 1. Core State: Tracks the currently viewed month/year
    const [currentDate, setCurrentDate] = useState(new Date(2021, 2, 1));
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);


    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const currentSelectedYear = getYear(currentDate);
    const years = Array.from({ length: 11 }, (_, i) => currentSelectedYear - 5 + i);

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const daysMatrix = eachDayOfInterval({ start: startDate, end: endDate });

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMonthSelect = (monthIndex) => {
        setCurrentDate(setMonth(currentDate, monthIndex));
    };

    const handleYearSelect = (year) => {
        setCurrentDate(setYear(currentDate, year));
    };



    return (
        <div className="w-full bg-white p-6 rounded-lg select-none">

            {/* --- Header Section with Navigation --- */}
            <div className="flex items-center justify-between mb-7">
                <h2 className="text-primary-text text-lg font-bold">
                    School Calendar
                </h2>

                <div className=" relative flex items-center gap-x-3">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-x-2 text-sm text-grey-200 hover:opacity-80 transition-opacity focus:outline-none"
                    >
                        <span>{format(currentDate, 'MMMM yyyy')}</span>
                        <ChevronDown
                            size={18}
                            className={`text-grey-300 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {/* --- Custom Dropdown Menu Panel --- */}
                    {isDropdownOpen && (
                        <div ref={dropdownRef} className="absolute right-0 top-full mt-2 w-64 bg-white border border-grey-200 rounded-xl shadow-xl z-50 p-3 flex gap-x-2 animate-in fade-in slide-in-from-top-2 duration-150">

                            {/* Months Column */}
                            <div className="flex-1 max-h-48 overflow-y-auto pr-1 flex flex-col gap-y-0.5 scrollbar-thin">
                                <span className="text-[10px] font-bold uppercase text-grey-300 px-2 mb-1 block">Month</span>
                                {months.map((monthName, idx) => (
                                    <button
                                        key={monthName}
                                        onClick={() => handleMonthSelect(idx)}
                                        className={`text-left text-xs px-2 py-1.5 rounded-lg font-medium transition-colors ${currentDate.getMonth() === idx
                                            ? 'bg-primary text-white'
                                            : 'text-primary-text hover:bg-grey-100'
                                            }`}
                                    >
                                        {monthName}
                                    </button>
                                ))}
                            </div>

                            {/* Divider Line */}
                            <div className="w-px bg-grey-100 self-stretch"></div>

                            {/* Years Column */}
                            <div className="w-24 max-h-48 overflow-y-auto pr-1 flex flex-col gap-y-0.5 scrollbar-thin">
                                <span className="text-[10px] font-bold uppercase text-grey-300 px-2 mb-1 block">Year</span>
                                {years.map((year) => (
                                    <button
                                        key={year}
                                        onClick={() => handleYearSelect(year)}
                                        className={`text-center text-xs px-2 py-1.5 rounded-lg font-medium transition-colors ${currentSelectedYear === year
                                            ? 'bg-primary text-white'
                                            : 'text-primary-text hover:bg-grey-100'
                                            }`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>

                        </div>
                    )}



                </div>
            </div>

            {/* --- Weekdays Headings --- */}
            <div className="grid grid-cols-7 text-center mb-4">
                {weekdays.map((day) => (
                    <div key={day} className="text-sm text-grey-300">
                        {day}
                    </div>
                ))}
            </div>

            
            <div className="grid grid-cols-7 gap-px bg-grey-100 border border-grey-100 overflow-hidden">
                {daysMatrix.map((day, index) => {
                    const isCurrentMonthDay = isSameMonth(day, currentDate);
                    const isDaySunday = isSunday(day);

                    // Format date string to match custom configuration props (e.g., "2021-03-23")
                    const dateString = format(day, 'yyyy-MM-dd');
                    const dayConfig = highlightedDays[dateString] || null;

                    // Base Styles
                    let cellBg = "bg-white";
                    let textColor = "text-primary-text";
                    let badgeBg = "";

                    // Styling Rule Priorities to Match Figma Layout
                    if (!isCurrentMonthDay) {
                        textColor = "text-grey-200"; // Muted for days outside current month range
                    } else if (isDaySunday && !dayConfig) {
                        textColor = "text-secondary"; // Coral text layout color rules for standard Sundays
                    }

                    // Handle Custom Injected Operational Highlights
                    if (dayConfig?.bgHighlight) {
                        cellBg = "bg-grey-100/50";
                    }

                    if (dayConfig?.status === 'primary') badgeBg = "bg-primary text-white";
                    if (dayConfig?.status === 'secondary') badgeBg = "bg-secondary text-white";
                    if (dayConfig?.status === 'accent') badgeBg = "bg-accent text-white";

                    return (
                        <div
                            key={index}
                            className={`aspect-square flex items-center justify-center text-sm font-medium ${cellBg}`}
                        >
                            {dayConfig?.status ? (
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${badgeBg}`}>
                                    {format(day, 'd')}
                                </div>
                            ) : (
                                <span className={textColor}>{format(day, 'd')}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};