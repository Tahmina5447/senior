
export const customerTable = [
    {
        id: 1,
        name: 'Lisan Musa',
        relation: 'Sister',
        contact: '237-799-6082',
        age: '12',
        blood: 'B+'
    },
    {
        id: 2,
        name: 'Devid Tom ',
        role: 'admin',
        relation: 'Son',
        contact: '301-501-4786',
        age: '28',
        blood: 'A+'
    },
    {
        id: 3,
        name: 'Alyean Khan',
        relation: 'Brother',
        contact: '991-468-6820',
        age: '23',
        blood: 'AB+'
    },
    {
        id: 4,
        name: 'Neha Limu',
        relation: 'Grandma',
        contact: '791-890-2126',
        age: '67',
        blood: 'B+'
    },
    {
        id: 5,
        name: 'Mitu Sah',
        relation: 'Mom',
        contact: '791-890-2126',
        age: '55',
        blood: 'A-'
    },
    {
        id: 6,
        name: 'Lisan Musa',
        relation: 'Sister',
        contact: '237-799-6082',
        age: '12',
        blood: 'B+'
    },
    {
        id: 7,
        name: 'Alyean Khan',
        relation: 'Brother',
        contact: '991-468-6820',
        age: '23',
        blood: 'AB+'
    },
    {
        id: 8,
        name: 'Neha Limu',
        relation: 'Grandma',
        contact: '791-890-2126',
        age: '67',
        blood: 'B+'
    },
    {
        id: 9,
        name: 'Mitu Sah',
        relation: 'Mom',
        contact: '791-890-2126',
        age: '55',
        blood: 'A-'
    },
    {
        id: 10,
        name: 'Lisan Musa',
        relation: 'Sister',
        contact: '237-799-6082',
        age: '12',
        blood: 'B+'
    },
    {
        id: 11,
        name: 'Alyean Khan',
        relation: 'Brother',
        contact: '991-468-6820',
        age: '23',
        blood: 'AB+'
    },
    {
        id: 12,
        name: 'Neha Limu',
        relation: 'Grandma',
        contact: '791-890-2126',
        age: '67',
        blood: 'B+'
    },
    {
        id: 13,
        name: 'Mitu Sah',
        relation: 'Mom',
        contact: '791-890-2126',
        age: '55',
        blood: 'A-'
    }


]


export const devicesData = [
    {
        id: 1,
        img: '/images/devices/homeCare.svg',
        name: 'Home Care Assistant',
        title: 'Assistant',
        status: 'Fall not Detected',
        room: ['dining', 'bed'],

    },
    {
        id: 2,
        img: '/images/devices/wave.svg',
        name: 'Wave – Vital Signs Monitor',
        title: 'Sensor',
        room: ['bed', 'children'],
        status: 'In Bed',
        heart: 58,
        breath: 16
    },
    {
        id: 3,
        img: '/images/devices/door.svg',
        name: 'Door Sensor',
        title: 'Sensor',
        status: 'Closed',
        room: ['living', 'garage'],

    },
    {
        id: 4,
        img: '/images/devices/indoor.svg',
        name: 'Indoor Siren',
        title: 'Sensor',
        status: 'Trigger',
        room: 'kitchen',

    },
    {
        id: 5,
        img: '/images/devices/sos.svg',
        name: 'SOS Button',
        title: 'SOS Button',
        status: 'Not Triggered',
        room: 'bath',

    }
]

export const roomData = [
    {
        id: 1,
        room: 'Living Room',
        tem: '24',
        hu: '90%',
        con: '484',
        div: '05'
    },
    {
        id: 2,
        room: 'Dining Room',
        tem: '24',
        hu: '70%',
        con: '484',
        div: '05'
    },
    {
        id: 3,
        room: 'Bed Room',
        tem: '24',
        hu: '60%',
        con: '484',
        div: '05'
    },
    {
        id: 4,
        room: 'Kitchen Room',
        tem: '24',
        hu: '70%',
        con: '484',
        div: '05'
    },
    {
        id: 5,
        room: 'Bath Room',
        tem: '24',
        hu: '80%',
        con: '484',
        div: '05'
    },
    {
        id: 6,
        room: 'Children Room',
        tem: '24',
        hu: '60%',
        con: '484',
        div: '05'
    },
    {
        id: 7,
        room: 'Garage Room',
        tem: '24',
        hu: '70%',
        con: '484',
        div: '05'
    },
    {
        id: 8,
        room: 'Bed Room',
        tem: '24',
        hu: '90%',
        con: '484',
        div: '05'
    },
]

export const oldTrendsData = [
    {
        title: "Waking up time",
        subTitle: "List of what time wake up",
        target: "08:00",
        present: "07:56",
        diff: '4m',
        category: "Average",
        average: "06:35",
        table: [
            {
                date: "June 1, 2023",
                value: "06:12"
            },
            {
                date: "June 2, 2023",
                value: "06:09"
            },
            {
                date: "June 3, 2023",
                value: "06:15"
            },
            {
                date: "June 4, 2023",
                value: "06:16"
            },
            {
                date: "June 5, 2023",
                value: "06:10"
            },
            {
                date: "June 6, 2023",
                value: "06:13"
            },
            {
                date: "June 7, 2023",
                value: "06:09"
            },
            {
                date: "June 8, 2023",
                value: "06:10"
            },
            {
                date: "June 9, 2023",
                value: "06:12"
            },
            {
                date: "June 10, 2023",
                value: "06:09"
            },
            {
                date: "June 11, 2023",
                value: "0:15"
            },
            {
                date: "June 12, 2023",
                value: "06:09"
            }
        ]
    },
    {
        title: "Going in bed time",
        subTitle: "List of what time to sleep",
        target: "11:50",
        present: "11:40",
        diff: '6min',
        category: "Average",
        average: "20:40",
        table: [
            {
                date: "June 1, 2023",
                value: "06:12"
            },
            {
                date: "June 2, 2023",
                value: "06:09"
            },
            {
                date: "June 3, 2023",
                value: "05:12"
            },
            {
                date: "June 4, 2023",
                value: "07:09"
            },
            {
                date: "June 5, 2023",
                value: "08:12"
            },
            {
                date: "June 6, 2023",
                value: "06:09"
            },
            {
                date: "June 7, 2023",
                value: "06:12"
            },
            {
                date: "June 8, 2023",
                value: "05:09"
            },
            {
                date: "June 9, 2023",
                value: "06:12"
            },
            {
                date: "June 10, 2023",
                value: "07:09"
            },
            {
                date: "June 11, 2023",
                value: "09:12"
            },
            {
                date: "June 12, 2023",
                value: "06:09"
            }
        ]
    },
    {
        title: "Rooms Visited",
        type: 'x',
        subTitle: "Number of room visits",
        category: "Average",
        target: "20",
        present: "19",
        diff: '1',
        average: "25 visits",
        table: [
            {
                date: "June 1, 2023",
                value: "6 visits"
            },
            {
                date: "June 2, 2023",
                value: "8 visits"
            },
            {
                date: "June 3, 2023",
                value: "6 visits"
            },
            {
                date: "June 4, 2023",
                value: "5 visits"
            },
            {
                date: "June 5, 2023",
                value: "7 visits"
            },
            {
                date: "June 6, 2023",
                value: "8 visits"
            },
            {
                date: "June 7, 2023",
                value: "5 visits"
            },
            {
                date: "June 8, 2023",
                value: "6 visits"
            },
            {
                date: "June 9, 2023",
                value: "8 visits"
            },
            {
                date: "June 10, 2023",
                value: "7 visits"
            },
            {
                date: "June 11, 2023",
                value: "5 visits"
            },
            {
                date: "June 12, 2023",
                value: "6 visits"
            }
        ]
    },
    {
        title: "Time at Home",
        type: 'hr',
        subTitle: "Time spent at home",
        category: "Warning",
        target: "10",
        present: "14",
        diff: '4',
        average: "9h 20m",
        table: [
            {
                date: "June 1, 2023",
                value: "9h 20m"
            },
            {
                date: "June 2, 2023",
                value: "8h 20m"
            },
            {
                date: "June 3, 2023",
                value: "10h 20m"
            },
            {
                date: "June 4, 2023",
                value: "9h 20m"
            },
            {
                date: "June 5, 2023",
                value: "8h 20m"
            },
            {
                date: "June 6, 2023",
                value: "6h 20m"
            },
            {
                date: "June 7, 2023",
                value: "7h 20m"
            },
            {
                date: "June 8, 2023",
                value: "9h 20m"
            },
            {
                date: "June 9, 2023",
                value: "8h 20m"
            },
            {
                date: "June 10, 2023",
                value: "10h 20m"
            },
            {
                date: "June 11, 2023",
                value: "9h 20m"
            },
            {
                date: "June 12, 2023",
                value: "8h 20m"
            }
        ]
    },
    {
        title: "Time outdoors",
        type: 'hr',
        subTitle: "Time spent outside today",
        category: "Warning",
        target: "7",
        present: "2",
        diff: '5',
        average: "9h 20m",
        table: [
            {
                date: "June 1, 2023",
                value: "9h 20m"
            },
            {
                date: "June 2, 2023",
                value: "8h 20m"
            },
            {
                date: "June 3, 2023",
                value: "10h 20m"
            },
            {
                date: "June 4, 2023",
                value: "9h 20m"
            },
            {
                date: "June 5, 2023",
                value: "8h 20m"
            },
            {
                date: "June 6, 2023",
                value: "6h 20m"
            },
            {
                date: "June 7, 2023",
                value: "7h 20m"
            },
            {
                date: "June 8, 2023",
                value: "9h 20m"
            },
            {
                date: "June 9, 2023",
                value: "8h 20m"
            },
            {
                date: "June 10, 2023",
                value: "10h 20m"
            },
            {
                date: "June 11, 2023",
                value: "9h 20m"
            },
            {
                date: "June 12, 2023",
                value: "8h 20m"
            }
        ]
    },
    {
        title: "Device Usage Time",
        type: 'hr',
        subTitle: "Time spent using devices",
        category: "Warning",
        target: "2",
        present: "5",
        average: "2h 40m",
        table: [
            {
                date: "June 1, 2023",
                value: "2h 20m"
            },
            {
                date: "June 2, 2023",
                value: "1h 20m"
            },
            {
                date: "June 3, 2023",
                value: "1h 20m"
            },
            {
                date: "June 4, 2023",
                value: "2h 20m"
            },
            {
                date: "June 5, 2023",
                value: "2h 20m"
            },
            {
                date: "June 6, 2023",
                value: "1h 20m"
            },
            {
                date: "June 7, 2023",
                value: "1h 20m"
            },
            {
                date: "June 8, 2023",
                value: "2h 20m"
            },
            {
                date: "June 9, 2023",
                value: "2h 20m"
            },
            {
                date: "June 10, 2023",
                value: "1h 20m"
            },
            {
                date: "June 11, 2023",
                value: "1h 20m"
            },
            {
                date: "June 12, 2023",
                value: "3h 20m"
            }
        ]
    },
    {
        title: "Sleeping Score",
        subTitle: "Score of sleeping ",
        type: 'percent',
        category: "Average",
        target: "90",
        present: "86",
        diff: '4',
        average: "52%",
        table: [
            {
                date: "June 1, 2023",
                value: "50%"
            },
            {
                date: "June 2, 2023",
                value: "60%"
            },
            {
                date: "June 3, 2023",
                value: "52%"
            },
            {
                date: "June 4, 2023",
                value: "55%"
            },
            {
                date: "June 5, 2023",
                value: "60%"
            },
            {
                date: "June 6, 2023",
                value: "53%"
            },
            {
                date: "June 7, 2023",
                value: "55%"
            },
            {
                date: "June 8, 2023",
                value: "57%"
            },
            {
                date: "June 9, 2023",
                value: "50%"
            },
            {
                date: "June 10, 2023",
                value: "54%"
            },
            {
                date: "June 11, 2023",
                value: "53%"
            },
            {
                date: "June 12, 2023",
                value: "55%"
            }
        ]
    },
    {
        title: "Showers",
        subTitle: "Number of showers",
        type: 'x',
        category: "Critical",
        target: "3",
        present: "1",
        diff: '2',
        average: 8,
        table: [
            {
                date: "June 1, 2023",
                value: "6"
            },
            {
                date: "June 2, 2023",
                value: "7"
            },
            {
                date: "June 3, 2023",
                value: "5"
            },
            {
                date: "June 4, 2023",
                value: "7"
            },
            {
                date: "June 5, 2023",
                value: "8"
            },
            {
                date: "June 6, 2023",
                value: "6"
            },
            {
                date: "June 7, 2023",
                value: "6"
            },
            {
                date: "June 8, 2023",
                value: "5"
            },
            {
                date: "June 9, 2023",
                value: "6"
            },
            {
                date: "June 10, 2023",
                value: "7"
            },
            {
                date: "June 11, 2023",
                value: "6"
            },
            {
                date: "June 12, 2023",
                value: "6"
            }
        ]
    },
    {
        title: "Coffees",
        type: 'x',
        subTitle: "Number of coffees",
        category: "Critical",
        target: "4",
        present: "14",
        diff: '10',
        average: 6,
        table: [
            {
                date: "June 1, 2023",
                value: "6"
            },
            {
                date: "June 2, 2023",
                value: "6"
            },
            {
                date: "June 3, 2023",
                value: "5"
            },
            {
                date: "June 4, 2023",
                value: "7"
            },
            {
                date: "June 5, 2023",
                value: "8"
            },
            {
                date: "June 6, 2023",
                value: "6"
            },
            {
                date: "June 7, 2023",
                value: "6"
            },
            {
                date: "June 8, 2023",
                value: "5"
            },
            {
                date: "June 9, 2023",
                value: "6"
            },
            {
                date: "June 10, 2023",
                value: "7"
            },
            {
                date: "June 11, 2023",
                value: "9"
            },
            {
                date: "June 12, 2023",
                value: "6"
            }
        ]
    },
    {
        title: "Bathroom Visited",
        type: 'x',
        subTitle: "The number of times has gone",
        category: "Critical",
        target: "8",
        present: "0",
        diff: '8',
        average: "6",
        table: [
            {
                date: "June 1, 2023",
                value: "6"
            },
            {
                date: "June 2, 2023",
                value: "6"
            },
            {
                date: "June 3, 2023",
                value: "5"
            },
            {
                date: "June 4, 2023",
                value: "7"
            },
            {
                date: "June 5, 2023",
                value: "8"
            },
            {
                date: "June 6, 2023",
                value: "6"
            },
            {
                date: "June 7, 2023",
                value: "6"
            },
            {
                date: "June 8, 2023",
                value: "5"
            },
            {
                date: "June 9, 2023",
                value: "6"
            },
            {
                date: "June 10, 2023",
                value: "7"
            },
            {
                date: "June 11, 2023",
                value: "9"
            },
            {
                date: "June 12, 2023",
                value: "6"
            }
        ]
    }
]

export const subscriptionData = [
    {
        title: "24/7 Monitoring and Emergency Response",
        value: true,
        category: "essential"

    },
    {
        title: "Medication Reminders",
        value: true,
        category: "essential"
    },
    {
        title: "Activity Tracking",
        value: true,
        category: "essential"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: true,
        category: "essential"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: true,
        category: "essential"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: true,
        category: "essential"
    },
    {
        title: "Medication Reminders",
        value: true,
        category: "essential"
    },
    {
        title: "Activity Tracking",
        value: true,
        category: "essential"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: true,
        category: "essential"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "essential"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "essential"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "essential",
        "dolar": "+$05:00"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "essential"

    },
    {
        title: "Medication Reminders",
        value: false,
        category: "standard"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "standard"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "standard"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "standard"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "standard"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "standard"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "standard"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "standard"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "standard"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "standard"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "standard",
        "dolar": "+$05:00"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "standard"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "standard"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "standard"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "standard"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "standard"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "standard"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "standard"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "standard"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "standard",
        "dolar": "+$05:00"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "premium"

    },
    {
        title: "Medication Reminders",
        value: false,
        category: "premium"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "premium"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "premium"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "premium"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "premium"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "premium"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "premium"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "premium"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "premium"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "premium"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "premium",
        "dolar": "+$05:00"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "premium"

    },
    {
        title: "Medication Reminders",
        value: false,
        category: "premium"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "premium"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "premium"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "premium"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "premium"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "enterprise"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "enterprise"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "enterprise",
        "dolar": "+$05:00"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "enterprise"

    },
    {
        title: "Medication Reminders",
        value: false,
        category: "enterprise"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "enterprise"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "enterprise"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "enterprise"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "enterprise"
    }
]

export const videoData = [
    {
        id: 5,
        room: "Living Room",
        icon: "mdi-lightbulb-on-outline",
        rtspUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        running: true,
        time: Date.now()
    },
    {
        id: 1,
        room: "Kitchen Room",
        icon: "mdi-silverware-fork-knife",
        rtspUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        running: true,
        time: Date.now()
    },
    {
        id: 3,
        room: "Bedroom",
        icon: "mdi-bed-empty",
        rtspUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        running: false,
        time: Date.now()
    },
    {
        id: 4,
        room: "Home Office",
        icon: "mdi-desk-lamp",
        rtspUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        running: false,
        time: Date.now()
    },
    {
        id: 5,
        room: "Bathroom",
        icon: "mdi-shower",
        rtspUrl: "https://img.ifunny.co/videos/55bb2b9637b70f249bf5cad5bb5bd399da1f13fc1da3fc2acfd16a5b5d7d0f73_1.mp4",
        running: true,
        time: Date.now()
    },

]

export const weeklyTrends = [
    {
        title: "Waking up time",
        average: "06:35",
        data: "06:30"
    },
    {
        title: "Going in bed time",
        average: "20:40",
        data: "20:10"
    },
    {
        title: "Rooms Visited",
        average: "25 Visits",
        data: "22 Visits"
    },
    {
        title: "Time at Home",
        average: "9h 20min",
        data: "9h 10min"
    },
    {
        title: "Time outdoors",
        average: "8h 15min",
        data: "8h 0min"
    },
    {
        title: "Device Usage Time",
        average: "2h 40min",
        data: "2h 20min"
    },

    {
        title: "Sleeping Score",
        average: "52%",
        data: "62%"
    },

    {
        title: "Showers",
        average: "03",
        data: "04"
    },
    {
        title: "Coffees",
        average: "03",
        data: "06"
    },
    {
        title: "Bathroom Visited",
        average: "05 Visits",
        data: "06 Visits"
    }
]
export const monthlyTrends = [
    {
        title: "Waking up time",
        average: "05:35",
        data: "06:30"
    },
    {
        title: "Going in bed time",
        average: "19:40",
        data: "22:10"
    },
    {
        title: "Rooms Visited",
        average: "23 Visits",
        data: "22 Visits"
    },
    {
        title: "Time at Home",
        average: "8h 20min",
        data: "8h 10min"
    },
    {
        title: "Time outdoors",
        average: "7h 15min",
        data: "7h 0min"
    },
    {
        title: "Device Usage Time",
        average: "1h 40min",
        data: "1h 20min"
    },

    {
        title: "Sleeping Score",
        average: "53%",
        data: "60%"
    },

    {
        title: "Showers",
        average: "03",
        data: "04"
    },
    {
        title: "Coffees",
        average: "03",
        data: "07"
    },
    {
        title: "Bathroom Visited",
        average: "06 Visits",
        data: "07 Visits"
    }
]

export const waveData = {
    overView: {
        sleepTime: { main: '6hr 35m', score: 80 },
        sleepScore: { score: 72 },
        avgHeartRate: { main: '61bpm', score: 60 },
        avgBreathingRate: { main: '20bpm', score: 90 },
    },
    sleepTimeLine: {
        start: "22:45",
        end: "04:58",
        totalDeep: '4hr 30m',
        totalCore: "24m",
        totalRem: "45m",
        totalAwake: "46m",
        outOfBed: "",
        totalOutOfBed: '1x',
    },
    bioVita: [
        {
            time: '22:23',
            value: 10
        },
        {
            time: '24:45',
            value: 20
        },
        {
            time: '02:20',
            value: 12
        },
        {
            time: '03:14',
            value: 18
        },
        {
            time: '04:58',
            value: 15
        },
    ],

    heartRateDetails: [
        {
            day: 'Sun',
            value: [10, 20]
        },
        {
            day: 'Mon',
            value: [13, 19]
        },
        {
            day: 'Tue',
            value: [15, 25]
        },
        {
            day: 'Wed',
            value: [20, 28]
        },
        {
            day: 'Thu',
            value: [10, 20]
        },
        {
            day: 'Fri',
            value: [15, 25]
        },
        {
            day: 'Sat',
            value: [12, 20]
        }
    ],
    breathRateDetails: [
        {
            day: 'Sun',
            value: [10, 20]
        },
        {
            day: 'Mon',
            value: [13, 19]
        },
        {
            day: 'Tue',
            value: [15, 25]
        },
        {
            day: 'Wed',
            value: [20, 28]
        },
        {
            day: 'Thu',
            value: [10, 20]
        },
        {
            day: 'Fri',
            value: [15, 25]
        },
        {
            day: 'Sat',
            value: [12, 20]
        }
    ],
    outOfBedDetails: [
        {
            day: 'Sun',
            value: 0
        },
        {
            day: 'Mon',
            value: 0.5
        },
        {
            day: 'Tue',
            value: 1
        },
        {
            day: 'Wed',
            value: 0
        },
        {
            day: 'Thu',
            value: 3
        },
        {
            day: 'Fri',
            value: 0
        },
        {
            day: 'Sat',
            value: 0
        },
    ],
    monthlyHeart: [
        {
            day: 'Week1',
            value: [10, 20]
        },
        {
            day: 'Week2',
            value: [15, 26]
        },
        {
            day: 'Week3',
            value: [16, 25]
        },
        {
            day: 'Week4',
            value: [10, 20]
        },
    ],
    monthlyBreath: [
        {
            day: 'Week1',
            value: [10, 20]
        },
        {
            day: 'Week2',
            value: [15, 26]
        },
        {
            day: 'Week3',
            value: [16, 25]
        },
        {
            day: 'Week4',
            value: [10, 20]
        },
    ],
    monthlyOutOfBed: [
        {
            day: 'Week1',
            value: 3
        },
        {
            day: 'Week2',
            value: 2
        },
        {
            day: 'Week3',
            value: 1
        },
        {
            day: 'Week4',
            value: 2
        },
    ]


}


export const trendsData = [
    {
        title: 'Fall Detection',
        id: 1,
        subTitle: 'Active warning when fall occurs',
        average: '03s',
        target: '00',
        present: '01',
        diff: '1',
        category: 'Warning',
        type: 's',
        table: [
            {
                alert: "June 02, 2023; 08:30",
                type: "Warning",
                value: 32,
                action: "Notification",
                tableValue: "32s"
            },
            {
                alert: "June 03, 2023; 10:15",
                type: "Critical",
                value: 18,
                action: "Notification + Call",
                tableValue: "18s"
            },
            {
                alert: "June 04, 2023; 12:45",
                type: "Average",
                value: 24,
                action: "Notification",
                tableValue: "24s"
            },
            {
                alert: "June 05, 2023; 15:20",
                type: "Warning",
                value: 29,
                action: "Notification",
                tableValue: "29s"
            },
            {
                alert: "June 06, 2023; 17:40",
                type: "Critical",
                value: "21",
                action: "Notification + Call",
                tableValue: "21s"
            },
            {
                alert: "June 07, 2023; 19:00",
                type: "Warning",
                value: 28,
                action: "Notification",
                tableValue: "28s"
            },
            {
                alert: "June 08, 2023; 21:10",
                type: "Average",
                value: 25,
                action: "Notification",
                tableValue: "25s"
            },
            {
                alert: "June 09, 2023; 08:55",
                type: "Warning",
                value: 30,
                action: "Notification",
                tableValue: "30s"
            },
            {
                alert: "June 10, 2023; 10:30",
                type: "Critical",
                value: 19,
                action: "Notification + Call",
                tableValue: "19s"
            },
            {
                alert: "June 11, 2023; 13:15",
                type: "Average",
                value: 27,
                action: "Notification",
                tableValue: "27s"
            },
            {
                alert: "June 12, 2023; 16:00",
                type: "Warning",
                value: 31,
                action: "Notification",
                tableValue: "31s"
            }
        ],

    },
    {
        title: 'Device Offline',
        id: 2,
        subTitle: 'Active warning when device is not connected to the cloud',
        average: '03',
        target: '00',
        present: '01',
        diff: '1',
        type: 'm',
        category: 'Warning',
        table: [
            {
                alert: "June 02, 2023; 08:30",
                type: "Warning",
                value: 3,
                action: "Notification",
                tableValue: "3m"
            },
            {
                alert: "June 03, 2023; 10:15",
                type: "Critical",
                value: 8,
                action: "Notification + Call",
                tableValue: "8m"
            },
            {
                alert: "June 04, 2023; 12:45",
                type: "Average",
                value: 4,
                action: "None",
                tableValue: "4m"
            },
            {
                alert: "June 05, 2023; 15:20",
                type: "Warning",
                value: 9,
                action: "Notification",
                tableValue: "9m"
            },
            {
                alert: "June 06, 2023; 17:40",
                type: "Critical",
                value: 2,
                action: "Notification + Call",
                tableValue: "2m"
            },
            {
                alert: "June 07, 2023; 19:00",
                type: "Warning",
                value: 8,
                action: "Notification",
                tableValue: "8m"
            },
            {
                alert: "June 08, 2023; 21:10",
                type: "Average",
                value: 5,
                action: "None",
                tableValue: "5m"
            },
            {
                alert: "June 09, 2023; 08:55",
                type: "Warning",
                value: 3,
                action: "Notification",
                tableValue: "3m"
            },
            {
                alert: "June 10, 2023; 10:30",
                type: "Critical",
                value: 9,
                action: "Notification + Call",
                tableValue: "9m"
            },
            {
                alert: "June 11, 2023; 13:15",
                type: "Average",
                value: 7,
                action: "None",
                tableValue: "7m"
            },
            {
                alert: "June 12, 2023; 16:00",
                type: "Warning",
                value: 3,
                action: "Notification",
                tableValue: "3m"
            }
        ]
    },
    {
        title: 'Surveillance Mode',
        id: 3,
        subTitle: 'Motion detected when surveilence mode is active',
        average: '03',
        target: '00',
        present: '01',
        diff: '1',
        type: 'm',
        category: 'Critical',
        table: [
            {
                alert: "June 02, 2023; 08:30",
                type: "Warning",
                value: 3,
                action: "Notification",
                tableValue: "3m"
            },
            {
                alert: "June 03, 2023; 10:15",
                type: "Critical",
                value: 8,
                action: "Notification + Call",
                tableValue: "8m"
            },
            {
                alert: "June 04, 2023; 12:45",
                type: "Average",
                value: 4,
                action: "None",
                tableValue: "4m"
            },
            {
                alert: "June 05, 2023; 15:20",
                type: "Warning",
                value: 9,
                action: "Notification",
                tableValue: "9m"
            },
            {
                alert: "June 06, 2023; 17:40",
                type: "Critical",
                value: 2,
                action: "Notification + Call",
                tableValue: "2m"
            },
            {
                alert: "June 07, 2023; 19:00",
                type: "Warning",
                value: 8,
                action: "Notification",
                tableValue: "8m"
            },
            {
                alert: "June 08, 2023; 21:10",
                type: "Average",
                value: 5,
                action: "None",
                tableValue: "5m"
            },
            {
                alert: "June 09, 2023; 08:55",
                type: "Warning",
                value: 3,
                action: "Notification",
                tableValue: "3m"
            },
            {
                alert: "June 10, 2023; 10:30",
                type: "Critical",
                value: 9,
                action: "Notification + Call",
                tableValue: "9m"
            },
            {
                alert: "June 11, 2023; 13:15",
                type: "Average",
                value: 7,
                action: "None",
                tableValue: "7m"
            },
            {
                alert: "June 12, 2023; 16:00",
                type: "Warning",
                value: 3,
                action: "Notification",
                tableValue: "3m"
            }
        ]
    },
    {
        title: 'Oversleeping',
        id: 4,
        subTitle: 'Time of Oversleeping',
        average: '56m',
        target: '6',
        present: '4',
        diff: '2',
        type: 'hr',
        category: 'Warning',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 2.5, action: "Notification", tableValue: "2hr 30m" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 4.5, action: "Notification + Call", tableValue: "4hr 30m" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 3.5, action: "None", tableValue: "3hr 30m" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 2.2, action: "Notification", tableValue: "2hr 12m" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 2.8, action: "Notification + Call", tableValue: "2hr 48m" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 3.2, action: "Notification", tableValue: "3hr 12m" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 3.1, action: "None", tableValue: "3hr 6m" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 1.2, action: "Notification", tableValue: "1hr 12m" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 2.1, action: "Notification + Call", tableValue: "2hr 6m" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 3.1, action: "None", tableValue: "3hr 6m" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 2.3, action: "Notification", tableValue: "2hr 18m" }
        ]
    },
    {
        title: 'Frequent Night Activity',
        id: 5,
        subTitle: 'If customer leaves their bed soo often',
        average: '04x',
        target: '03',
        present: '4',
        diff: '1',
        category: 'Critical',
        type: 'x',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 3, action: "Notification + Call", tableValue: "3x" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 2, action: "None", tableValue: "2x" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 4, action: "Notification", tableValue: "4x" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 3, action: "Notification + Call", tableValue: "3x" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 3, action: "None", tableValue: "3x" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 4, action: "Notification + Call", tableValue: "4x" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 2, action: "None", tableValue: "2x" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 3, action: "Notification", tableValue: "3x" }
        ]
    },
    {
        title: 'Wandering at Night',
        id: 6,
        subTitle: 'Time away from room at night',
        average: '1hr 20m',
        target: '20',
        present: '24',
        diff: '4',
        type: 'm',
        category: 'Critical',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 2.5, action: "Notification", tableValue: "2hr 30m" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 4.5, action: "Notification + Call", tableValue: "4hr 30m" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 3.5, action: "None", tableValue: "3hr 30m" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 2.2, action: "Notification", tableValue: "2hr 12m" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 2.8, action: "Notification + Call", tableValue: "2hr 48m" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 3.2, action: "Notification", tableValue: "3hr 12m" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 3.1, action: "None", tableValue: "3hr 6m" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 1.2, action: "Notification", tableValue: "1hr 12m" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 2.1, action: "Notification + Call", tableValue: "2hr 6m" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 3.1, action: "None", tableValue: "3hr 6m" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 2.3, action: "Notification", tableValue: "2hr 18m" }
        ]
    },
    {
        title: 'Sedentary',
        id: 7,
        subTitle: 'Time spent sitting in the same place',
        average: '1hr 14m',
        target: '1',
        present: '2',
        diff: '1',
        type: 'hr',
        category: 'Warning',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 2.5, action: "Notification", tableValue: "2hr 30m" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 4.5, action: "Notification + Call", tableValue: "4hr 30m" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 3.5, action: "None", tableValue: "3hr 30m" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 2.2, action: "Notification", tableValue: "2hr 12m" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 2.8, action: "Notification + Call", tableValue: "2hr 48m" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 3.2, action: "Notification", tableValue: "3hr 12m" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 3.1, action: "None", tableValue: "3hr 6m" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 1.2, action: "Notification", tableValue: "1hr 12m" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 2.1, action: "Notification + Call", tableValue: "2hr 6m" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 3.1, action: "None", tableValue: "3hr 6m" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 2.3, action: "Notification", tableValue: "2hr 18m" }
        ]
    },
    {
        title: 'Bedtime',
        id: 8,
        subTitle: 'Variation in sleeping time',
        average: '22:12',
        target: '20:00',
        present: '18:00',
        diff: '2',
        category: 'Average',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 8.3, action: "Notification", tableValue: "8hr 30m" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 9.3, action: "Notification + Call", tableValue: "9hr 30m" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 9.3, action: "None", tableValue: "9hr 30m" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 8.3, action: "Notification", tableValue: "8hr 30m" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 5.3, action: "Notification + Call", tableValue: "5hr 30m" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 7.3, action: "Notification", tableValue: "7hr 30m" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 9.3, action: "None", tableValue: "9hr 30m" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 6.3, action: "Notification", tableValue: "6hr 30m" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 8.3, action: "Notification + Call", tableValue: "8hr 30m" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 7.3, action: "None", tableValue: "7hr 30m" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 6.3, action: "Notification", tableValue: "6hr 30m" }
        ]
    },
    {
        title: 'Wandering at Day',
        id: 9,
        subTitle: 'Time away from room at day',
        average: '1hr 14m',
        target: '1',
        present: '2',
        diff: '1',
        type: 'hr',
        category: 'Average',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 2.5, action: "Notification", tableValue: "2hr 30m" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 4.5, action: "Notification + Call", tableValue: "4hr 30m" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 3.5, action: "None", tableValue: "3hr 30m" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 2.2, action: "Notification", tableValue: "2hr 12m" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 2.8, action: "Notification + Call", tableValue: "2hr 48m" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 3.2, action: "Notification", tableValue: "3hr 12m" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 3.1, action: "None", tableValue: "3hr 6m" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 1.2, action: "Notification", tableValue: "1hr 12m" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 2.1, action: "Notification + Call", tableValue: "2hr 6m" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 3.1, action: "None", tableValue: "3hr 6m" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 2.3, action: "Notification", tableValue: "2hr 18m" }
        ]
    },
    {
        title: 'Extended Toileting',
        id: 10,
        subTitle: 'If customer is in toilet longer than usual',
        average: '39m',
        target: '30',
        present: '28',
        diff: '2',
        type: 'm',
        category: 'Average',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 30, action: "Notification", tableValue: "30m" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 45, action: "Notification + Call", tableValue: "45m" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 15, action: "None", tableValue: "15m" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 45, action: "Notification", tableValue: "45m" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 30, action: "Notification + Call", tableValue: "30m" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 15, action: "Notification", tableValue: "15m" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 30, action: "None", tableValue: "30m" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 30, action: "Notification", tableValue: "30m" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 15, action: "Notification + Call", tableValue: "15m" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 45, action: "None", tableValue: "45m" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 15, action: "Notification", tableValue: "15m" }
        ]
    },
    {
        title: 'Frequent Toileting',
        id: 11,
        subTitle: 'If customer is in toilet more than usual',
        average: '3x',
        target: '2',
        present: '3',
        diff: '1',
        category: 'Warning',
        type: 'x',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 3, action: "Notification", tableValue: "3x" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 4, action: "Notification + Call", tableValue: "4x" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 1, action: "None", tableValue: "1x" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 4, action: "Notification", tableValue: "4x" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 3, action: "Notification + Call", tableValue: "3x" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 1, action: "Notification", tableValue: "1x" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 3, action: "None", tableValue: "3x" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 3, action: "Notification", tableValue: "3x" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 1, action: "Notification + Call", tableValue: "1x" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 4, action: "None", tableValue: "4x" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 1, action: "Notification", tableValue: "1x" }
        ]
    },
    {
        title: 'Nutrition',
        id: 12,
        subTitle: 'If kitchen is used less more or less than defined number',
        average: '5x',
        target: '6',
        present: '5',
        diff: '1',
        category: 'Average',
        type: 'x',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 3, action: "Notification", tableValue: "3x" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 4, action: "Notification + Call", tableValue: "4x" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 1, action: "None", tableValue: "1x" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 4, action: "Notification", tableValue: "4x" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 3, action: "Notification + Call", tableValue: "3x" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 1, action: "Notification", tableValue: "1x" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 3, action: "None", tableValue: "3x" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 3, action: "Notification", tableValue: "3x" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 1, action: "Notification + Call", tableValue: "1x" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 4, action: "None", tableValue: "4x" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 1, action: "Notification", tableValue: "1x" }
        ]
    },
    {
        title: 'Heart Rate',
        id: 13,
        subTitle: 'MHR of an elderly in sleeping time',
        average: '62bpm',
        target: '60',
        present: '62',
        diff: '2',
        category: 'Warning',
        type: 'bpm',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 82, action: "Notification", tableValue: "82bpm" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 80, action: "Notification + Call", tableValue: "80bpm" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 81, action: "None", tableValue: "81bpm" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 80, action: "Notification", tableValue: "80bpm" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 82, action: "Notification + Call", tableValue: "82bpm" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 82, action: "Notification", tableValue: "82bpm" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 81, action: "None", tableValue: "81bpm" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 80, action: "Notification", tableValue: "80bpm" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 82, action: "Notification + Call", tableValue: "82bpm" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 81, action: "None", tableValue: "81bpm" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 80, action: "Notification", tableValue: "80bpm" }
        ]
    },
    {
        title: 'Breath Rate',
        id: 14,
        subTitle: 'Breathing rate zones for an elderly',
        average: '20bpm',
        target: '12',
        present: '20',
        diff: '2',
        category: 'Critical',
        type: 'bpm',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 32, action: "Notification", bpm: "32bpm", tableValue: "32bpm" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 33, action: "Notification + Call", bpm: "33bpm", tableValue: "33bpm" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 31, action: "None", bpm: "31bpm", tableValue: "31bpm" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 30, action: "Notification", bpm: "30bpm", tableValue: "30bpm" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 32, action: "Notification + Call", bpm: "32bpm", tableValue: "32bpm" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 32, action: "Notification", bpm: "32bpm", tableValue: "32bpm" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 31, action: "None", bpm: "31bpm", tableValue: "31bpm" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 30, action: "Notification", bpm: "30bpm", tableValue: "30bpm" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 32, action: "Notification + Call", bpm: "32bpm", tableValue: "32bpm" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 31, action: "None", bpm: "31bpm", tableValue: "31bpm" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 30, action: "Notification", bpm: "30bpm", tableValue: "30bpm" }
        ]
    },
    {
        title: 'Sleep Monitoring',
        id: 15,
        subTitle: '--',
        average: 'x',
        target: 'x',
        present: 'x',
        diff: '0',
        category: 'Average',
        type: 'x',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 3, action: "Notification + Call", tableValue: "3x" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 2, action: "None", tableValue: "2x" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 4, action: "Notification", tableValue: "4x" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 3, action: "Notification + Call", tableValue: "3x" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 3, action: "None", tableValue: "3x" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 4, action: "Notification + Call", tableValue: "4x" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 2, action: "None", tableValue: "2x" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 3, action: "Notification", tableValue: "3x" }
        ]
    },
    {
        title: 'Abnormal Biorhythm',
        id: 16,
        subTitle: 'Warn if the users bio vital exceed the pre-set threshold',
        average: 'x',
        target: 'x',
        present: 'x',
        diff: '0',
        category: 'Critical',
        type: 'x',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 3, action: "Notification + Call", tableValue: "3x" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 2, action: "None", tableValue: "2x" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 4, action: "Notification", tableValue: "4x" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 3, action: "Notification + Call", tableValue: "3x" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 3, action: "None", tableValue: "3x" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 4, action: "Notification + Call", tableValue: "4x" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 2, action: "None", tableValue: "2x" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 3, action: "Notification", tableValue: "3x" }
        ]
    },
    {
        title: 'Not in bed',
        id: 17,
        subTitle: 'If elderly is not in bed for period of time',
        average: '39m',
        target: '30',
        present: '28',
        diff: '2',
        type: 'm',
        category: 'Warning',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 30, action: "Notification", tableValue: "30m" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 45, action: "Notification + Call", tableValue: "45m" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 15, action: "None", tableValue: "15m" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 45, action: "Notification", tableValue: "45m" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 30, action: "Notification + Call", tableValue: "30m" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 15, action: "Notification", tableValue: "15m" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 30, action: "None", tableValue: "30m" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 30, action: "Notification", tableValue: "30m" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 15, action: "Notification + Call", tableValue: "15m" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 45, action: "None", tableValue: "45m" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 15, action: "Notification", tableValue: "15m" }
        ]
    },
    {
        title: 'Abnormal Sleep',
        id: 18,
        subTitle: 'If customer sleep is abnormal',
        average: 'x',
        target: 'x',
        present: 'x',
        diff: '0',
        category: 'Average',
        type: 'x',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 3, action: "Notification + Call", tableValue: "3x" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 2, action: "None", tableValue: "2x" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 4, action: "Notification", tableValue: "4x" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 3, action: "Notification + Call", tableValue: "3x" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 3, action: "None", tableValue: "3x" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 2, action: "Notification", tableValue: "2x" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 4, action: "Notification + Call", tableValue: "4x" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 2, action: "None", tableValue: "2x" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 3, action: "Notification", tableValue: "3x" }
        ]
    },
    {
        title: 'Sleep Score',
        id: 19,
        subTitle: 'Overall Sleep Score based on multiple readings',
        average: '66%',
        target: '90',
        present: '66',
        diff: '24',
        type: 'percent',
        category: 'Average',
        table: [
            { alert: "June 02, 2023; 08:30", type: "Warning", value: 58, action: "Notification", tableValue: "58%" },
            { alert: "June 03, 2023; 10:15", type: "Critical", value: 55, action: "Notification + Call", tableValue: "55%" },
            { alert: "June 04, 2023; 12:45", type: "Average", value: 52, action: "None", tableValue: "52%" },
            { alert: "June 05, 2023; 15:20", type: "Warning", value: 58, action: "Notification", tableValue: "58%" },
            { alert: "June 06, 2023; 17:40", type: "Critical", value: 55, action: "Notification + Call", tableValue: "55%" },
            { alert: "June 07, 2023; 19:00", type: "Warning", value: 51, action: "Notification", tableValue: "51%" },
            { alert: "June 08, 2023; 21:10", type: "Average", value: 53, action: "None", tableValue: "53%" },
            { alert: "June 09, 2023; 08:55", type: "Warning", value: 55, action: "Notification", tableValue: "55%" },
            { alert: "June 10, 2023; 10:30", type: "Critical", value: 58, action: "Notification + Call", tableValue: "58%" },
            { alert: "June 11, 2023; 13:15", type: "Average", value: 56, action: "None", tableValue: "56%" },
            { alert: "June 12, 2023; 16:00", type: "Warning", value: 58, action: "Notification", tableValue: "58%" }
        ]
    },
]

export const recordedHistoryData = [
    { date: "June 02, 2023; 08:30", vdio:'kitchen-room-036' },
    { date: "June 03, 2023; 10:15", vdio:'living-room-021'},
    { date: "June 04, 2023; 12:45", vdio:'bathroom-045'},
    { date: "June 05, 2023; 15:20",vdio:'kitchen-room-036' },
    { date: "June 06, 2023; 17:40",vdio:'dining-room-045' },
    { date: "June 07, 2023; 19:00", vdio:'living-room-021' },
    { date: "June 08, 2023; 21:10",vdio:'living-room-021' },
    { date: "June 09, 2023; 08:55",vdio:'kitchen-room-036' },
    { date: "June 10, 2023; 10:30", vdio:'bathroom-045'},
    { date: "June 11, 2023; 13:15", vdio:'living-room-021'},
    { date: "June 12, 2023; 16:00", vdio:'kitchen-room-036'},
    { date: "June 13, 2023; 15:20",vdio:'kitchen-room-036' },
    { date: "June 14, 2023; 17:40",vdio:'dining-room-045' },
    { date: "June 15, 2023; 19:00", vdio:'living-room-021' },
    { date: "June 16, 2023; 21:10",vdio:'living-room-021' }
]