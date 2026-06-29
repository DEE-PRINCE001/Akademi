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
                    targetColor: "text-secondary"
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
                    targetColor: "text-danger"
                },
                {
                    id: 4,
                    type: "upload",
                    user: "Samantha William",
                    action: "add 4 files on",
                    target: "Art Class",
                    targetColor: "text-primary",
                    attachments: [1, 2, 3, 4] // Placeholders for images
                },
                {
                    id: 5,
                    type: "status",
                    user: "You",
                    action: "has moved",
                    target: "“Biology Homework”",
                    targetColor: "text-success font-semibold",
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
                    targetColor: "text-accent"
                },
                {
                    id: 7,
                    type: "mention",
                    user: "Nadila Adja",
                    action: "mentioned you at",
                    target: "Programming Homework",
                    targetColor: "text-primary"
                }
            ]
        }
    ];
    return (
        <div className="flex-1 p-6 rounded-2xl bg-white min-h-screen font-sans text-grey-300">
            {activityData.map((group, groupIdx) => (
                <div key={groupIdx} className="mb-8 last:mb-0">

                    <h2 className="text-xl font-bold text-slate-800 mb-6">{group.dateGroup}</h2>

                    <div className="flex flex-col">
                        {group.items.map((item, itemIdx) => (
                            <div key={item.id} className="flex group">

                            
                                <div className="relative flex flex-col items-center w-12 shrink-0">

                                    
                                    <div className="w-px bg-grey-300 h-px shrink-0"></div>

                                    {/* Timeline Dot */}
                                    <div className="relative z-2 flex items-center justify-center w-3.5 h-3.5 rounded-full border-3 border-primary bg-white shadow-sm flex-shrink-0">
                                        {/* <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> */}
                                    </div>

                                    
                                    <div className="w-px bg-grey-300 flex-1 group-last:hidden"></div>

                                </div>

                                {/* RIGHT COLUMN: Content */}
                                <div className="flex-1 pb-8 group-last:pb-2 pl-2">

                                    <span className="text-xs text-grey-200 block mb-1">
                                        {group.timestamp}
                                    </span>


                                    <div className="text-sm leading-relaxed text-primary-text">
                                        {item.isReminder ? (
                                            <p>
                                                <span className="text-danger font-bold mr-1">[REMINDER]</span>
                                                {item.text.split(item.highlightText)[0]}
                                                <span className="text-danger font-bold">{item.highlightText}</span>
                                                {item.text.split(item.highlightText)[1]}
                                            </p>
                                        ) : (
                                            <p>
                                                <span className="font-bold text-primary-text mr-1">{item.user}</span>
                                                {item.action}{' '}
                                                <span className={`font-semibold ${item.targetColor || 'text-primary-text'}`}>
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
                                                    className="aspect-4/2.5 rounded-xl bg-grey-200 hover:bg-grey-200/70 transition-colors duration-200 cursor-pointer"
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