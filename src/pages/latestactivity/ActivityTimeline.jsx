import React from 'react';

export default function ActivityTimeline() {
    const activityData = [
        {
            dateGroup: "Today",
            timestamp: "Monday, June 31 2020",
            items: [
                {
                    id: 1,
                    type: "create",
                    user: "Karen Hope",
                    action: "has created new task at",
                    target: "History Lesson",
                    targetColor: "text-orange-500"
                },
                {
                    id: 2,
                    type: "reminder",
                    isReminder: true,
                    text: "Due date of Science Homework task will be coming",
                    highlightText: "Science Homework"
                },
                {
                    id: 3,
                    type: "comment",
                    user: "Tony Soap",
                    action: "commented at",
                    target: "Science Homework",
                    targetColor: "text-red-500"
                },
                {
                    id: 4,
                    type: "upload",
                    user: "Samantha William",
                    action: "add 4 files on",
                    target: "Art Class",
                    targetColor: "text-indigo-600",
                    attachments: [1, 2, 3, 4] // Placeholders for images
                },
                {
                    id: 5,
                    type: "status",
                    user: "You",
                    action: "has moved",
                    target: "“Biology Homework”",
                    targetColor: "text-emerald-500 font-semibold",
                    extraText: "task to Done"
                }
            ]
        },
        {
            dateGroup: "Yesterday",
            timestamp: "Sunday, June 30 2020",
            items: [
                {
                    id: 6,
                    type: "mention",
                    user: "Johnny Ahmad",
                    action: "mentioned you at",
                    target: "Art Class Homework",
                    targetColor: "text-amber-500"
                }
            ]
        }
    ];
    return (
        <div className="max-w-4xl p-6 bg-white min-h-screen font-sans text-slate-700">
            {activityData.map((group, groupIdx) => (
                <div key={groupIdx} className="mb-8 last:mb-0">
                    {/* Section Date Heading */}
                    <h2 className="text-xl font-bold text-slate-800 mb-6">{group.dateGroup}</h2>

                    <div className="flex flex-col">
                        {group.items.map((item, itemIdx) => (
                            <div key={item.id} className="flex group">

                                {/* LEFT COLUMN: Timeline Line & Node */}
                                <div className="relative flex flex-col items-center w-12 flex-shrink-0">
                                    {/* Vertical Line connecting the dots */}
                                    <div className="absolute top-0 bottom-0 w-[2px] bg-slate-200 left-1/2 -translate-x-1/2 group-last:bottom-1/2"></div>

                                    {/* Timeline Dot */}
                                    <div className="relative z-10 flex items-center justify-center w-4 h-4 rounded-full border-2 border-indigo-600 bg-white mt-1.5 shadow-sm">
                                        {/* Inner pulse effect if you want to make it look extra premium */}
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                                    </div>
                                </div>

                                {/* RIGHT COLUMN: Content */}
                                <div className="flex-1 pb-8 group-last:pb-2 pl-2">
                                    {/* Timestamp */}
                                    <span className="text-xs text-slate-400 block mb-1">
                                        {group.timestamp}
                                    </span>

                                    {/* Notification Text Parsing */}
                                    <div className="text-sm leading-relaxed text-slate-600">
                                        {item.isReminder ? (
                                            <p>
                                                <span className="text-red-500 font-bold mr-1">[REMINDER]</span>
                                                {item.text.split(item.highlightText)[0]}
                                                <span className="text-red-500 font-bold">{item.highlightText}</span>
                                                {item.text.split(item.highlightText)[1]}
                                            </p>
                                        ) : (
                                            <p>
                                                <span className="font-bold text-slate-800 mr-1">{item.user}</span>
                                                {item.action}{' '}
                                                <span className={`font-semibold ${item.targetColor || 'text-slate-800'}`}>
                                                    {item.target}
                                                </span>
                                                {item.extraText && ` ${item.extraText}`}
                                            </p>
                                        )}
                                    </div>

                                    {/* Render attachments layout natively if present */}
                                    {item.attachments && (
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 max-w-2xl">
                                            {item.attachments.map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="aspect-[4/3] rounded-xl bg-indigo-100/70 border border-indigo-50/50 hover:bg-indigo-200/50 transition-colors duration-200 cursor-pointer"
                                                />
                                            ))}
                                        </div>
                                    )}

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}