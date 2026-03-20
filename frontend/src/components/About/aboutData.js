
import {
    Wrench,
    Code2,
    FlaskConical,
    GitBranch,
    Handshake,
    Users2,
    Lightbulb,
} from 'lucide-react';

export const WHAT_WE_DO = [
    {
        id: 'workshops',
        icon: Wrench,         
        label: 'Workshops',
        color: 'text-gdg-blue',
        border: 'border-gdg-blue/30',
        bg: 'bg-gdg-blue/5',
        desc: 'Hands-on sessions to build practical skills and explore new technologies with Google tools.',
    },
    {
        id: 'hackathons',
        icon: Code2,
        label: 'Hackathons',
        color: 'text-gdg-red',
        border: 'border-gdg-red/30',
        bg: 'bg-gdg-red/5',
        desc: 'Competitive build events that push teams to solve real-world problems under pressure.',
    },
    {
        id: 'tech-talks',
        icon: FlaskConical,
        label: 'Tech Talks',
        color: 'text-gdg-yellow',
        border: 'border-gdg-yellow/30',
        bg: 'bg-gdg-yellow/5',
        desc: 'Deep-dive sessions from industry experts and experienced developers in the field.',
    },
    {
        id: 'open-source',
        icon: GitBranch,
        label: 'Open Source',
        color: 'text-gdg-green',
        border: 'border-gdg-green/30',
        bg: 'bg-gdg-green/5',
        desc: 'Contribute to open-source projects, grow your public portfolio, and give back to the community.',
    },
];

export const CORE_VALUES = [
    {
        id: 'collaboration',
        icon: Handshake,
        iconColor: 'text-gdg-blue',
        iconBg: 'bg-gdg-blue/10',
        iconBorder: 'border-gdg-blue/20',
        title: 'Collaboration',
        desc: 'We believe great software is built together. We encourage peer learning and collaboration at every event.',
    },
    {
        id: 'inclusivity',
        icon: Users2,
        iconColor: 'text-gdg-green',
        iconBg: 'bg-gdg-green/10',
        iconBorder: 'border-gdg-green/20',
        title: 'Inclusivity',
        desc: 'Everyone is welcome, regardless of background or skill level. We strive to create a safe space for all.',
    },
    {
        id: 'innovation',
        icon: Lightbulb,
        iconColor: 'text-gdg-yellow',
        iconBg: 'bg-gdg-yellow/10',
        iconBorder: 'border-gdg-yellow/20',
        title: 'Innovation',
        desc: 'We challenge the status quo and encourage creative problem-solving using cutting-edge technology.',
    },
];

export const ABOUT_STATS = [
    { id: 'workshops', value: 20,  suffix: '+', label: 'Workshops Conducted' },
    { id: 'hours',     value: 200, suffix: '+', label: 'Hours of Learning'   },
    { id: 'projects',  value: 5,  suffix: '+', label: 'Projects Built'      },
];
