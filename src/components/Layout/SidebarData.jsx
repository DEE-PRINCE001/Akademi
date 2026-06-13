import React from "react";

import chat from '../../assets/icons/chat.svg'
import chatblue from '../../assets/icons/chatblue.svg'
import dashboard from '../../assets/icons/dashboard.svg'
import dashboardblue from '../../assets/icons/dashboardblue.svg'
import event from '../../assets/icons/event.svg'
import eventblue from '../../assets/icons/eventblue.svg'
import finance from '../../assets/icons/finance.svg'
import financeblue from '../../assets/icons/financeblue.svg'
import food from '../../assets/icons/food.svg'
import foodblue from '../../assets/icons/foodblue.svg'
import latestact from '../../assets/icons/latestact.svg'
import latestactblue from '../../assets/icons/latestactblue.svg'
import student from '../../assets/icons/student.svg'
import studentblue from '../../assets/icons/studentblue.svg'
import teacher from '../../assets/icons/teacher.svg'
import teacherblue from '../../assets/icons/teacherblue.svg'
import user from '../../assets/icons/user.svg'
import userblue from '../../assets/icons/userblue.svg'



export const sidebardata = [
    {
        icon:dashboard,
        iconblue:dashboardblue,
        text:"Dashboard",
        to: "/"
    },
    {
        icon:student,
        iconblue:studentblue,
        text:"Students",
        to: "/students"
    },
    {
        icon:teacher,
        iconblue:teacherblue,
        text:"Teachers",
        to: '/teachers'
    },
    {
        icon:event,
        iconblue:eventblue,
        text:"Event",
        to: "/event"
    },
    {
        icon:finance,
        iconblue:financeblue,
        text:"Finance",
        to:"/finance"
    },
    {
        icon:food,
        iconblue:foodblue,
        text:"Food",
        to: "/food"
    },
    {
        icon:user,
        iconblue:userblue,
        text:"User",
        to: "/user"
    },
    {
        icon:chat,
        iconblue:chatblue,
        text:"Chat",
        to: "/chat"
    },
    {
        icon:latestact,
        iconblue:latestactblue,
        text:"Latest Activity",
        to:"/latest-activity"
    }
]