import { useRef, useState, useEffect } from "react";

export default function Reveal({ children, delay = 0 }) {
        const ref = useRef(null);
        const [visible, setVisible] = useState(false);
        useEffect(() => {
            const el = ref.current;
            if (!el) return;
            const io = new IntersectionObserver(
                ([entry]) => entry.isIntersecting && setVisible(true),
                { threshold: 0.15 }
            );
            io.observe(el);
            return () => io.disconnect();
        }, []);
        return (
            <div
                ref={ref}
                className={"reveal" + (visible ? " is-visible" : "")}
                style={{ transitionDelay: `${delay}ms` }}
            >
                {children}
            </div>
        );
    }