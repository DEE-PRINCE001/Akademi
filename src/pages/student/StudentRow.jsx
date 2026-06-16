import React, { useState } from 'react'
import { Phone, Mail, MoreHorizontal } from 'lucide-react';
import CircularIcon from '../../components/labels/CircularIcon';
const StudentRow = ({name, studentId, grade = "VII A", date, parentName, city }) => {
    const [selected, setSelected] = useState(false);
    const colors = {
        "VII A": "bg-secondary",
        "VII B": "bg-accent",
        "VII C": "bg-primary",
    };

    return (
        <div
            className={`
        relative
        w-full
        grid
        grid-cols-[30px_2.5fr_1fr_1.3fr_1.5fr_1fr_1fr_1fr_40px]
        items-center
        justify-start
        px-8
        py-4
        gap-x-5
        border-t-2

        border-grey-100
        text-xs
        ${selected ? "bg-white" : ""}
    `}
        >
            {selected && (
                <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
            )}

            <input
                type="checkbox"
                checked={selected}
                onClick={() => setSelected(!selected)}
                className="
            h-4
            w-4
            rounded
            accent-primary
        "
            />

            <div className="flex items-center gap-3">
                <CircularIcon variant='empty' />
                <span className="font-bold text-sm">
                    {name || "-"}
                </span>
            </div>

            <p className="font-bold text-primary">
                {studentId || "-"}
            </p>

            <div className='text-grey-300 text-xs'>{date || "-"}</div>
            <div className='text-primary-text text-xs'>{parentName || "-"}</div>
            <div className='text-primary-text text-xs'>{city || "-"}</div>

            <div className="flex gap-2">

                <CircularIcon variant='details' size='sm'
                    icon={<Phone size={14} />}
                />
                <CircularIcon variant='details' size='sm'
                    icon={<Mail size={14} />}
                />
            </div>

            <div
                className={`
        py-2
        rounded-full
        text-white
        px-1
        w-15
        text-xs
        text-center
        font-medium
        ${colors[grade] || "bg-danger"}
    `}
            >
                {grade || "-"}
            </div>

            <button className='justify-self-end'>
                <MoreHorizontal
                    className="text-grey-300"
                />
            </button>



        </div>
    )
}

export default StudentRow;