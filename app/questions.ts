import { QuestionInfo } from "@/app/life_stat_info";

export const questions: QuestionInfo[] = [
    {
        description: "Kill count (human)",
        icon: "https://cdn3.emoji.gg/emojis/1805-bloodyknife.png",
        step: 0.5,
        min_val: 0,
        max_val: 25,
        importance: -5000, // value of one kill
        messages: [
            {
                start_val: 0,
                end_val: 1,
                message: "that's reassuring"
            },
            {
                start_val: 1,
                end_val: 5,
                message: "that's is very concerning"
            },
            {
                start_val: 5,
                end_val: 10,
                message: "please arrest yourself ASAP"
            },
            {
                start_val: 10,
                end_val: 20,
                message: "Quentin wannabe"
            },
            {
                start_val: 20,
                end_val: 25,
                message: "brutally efficient"
            },
            {
                start_val: 25,
                message: "bro."
            }
        ]
    },
    {
        description: "Save count (human)",
        icon: "https://em-content.zobj.net/source/skype/289/ambulance_1f691.png",
        step: 0.1,
        min_val: 0,
        max_val: 25,
        importance: +1000,
        messages: [
            {
                start_val: 0,
                end_val: 1,
                message: "couldn't save one tiny little life"
            },
            {
                start_val: 1,
                end_val: 2,
                message: "legally a saviour"
            },
            {
                start_val: 2,
                end_val: 3,
                message: "doing some good work"
            },
            {
                start_val: 3,
                end_val: 5,
                message: "either a very lucky (?) individual or a paramedic"
            },
            {
                start_val: 5,
                end_val: 10,
                message: "maybe you are good for the world"
            },
            {
                start_val: 10,
                end_val: 20,
                message: "literally a professional lifesaver"
            },
            {
                start_val: 20,
                message: "jesus 2.0"
            }
        ]
    },
    {
        description: "Vibes",
        icon: "https://static.vecteezy.com/system/resources/previews/028/177/792/original/cute-happy-emoji-kawaii-emoticon-doodle-outline-png.png",
        step: 5,
        min_val: -1000,
        max_val: 10000,
        importance: 1,
        messages: [
            {
                start_val: -1000,
                end_val: -1,
                message: "very much not vibing"
            },
            {
                start_val: -1,
                end_val: 1010101010,
                message: "vibing"
            }
        ]
    }
]