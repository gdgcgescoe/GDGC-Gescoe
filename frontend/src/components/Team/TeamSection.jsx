import React from 'react';
import MemberCard from './MemberCard';
import { motion } from 'framer-motion';

const TeamSection = ({ title, highlight, members }) => {
    if (!members || members.length === 0) return null;

    return (
        <div className="w-full max-w-7xl px-8 mt-24">
            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-16"
            >
                <span className="text-foreground">{title}</span>{' '}
                <span className="text-gdg-blue">{highlight}</span>
            </motion.h2>

            {/* Flex Container for Centering */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
                {members.map((member, index) => (
                    <div key={member.id ?? index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] xl:w-[calc(25%-1.5rem)] flex justify-center">
                        <MemberCard member={member} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
